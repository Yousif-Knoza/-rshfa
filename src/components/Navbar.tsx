import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowLeft } from 'lucide-react';
import { STORE_CONFIG } from '../data/coffeeData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', id: 'hero' },
    { label: 'المتجر', id: 'products' },
    { label: 'المحاصيل', id: 'harvests' },
    { label: 'أدوات التحضير', id: 'tools' },
    { label: 'قصتنا', id: 'story' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <div 
        className={`pointer-events-auto mx-auto max-w-7xl h-[68px] sm:h-[76px] md:h-[80px] bg-[#080808]/75 backdrop-blur-2xl text-white rounded-full px-4 sm:px-6 md:px-8 flex items-center justify-between border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ${
          isScrolled ? 'bg-[#080808]/85 backdrop-blur-3xl border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_20px_48px_rgba(0,0,0,0.5)]' : ''
        }`}
      >
        {/* Right: Brand Text Logo (Arabic with subtle English) */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2.5 text-right group transition-transform duration-200 active:scale-95 cursor-pointer"
          aria-label="رَشفة - الصفحة الرئيسية"
        >
          <div className="flex flex-col text-right">
            <span className="font-bold text-xl sm:text-2xl tracking-tight text-white leading-none">
              {STORE_CONFIG.brandNameAr}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#E7E3DE]/70 font-light uppercase">
              {STORE_CONFIG.brandNameEn}
            </span>
          </div>
        </button>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#E7E3DE]/90">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="relative py-1 transition-colors hover:text-white cursor-pointer group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#D9503D] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Left: Quick Actions & CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#E7E3DE]/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="بحث في المتجر"
            aria-label="بحث"
          >
            <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#E7E3DE]/90 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="سلة المشتريات"
            aria-label={`سلة المشتريات، ${cartCount} عناصر`}
          >
            <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#D9503D] text-white text-[11px] font-bold flex items-center justify-center border-2 border-[#080808]">
                {cartCount}
              </span>
            )}
          </button>

          {/* White Capsule Button (Desktop) */}
          <button
            onClick={() => handleLinkClick('harvests')}
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 sm:px-5 rounded-full text-xs sm:text-[13px] font-semibold bg-white text-[#080808] hover:bg-[#F6F3EF] transition-all duration-200 active:scale-98 shadow-sm cursor-pointer"
          >
            استكشف المحاصيل
          </button>

          {/* Burnt Orange Capsule Button (Shop Now) */}
          <button
            onClick={() => handleLinkClick('products')}
            className="inline-flex items-center justify-center h-10 px-4 sm:px-5 rounded-full text-xs sm:text-[13px] font-semibold bg-[#D9503D] text-white hover:bg-[#BC402F] transition-all duration-200 active:scale-98 shadow-sm cursor-pointer"
          >
            تسوّق الآن
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden fixed inset-x-3 top-24 bg-[#080808]/85 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl text-white z-50 shadow-black/60">
          <div className="flex flex-col gap-4 text-right">
            <span className="text-xs uppercase tracking-widest text-[#716C67] pb-1 border-b border-white/10">
              أقسام المتجر
            </span>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="flex items-center justify-between py-2 text-base font-medium text-[#E7E3DE] hover:text-[#D9503D] transition-colors cursor-pointer"
              >
                <span>{link.label}</span>
                <ArrowLeft className="w-4 h-4 opacity-50" />
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('harvests')}
                className="w-full h-11 rounded-full text-sm font-semibold bg-white text-[#080808] hover:bg-[#F6F3EF] flex items-center justify-center transition-colors cursor-pointer"
              >
                استكشف المحاصيل
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className="w-full h-11 rounded-full text-sm font-semibold bg-[#D9503D] text-white hover:bg-[#BC402F] flex items-center justify-center transition-colors cursor-pointer"
              >
                تسوّق الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
