import React from 'react';
import { X } from 'lucide-react';

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhilosophyModal: React.FC<PhilosophyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/75 backdrop-blur-sm">
      <div 
        className="w-full max-w-xl bg-white rounded-3xl border border-[#E7E3DE] shadow-2xl p-6 sm:p-8 text-right relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-[#716C67] hover:bg-[#F6F3EF] hover:text-[#080808] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-xs font-semibold text-[#D9503D] uppercase tracking-wide block mb-1">
          رؤيتنا الحرفية
        </span>
        <h3 className="text-2xl font-bold text-[#080808] mb-4">فلسفة رَشفة في عالم القهوة</h3>

        <div className="space-y-4 text-xs sm:text-sm text-[#716C67] leading-relaxed">
          <p>
            في «رَشفة»، نرى أن القهوة المختصة ليست مجرد منبّه يومي سريع، بل هي رحلة متأنية تبدأ من عناية المزارع بشجرة البن في أخصب التربات البركانية، وتستمر عبر التحميص الدقيق والتذوق الحسي حتى تلامس حواسك.
          </p>

          <div className="p-4 rounded-2xl bg-[#F8F7F5] border border-[#E7E3DE] space-y-2 text-right">
            <h4 className="font-semibold text-[#080808] text-sm">مبادئنا الأساسية:</h4>
            <p>• <strong>احترام خصوصية المنشأ:</strong> لا نخلط المحاصيل الفردية عشوائياً، بل نترك للتربة والارتفاع صوتهما الصادق في الكوب.</p>
            <p>• <strong>التحميص المتزن:</strong> نحافظ على السكريات الطبيعية والأحماض الفاكهية اللطيفة دون حرق أو تفريط.</p>
            <p>• <strong>نشر ثقافة التحضير:</strong> نؤمن بأن كل محب للقهوة قادر على صناعة فنجان احترافي في منزله باستخدام الأدوات الصحيحة.</p>
          </div>

          <p>
            نسعى لأن تكون كل رشفة لحظة صفاء وهدوء تعيد ترتيب يومك وتمنحك متعة تذوق حقيقية.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E7E3DE] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#080808] hover:bg-[#D9503D] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
