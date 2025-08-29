"use client";

import Image from "next/image";
import { buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

interface BannerProps {
	position: "left" | "right";
	headline: string;
	tagline: string;
}

const Banner = ({ tagline }: BannerProps) => {
	return (
		<div className="relative w-full min-h-[93vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
			{/* Actual content on top */}
			<MaxWidthWrapper>
				<Image
					src="/BannerBG.webp"
					alt="Background"
					fill
					priority // ✅ replaces lazy load, forces preload
					fetchPriority="high" // ✅ HTML hint for modern browsers
					quality={90}
					className="object-cover object-center z-0"
				/>

				<section className="relative z-20 text-gray-600 body-font">
					<div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:py-24 gap-12">
						{/* Text Section */}
						<div className="flex-1 text-center md:text-left">
							<div className="relative mx-auto md:mx-0">
								<Logo className="text-center md:text-left text-4xl text-black" />
							</div>
							<p className="text-lg sm:text-3xl lg:text-[40px] leading-tight text-neutral-900 mb-8">
								{tagline}
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
								<Link
									href="/products"
									className={cn(buttonVariants({ size: "lg" }), "py-3")}>
									<span className="text-xl">Shop Now</span>
								</Link>
							</div>
						</div>

						{/* Foreground Hero Image */}
						<div className="flex-1 flex justify-center">
							<div className="relative w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] aspect-square">
								<Image
									src="/ProductBanner.webp"
									alt="Hero Perfume Image"
									fill
									priority
									className="object-contain object-center rounded"
								/>
							</div>
						</div>
					</div>
				</section>
			</MaxWidthWrapper>
		</div>
	);
};

export default Banner;
