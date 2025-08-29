"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";

const categories = [
	{
		name: "Oudh",
		title: "Rich & Resinous",
		subtitle: "Explore deep, woody aromas",
		icon: "/categories/icons/oudh.webp",
		bg: "/categories/background/oudh.webp",
		href: "/products?page=1&category=oud",
	},
	{
		name: "Musk",
		title: "Soft & Sensual",
		subtitle: "Gentle whispers of warmth",
		icon: "/categories/icons/musk.webp",
		bg: "/categories/background/musk.webp",
		href: "/products?page=1&category=musk",
	},
	{
		name: "Floral",
		title: "Elegant & Fresh",
		subtitle: "Blossoms in every drop",
		icon: "/categories/icons/floral.webp",
		bg: "/categories/background/floral.webp",
		href: "/products?page=1&category=floral",
	},
	{
		name: "Fresh",
		title: "Clean & Zesty",
		subtitle: "Scents that spark energy",
		icon: "/categories/icons/fresh.webp",
		bg: "/categories/background/fresh.webp",
		href: "/products?page=1&category=fresh",
	},
	{
		name: "Woody",
		title: "Earthy & Bold",
		subtitle: "Forest vibes, bottled",
		icon: "/categories/icons/woody.webp",
		bg: "/categories/background/woody.webp",
		href: "/products?page=1&category=woody",
	},
	{
		name: "Spicy",
		title: "Warm & Exotic",
		subtitle: "Sparks a fiery presence",
		icon: "/categories/icons/spicy.webp",
		bg: "/categories/background/spicy.webp",
		href: "/products?page=1&category=spicy",
	},
];

export default function Categories() {
	return (
		<MaxWidthWrapper>
			<section className="pb-12 bg-white">
				<div className="flex flex-col items-center text-center">
					<h2 className="text-3xl md:text-4xl font-bold mt-10">
						Shop by Category
					</h2>
					<p className="text-muted-foreground max-w-2xl mt-4 mb-10">
						Explore our curated collections—from luxurious ouds to refreshing
						florals. Find your signature scent with ease.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
					{categories.map((cat, idx) => (
						<Link href={cat.href} key={cat.name}>
							<Card
								className="flex items-center bg-cover bg-center h-[6rem] relative overflow-hidden"
								style={{ backgroundImage: `url(${cat.bg})` }}>
								<div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

								<div className="relative z-10 flex items-center w-full h-full">
									{/* Icon Side */}
									<div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex items-center justify-center mx-2">
										<Image
											src={cat.icon}
											alt={cat.name}
											width={96}
											height={96}
											loading="lazy"
											className={cn(
												"w-full h-full",
												idx === 0
													? "p-4"
													: idx === 1
													? "p-1"
													: idx === 2
													? "p-2"
													: idx === 3
													? "p-3"
													: idx === 4
													? "p-3"
													: "p-2"
											)}
										/>
									</div>

									{/* Text Side */}
									<div className="">
										<h3 className="text-lg md:text-xl font-bold text-black">
											{cat.name}
										</h3>
										<p className="text-sm md:text-base text-muted-foreground">
											{cat.subtitle}
										</p>
									</div>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</section>
		</MaxWidthWrapper>
	);
}
