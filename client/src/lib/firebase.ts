// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";   // ✅ 補上 getAnalytics
import { getAuth } from "firebase/auth";            // ✅ 補上 getAuth

// 你的 Firebase 設定（從環境變數讀取或直接寫，建議用環境變數）
const firebaseConfig = {
    apiKey: "AIzaSyDFXwMrwq8g_aYDzArFRLlKfWdGqAt3ZBY",
    authDomain: "dequan-m.firebaseapp.com",
    projectId: "dequan-m",
    messagingSenderId: "562809278262",
    appId: "1:562809278262:web:7f763a60969761ba3d2d97",
    measurementId: "G-VHWJLVYTB"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Analytics（如果你不需要，可以刪掉下面這行）
const analytics = getAnalytics(app);

// ✅ 初始化 Authentication 並匯出，讓其他檔案可以使用
export const auth = getAuth(app);