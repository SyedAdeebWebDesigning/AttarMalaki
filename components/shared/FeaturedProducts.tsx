import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
}

export function FeaturedProducts() {
	// This would typically come from your database or API
	const featuredProducts: Product[] = [
		{
			id: "1",
			name: "Royal Oud",
			description:
				"A rich, woody fragrance with notes of oud, sandalwood, and musk",
			price: 499.99,
			image: "/bestsellers/01.webp",
		},
		{
			id: "2",
			name: "Amber Rose",
			description: "A floral blend with amber and rose notes",
			price: 499.99,
			image: "/bestsellers/02.webp",
		},
		{
			id: "3",
			name: "Mystic Saffron",
			description: "An exotic blend with saffron, vanilla, and spices",
			price: 499.99,
			image: "/bestsellers/03.webp",
		},
		{
			id: "4",
			name: "Jasmine Dreams",
			description: "A delicate floral scent with jasmine and white musk",
			price: 499.99,
			image: "/bestsellers/04.webp",
		},
		{
			id: "5",
			name: "Cedar Spice",
			description: "A warm, spicy blend with cedar and cinnamon notes",
			price: 499.99,
			image: "/bestsellers/05.webp",
		},
		{
			id: "6",
			name: "Vanilla Musk",
			description: "A sweet, musky fragrance with vanilla and amber",
			price: 499.99,
			image: "/bestsellers/06.webp",
		},
	];

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
						{featuredProducts.map((product) => (
							<Card
								key={product.id}
								className="overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col py-0 rounded">
								<div className="aspect-square relative overflow-hidden">
									<Image
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										fill
										className="object-contain transition-transform duration-300 hover:scale-105"
									/>
								</div>
								<CardContent className="p-4 flex flex-col h-40">
									<div>
										<h3 className="font-semibold text-lg">
											{product.id}. {product.name}
										</h3>
										<p className="text-muted-foreground text-sm line-clamp-2 mt-1">
											{product.description}
										</p>
									</div>
									<p className="font-bold text-lg mt-auto pt-2">
										₹{product.price.toFixed(2)}
									</p>
								</CardContent>
								<CardFooter className="p-4 pt-0 flex gap-2">
									<Button className="">
										<ShoppingCart className="h-4 w-4 mr-2" />
										Add to Cart
									</Button>
									<Button variant="outline" asChild>
										<Link href={`/product/${product.id}`}>View More</Link>
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
