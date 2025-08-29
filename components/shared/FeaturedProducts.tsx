import MaxWidthWrapper from "./MaxWidthWrapper";
import { getBestSellers } from "@/lib/actions/products/getBestSellers";
import { Product } from "@/typings";
import ProductCard from "./Product";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

export const revalidate = 3600; // ISR: cache results for 1h

export function FeaturedProducts() {
	return (
		<section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
			<MaxWidthWrapper>
				<div>
					<div className="flex flex-col items-center mb-10 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Best Sellers
						</h2>
						<p className="text-muted-foreground max-w-2xl">
							Our most popular perfumes, loved by customers around the world for
							their exceptional quality and lasting fragrance.
						</p>
					</div>
					<Suspense fallback={<ProductsSkeleton />}>
						<RenderProducts />
					</Suspense>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}

async function RenderProducts() {
	const bestSellers = (await getBestSellers()) as Product[];
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{bestSellers.map((product) => {
				const lowest = product.quantities.reduce((min, q) => {
					const qPrice =
						q.discountPrice && q.discountPrice > 0 ? q.discountPrice : q.price;
					const minPrice =
						min.discountPrice && min.discountPrice > 0
							? min.discountPrice
							: min.price;
					return qPrice < minPrice ? q : min;
				}, product.quantities[0]);

				return (
					<ProductCard key={product.id} product={product} lowest={lowest} />
				);
			})}
		</div>
	);
}

const ProductCardSkeleton = () => (
	<Card className="overflow-hidden transition-all duration-200 flex flex-col py-0 rounded relative">
		<div className="aspect-square relative overflow-hidden">
			<Skeleton className="w-full h-full" />
		</div>
		<CardContent className="p-4 flex flex-col flex-grow">
			<div className="flex items-start justify-between gap-2">
				<Skeleton className="h-6 w-3/4 rounded" />
				<Skeleton className="h-5 w-16 rounded" />
			</div>
			<div className="mt-2 space-y-2">
				<Skeleton className="h-4 w-full rounded" />
				<Skeleton className="h-4 w-5/6 rounded" />
				<Skeleton className="h-4 w-2/3 rounded" />
			</div>
		</CardContent>
	</Card>
);

export const ProductsSkeleton = () => (
	<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{Array.from({ length: 6 }).map((_, i) => (
			<ProductCardSkeleton key={i} />
		))}
	</div>
);
