// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 你的 Firebase 設定（從環境變數讀取或直接寫，建議用環境變數）
const firebaseConfig = {
  apiKey: "AIzaSyDFXwMrwq8g_aYDzArFRlJKHwDGqAt3ZBY",
  authDomain: "dequan-m.firebaseapp.com",
  projectId: "dequan-m",
  storageBucket: "dequan-m.firebasestorage.app",
  messagingSenderId: "562809278262",
  appId: "1:562809278262:web:7f763a60969761ba3d2d97",
  measurementId: "G-VHWWJLVYTB"
};

// 初始化 Firebase app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 初始化 Authentication 並匯出，讓其他檔案可以使用
export const auth = getAuth(app);