import React, { useState } from 'react';
import { Calendar, CheckCircle2, ArrowUpLeft } from 'lucide-react';
import { STORE_CONFIG } from '../data/coffeeData';

interface SubscriptionSectionProps {
  onOpenSubscriptionModal: (config: {
    coffeeType: string;
    quantity: string;
    frequency: string;
    calculatedPrice: number;
  }) => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  onOpenSubscriptionModal,
}) => {
  const [coffeeType, setCoffeeType] = useState('محاصيل فردية متنوعة (اختيار المحمصة)');
  const [quantity, setQuantity] = useState('500 جم (كيسان)');
  const [frequency, setFrequency] = useState('كل أسبوعين');

  const basePrice = quantity === '250 جم (كيس واحد)' ? 55 : quantity === '500 جم (كيسان)' ? 105 : 195;

  const handleSubmit = () => {
    onOpenSubscriptionModal({
      coffeeType,
      quantity,
      frequency,
      calculatedPrice: basePrice,
    });
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="bg-[#F8F7F5] rounded-3xl border border-[#E7E3DE] p-6 sm:p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Right: Info */}
            <div className="lg:col-span-6 text-right">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9503D] bg-white px-3 py-1 rounded-full border border-[#E7E3DE] mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>اشتراك القهوة الدورية</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight leading-tight mb-3">
                قهوتك المفضلة، ضمن روتينك
              </h2>
              <p className="text-sm sm:text-base text-[#716C67] leading-relaxed mb-6 font-normal">
                اختر محاصيلك وكمية القهوة التي تناسبك، وصمم تجربة تكرار الطلب بالشكل الذي تفضله لتصلك حبوب البن المحمصة طازجة دورياً دون انقطاع.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-right">
                  <CheckCircle2 className="w-4 h-4 text-[#D9503D] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#151311]">تحميص طازج ومخصص قبل الشحن بـ 24 ساعة فقط</span>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <CheckCircle2 className="w-4 h-4 text-[#D9503D] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#151311]">حرية تبديل المحصول أو إيقاف التوصيل مؤقتاً في أي وقت</span>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <CheckCircle2 className="w-4 h-4 text-[#D9503D] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#151311]">أولوية الحصول على المحاصيل النادرة والمحدودة</span>
                </div>
              </div>
            </div>

            {/* Left: Interactive Subscription Configurator Card */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E3DE] shadow-sm text-right">
              <span className="text-xs font-semibold text-[#716C67] uppercase tracking-wider block mb-4">
                تخصيص باقة روتينك
              </span>

              {/* Step 1: Coffee Type */}
              <div className="mb-5">
                <label className="text-xs font-semibold text-[#080808] block mb-2">نوع المحصول المفضّل</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'محاصيل فردية متنوعة (اختيار المحمصة)',
                    'خلطة رَشفة للإسبريسو الحصرية',
                  ].map((type) => (
                    <button
                      key={type}
                      onClick={() => setCoffeeType(type)}
                      className={`p-2.5 rounded-xl text-xs text-right border transition-all cursor-pointer ${
                        coffeeType === type
                          ? 'border-[#080808] bg-[#080808] text-white font-medium'
                          : 'border-[#E7E3DE] bg-[#F8F7F5] text-[#151311] hover:border-[#716C67]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Quantity */}
              <div className="mb-5">
                <label className="text-xs font-semibold text-[#080808] block mb-2">الكمية لكل شحنة</label>
                <div className="grid grid-cols-3 gap-2">
                  {['250 جم (كيس واحد)', '500 جم (كيسان)', '1 كجم (4 أكياس)'].map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setQuantity(qty)}
                      className={`p-2.5 rounded-xl text-xs text-center border transition-all cursor-pointer ${
                        quantity === qty
                          ? 'border-[#080808] bg-[#080808] text-white font-medium'
                          : 'border-[#E7E3DE] bg-[#F8F7F5] text-[#151311] hover:border-[#716C67]'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Frequency */}
              <div className="mb-6">
                <label className="text-xs font-semibold text-[#080808] block mb-2">تكرار التوصيل</label>
                <div className="grid grid-cols-3 gap-2">
                  {['أسبوعياً', 'كل أسبوعين', 'شهرياً'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setFrequency(freq)}
                      className={`p-2.5 rounded-xl text-xs text-center border transition-all cursor-pointer ${
                        frequency === freq
                          ? 'border-[#080808] bg-[#080808] text-white font-medium'
                          : 'border-[#E7E3DE] bg-[#F8F7F5] text-[#151311] hover:border-[#716C67]'
                      }`}
                    >
                      {freq}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-[#E7E3DE] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#716C67] block">السعر التقديري لكل توصيل</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#080808]">{basePrice}</span>
                    <span className="text-xs text-[#716C67] font-semibold">{STORE_CONFIG.currency}</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="h-11 px-6 rounded-full bg-[#D9503D] hover:bg-[#BC402F] text-white text-xs sm:text-sm font-semibold transition-all active:scale-98 flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>استكشف الاشتراك</span>
                  <ArrowUpLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
