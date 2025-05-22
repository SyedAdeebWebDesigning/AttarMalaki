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
