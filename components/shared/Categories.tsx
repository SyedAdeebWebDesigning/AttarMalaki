// components/Categories.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
	{
		name: "Oudh",
		image: "/categories/oud.webp",
		href: "/products?category=oudh",
	},
	{
		name: "Musk",
		image: "/categories/musk.webp",
		href: "/products?category=musk",
	},
	{
		name: "Floral",
		image: "/categories/floral.webp",
		href: "/products?category=floral",
	},
	{
		name: "Fresh",
		image: "/categories/fresh.webp",
		href: "/products?category=fresh",
	},
	{
		name: "Woody",
		image: "/categories/woody.webp",
		href: "/products?category=woody",
	},
	{
		name: "Spicy",
		image: "/categories/spicy.webp",
		href: "/products?category=spicy",
	},
];

export default function Categories() {
	return (
		<section className="pb-12 bg-white">
			<div className="sticky top-[90px] z-[30] w-full">
				<h2 className="text-4xl  font-bold py-2 md:py-10 text-left bg-white w-full px-10">
					Shop by Category
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-10">
				{categories.map((cat) => (
					<Link href={cat.href} key={cat.name} className="w-full">
						<Card className="relative group w-full aspect-square overflow-hidden shadow-md py-0 rounded-none">
							<div className="relative w-full h-full group-hover:brightness-60 transition duration-200">
								<Image
									src={cat.image}
									alt={cat.name}
									fill
									className="object-cover ease-in-out"
								/>
							</div>

							<CardContent className="text-center text-white text-xl md:text-5xl font-semibold opacity-100 lg:opacity-0 group-hover:opacity-100 uppercase z-10 slide-up-on-hover text-shadow-black ">
								{cat.name}
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}
