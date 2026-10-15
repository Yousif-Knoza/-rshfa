import React from 'react';
import { Plus, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { STORE_CONFIG } from '../data/coffeeData';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isAdded?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  isAdded = false,
}) => {
  return (
    <div className="group relative bg-[#F8F7F5] rounded-2xl overflow-hidden border border-[#E7E3DE] hover:border-[#D5D0C8] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      {/* Product Image Area */}
      <div 
        onClick={() => onSelect(product)}
        className="relative aspect-square w-full bg-[#F6F3EF] overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {product.badge && (
          <div className="absolute top-3 right-3 bg-[#080808]/85 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
            {product.badge}
          </div>
        )}

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-[#080808]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="pointer-events-auto px-4 py-2 rounded-full bg-white text-[#080808] text-xs font-semibold shadow-md flex items-center gap-1.5 transition-transform hover:scale-105">
            <Eye className="w-3.5 h-3.5" />
            <span>نظرة سريعة</span>
          </span>
        </div>
      </div>

      {/* Product Meta */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between text-right">
        <div>
          <div className="flex items-center justify-between text-xs text-[#716C67] mb-1.5">
            <span>{product.origin}</span>
            <span className="text-[11px] text-[#716C67]/80">{product.weight}</span>
          </div>

          <h4 
            onClick={() => onSelect(product)}
            className="text-base sm:text-[17px] font-semibold text-[#151311] group-hover:text-[#D9503D] transition-colors cursor-pointer mb-2 leading-snug"
          >
            {product.name}
          </h4>

          {product.flavorNotes && product.flavorNotes.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.flavorNotes.map((note, index) => (
                <span
                  key={index}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-[#F6F3EF] text-[#716C67] border border-[#E7E3DE]"
                >
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-3 border-t border-[#E7E3DE] flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-lg sm:text-xl font-bold text-[#080808]">{product.price}</span>
            <span className="text-xs text-[#716C67] font-medium">{STORE_CONFIG.currency}</span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={`h-9 px-3.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer ${
              isAdded
                ? 'bg-[#151311] text-white'
                : 'bg-[#D9503D] hover:bg-[#BC402F] text-white shadow-xs'
            }`}
            title="إضافة إلى السلة"
            aria-label={`إضافة ${product.name} إلى السلة`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>أُضيفت</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>أضف للسلة</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
