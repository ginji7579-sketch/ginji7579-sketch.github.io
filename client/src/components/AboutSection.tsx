import { Target, Layers, Heart, Zap } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      title: '極致專注',
      description: '全心投入每一個環節，以近乎苛求的標準打磨細節，交付經得起時間檢驗的成果。',
      icon: Target,
    },
    {
      title: '跨界整合',
      description: '跨域思考，整合資源，為你找到更好的解法。',
      icon: Layers,
    },
    {
      title: '客戶至上',
      description: '以客戶需求為中心，提供量身定制的解決方案。',
      icon: Heart,
    },
    {
      title: '高效透明',
      description: '流程透明，溝通高效，確保每個環節都符合客戶期望。',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container">
        <div>
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#2C3E50' }}>
            我們的核心價值
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-xl transition-colors duration-300 group"
                  style={{ backgroundColor: '#F5F1E8' }}
                >
                  <Icon className="w-6 h-6 flex-shrink-0 mt-1 transition-colors" style={{ color: '#2B8A8A' }} />
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: '#2C3E50' }}>
                      {value.title}
                    </h4>
                    <p style={{ color: 'rgba(44, 62, 80, 0.7)' }} className="leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
