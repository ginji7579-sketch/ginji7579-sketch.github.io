import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, totalQuantity } = useCart();

  const navLinks = [
    { label: '首頁', href: '/' },
    { label: '關於我們', href: '#about' },
    { label: '服務項目', href: '#services' },
    { label: '聯絡我們', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm" style={{ borderBottom: '1px solid #E8E6E1' }}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <a className="flex items-center gap-3 transition-opacity" style={{ opacity: 1 }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/logo_ff0fe2ce.jpg"
                alt="德全有限公司 Logo"
                className="h-12 w-auto"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg" style={{ color: '#2B8A8A' }}>德全</span>
                <span className="text-xs" style={{ color: '#2C3E50' }}>DEQUAN-M CO.LTD</span>
              </div>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium transition-colors duration-300"
                style={{ color: '#2C3E50' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2B8A8A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#2C3E50'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg transition-colors"
              style={{ backgroundColor: '#F5F1E8' }}
              onClick={openCart}
              aria-label="開啟購物車"
            >
              <ShoppingCart className="w-5 h-5" style={{ color: '#2B8A8A' }} />
              {totalQuantity > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#F5A623] px-1 text-xs font-bold text-white">
                  {totalQuantity}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ backgroundColor: '#F5F1E8' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" style={{ color: '#2B8A8A' }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: '#2B8A8A' }} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4" style={{ borderTop: '1px solid #E8E6E1' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 font-medium transition-colors"
                style={{ color: '#2C3E50' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F1E8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
