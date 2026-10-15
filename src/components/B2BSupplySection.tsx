import React from 'react';
import { Building2, ArrowUpLeft } from 'lucide-react';

interface B2BSupplySectionProps {
  onOpenB2BModal: () => void;
}

export const B2BSupplySection: React.FC<B2BSupplySectionProps> = ({
  onOpenB2BModal,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F7F5] border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#E7E3DE] p-8 sm:p-12 text-right shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9503D] bg-[#F6F3EF] px-3 py-1 rounded-full border border-[#E7E3DE] mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>توريد الأعمال والمقاهي</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#080808] tracking-tight leading-tight mb-3">
              قهوة لمشروعك أيضًا
            </h2>
            <p className="text-sm text-[#716C67] leading-relaxed">
              هل تبحث عن محاصيل قهوة تناسب مقهاك أو مشروع الضيافة الخاص بك؟ أخبرنا عن احتياجك لنساعدك في استكشاف الخيارات المناسبة وتقديم عينات تذوق مخصصة.
            </p>
          </div>

          <button
            onClick={onOpenB2BModal}
            className="h-12 px-8 rounded-full bg-[#080808] hover:bg-[#D9503D] text-white text-sm font-semibold transition-all duration-200 active:scale-98 flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-sm flex-shrink-0"
          >
            <span>استفسر عن التوريد</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
