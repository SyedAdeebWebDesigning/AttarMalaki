"use client";

import Image from "next/image";
import { buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerProps {
	position: "left" | "right";
	headline: string;
	tagline: string;
}

const Banner = ({ tagline }: BannerProps) => {
	return (
		<div className="relative w-full min-h-[93vh] flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
			{/* Background image using Next.js <Image /> */}
			<Image
				src="/BannerBG.webp"
				alt="Background"
				fill
				priority
				quality={90}
				className="object-cover object-center z-0"
			/>

			{/* Overlay for slight dark tint if needed (optional) */}
			<div className="absolute inset-0 bg-black/10 z-10" />

			{/* Actual content on top */}
			<MaxWidthWrapper>
				<section className="relative z-20 text-gray-600 body-font">
					<div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:py-24 gap-12">
						{/* Text Section */}
						<div className="flex-1 text-center md:text-left">
							<div className="relative w-[300px] h-[100px] mx-auto md:mx-0">
								<Image
									src="/logo/LogoBlack.svg"
									alt="Attar Malaki Logo"
									fill
									priority
									className="object-contain"
								/>
							</div>
							<p className="text-lg sm:text-3xl lg:text-5xl text-gray-700 mt-6 mb-8">
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
							<div className="relative w-[300px] md:w-[500px] lg:w-[500px] xl:w-[700px] aspect-square">
								<Image
									src="/BannerImage.webp"
									alt="Hero Perfume Image"
									fill
									priority
									className="object-cover object-center rounded"
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
