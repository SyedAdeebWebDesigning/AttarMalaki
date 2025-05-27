import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { formatCurrency } from "@/lib/utils";
import { getBestSellers } from "@/lib/actions/products/getBestSellers";
import AddToBag from "./AddToBag";
import { Product } from "@/typings";
import ProductCard from "./Product";

export async function FeaturedProducts() {
	const bestSellers = (await getBestSellers()) as Product[];

	return (
		<section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
			<MaxWidthWrapper>
				<div className="">
					<div className="flex flex-col items-center mb-10 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Best Sellers
						</h2>
						<p className="text-muted-foreground max-w-2xl">
							Our most popular perfumes, loved by customers around the world for
							their exceptional quality and lasting fragrance.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{bestSellers.map((product) => {
							// Sort prices from lowest effective price
							const sortedQuantities = [...product.quantities].sort((a, b) => {
								const priceA =
									a.discountPrice && a.discountPrice > 0
										? a.discountPrice
										: a.price;
								const priceB =
									b.discountPrice && b.discountPrice > 0
										? b.discountPrice
										: b.price;
								return priceA - priceB;
							});
							const lowest = sortedQuantities[0];

							return (
								<ProductCard
									lowest={lowest}
									product={product}
									key={product.id}
								/>
							);
						})}
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
