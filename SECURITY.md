# 🔐 環境變量配置指南

## 重要提示 ⚠️

**千萬不要**：
- ❌ 將 `.env` 文件提交到 Git
- ❌ 在代碼中硬編碼 API 密鑰
- ❌ 在公開的 GitHub Issues 或 PR 中暴露敏感信息
- ❌ 分享生產環境的 `.env` 文件

## 本地開發設置

### 1. 複製環境變量模板
```bash
cp .env.example .env
```

### 2. 在 `.env` 中填入實際的密鑰

編輯 `.env` 文件並填入您的實際值：

```bash
# Firebase 配置
# 從 https://console.firebase.google.com 取得
VITE_FIREBASE_API_KEY=your_actual_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
# ... 其他 Firebase 配置

# Ecpay 綠界支付
# 從 https://www.ecpay.com.tw 取得
ECPAY_MERCHANT_ID=your_merchant_id
ECPAY_HASH_KEY=your_hash_key
ECPAY_HASH_IV=your_hash_iv
ECPAY_STAGE=true  # 測試環境使用 true
```

### 3. 啟動開發伺服器
```bash
npm run dev
```

## Vercel / 生產環境部署

### 設置環境變量：

1. 進入 [Vercel Dashboard](https://vercel.com/dashboard)
2. 選擇您的項目
3. 進入 **Settings → Environment Variables**
4. 添加以下變量（勿提交 `.env` 文件）：

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
ECPAY_MERCHANT_ID
ECPAY_HASH_KEY
ECPAY_HASH_IV
ECPAY_STAGE
STRIPE_SECRET_KEY
```

## 文件權限檢查清單

✅ 已配置為安全的：

- [x] `.env` 在 `.gitignore` 中
- [x] `.env.local` 在 `.gitignore` 中
- [x] `.env.*.local` 在 `.gitignore` 中
- [x] `.env.example` 作為公開模板（不含真實密鑰）

## 洩漏應急處理

如果不小心洩漏了敏感信息：

### Firebase
1. 立即禁用該 API Key
2. 創建新的 API Key
3. 更新 Vercel 環境變量

### Ecpay
1. 聯繫 Ecpay 客服重置密鑰
2. 更新 Vercel 環境變量

### Stripe
1. 進入 Stripe 控制台禁用該密鑰
2. 創建新的 API Key
3. 更新 Vercel 環境變量

## Git 防護技巧

```bash
# 防止不小心提交 .env
git update-index --assume-unchanged .env

# 如果誤提交，應立即撤銷並更改所有密鑰
git reset HEAD~1  # 撤銷最後一次提交
# 然後更改所有密鑰！
```

## 相關資源

- [Vercel 環境變量文檔](https://vercel.com/docs/projects/environment-variables)
- [Firebase 安全最佳實踐](https://firebase.google.com/docs/projects/learn-more)
- [Stripe API 密鑰管理](https://stripe.com/docs/keys)
- [OWASP 環境變量管理](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
