// AUTO-GENERATED FILE — DO NOT EDIT

export interface user {
  id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  imgUrl: string;
  hasCompletedAddresses: boolean;
  addresses: Address[];
  createdAt?: Date;
  updatedAt?: Date;
  Review: Review[];
  Wishlist: Wishlist[];
  Bag: Bag[];
  Order: Order[];
}

export interface Address {
  id: string;
  userId: string;
  user: user;
  label: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  isSelected: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  category: string;
  tags: string[];
  image: string;
  rating?: number;
  reviewsCount?: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  createdAt: Date;
  updatedAt: Date;
  Review: Review[];
  quantities: ProductQuantity[];
  Wishlist: Wishlist[];
  Bag: Bag[];
  OrderItem: OrderItem[];
}

export interface ProductQuantity {
  id: string;
  productId: string;
  product: Product;
  size: Size;
  price: number;
  discountPrice?: number;
  stock: number;
}

export interface Review {
  id: string;
  userId: string;
  user: user;
  productId: string;
  product: Product;
  rating: number;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Wishlist {
  id: string;
  userId: string;
  user: user;
  productId: string;
  product: Product;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Bag {
  id: string;
  userId: string;
  user: user;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  size: Size;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Order {
  id: string;
  userId: string;
  user: user;
  total: number;
  addressId: string;
  stripeSession: string;
  paymentMethodId: string;
  cardBrand: string;
  cardLast4: string;
  items: OrderItem[];
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  order: Order;
  productId: string;
  product: Product;
  quantity: number;
  size: Size;
  price: number;
}
