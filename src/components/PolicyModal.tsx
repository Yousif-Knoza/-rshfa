import React from 'react';
import { X, Shield } from 'lucide-react';
import { STORE_CONFIG } from '../data/coffeeData';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/75 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl border border-[#E7E3DE] shadow-2xl p-6 sm:p-8 text-right relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-[#716C67] hover:bg-[#F6F3EF] hover:text-[#080808] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#D9503D]">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-semibold">وثائق المتجر القانونية</span>
        </div>

        <h3 className="text-xl font-bold text-[#080808] mb-4">
          {isPrivacy ? 'سياسة الخصوصية وسرية المعلومات' : 'الشروط والأحكام وسياسة الشراء'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#716C67] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                نلتزم في «{STORE_CONFIG.brandNameAr}» بأقصى درجات السرية والخصوصية لمعلومات عملائنا وشركائنا.
              </p>
              <h4 className="font-semibold text-[#080808]">1. جمع البيانات واستخدامها</h4>
              <p>
                تُجمع المعلومات الأساسية (الاسم، رقم الهاتف، العنوان) فقط لغرض معالجة الطلبات، التوصيل، والتواصل المباشر بشأن استفسارات الشحن.
              </p>
              <h4 className="font-semibold text-[#080808]">2. حماية وتشفير البيانات</h4>
              <p>
                لا نشارك بياناتك أو نبيعها لأي طرف ثالث، وتُستخدم بيانات التواصل فقط لخدمتك ضمن تجربة تسوقك في المحمصة.
              </p>
            </>
          ) : (
            <>
              <p>
                أهلاً بك في متجر «{STORE_CONFIG.brandNameAr}». تخضع جميع الطلبات للشروط والأحكام الآتية لضمان تجربة عادلة وشفافة:
              </p>
              <h4 className="font-semibold text-[#080808]">1. المنتجات والمحاصيل الطازجة</h4>
              <p>
                نحرص على تحميص وشحن البن بأعلى معايير الجودة لضمان أقصى درجات النقاء، وتُدون تواريخ التحميص على كافة الأكياس.
              </p>
              <h4 className="font-semibold text-[#080808]">2. التوصيل والاستلام</h4>
              <p>
                تُسلّم الشحنات عبر شركات توصيل معتمدة مع الحرص على التغليف الآمن لحماية الحبوب والأدوات الزجاجية والسيراميكية.
              </p>
              <h4 className="font-semibold text-[#080808]">3. الدعم والاسترجاع</h4>
              <p>
                إذا وصلك أي منتج تالف أو غير مطابق لما طلبته، يسعدنا فوراً استبداله أو معالجة طلبك عبر قنوات التواصل المباشرة.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E7E3DE] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#080808] text-white text-xs font-semibold hover:bg-[#D9503D] transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
