import React from 'react';
import { BREWING_GEAR_CATEGORIES } from '../data/coffeeData';
import { ArrowLeft } from 'lucide-react';

interface BrewingToolsSectionProps {
  onNavigateToTools: () => void;
}

export const BrewingToolsSection: React.FC<BrewingToolsSectionProps> = ({
  onNavigateToTools,
}) => {
  return (
    <section id="tools" className="py-16 sm:py-24 bg-white border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 text-right">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D9503D] mb-2 block">
              معدات الباريستا المنزلي
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#080808] tracking-tight leading-tight mb-3">
              كل ما تحتاجه لتحضيرك اليومي
            </h2>
            <p className="text-sm sm:text-base text-[#716C67] leading-relaxed">
              أدوات مختارة تساعدك على ضبط طريقتك والاستمتاع بالقهوة في المنزل بدقة واحترافية.
            </p>
          </div>

          <button
            onClick={onNavigateToTools}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#080808] hover:text-[#D9503D] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>عرض كافة الأدوات في المتجر</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BREWING_GEAR_CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={onNavigateToTools}
              className="group relative bg-[#F8F7F5] rounded-2xl overflow-hidden border border-[#E7E3DE] hover:border-[#D5D0C8] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F6F3EF]">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3 bg-[#080808]/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  {category.itemCount}
                </div>
              </div>

              <div className="p-5 text-right flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-[#080808] group-hover:text-[#D9503D] transition-colors mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#716C67] leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E3DE] flex items-center justify-between text-xs font-semibold text-[#080808] group-hover:text-[#D9503D]">
                  <span>استكشف المجموعة</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
