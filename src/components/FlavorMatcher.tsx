import React, { useState } from 'react';
import { TASTE_PREFERENCES, STORE_CONFIG } from '../data/coffeeData';
import { Product, TasteNoteTag } from '../types';
import { Compass, ArrowUpLeft, Plus } from 'lucide-react';

interface FlavorMatcherProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const FlavorMatcher: React.FC<FlavorMatcherProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedTag, setSelectedTag] = useState<TasteNoteTag>('chocolate_nuts');

  const activePreference = TASTE_PREFERENCES.find((p) => p.id === selectedTag) || TASTE_PREFERENCES[0];

  const matchedProducts = products.filter((p) =>
    activePreference.matchingProductIds.includes(p.id)
  );

  return (
    <section id="harvests" className="py-16 sm:py-24 bg-[#F6F3EF] border-t border-[#E7E3DE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9503D] bg-white px-3 py-1 rounded-full border border-[#E7E3DE] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>مرشد التذوق الذكي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-[#080808] tracking-tight mb-3">
            ما النكهة التي تبحث عنها؟
          </h2>
          <p className="text-sm sm:text-base text-[#716C67] leading-relaxed">
            ابدأ من ذوقك، وسنساعدك على تضييق الخيارات للوصول إلى كوبك المفضل بكل سهولة.
          </p>
        </div>

        {/* Interactive Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {TASTE_PREFERENCES.map((pref) => {
            const isSelected = selectedTag === pref.id;
            return (
              <button
                key={pref.id}
                onClick={() => setSelectedTag(pref.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-right transition-all duration-200 border cursor-pointer flex flex-col justify-between min-h-[90px] ${
                  isSelected
                    ? 'bg-[#080808] text-white border-[#080808] shadow-md scale-[1.02]'
                    : 'bg-white text-[#151311] border-[#E7E3DE] hover:border-[#716C67]/40 hover:bg-[#F8F7F5]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#D9503D]' : 'bg-[#E7E3DE]'}`}></span>
                  {isSelected && <ArrowUpLeft className="w-3.5 h-3.5 text-[#D9503D]" />}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold leading-snug">{pref.title}</h4>
                  <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-[#E7E3DE]/80' : 'text-[#716C67]'}`}>
                    {pref.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Matched Coffee Products Cards */}
        <div className="bg-white p-5 sm:p-8 rounded-3xl border border-[#E7E3DE] shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E7E3DE]">
            <div>
              <span className="text-xs text-[#716C67]">المحاصيل الموصى بها لذوق:</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#080808]">{activePreference.title}</h3>
            </div>
            <span className="text-xs font-medium text-[#716C67] bg-[#F6F3EF] px-3 py-1 rounded-full border border-[#E7E3DE]">
              {matchedProducts.length} محاصيل متوافقة
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {matchedProducts.map((coffee) => (
              <div
                key={coffee.id}
                className="group relative bg-[#F8F7F5] rounded-2xl p-4 border border-[#E7E3DE] hover:border-[#D9503D]/40 transition-all duration-200 flex items-center gap-4 text-right"
              >
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                  onClick={() => onSelectProduct(coffee)}
                />
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] text-[#716C67] block">{coffee.origin}</span>
                    <h4 
                      onClick={() => onSelectProduct(coffee)}
                      className="text-sm sm:text-base font-semibold text-[#080808] group-hover:text-[#D9503D] cursor-pointer transition-colors"
                    >
                      {coffee.name}
                    </h4>
                    {coffee.flavorNotes && (
                      <p className="text-[11px] text-[#716C67] mt-1 line-clamp-1">
                        الإيحاءات: {coffee.flavorNotes.join(' • ')}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-bold text-[#080808]">
                      {coffee.price} {STORE_CONFIG.currency}
                    </span>
                    <button
                      onClick={() => onAddToCart(coffee)}
                      className="h-7 px-2.5 rounded-full bg-[#080808] hover:bg-[#D9503D] text-white text-[11px] font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>إضافة</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
