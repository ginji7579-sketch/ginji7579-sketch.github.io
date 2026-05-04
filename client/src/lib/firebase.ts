// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// 你的 Firebase 設定（從環境變數讀取）
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

if (
  typeof window !== "undefined" &&
  firebaseConfig.authDomain?.includes("vercel.app")
) {
  console.warn(
    "[Firebase] VITE_FIREBASE_AUTH_DOMAIN 不應設成 Vercel 網址。請改為「專案ID.firebaseapp.com」，否則 Google 重新導向登入會打到 /__/auth/handler 而得到 404。"
  );
}

// 初始化 Firebase app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 初始化 Authentication 並匯出
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // You can access the signed-in user via result.user
    return result;
  } catch (error) {
    console.error('Google sign-in error', error);
    throw error;
  }
};
// 初始化 Analytics (僅在瀏覽器環境且支援時)
export const analytics = typeof window !== "undefined" ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export default app;