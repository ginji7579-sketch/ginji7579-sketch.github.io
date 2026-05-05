import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#2C3E50' }}>隱私權政策</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#2B8A8A' }}>1. 資料收集</h2>
            <p className="text-gray-600 leading-relaxed">
              當您使用本網站的聯絡表單時，我們會收集您提供的姓名、電子郵件地址、電話號碼及消息內容。這些資訊僅用於回應您的詢問或提供相關服務。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#2B8A8A' }}>2. 資料使用</h2>
            <p className="text-gray-600 leading-relaxed">
              收集的資料主要用於以下目的：
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
              <li>回覆您的諮詢或服務請求。</li>
              <li>改進我們的網站功能與用戶體驗。</li>
              <li>提供您可能感興趣的最新服務資訊（僅在您同意的情況下）。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#2B8A8A' }}>3. 資料保護</h2>
            <p className="text-gray-600 leading-relaxed">
              我們採取適當的安全措施來保護您的個人資料免受未經授權的存取、修改或洩露。我們不會向第三方出售、交易或轉讓您的個人辨識資訊。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#2B8A8A' }}>4. Cookie 使用</h2>
            <p className="text-gray-600 leading-relaxed">
              本網站可能會使用 Cookie 來提升您的瀏覽體驗。您可以透過瀏覽器設定拒絕所有 Cookie，但這可能會影響網站的部分功能。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#2B8A8A' }}>5. 政策修訂</h2>
            <p className="text-gray-600 leading-relaxed">
              我們可能會不定期更新本隱私權政策。建議您定期查看本頁面以了解最新資訊。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#2B8A8A' }}>6. 聯絡我們</h2>
            <p className="text-gray-600 leading-relaxed">
              如果您對本隱私權政策有任何疑問，請透過本網站的聯絡表單或直接寄送電子郵件至 ginji7579@gmail.com。
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-12">最後更新日期：2024年05月05日</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
