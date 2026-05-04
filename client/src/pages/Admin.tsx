import { useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Admin() {
  const { isAuthenticated, user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/login');
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-[#E8E6E1] p-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#2B8A8A' }}>
            管理後台
          </h1>
          <p className="text-[#2C3E50] mb-6">
            歡迎，{user?.displayName || user?.email || '已登入使用者'}。這裡是您的後台入口頁面。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/">
              <a className="block rounded-2xl border border-[#E8E6E1] bg-[#F5F1E8] p-6 text-center font-medium text-[#2B8A8A] hover:bg-[#E8E6E1] transition">
                返回首頁
              </a>
            </Link>
            <Link href="/login">
              <a className="block rounded-2xl border border-[#E8E6E1] bg-white p-6 text-center font-medium text-[#2C3E50] hover:bg-[#F5F1E8] transition">
                切換帳號 / 登出後再登入
              </a>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
