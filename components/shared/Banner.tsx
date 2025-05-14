import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerProps {
	position: "left" | "right";
	headline: string;
	tagline: string;
}

const Banner = (props: BannerProps) => {
	const { tagline } = props;

	return (
		<div className="bannerBG px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-[93vh] flex items-center justify-center w-full">
			<MaxWidthWrapper>
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:py-24">
						{/* Text Section */}
						<div className="flex-1 text-center md:text-left">
							<div className="flex items-center relative w-[300px] h-[100px] justify-center mx-auto md:mx-0">
								<Image
									src="/logo/LogoBlack.svg"
									alt="Attar Malaki Logo"
									fill
									priority
									className="object-contain flex items-center justify-center mx-auto"
								/>
							</div>
							<p className="text-lg sm:text-3xl lg:text-5xl text-gray-700 mb-8 text-center md:text-left">
								{tagline}
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
								<Link
									href={"/products"}
									className={cn(
										"py-3",
										buttonVariants({
											size: "lg",
										})
									)}>
									<p className="text-xl">Shop Now</p>
								</Link>
							</div>
						</div>

						{/* Image Section */}
						<div className="flex-1 flex justify-center overflow-hidden">
							<div className="relative w-[300px] md:w-[500px] lg:w-[500px] xl:w-[700px] aspect-square">
								<Image
									className="object-cover object-center rounded "
									alt="hero"
									fill
									priority
									src="/BannerImage.webp"
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

// testing
