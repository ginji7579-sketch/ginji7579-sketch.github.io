import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { services } from '@/data/services';
import { useCart } from '@/contexts/CartContext';

export default function ServicesSection() {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (service: (typeof services)[number]) => {
    addItem(service);
    toast.success(`${service.title} 已加入購物車`);
  };

  return (
    <section id="services" className="section-spacing" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="font-semibold text-lg tracking-wide" style={{ color: '#F5A623' }}>
            我們的服務
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg transition-colors duration-300" style={{ backgroundColor: 'rgba(43, 138, 138, 0.1)' }}>
                    <Icon className="w-7 h-7" style={{ color: '#2B8A8A' }} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300" style={{ color: '#2C3E50' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'rgba(44, 62, 80, 0.7)' }} className="leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 pt-6 transition-opacity duration-300" style={{ borderTop: '1px solid #E8E6E1' }}>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(service)}
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-md"
                    style={{ backgroundColor: '#2B8A8A' }}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    加入購物車
                  </button>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-semibold transition-colors"
                    style={{ color: '#2B8A8A' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F5A623'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#2B8A8A'}
                  >
                    了解更多
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>
            需要更多信息？我們的專業團隊隨時準備為您服務。
          </p>
          <button
            type="button"
            onClick={openCart}
            className="btn-secondary hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            查看購物車
          </button>
        </div>
      </div>
    </section>
  );
}
