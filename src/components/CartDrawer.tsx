import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_CONFIG } from '../data/coffeeData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onExploreHarvests: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onExploreHarvests,
}) => {
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    city: 'الرياض',
    address: '',
    notes: '',
  });

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = `مرحباً فريق رَشفة ☕\nأود إتمام طلب جديد عبر المتجر الإلكتروني:\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   - الوزن: ${item.selectedWeight}\n`;
      if (item.selectedGrind) {
        message += `   - نوع الطحن: ${item.selectedGrind}\n`;
      }
      message += `   - الكمية: ${item.quantity}\n`;
      message += `   - السعر: ${item.unitPrice * item.quantity} ${STORE_CONFIG.currency}\n\n`;
    });

    message += `*المجموع الإجمالي: ${totalAmount} ${STORE_CONFIG.currency}*\n\n`;
    if (customerInfo.name) {
      message += `الاسم: ${customerInfo.name}\nالمدينة: ${customerInfo.city}\nالعنوان: ${customerInfo.address}\nملاحظات: ${customerInfo.notes}\n`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encoded}`, '_blank');
  };

  const handleDirectOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name.trim() || !customerInfo.phone.trim()) {
      return;
    }
    setOrderCompleted(true);
    setTimeout(() => {
      onClearCart();
      setOrderCompleted(false);
      setCheckoutMode(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#080808]/70 backdrop-blur-sm">
      <div 
        className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white border-r border-[#E7E3DE] shadow-2xl flex flex-col text-right">
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#E7E3DE] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D9503D]" />
              <h3 className="text-lg font-bold text-[#080808]">سلة المشتريات</h3>
              <span className="text-xs text-[#716C67] bg-[#F6F3EF] px-2 py-0.5 rounded-full border border-[#E7E3DE]">
                {items.length} عناصر
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#716C67] hover:bg-[#F6F3EF] hover:text-[#080808] transition-colors cursor-pointer"
              aria-label="إغلاق السلة"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6">
            {orderCompleted ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#D9503D]/10 text-[#D9503D] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#080808] mb-2">تم تجهيز طلبك بنجاح</h4>
                <p className="text-xs text-[#716C67] max-w-xs mx-auto mb-4">
                  سيتواصل معك فريق المحمصة لتأكيد بيانات الشحن وتوقيت التوصيل.
                </p>
                <span className="text-xs text-[#716C67]">شكراً لثقتك في رَشفة ☕</span>
              </div>
            ) : items.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F6F3EF] flex items-center justify-center text-[#716C67] mb-4">
                  <ShoppingBag className="w-7 h-7 stroke-1" />
                </div>
                <h4 className="text-base font-semibold text-[#080808] mb-1">سلتك فارغة حالياً</h4>
                <p className="text-xs text-[#716C67] max-w-xs mb-6">
                  استكشف محاصيلنا الفاخرة وأدوات التحضير المختارة لإضافتها إلى سلتك.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onExploreHarvests();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#080808] text-white text-xs font-semibold hover:bg-[#D9503D] transition-colors cursor-pointer"
                >
                  تصفّح المحاصيل الآن
                </button>
              </div>
            ) : checkoutMode ? (
              <form onSubmit={handleDirectOrderSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E3DE]">
                  <h4 className="text-sm font-bold text-[#080808]">بيانات استلام الطلب</h4>
                  <button
                    type="button"
                    onClick={() => setCheckoutMode(false)}
                    className="text-xs text-[#D9503D] hover:underline cursor-pointer"
                  >
                    العودة للسلة
                  </button>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#151311] block mb-1">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                    placeholder="الاسم"
                    className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#151311] block mb-1">رقم الجوال *</label>
                  <input
                    type="tel"
                    required
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
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
                    value={customerInfo.city}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })}
                    placeholder="الرياض، جدة، الدمام..."
                    className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#151311] block mb-1">العنوان بالتفصيل</label>
                  <input
                    type="text"
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    placeholder="الحي، اسم الشارع، رقم المبنى"
                    className="w-full h-10 px-3 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808]"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#151311] block mb-1">ملاحظات التحضير أو الإهداء</label>
                  <textarea
                    rows={2}
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                    placeholder="رسالة إهداء أو توجيهات خاصة..."
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F5] border border-[#E7E3DE] text-xs focus:outline-none focus:border-[#080808] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-11 rounded-full bg-[#D9503D] hover:bg-[#BC402F] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm mb-2"
                  >
                    تأكيد إرسال الطلب ({totalAmount} {STORE_CONFIG.currency})
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppCheckout}
                    className="w-full h-10 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>أو الإرسال مباشرة إلى واتساب</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 bg-[#F8F7F5] rounded-2xl border border-[#E7E3DE] items-center"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover bg-white flex-shrink-0"
                    />

                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#080808] truncate">
                        {item.product.name}
                      </h4>
                      <div className="flex flex-wrap gap-1 text-[11px] text-[#716C67] mt-0.5">
                        <span>{item.selectedWeight}</span>
                        {item.selectedGrind && <span>• {item.selectedGrind}</span>}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-white border border-[#E7E3DE] rounded-full px-2 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="text-[#716C67] hover:text-[#080808] cursor-pointer"
                            aria-label="تقليل"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#080808] px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="text-[#716C67] hover:text-[#080808] cursor-pointer"
                            aria-label="زيادة"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-[#080808]">
                          {item.unitPrice * item.quantity} {STORE_CONFIG.currency}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-[#716C67] hover:text-red-500 transition-colors cursor-pointer"
                      title="حذف العنصر"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Totals & CTA */}
          {items.length > 0 && !orderCompleted && !checkoutMode && (
            <div className="p-5 sm:p-6 border-t border-[#E7E3DE] bg-[#F8F7F5] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#716C67]">المجموع الفرعي</span>
                <span className="font-bold text-[#080808] text-base">
                  {totalAmount} {STORE_CONFIG.currency}
                </span>
              </div>
              <p className="text-[11px] text-[#716C67]">
                الأسعار شاملة ضريبة القيمة المضافة. تفاصيل التوصيل تُنسّق عند استكمال الطلب.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => setCheckoutMode(true)}
                  className="w-full h-11 rounded-full bg-[#D9503D] hover:bg-[#BC402F] text-white text-xs sm:text-sm font-semibold transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>متابعة الطلب والدفع</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full h-10 rounded-full bg-white hover:bg-[#F6F3EF] border border-[#E7E3DE] text-[#080808] text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>طلب مباشر عبر واتساب</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
