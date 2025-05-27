"use client";

import React from "react";
import Image from "next/image";
import {
	CheckCircle,
	Star,
	Droplet,
	Timer,
	Truck,
	FlaskConical,
} from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const services = [
	{
		icon: Droplet,
		title: "100% Pure Ingredients",
		desc: "Only the finest natural oils—no alcohol, no dilution.",
		bg: "bg-emerald-100",
		text: "text-emerald-600",
	},
	{
		icon: FlaskConical,
		title: "Crafted With Heritage",
		desc: "Traditional Arabian methods meet modern elegance.",
		bg: "bg-yellow-100",
		text: "text-yellow-600",
	},
	{
		icon: Timer,
		title: "Long-Lasting Aroma",
		desc: "One swipe keeps you scented all day.",
		bg: "bg-indigo-100",
		text: "text-indigo-600",
	},
	{
		icon: Truck,
		title: "Free & Fast Delivery",
		desc: "Free shipping on orders above ₹999. No delays.",
		bg: "bg-sky-100",
		text: "text-sky-600",
	},
	{
		icon: Star,
		title: "Premium Quality",
		desc: "Every bottle hand-checked for perfection.",
		bg: "bg-orange-100",
		text: "text-orange-600",
	},
	{
		icon: CheckCircle,
		title: "Satisfaction Guarantee",
		desc: "If you're not happy, neither are we—easy returns.",
		bg: "bg-lime-100",
		text: "text-lime-600",
	},
];

export default function Service() {
	return (
		<section className="w-full px-4 py-6 min-h-[45vh] relative overflow-hidden border-y border-gray-200">
			{/* Background Image as Next.js <Image> */}
			<div className="absolute inset-0 -z-10 w-full h-full">
				<Image
					src="/WhyChooseUs.webp"
					alt="Why Choose Us Background"
					fill
					className="object-cover object-center"
					priority={false} // false means lazy load, true means preload
					loading="lazy"
				/>
			</div>

			<div className="flex flex-col items-center mb-10 text-center relative z-10">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
				<p className="text-muted-foreground max-w-2xl">
					Experience the art of perfumery with pure ingredients, timeless
					craftsmanship, and unmatched quality—because you deserve nothing less.
				</p>
			</div>

			<MaxWidthWrapper>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
					{services.map((service, idx) => {
						const Icon = service.icon;
						return (
							<div
								key={idx}
								className="flex items-center gap-4 bg-white px-4 py-6 rounded-2xl shadow-md h-full">
								<div
									className={`p-3 rounded-full ${service.bg} ${service.text}`}>
									<Icon size={32} />
								</div>
								<div>
									<h3 className="text-lg font-semibold">{service.title}</h3>
									<p className="text-sm text-gray-600">{service.desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
