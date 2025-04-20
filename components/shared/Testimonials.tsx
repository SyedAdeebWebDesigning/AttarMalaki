"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MaxWidthWrapper from "./MaxWidthWrapper";

// Types for our testimonials
interface Testimonial {
	id: number;
	name: string;
	role?: string;
	content: string;
	avatar?: string;
	rating: number;
}

// Sample testimonial data - replace with your actual testimonials
const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Regular Customer",
		content:
			"The fragrances from Attar Malaki are simply exquisite. I've been using their essential oils for years and the quality is consistently outstanding. Their attention to detail and commitment to traditional craftsmanship is evident in every product.",
		avatar: "/users_images/01.jpg",
		rating: 5,
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Aromatherapist",
		content:
			"As a professional aromatherapist, I'm very particular about the oils I use. Attar Malaki's products exceed my expectations every time. The purity and potency of their essential oils is unmatched in the industry.",
		avatar: "/users_images/02.jpg",
		rating: 5,
	},
	{
		id: 3,
		name: "Priya Sharma",
		role: "Wellness Coach",
		content:
			"I recommend Attar Malaki to all my clients. Their fragrances are not only beautiful but also ethically sourced. The customer service is exceptional, and they're always willing to help you find the perfect scent.",
		avatar: "/users_images/03.jpg",
		rating: 4,
	},
];

export function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [visibleCount, setVisibleCount] = useState(getVisibleCount());

	// Determine how many testimonials to show based on screen size
	function getVisibleCount() {
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 1280) return 3;
			if (window.innerWidth >= 768) return 2;
		}
		return 1;
	}

	// Update visible count on window resize
	if (typeof window !== "undefined") {
		window.addEventListener("resize", () => {
			setVisibleCount(getVisibleCount());
		});
	}

	// Navigation functions
	const nextTestimonial = () => {
		setActiveIndex((prev) =>
			prev + visibleCount >= testimonials.length ? 0 : prev + 1
		);
	};

	const prevTestimonial = () => {
		setActiveIndex((prev) =>
			prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
		);
	};

	// Generate star rating
	const StarRating = ({ rating }: { rating: number }) => {
		return (
			<div className="flex">
				{[...Array(5)].map((_, i) => (
					<svg
						key={i}
						className={cn(
							"h-4 w-4",
							i < rating
								? "text-amber-500 fill-amber-500"
								: "text-gray-300 fill-gray-300"
						)}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24">
						<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
					</svg>
				))}
			</div>
		);
	};

	// Get visible testimonials

	return (
		<section className="w-full py-12 bg-white">
			<MaxWidthWrapper>
				<div className="px-4">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-slate-900">
							Customer Reviews
						</h2>
						<p className="mt-2 text-slate-600 max-w-2xl mx-auto">
							Discover what our customers have to say about their experience
							with Attar Malaki's premium fragrances and essential oils.
						</p>
					</div>

					<div className="relative">
						{/* Testimonial Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{testimonials.map((testimonial) => (
								<Card
									key={testimonial.id}
									className="border border-slate-200 shadow-sm">
									<CardContent className="p-6">
										<Quote className="h-8 w-8 text-slate-300 mb-4" />
										<p className="text-slate-700 mb-6">{testimonial.content}</p>
										<div className="flex items-center">
											<Avatar className="h-10 w-10 mr-4">
												<AvatarImage
													src={testimonial.avatar || "/placeholder.svg"}
													alt={testimonial.name}
												/>
												<AvatarFallback>
													{testimonial.name.charAt(0)}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-medium text-slate-900">
													{testimonial.name}
												</p>
												{testimonial.role && (
													<p className="text-sm text-slate-500">
														{testimonial.role}
													</p>
												)}
												<StarRating rating={testimonial.rating} />
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
}
