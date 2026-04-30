import { Mail, Phone, Send } from 'lucide-react';
import { LineIcon } from './LineIcon';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: '電話',
      value: '0930137329',
      href: 'tel:0930137329',
    },
    {
      icon: Mail,
      label: 'mail',
      value: 'ginji7579@gmail.com',
      href: 'mailto:ginji7579@gmail.com',
    },
    {
      icon: LineIcon,
      label: 'line',
      value: 'ginji7579',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="font-semibold text-lg tracking-wide" style={{ color: '#F5A623' }}>
            聯絡我們
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#2C3E50' }}>
            與我們取得聯繫
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>
            有任何問題或需要更多信息？請填寫下方表單或直接聯絡我們。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg" style={{ backgroundColor: 'rgba(43, 138, 138, 0.1)' }}>
                      <Icon className="w-6 h-6" style={{ color: '#2B8A8A' }} />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: '#2C3E50' }}>{info.label}</p>
                    <a
                      href={info.href}
                      className="transition-colors"
                      style={{ color: 'rgba(44, 62, 80, 0.7)' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#2B8A8A'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(44, 62, 80, 0.7)'}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}

            <div className="mt-12 pt-8" style={{ borderTop: '1px solid #E8E6E1' }}>
              <h4 className="font-semibold mb-4" style={{ color: '#2C3E50' }}>營業時間</h4>
              <div className="space-y-2" style={{ color: 'rgba(44, 62, 80, 0.7)' }}>
                <p>24小時</p>
                <p></p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl" style={{ backgroundColor: '#F5F1E8' }}>
              {submitted && (
                <div className="p-4 rounded-lg" style={{ backgroundColor: '#F0FDF4', borderColor: '#DCFCE7', borderWidth: '1px' }}>
                  <p className="font-semibold" style={{ color: '#166534' }}>
                    感謝您的消息！我們將盡快回覆您。
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
                    placeholder="您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                    郵箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
                    placeholder="您的mail"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  電話
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
                  placeholder="您的電話"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  主題 *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
                  placeholder="消息主題"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#2C3E50' }}>
                  消息 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{ borderColor: '#E8E6E1', borderWidth: '1px' }}
                  placeholder="請輸入您的消息"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center hover:shadow-lg transition-all duration-300"
              >
                發送消息
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
