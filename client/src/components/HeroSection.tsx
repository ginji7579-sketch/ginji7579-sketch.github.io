

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/hero-background-oMnaxMrGRdxnRLxrxfr5gb.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-white/85 md:bg-gradient-to-r md:from-white/95 md:to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#2B8A8A' }}>
                穩固基礎，細節致遠
              </h1>
            </div>

            <div className="space-y-4 text-2xl md:text-3xl font-semibold leading-relaxed max-w-lg mt-6" style={{ color: '#000000' }}>
              <p>
                我們在資訊破碎的時代中，不虛華、不妥協，讓每一個選擇都值得被信賴。
              </p>
            </div>




          </div>

          <div className="hidden md:flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663070144485/aSt5pv6mkSff6ez8cLV8EV/logo_ff0fe2ce.jpg"
                alt="德全有限公司 Logo"
                className="relative w-80 h-80 object-contain drop-shadow-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
