import React from 'react';
import { MessageSquare, Mail, ArrowUpLeft } from 'lucide-react';
import { STORE_CONFIG } from '../data/coffeeData';

export const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('مرحباً فريق رَشفة، أود الاستفسار عن محاصيل القهوة وخيارات الطلب.');
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-[#E7E3DE]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#D9503D] mb-2 block">
          فريق العناية بالعملاء
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#080808] tracking-tight leading-tight mb-4">
          لديك سؤال عن قهوتك القادمة؟
        </h2>
        <p className="text-sm sm:text-base text-[#716C67] leading-relaxed mb-10 max-w-xl mx-auto">
          تواصل معنا مباشرة عبر قنواتنا المعتمدة بشأن المحاصيل، أو أدوات التحضير، أو ترتيب تجربة تذوق خاصة. يسعدنا دائماً مرافقتك في رحلتك مع القهوة المختصة.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-right">
          {/* WhatsApp Quick Chat */}
          <button
            onClick={handleWhatsAppClick}
            className="p-5 rounded-2xl bg-[#F8F7F5] border border-[#E7E3DE] hover:border-[#25D366]/40 hover:shadow-md flex items-center justify-between transition-all text-right cursor-pointer group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#716C67] block">محادثة فورية مباشرة</span>
                <span className="text-base font-semibold text-[#080808] group-hover:text-[#D9503D] transition-colors">
                  واتساب المحمصة
                </span>
                <span className="text-xs text-[#716C67] block mt-0.5">{STORE_CONFIG.whatsappDisplay}</span>
              </div>
            </div>
            <ArrowUpLeft className="w-4 h-4 text-[#716C67] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Email */}
          <a
            href={`mailto:${STORE_CONFIG.email}`}
            className="p-5 rounded-2xl bg-[#F8F7F5] border border-[#E7E3DE] hover:border-[#080808]/40 hover:shadow-md flex items-center justify-between transition-all text-right group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#080808]/5 text-[#080808] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#716C67] block">البريد الإلكتروني الرسمي</span>
                <span className="text-base font-semibold text-[#080808] group-hover:text-[#D9503D] transition-colors">
                  {STORE_CONFIG.email}
                </span>
                <span className="text-xs text-[#716C67] block mt-0.5">رد سريع خلال 24 ساعة</span>
              </div>
            </div>
            <ArrowUpLeft className="w-4 h-4 text-[#716C67] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
