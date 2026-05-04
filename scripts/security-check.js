#!/usr/bin/env node

/**
 * 預提交安全檢查腳本
 * 防止敏感信息被意外提交到 Git
 * 
 * 使用方式:
 * 1. 在 .git/hooks/pre-commit 中調用此腳本
 * 2. 或手動執行: npm run security-check
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 檢查對象
const PATTERNS_TO_CHECK = [
  {
    name: 'Firebase API Key',
    pattern: /AIza[0-9A-Za-z\-_]{35}/,
    severity: 'high',
  },
  {
    name: 'Private Keys (PRIVATE KEY)',
    pattern: /-----BEGIN (RSA |PRIVATE |EC )?PRIVATE KEY/,
    severity: 'critical',
  },
  {
    name: 'Ecpay Credentials',
    pattern: /ECPAY_(HASH_KEY|HASH_IV|MERCHANT_ID)\s*=\s*[\w\-]{8,}/,
    severity: 'high',
  },
  {
    name: 'Stripe Secret Key',
    pattern: /sk_(test|live)_[A-Za-z0-9]{20,}/,
    severity: 'critical',
  },
  {
    name: 'AWS Keys',
    pattern: /AKIA[0-9A-Z]{16}/,
    severity: 'critical',
  },
  {
    name: 'Unencrypted Passwords',
    pattern: /password\s*[=:]\s*['"][^'"]{8,}['"]/i,
    severity: 'high',
  },
];

// 應該檢查的文件類型
const FILES_TO_CHECK = ['.env', '.env.local', '.env.production'];

// 不應該檢查的目錄
const EXCLUDE_DIRS = [
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  '.manus-logs',
  '.vscode',
  '.idea',
];

function shouldCheckFile(filePath) {
  // 檢查是否在排除目錄中
  for (const excludeDir of EXCLUDE_DIRS) {
    if (filePath.includes(`/${excludeDir}/`) || filePath.includes(`\\${excludeDir}\\`)) {
      return false;
    }
  }

  // 檢查 .env 文件
  if (FILES_TO_CHECK.some(file => filePath.includes(file))) {
    return true;
  }

  return false;
}

function checkContent(filePath, content) {
  const issues = [];

  for (const check of PATTERNS_TO_CHECK) {
    const matches = content.match(check.pattern);
    if (matches) {
      issues.push({
        file: filePath,
        pattern: check.name,
        severity: check.severity,
        matches: matches.length,
      });
    }
  }

  return issues;
}

function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only', { encoding: 'utf-8' });
    return output.split('\n').filter(Boolean);
  } catch {
    // 如果不是 git 倉庫，返回空列表
    return [];
  }
}

async function runSecurityCheck() {
  console.log('🔐 運行安全檢查...\n');

  const stagedFiles = getStagedFiles();
  const filesToCheck = stagedFiles.filter(shouldCheckFile);

  if (filesToCheck.length === 0) {
    console.log('✅ 無需檢查的文件。\n');
    return { hasIssues: false, issues: [] };
  }

  console.log(`檢查 ${filesToCheck.length} 個文件...\n`);

  let totalIssues = [];

  for (const filePath of filesToCheck) {
    try {
      const fullPath = path.join(process.cwd(), filePath);
      if (!fs.existsSync(fullPath)) continue;

      const content = fs.readFileSync(fullPath, 'utf-8');
      const issues = checkContent(filePath, content);

      if (issues.length > 0) {
        totalIssues = [...totalIssues, ...issues];
      }
    } catch (error) {
      console.error(`讀取文件 ${filePath} 時出錯:`, error.message);
    }
  }

  return {
    hasIssues: totalIssues.length > 0,
    issues: totalIssues,
  };
}

async function main() {
  try {
    const result = await runSecurityCheck();

    if (result.hasIssues) {
      console.error('❌ 發現潛在的敏感信息泄露風險：\n');

      for (const issue of result.issues) {
        const icon = {
          critical: '🚨',
          high: '⚠️',
          medium: '⚠️',
        }[issue.severity];

        console.error(`${icon} [${issue.severity.toUpperCase()}] ${issue.file}`);
        console.error(`   檢測到: ${issue.pattern} (${issue.matches} 個匹配)\n`);
      }

      console.error('提示:');
      console.error('  1. 檢查您的 .env 文件是否意外暴露敏感信息');
      console.error('  2. 確保 .env 在 .gitignore 中');
      console.error('  3. 如果已洩露，立即更改所有密鑰\n');

      process.exit(1);
    } else {
      console.log('✅ 安全檢查通過！\n');
      process.exit(0);
    }
  } catch (error) {
    console.error('安全檢查失敗:', error.message);
    process.exit(1);
  }
}

// 如果直接運行此文件
main();
