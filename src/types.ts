export type CategoryId = 'all' | 'beans' | 'espresso' | 'ground' | 'tools' | 'gifts';

export type GrindOption = 
  | 'حبوب كاملة' 
  | 'طحنة إسبريسو' 
  | 'طحنة فلتر V60' 
  | 'طحنة كيمكس' 
  | 'طحنة فرنش برس' 
  | 'طحنة قهوة باردة';

export type WeightOption = '250 جم' | '500 جم' | '1 كجم';

export interface Product {
  id: string;
  name: string;
  origin: string;
  category: CategoryId;
  categoryLabel: string;
  price: number; // in SAR
  weight: string; // default e.g. "250 جم"
  weightOptions?: WeightOption[];
  weightPriceMultipliers?: Record<WeightOption, number>;
  image: string;
  flavorNotes?: string[];
  altitude?: string;
  processing?: string;
  roastLevel?: string;
  description: string;
  brewMethods?: string[];
  isAvailable: boolean;
  featured?: boolean;
  badge?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedWeight: string;
  selectedGrind?: string;
  unitPrice: number;
}

export type TasteNoteTag = 
  | 'chocolate_nuts' 
  | 'fruits_bright' 
  | 'sweet_caramel' 
  | 'floral' 
  | 'espresso_ready' 
  | 'filter_ready';

export interface B2BInquiry {
  name: string;
  businessName: string;
  phone: string;
  businessType: string;
  estimatedVolume: string;
  notes: string;
}

export interface SubscriptionConfig {
  coffeePreference: string;
  quantity: string;
  frequency: string;
  grind: string;
}
