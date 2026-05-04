import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setLocation] = useLocation();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      setLocation('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-[#E8E6E1] p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2" style={{ color: '#2B8A8A' }}>會員登入</h1>
            <p className="text-[#2C3E50] text-sm">歡迎回到德全，請輸入您的帳號密碼</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                電子郵件
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#E8E6E1] focus:outline-none focus:ring-2 focus:ring-[#2B8A8A] focus:border-transparent transition-all bg-[#FAFAFA]"
                placeholder="請輸入 Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2C3E50] mb-2">
                密碼
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#E8E6E1] focus:outline-none focus:ring-2 focus:ring-[#2B8A8A] focus:border-transparent transition-all bg-[#FAFAFA]"
                placeholder="請輸入密碼"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg text-white font-medium transition-transform active:scale-[0.98]"
              style={{ backgroundColor: '#2B8A8A' }}
            >
              登入
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <span className="text-gray-500">還沒有帳號嗎？</span>
            <Link href="/register">
              <a className="ml-2 font-medium hover:underline" style={{ color: '#F5A623' }}>
                立即註冊
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
