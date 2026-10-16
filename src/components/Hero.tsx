import React from 'react';
import { ArrowUpLeft, Sparkles, Coffee } from 'lucide-react';

interface HeroProps {
  onExploreHarvests: () => void;
  onExploreTools: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreHarvests,
  onExploreTools,
}) => {
  return (
    <section id="hero" className="relative w-full pt-8 sm:pt-14 md:pt-20 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Editorial White Space & Centered Typography */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Huge 2-Line Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-[#080808] tracking-tight leading-[1.2] sm:leading-[1.18] max-w-3xl mx-auto mb-6 sm:mb-8">
          قهوة تختارها بذوقك،
          <br className="hidden sm:inline" />
          <span className="text-[#151311]"> وتعود إليها كل يوم.</span>
        </h1>

        {/* Refined Description */}
        <p className="text-base sm:text-lg md:text-[19px] text-[#716C67] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
          محاصيل مختارة بعناية، ونكهات تستحق الاكتشاف، وأدوات تساعدك على تحضير فنجانك بطريقتك.
        </p>

        {/* Two Capsule CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto mb-16 md:mb-20">
          <button
            onClick={onExploreHarvests}
            className="w-full sm:w-auto h-12 sm:h-[52px] px-8 rounded-full bg-[#D9503D] hover:bg-[#BC402F] text-white text-sm sm:text-base font-semibold shadow-sm transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>اكتشف المحاصيل</span>
            <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onExploreTools}
            className="w-full sm:w-auto h-12 sm:h-[52px] px-8 rounded-full bg-[#F6F3EF] hover:bg-[#E7E3DE] text-[#151311] text-sm sm:text-base font-medium border border-[#E7E3DE] transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>أدوات تحضير القهوة</span>
          </button>
        </div>
      </div>

      {/* Two Large Side-by-Side Editorial Images matching visual reference */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1: World of Harvests */}
          <div 
            onClick={onExploreHarvests}
            className="group relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#F6F3EF] border border-[#E7E3DE] shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="/images/products/sidamo-ethiopia.jpg"
              alt="محاصيل القهوة المختصة في رشفة"
              loading="eager"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end text-right text-white">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide text-[#E7E3DE]/90 mb-2">
                <Coffee className="w-3.5 h-3.5 text-[#D9503D]" />
                عالم المحاصيل
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-2 leading-tight">
                محاصيل تستحق الاكتشاف
              </h3>
              <p className="text-sm sm:text-base text-[#E7E3DE]/80 mb-5 max-w-md leading-relaxed">
                اعثر على النكهة التي تناسبك من مزارع البن العالمية الفاخرة.
              </p>
              
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] text-xs sm:text-sm font-semibold group-hover:bg-[#D9503D] group-hover:text-white transition-colors duration-200">
                  <span>تصفّح القهوة</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Brewing Rituals */}
          <div 
            onClick={onExploreTools}
            className="group relative h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-[#F6F3EF] border border-[#E7E3DE] shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85"
              alt="طقوس تحضير القهوة المختصة بأداة الترشيح V60"
              loading="eager"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end text-right text-white">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide text-[#E7E3DE]/90 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D9503D]" />
                طقوس التحضير
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold mb-2 leading-tight">
                اصنع فنجانك بطريقتك
              </h3>
              <p className="text-sm sm:text-base text-[#E7E3DE]/80 mb-5 max-w-md leading-relaxed">
                أدوات مختارة لتجربة تحضير أكثر متعة ودقة في كل صباح.
              </p>
              
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#080808] text-xs sm:text-sm font-semibold group-hover:bg-[#D9503D] group-hover:text-white transition-colors duration-200">
                  <span>استكشف الأدوات</span>
                  <ArrowUpLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
