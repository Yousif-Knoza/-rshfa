import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface StorySectionProps {
  onOpenPhilosophyModal: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({
  onOpenPhilosophyModal,
}) => {
  return (
    <section id="story" className="py-20 sm:py-28 bg-white border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F6F3EF] border border-[#E7E3DE] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85"
                alt="حبوب القهوة المختصة وتحميص رشفة"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 right-6 bg-[#080808] text-white p-4 rounded-2xl shadow-xl border border-white/10 max-w-xs text-right">
              <p className="text-xs text-[#E7E3DE] leading-relaxed">
                «من حبة البن في المرتفعات الجبلية، إلى آخر قطرة في فنجانك.»
              </p>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6 text-right pt-6 lg:pt-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D9503D] mb-2 block">
              فلسفة المحمصة
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#080808] tracking-tight leading-[1.25] mb-5">
              القهوة أكثر من مجرد فنجان
            </h2>
            <p className="text-base text-[#716C67] leading-relaxed mb-6 font-normal">
              نؤمن أن الاختيار الجيد يبدأ من فهم القهوة نفسها؛ منشئها، ونكهاتها، والطريقة التي تفضل الاستمتاع بها. لا نتعامل مع القهوة كعادة روتينية عابرة، بل كتجربة حسية غنية تتجدد في كل صباح.
            </p>

            <div className="space-y-4 mb-8 text-right">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#F6F3EF] flex items-center justify-center text-[#D9503D] flex-shrink-0 mt-0.5 border border-[#E7E3DE]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">انتقاء المحاصيل المباشر</h4>
                  <p className="text-xs text-[#716C67] leading-relaxed mt-0.5">
                    التركيز على مزارع محددة ومحاصيل موسمية طازجة تبرز خصوصية التضاريس والارتفاع والمعالجة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#F6F3EF] flex items-center justify-center text-[#D9503D] flex-shrink-0 mt-0.5 border border-[#E7E3DE]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#080808]">تحميص يحترم النكهة الأصلية</h4>
                  <p className="text-xs text-[#716C67] leading-relaxed mt-0.5">
                    تحميص دقيق بدفعات صغيرة لا يطغى على إيحاءات البن الفاكهية والزهرية والكراميلية الطبيعية.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenPhilosophyModal}
              className="text-sm font-semibold text-[#080808] hover:text-[#D9503D] transition-colors inline-flex items-center gap-2 cursor-pointer pb-1 border-b border-[#080808] hover:border-[#D9503D]"
            >
              <span>اكتشف فلسفة رَشفة</span>
              <span>←</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
