import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/coffeeData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F6F3EF] border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9503D] bg-white px-3 py-1 rounded-full border border-[#E7E3DE] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>إجابات واضحة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-sm sm:text-base text-[#716C67] leading-relaxed">
            كل ما تود معرفته عن محاصيلنا، طرق الطحن، وتجربة الشراء.
          </p>
        </div>

        <div className="space-y-3.5 text-right">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E7E3DE] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F7F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-[17px] font-semibold text-[#080808] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#F6F3EF] flex items-center justify-center flex-shrink-0 text-[#716C67] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#080808] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#716C67] leading-relaxed border-t border-[#E7E3DE]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
