import React, { useState, useMemo } from 'react';
import { Search, X, ArrowLeft } from 'lucide-react';
import { Product } from '../types';
import { STORE_CONFIG } from '../data/coffeeData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase().trim();
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(term);
      const matchOrigin = p.origin.toLowerCase().includes(term);
      const matchNotes = p.flavorNotes?.some((n) => n.toLowerCase().includes(term));
      const matchCategory = p.categoryLabel.toLowerCase().includes(term);
      const matchDesc = p.description.toLowerCase().includes(term);
      return matchName || matchOrigin || matchNotes || matchCategory || matchDesc;
    });
  }, [products, searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#080808]/75 backdrop-blur-sm">
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl border border-[#E7E3DE] shadow-2xl overflow-hidden flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-[#E7E3DE] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#716C67]" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن محصول، نكهة (شوكولاتة، كراميل)، أداة V60..."
            className="flex-grow text-sm sm:text-base text-[#080808] placeholder-[#716C67]/70 bg-transparent focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-[#716C67] hover:text-[#080808] px-2 cursor-pointer"
            >
              مسح
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#716C67] hover:bg-[#F6F3EF] hover:text-[#080808] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {!searchTerm.trim() ? (
            <div className="py-8 text-center text-xs text-[#716C67]">
              <p className="mb-2">عمليات بحث شائعة:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['خولاني', 'سيدامو', 'V60', 'إسبريسو', 'تذوق'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="px-3 py-1 rounded-full bg-[#F6F3EF] text-[#151311] hover:bg-[#E7E3DE] transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-12 text-center text-sm text-[#716C67]">
              لم يتم العثور على نتائج تطابق «{searchTerm}».
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-xs text-[#716C67] block mb-2">
                عُثر على {searchResults.length} نتيجة:
              </span>
              {searchResults.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    onSelectProduct(prod);
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-[#F8F7F5] border border-[#E7E3DE] hover:border-[#D9503D]/40 transition-colors flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-14 h-14 rounded-xl object-cover bg-white flex-shrink-0"
                    />
                    <div>
                      <span className="text-[11px] text-[#716C67] block">{prod.origin}</span>
                      <h4 className="text-sm font-semibold text-[#080808] group-hover:text-[#D9503D] transition-colors">
                        {prod.name}
                      </h4>
                      {prod.flavorNotes && (
                        <p className="text-[11px] text-[#716C67] line-clamp-1">
                          {prod.flavorNotes.join(' • ')}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#080808]">
                      {prod.price} {STORE_CONFIG.currency}
                    </span>
                    <ArrowLeft className="w-4 h-4 text-[#716C67] group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
