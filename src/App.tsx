import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/coffeeData';
import { Product, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductDiscovery } from './components/ProductDiscovery';
import { FlavorMatcher } from './components/FlavorMatcher';
import { DarkShowcase } from './components/DarkShowcase';
import { BrewingToolsSection } from './components/BrewingToolsSection';
import { StorySection } from './components/StorySection';
import { B2BSupplySection } from './components/B2BSupplySection';
import { BrewGuideSteps } from './components/BrewGuideSteps';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { SearchModal } from './components/SearchModal';
import { B2BModal } from './components/B2BModal';
import { PhilosophyModal } from './components/PhilosophyModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('rashfa_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rashfa_cart', JSON.stringify(cartItems));
    } catch {
      // storage unavailable
    }
  }, [cartItems]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const handleQuickAddToCart = (product: Product) => {
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1200);

    const instanceId = `${product.id}-${product.weight}-حبوب كاملة`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === instanceId);
      if (existing) {
        return prev.map((item) =>
          item.id === instanceId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: instanceId,
          productId: product.id,
          product,
          quantity: 1,
          selectedWeight: product.weight,
          selectedGrind: product.category === 'beans' ? 'حبوب كاملة' : undefined,
          unitPrice: product.price,
        },
      ];
    });
  };

  const handleAddToCartWithOptions = (
    product: Product,
    quantity: number,
    selectedWeight: string,
    selectedGrind?: string,
    finalPrice?: number
  ) => {
    const instanceId = `${product.id}-${selectedWeight}-${selectedGrind || 'default'}`;
    const unitPrice = finalPrice || product.price;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === instanceId);
      if (existing) {
        return prev.map((item) =>
          item.id === instanceId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: instanceId,
          productId: product.id,
          product,
          quantity,
          selectedWeight,
          selectedGrind,
          unitPrice,
        },
      ];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-[#151311] flex flex-col font-sans selection:bg-[#D9503D]/20 selection:text-[#080808]">
      {/* 1. Floating Pitch-Black Capsule Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateSection={scrollToSection}
      />

      <main className="flex-1">
        {/* 2 & 3. Hero Section (Spacious whitespace, huge title, 2 capsule CTAs, 2 large side-by-side editorial images) */}
        <Hero
          onExploreHarvests={() => scrollToSection('harvests')}
          onExploreTools={() => scrollToSection('tools')}
        />

        {/* 4. Product Discovery Section (اكتشف قهوتك القادمة) */}
        <ProductDiscovery
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleQuickAddToCart}
          addedProductId={addedProductId}
        />

        {/* 5. Interactive Flavor Matcher (ما النكهة التي تبحث عنها؟) */}
        <FlavorMatcher
          products={PRODUCTS}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleQuickAddToCart}
        />

        {/* 6. Pitch-Black Feature Showcase (كل فنجان له طريقته) */}
        <DarkShowcase
          onExploreTools={() => scrollToSection('tools')}
        />

        {/* 7. Brewing Tools Visual Categories (كل ما تحتاجه لتحضيرك اليومي) */}
        <BrewingToolsSection
          onNavigateToTools={() => scrollToSection('products')}
        />

        {/* 8. Roastery Craft & Story (القهوة أكثر من مجرد فنجان) */}
        <StorySection
          onOpenPhilosophyModal={() => setIsPhilosophyOpen(true)}
        />

        {/* 11. B2B Commercial Coffee Supply (قهوة لمشروعك أيضًا) */}
        <B2BSupplySection
          onOpenB2BModal={() => setIsB2BOpen(true)}
        />

        {/* 12. 3-Step Selection Guide (كيف تختار قهوتك؟) */}
        <BrewGuideSteps />

        {/* 13. FAQ Accordion (الأسئلة الشائعة) */}
        <FAQSection />

        {/* 14. Contact Channels (لديك سؤال عن قهوتك القادمة؟) */}
        <ContactSection />
      </main>

      {/* 15. Pitch-Black Luxury Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenPrivacy={() => setPolicyType('privacy')}
        onOpenTerms={() => setPolicyType('terms')}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onExploreHarvests={() => {
          setIsCartOpen(false);
          scrollToSection('harvests');
        }}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCartWithOptions={handleAddToCartWithOptions}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* B2B Commercial Inquiry Modal */}
      <B2BModal
        isOpen={isB2BOpen}
        onClose={() => setIsB2BOpen(false)}
      />

      {/* Roastery Philosophy Modal */}
      <PhilosophyModal
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
      />

      {/* Legal & Policy Modals */}
      <PolicyModal
        isOpen={!!policyType}
        onClose={() => setPolicyType(null)}
        type={policyType || 'privacy'}
      />
    </div>
  );
}
