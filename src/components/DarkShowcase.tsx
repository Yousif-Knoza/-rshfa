import React from 'react';
import { ArrowUpLeft, Flame, Sparkles } from 'lucide-react';

interface DarkShowcaseProps {
  onExploreTools: () => void;
}

export const DarkShowcase: React.FC<DarkShowcaseProps> = ({ onExploreTools }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#080808] text-white overflow-hidden relative border-y border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6 text-right order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D9503D] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-6">
              <Flame className="w-3.5 h-3.5" />
              <span>فلسفة الاستخلاص والتحميص</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-[1.25]">
              كل فنجان له طريقته.
            </h2>

            <p className="text-base sm:text-lg text-[#E7E3DE]/80 leading-relaxed mb-8 max-w-xl font-light">
              اختر المحصول، وحدد طريقة التحضير، واستمتع بتفاصيل التجربة من أول خطوة. لكل حبة بن حكايتها التي ترويها درجة الحرارة وتناسق الطحن ومعدل تدفق الماء.
            </p>

            {/* Quick Ritual Pillars */}
            <div className="grid grid-cols-2 gap-4 mb-10 border-t border-white/10 pt-6">
              <div>
                <span className="text-[#D9503D] font-bold text-lg sm:text-xl block mb-1">01. الدقة</span>
                <p className="text-xs sm:text-sm text-[#716C67]">تناسق جزيئات الطحن وفق معايير ميكرونية دقيقة.</p>
              </div>
              <div>
                <span className="text-[#D9503D] font-bold text-lg sm:text-xl block mb-1">02. التوازن</span>
                <p className="text-xs sm:text-sm text-[#716C67]">نسبة ماء وبن مدروسة لإبراز أنقى الإيحاءات الطبيعية.</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={onExploreTools}
              className="h-12 px-8 rounded-full bg-[#D9503D] hover:bg-[#BC402F] text-white text-sm font-semibold transition-all duration-200 active:scale-98 inline-flex items-center gap-2 group cursor-pointer shadow-lg"
            >
              <span>استكشف أدوات التحضير</span>
              <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </button>
          </div>

          {/* Editorial Image Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/products/gooseneck-kettle.jpg"
                alt="طقوس تحضير القهوة المتأنية وفن السكب اليدوي"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-xl bg-[#080808]/60 backdrop-blur-md border border-white/10 text-right">
                <span className="text-xs text-[#D9503D] font-semibold flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>فن السكب اليدوي</span>
                </span>
                <p className="text-xs text-[#E7E3DE]/80">
                  تحكم كامل في وقت الترشيح وقوام الكوب النهائي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
