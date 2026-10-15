import React, { useState } from 'react';
import { X, Plus, Minus, Check } from 'lucide-react';
import { Product, WeightOption, GrindOption } from '../types';
import { STORE_CONFIG } from '../data/coffeeData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCartWithOptions: (
    product: Product,
    quantity: number,
    selectedWeight: string,
    selectedGrind?: string,
    finalPrice?: number
  ) => void;
}

const GRIND_OPTIONS: GrindOption[] = [
  'حبوب كاملة',
  'طحنة فلتر V60',
  'طحنة إسبريسو',
  'طحنة كيمكس',
  'طحنة فرنش برس',
  'طحنة قهوة باردة',
];

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCartWithOptions,
}) => {
  if (!product) return null;

  const isCoffee = product.category === 'beans' || product.category === 'espresso' || product.category === 'ground';
  const weightOptions: WeightOption[] = product.weightOptions || ['250 جم', '500 جم', '1 كجم'];
  
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>(
    (product.weight as WeightOption) || '250 جم'
  );
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>('حبوب كاملة');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const multiplier = product.weightPriceMultipliers?.[selectedWeight] ?? 1;
  const currentUnitPrice = Math.round(product.price * multiplier);

  const handleAddToCart = () => {
    onAddToCartWithOptions(
      product,
      quantity,
      isCoffee ? selectedWeight : product.weight,
      isCoffee ? selectedGrind : undefined,
      currentUnitPrice
    );
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#080808]/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-[#E7E3DE] shadow-2xl flex flex-col max-h-[92vh] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-[#E7E3DE] flex items-center justify-center text-[#151311] hover:bg-[#080808] hover:text-white transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-full sm:w-56 aspect-square rounded-2xl overflow-hidden bg-[#F6F3EF] flex-shrink-0 border border-[#E7E3DE]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow">
              <span className="text-xs font-semibold text-[#D9503D] uppercase tracking-wide block mb-1">
                {product.origin}
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#080808] mb-2 leading-snug">
                {product.name}
              </h3>
              
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-2xl font-bold text-[#080808]">{currentUnitPrice}</span>
                <span className="text-xs text-[#716C67] font-semibold">{STORE_CONFIG.currency}</span>
              </div>

              {product.flavorNotes && product.flavorNotes.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#F6F3EF] text-[#151311] border border-[#E7E3DE]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#716C67] leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {isCoffee && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#F8F7F5] p-4 rounded-2xl border border-[#E7E3DE] text-xs">
              {product.altitude && (
                <div>
                  <span className="text-[#716C67] block">الارتفاع</span>
                  <span className="font-semibold text-[#080808]">{product.altitude}</span>
                </div>
              )}
              {product.processing && (
                <div>
                  <span className="text-[#716C67] block">المعالجة</span>
                  <span className="font-semibold text-[#080808]">{product.processing}</span>
                </div>
              )}
              {product.roastLevel && (
                <div>
                  <span className="text-[#716C67] block">درجة التحميص</span>
                  <span className="font-semibold text-[#080808]">{product.roastLevel}</span>
                </div>
              )}
            </div>
          )}

          {isCoffee && (
            <div>
              <label className="text-xs font-semibold text-[#080808] block mb-2">
                اختر الوزن المطلوب (يتحدث السعر تلقائياً)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {weightOptions.map((weight) => (
                  <button
                    key={weight}
                    onClick={() => setSelectedWeight(weight)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      selectedWeight === weight
                        ? 'border-[#080808] bg-[#080808] text-white shadow-xs'
                        : 'border-[#E7E3DE] bg-[#F8F7F5] text-[#151311] hover:border-[#716C67]'
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isCoffee && (
            <div>
              <label className="text-xs font-semibold text-[#080808] block mb-2">
                نوع الطحن المناسب لأداتك
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {GRIND_OPTIONS.map((grind) => (
                  <button
                    key={grind}
                    onClick={() => setSelectedGrind(grind)}
                    className={`py-2 px-3 rounded-xl text-xs text-right border transition-all cursor-pointer ${
                      selectedGrind === grind
                        ? 'border-[#080808] bg-[#080808] text-white font-medium'
                        : 'border-[#E7E3DE] bg-[#F8F7F5] text-[#151311] hover:border-[#716C67]'
                    }`}
                  >
                    {grind}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#E7E3DE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 bg-[#F8F7F5] border border-[#E7E3DE] rounded-full px-3 py-1.5">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#716C67] hover:text-[#080808] transition-colors cursor-pointer"
                aria-label="تقليل الكمية"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-bold text-[#080808]">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-[#716C67] hover:text-[#080808] transition-colors cursor-pointer"
                aria-label="زيادة الكمية"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full sm:w-auto flex-grow h-12 px-8 rounded-full text-sm font-semibold transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer ${
                isAdded
                  ? 'bg-[#151311] text-white'
                  : 'bg-[#D9503D] hover:bg-[#BC402F] text-white shadow-sm'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>تمت الإضافة إلى السلة بنجاح</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>
                    إضافة إلى السلة ({currentUnitPrice * quantity} {STORE_CONFIG.currency})
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
