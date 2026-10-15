import React from 'react';
import { Gift, ArrowUpLeft, Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { STORE_CONFIG } from '../data/coffeeData';

interface GiftSetsSectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  addedProductId: string | null;
}

export const GiftSetsSection: React.FC<GiftSetsSectionProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  addedProductId,
}) => {
  const giftProducts = products.filter((p) => p.category === 'gifts');

  return (
    <section className="py-20 sm:py-28 bg-[#F6F3EF] border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9503D] bg-white px-3 py-1 rounded-full border border-[#E7E3DE] mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>باقات الإهداء والتذوق</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#080808] tracking-tight mb-3">
            هدية تبدأ برائحة القهوة
          </h2>
          <p className="text-sm sm:text-base text-[#716C67] leading-relaxed">
            مجموعة مختارة من المحاصيل والأدوات، لمن يريد اكتشاف مذاقات جديدة أو مشاركة قهوته المفضلة بتغليف فاخر.
          </p>
        </div>

        {/* Featured Showcase + Gift Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Visual Box */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-white border border-[#E7E3DE] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-6 bg-[#F8F7F5]">
              <img
                src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=85"
                alt="صندوق تذوق رشفة الفاخر"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 right-3 bg-[#080808]/85 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                تغليف إهداء مخصص
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#716C67] block mb-1">تجربة إهداء متكاملة</span>
              <h3 className="text-2xl font-semibold text-[#080808] mb-2">
                صندوق تذوق رَشفة الثلاثي
              </h3>
              <p className="text-sm text-[#716C67] leading-relaxed mb-6">
                يحتوي على ثلاثة محاصيل مختارة من قارات مختلفة (اليمن، إثيوبيا، كولومبيا) مع بطاقات تحريرية تشرح قصة وسلالة كل محصول وطريقة استخلاصه المثلى.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#E7E3DE]">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#080808]">89</span>
                  <span className="text-xs text-[#716C67] font-medium">{STORE_CONFIG.currency}</span>
                </div>

                <div className="flex items-center gap-2">
                  {giftProducts[0] && (
                    <button
                      onClick={() => onAddToCart(giftProducts[0])}
                      className={`h-10 px-5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                        addedProductId === giftProducts[0].id
                          ? 'bg-[#080808] text-white'
                          : 'bg-[#D9503D] hover:bg-[#BC402F] text-white'
                      }`}
                    >
                      {addedProductId === giftProducts[0].id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>تمت الإضافة</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>أضف للسلة</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Bundle Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* Starter Brew Kit */}
            <div className="bg-white rounded-3xl p-6 border border-[#E7E3DE] shadow-sm flex flex-col sm:flex-row gap-5 items-center text-right flex-1">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
                alt="مجموعة تحضير المبتدئين"
                className="w-full sm:w-40 h-40 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-between flex-grow w-full">
                <div>
                  <span className="text-xs text-[#D9503D] font-medium block mb-1">للمنزل والمكتب</span>
                  <h4 className="text-lg font-semibold text-[#080808] mb-1">
                    مجموعة تحضير المبتدئين الفاخرة
                  </h4>
                  <p className="text-xs text-[#716C67] leading-relaxed mb-4">
                    قمع V60 سيراميك، سيرفر زجاجي، 40 فلتر ياباني، ومحصول خولاني يمني طازج 250جم.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E7E3DE]">
                  <span className="text-lg font-bold text-[#080808]">195 {STORE_CONFIG.currency}</span>
                  {giftProducts[1] && (
                    <button
                      onClick={() => onAddToCart(giftProducts[1])}
                      className="h-8 px-4 rounded-full bg-[#080808] hover:bg-[#D9503D] text-white text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>إضافة</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Custom Card / Note */}
            <div className="bg-white rounded-3xl p-6 border border-[#E7E3DE] shadow-sm flex flex-col justify-between flex-1 text-right">
              <div>
                <span className="text-xs text-[#716C67] block mb-1">بطاقات وعبارات خاصة</span>
                <h4 className="text-lg font-semibold text-[#080808] mb-2">
                  إمكانية إرفاق رسالة إهداء مخصصة
                </h4>
                <p className="text-xs text-[#716C67] leading-relaxed">
                  نطبع رسالتك الخاصة على ورق قطني فاخر ونضعها داخل الصندوق بعناية دون أي تكلفة إضافية. فقط اكتب عبارة الإهداء عند إتمام طلبك.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E7E3DE] flex items-center justify-between text-xs font-semibold text-[#D9503D]">
                <span>خدمة الإهداء متوفرة لجميع المحاصيل</span>
                <ArrowUpLeft className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
