import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Send } from 'lucide-react';
import { STORE_CONFIG } from '../data/coffeeData';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: {
    coffeeType: string;
    quantity: string;
    frequency: string;
    calculatedPrice: number;
  } | null;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('الرياض');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !config) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = `مرحباً فريق رَشفة ☕\nأود تفعيل اشتراك القهوة الدورية:\n\n- النوع: ${config.coffeeType}\n- الكمية: ${config.quantity}\n- التكرار: ${config.frequency}\n- السعر التقديري: ${config.calculatedPrice} ${STORE_CONFIG.currency}\n\nالاسم: ${name || 'عميل المتجر'}\nالمدينة: ${city}`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/75 backdrop-blur-sm">
      <div 
        className="w-full max-w-md bg-white rounded-3xl border border-[#E7E3DE] shadow-2xl p-6 sm:p-8 text-right relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-[#716C67] hover:bg-[#F6F3EF] hover:text-[#080808] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#D9503D]/10 text-[#D9503D] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#080808] mb-2">تم تسجيل رغبتك بالاشتراك</h3>
            <p className="text-xs text-[#716C67] max-w-xs mx-auto mb-6 leading-relaxed">
              سيتواصل معك فريق التحميص لتأكيد موعد أول شحنة وتفاصيل جدول الشحن الدوري.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#080808] text-white text-xs font-semibold hover:bg-[#D9503D] transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9503D] bg-[#F6F3EF] px-2.5 py-1 rounded-full mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>حجز جدول التحميص الدوري</span>
              </div>
              <h3 className="text-xl font-bold text-[#080808]">تأكيد اشتراك روتينك</h3>
            </div>

            <div className="bg-[#F8F7F5] p-3.5 rounded-2xl border border-[#E7E3DE] text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#716C67]">المحصول:</span>
                <span className="font-semibold text-[#080808]">{config.coffeeType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#716C67]">الكمية والتكرار:</span>
                <span className="font-semibold text-[#080808]">{config.quantity} • {config.frequency}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-[#E7E3DE]">
                <span className="text-[#716C67]">القيمة التقديرية:</span>
                <span className="font-bold text-[#D9503D]">{config.calculatedPrice} {STORE_CONFIG.currency}</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#151311] block mb-1">الاسم الكامل *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسم المستلم"
                className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#151311] block mb-1">رقم الجوال لتأكيد الشحن *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05xxxxxxx"
                dir="ltr"
                className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808] text-right"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-[#151311] block mb-1">المدينة *</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full h-11 rounded-full bg-[#D9503D] hover:bg-[#BC402F] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
              >
                تأكيد حجز الاشتراك
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="w-full h-10 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>حجز مباشر عبر واتساب</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
