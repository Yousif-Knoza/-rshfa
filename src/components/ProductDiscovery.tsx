import React, { useState, useMemo } from 'react';
import { CategoryId, Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductDiscoveryProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  addedProductId: string | null;
}

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'all', label: 'جميع المنتجات' },
  { id: 'beans', label: 'محاصيل القهوة' },
  { id: 'espresso', label: 'خلطات الإسبريسو' },
  { id: 'ground', label: 'القهوة المطحونة' },
  { id: 'tools', label: 'أدوات التحضير' },
  { id: 'gifts', label: 'الهدايا والتذوق' },
];

export const ProductDiscovery: React.FC<ProductDiscoveryProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  addedProductId,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <section id="products" className="py-16 sm:py-20 md:py-28 bg-white border-t border-[#E7E3DE]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-right mb-8 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D9503D] mb-2 block">
            المتجر المختص
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold text-[#080808] tracking-tight leading-tight mb-3">
            اكتشف قهوتك القادمة
          </h2>
          <p className="text-sm sm:text-base text-[#716C67] leading-relaxed">
            من النكهات الغنية بالشوكولاتة إلى المحاصيل الفاكهية المشرقة، ابدأ بما تحب واستكشف تجارب استثنائية.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#080808] text-white shadow-sm'
                    : 'bg-[#F6F3EF] text-[#716C67] hover:text-[#080808] hover:bg-[#E7E3DE]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
              isAdded={addedProductId === product.id}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#F8F7F5] rounded-2xl border border-[#E7E3DE]">
            <p className="text-[#716C67] text-sm">لا توجد منتجات متوفرة في هذا التصنيف حالياً.</p>
          </div>
        )}
      </div>
    </section>
  );
};
