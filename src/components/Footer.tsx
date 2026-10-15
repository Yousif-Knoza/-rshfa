import React from 'react';
import { STORE_CONFIG } from '../data/coffeeData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  return (
    <footer className="bg-[#080808] text-white pt-16 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-white/10 text-right">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-2xl text-white tracking-tight">
                {STORE_CONFIG.brandNameAr}
              </span>
              <span className="text-xs tracking-[0.25em] text-[#E7E3DE]/70 font-light">
                {STORE_CONFIG.brandNameEn}
              </span>
            </div>
            <p className="text-sm text-[#E7E3DE]/80 leading-relaxed max-w-sm mb-4">
              اكتشف القهوة التي تناسب ذوقك. محمصة متخصصة في انتقاء محاصيل القهوة الفاخرة وتوفير أدوات التحضير الدقيقة لتجربة فنجان استثنائي كل يوم.
            </p>
            <span className="text-xs text-[#716C67] block">
              {STORE_CONFIG.tagline}
            </span>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-[#D9503D] font-semibold mb-4">
              أقسام المتجر
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E7E3DE]/80">
              <li>
                <button
                  onClick={() => onNavigateSection('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  المتجر الشامل
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('harvests')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  محاصيل القهوة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('tools')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  أدوات التحضير
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  الهدايا والتذوق
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Policies */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider text-[#D9503D] font-semibold mb-4">
              المساعدة والمعلومات
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E7E3DE]/80">
              <li>
                <button
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  الأسئلة الشائعة
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  التواصل والدعم
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  الشروط والأحكام
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#716C67] gap-4">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.brandNameAr} | {STORE_CONFIG.brandNameEn}. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <span>تجربة قهوة مختصة فاخرة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
