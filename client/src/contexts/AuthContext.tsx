// client/src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { auth } from '../lib/firebase';

/** Google redirect 回來後整頁重載，不能用 React state 導向；用 sessionStorage 記目標路徑。 */
const GOOGLE_RETURN_PATH_KEY = 'dequan_google_auth_return_path';

function safeInternalPath(path: string, fallback: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return fallback;
  return path;
}

interface AuthContextType {
  user: User | null;
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  loginWithGoogle: (returnTo?: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = (returnTo: string = '/admin') => {
    const path = safeInternalPath(returnTo, '/admin');
    sessionStorage.setItem(GOOGLE_RETURN_PATH_KEY, path);
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  };

  const logout = () => {
    sessionStorage.removeItem(GOOGLE_RETURN_PATH_KEY);
    return signOut(auth);
  };

  useEffect(() => {
    let cancelled = false;
    // 必須先訂閱 onAuthStateChanged，不可先 await getRedirectResult：
    // 在部分 Safari／WebView 上 getRedirectResult 可能長時間不 resolve，
    // 會導致 loading 永遠 true、整站 children 不渲染（白畫面）。
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (cancelled) return;
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) return;
      const raw = sessionStorage.getItem(GOOGLE_RETURN_PATH_KEY);
      if (!raw) return;
      sessionStorage.removeItem(GOOGLE_RETURN_PATH_KEY);
      const dest = safeInternalPath(raw, '/admin');
      if (window.location.pathname !== dest) {
        window.location.replace(dest);
      }
    });

    void (async () => {
      try {
        await getRedirectResult(auth);
      } catch {
        /* redirect 未完成或已處理過時可忽略 */
      }
    })();

    const failSafe = window.setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 12_000);

    return () => {
      cancelled = true;
      window.clearTimeout(failSafe);
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    signup,
    login,
    loginWithGoogle,
    logout,
    isAuthenticated: Boolean(user),
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth 必須在 AuthProvider 內使用');
  return context;
};