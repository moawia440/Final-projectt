import ProductCard from '../components/ProductCard';

const mockProducts = [
  {
    id: 1,
    title: 'سماعة لاسلكية عازلة للضوضاء عالية الجودة',
    price: 1250,
    category: 'إلكترونيات',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    rating: 4.8
  },
  {
    id: 2,
    title: 'ساعة ذكية مقاومة للماء مع مراقب ضربات القلب',
    price: 890,
    category: 'ساعات',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    rating: 4.6
  },
  {
    id: 3,
    title: 'حقيبة ظهر احترافية متعددة الاستخدامات للكمبيوتر',
    price: 650,
    category: 'إكسسوارات',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    rating: 4.9
  },
  {
    id: 4,
    title: 'كاميرا تصوير احترافية بدقة عالية',
    price: 4500,
    category: 'إلكترونيات',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
    rating: 4.7
  }
];

export default function Home() {
  return (
    <div className="space-y-10 pb-10">
      {/* Hero Banner Section */}
      <section className="bg-blue-600 text-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-4 max-w-xl text-right">
          <span className="bg-blue-500/50 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
            عروض لفترة محدودة 🔥
          </span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight text-white">
            أحدث المنتجات الذكية بأفضل الأسعار
          </h1>
          <p className="text-blue-100 text-sm md:text-base">
            اكتشف تشكيلة واسعة من الإلكترونيات والإكسسوارات العصرية مع شحن سريع لجميع المحافظات.
          </p>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
            تسوق الآن
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">الأكثر مبيعاً</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}