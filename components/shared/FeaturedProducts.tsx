import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { formatCurrency } from "@/lib/utils";
import { getBestSellers } from "@/lib/actions/products.action";
import AddToBag from "./AddToBag";

interface Product {
	id: string;
	name: string;
	description: string;
	image: string;
	quantities: {
		size: string;
		price: number;
		discountPrice?: number | null;
		stock: number;
	}[];
}

export async function FeaturedProducts() {
	const bestSellers = (await getBestSellers()) as any[];

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
								<Link href={`/product/${product.slug}`} key={product.id}>
									<Card className="overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col py-0 rounded cursor-pointer">
										<div className="aspect-square relative overflow-hidden">
											<Image
												src={product.image || "/placeholder.svg"}
												alt={product.name}
												fill
												loading="lazy"
												className="object-contain transition-transform duration-300"
											/>
										</div>
										<CardContent className="p-4 flex flex-col h-40">
											<div>
												<h3 className="font-semibold text-2xl">
													{product.name}
												</h3>
												<p className="text-muted-foreground text-sm line-clamp-3 mt-1 text-justify">
													{product.description}
												</p>
											</div>
											<p className="font-bold text-xl mt-auto pt-2">
												{lowest.discountPrice && lowest.discountPrice > 0 ? (
													<>
														<span className="line-through text-muted-foreground mr-2">
															{formatCurrency(lowest.price)}
														</span>
														<span>{formatCurrency(lowest.discountPrice)}</span>
													</>
												) : (
													<span>{formatCurrency(lowest.price)}</span>
												)}
											</p>
										</CardContent>
										<CardFooter className="p-4 pt-0 flex gap-2">
											<AddToBag />
											<Button variant="outline" asChild>
												<Link href={`/product/${product.slug}`}>View More</Link>
											</Button>
										</CardFooter>
									</Card>
								</Link>
							);
						})}
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
