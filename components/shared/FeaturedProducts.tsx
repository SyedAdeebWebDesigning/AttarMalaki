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
			name: "Shanaya",
			description:
				"A scent of passion and power. Shanaya blends rich florals with warm oriental spices, bottled in ruby red glass and crowned with gold. It’s sensual, bold, and unforgettable—just like the woman who wears it.",
			price: 899.99,
			image: "/bestsellers/01.webp",
		},
		{
			id: "2",
			name: "Soraya",
			description:
				"Celestial elegance captured in a bottle. Soraya shimmers with notes of violet, musk, and moonlit florals, echoing starlit Arabian nights. For those who move with mystery and grace.",
			price: 1299.99,
			image: "/bestsellers/02.webp",
		},
		{
			id: "3",
			name: "White Oud",
			description:
				"A softer side of royalty. White Oud is a clean, creamy twist on the legendary oud—balanced with white florals and smooth sandalwood. Subtle yet powerful, for those who rule quietly.",
			price: 999.99,
			image: "/bestsellers/03.webp",
		},
		{
			id: "4",
			name: "Veloura",
			description:
				"Veloura is a sultry embrace of Damask rose, saffron, and amber musk, layered with hints of plum and patchouli. It feels like silk on skin — bold yet delicate. Think twilight in a royal garden, wrapped in velvet shadows.",
			price: 1099.99,
			image: "/bestsellers/04.webp",
		},
		{
			id: "5",
			name: "Aurumé",
			description:
				"A golden fusion of warm amber, white oud, and a whisper of spiced vanilla, Aurumé is liquid opulence. It evokes desert sunsets, ancient wealth, and a touch of modern mystique. Rich but not loud. Royal but not arrogant.",
			price: 1199.99,
			image: "/bestsellers/05.webp",
		},
		{
			id: "6",
			name: "Thalara",
			description:
				"Thalara is a haunting blend of marine amber, smoked oud, and green fig, grounded in notes of cedarwood and black salt. It opens fresh, like a midnight sea breeze, and settles into something ancient and magnetic. It's not a perfume — it's a presence. One whiff and you're transported to a forgotten coastal palace at the edge of the world.",
			price: 1499.99,
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
										<h3 className="font-semibold text-xl ">{product.name}</h3>
										<p className="text-muted-foreground text-sm line-clamp-4 mt-1 text-justify">
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
