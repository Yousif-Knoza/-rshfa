import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import { B2BInquiry } from '../types';

interface B2BModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const B2BModal: React.FC<B2BModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<B2BInquiry>({
    name: '',
    businessName: '',
    phone: '',
    businessType: 'مقهى مختص',
    estimatedVolume: '15 - 50 كجم شهرياً',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setError('يرجى تعبئة الحقول الأساسية المطلوبة.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/75 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl border border-[#E7E3DE] shadow-2xl p-6 sm:p-8 text-right relative"
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
            <h3 className="text-xl font-bold text-[#080808] mb-2">تم استلام طلب التوريد</h3>
            <p className="text-xs text-[#716C67] max-w-sm mx-auto mb-6 leading-relaxed">
              شكراً لاهتمامك بمحاصيل رَشفة. سيقوم مدير حسابات التوريد بالتواصل معك وترتيب جلسة معايرة وعينات تذوق لمشروعك.
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
            <div className="mb-4">
              <span className="text-xs text-[#D9503D] font-semibold block mb-1">حلول توريد القهوة</span>
              <h3 className="text-xl font-bold text-[#080808]">استفسار توريد للمشاريع والمقاهي</h3>
              <p className="text-xs text-[#716C67] mt-1">
                نوفر توريداً منتظماً ومحاصيل مخصصة مع تدريب الباريستا ومعايرة الاستخلاص.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs border border-red-200">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-[#151311] block mb-1">اسم المسؤول *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="الاسم"
                  className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#151311] block mb-1">اسم المنشأة أو المقهى *</label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="اسم النشاط"
                  className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-[#151311] block mb-1">رقم التواصل / واتساب *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="05xxxxxxx"
                  dir="ltr"
                  className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808] text-right"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-[#151311] block mb-1">نوع النشاط</label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
                >
                  <option value="مقهى مختص">مقهى مختص</option>
                  <option value="مطعم راقٍ">مطعم راقٍ</option>
                  <option value="شركة / مقر عمل">شركة / مقر عمل</option>
                  <option value="فندق أو منتجع">فندق أو ضيافة</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-[#151311] block mb-1">الكمية الشهرية التقريبية</label>
              <select
                value={formData.estimatedVolume}
                onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
              >
                <option value="5 - 15 كجم شهرياً">5 - 15 كجم شهرياً</option>
                <option value="15 - 50 كجم شهرياً">15 - 50 كجم شهرياً</option>
                <option value="أكثر من 50 كجم شهرياً">أكثر من 50 كجم شهرياً</option>
                <option value="طلب عينات تذوق أولية">طلب عينات تذوق أولية</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-[#151311] block mb-1">ملاحظات أو متطلبات خاصة</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="تفضيلات المحاصيل، نوع مكائن الإسبريسو المستخدمة، إلخ..."
                className="w-full p-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808] resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full h-11 rounded-full bg-[#080808] hover:bg-[#D9503D] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>إرسال استفسار التوريد</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
