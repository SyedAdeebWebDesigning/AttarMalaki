import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BannerProps {
	position: "left" | "right";
	text: string;
}

const Banner = (props: BannerProps) => {
	const { position, text } = props;

	return (
		<div className="bg-[#fff9f9] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 min-h-[90vh] flex items-center justify-center">
			<MaxWidthWrapper>
				<section className="text-gray-600 body-font">
					<div className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
						{/* Text Section */}
						<div className="flex-1 text-center md:text-left">
							<h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-6 text-gray-900 leading-tight">
								{text}
							</h1>
							<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
								<Link
									href={"/store"}
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
						<div className="flex-1 flex justify-center">
							<div className="relative w-52 sm:w-64 md:w-80 lg:w-96 xl:w-[700px] aspect-square">
								<Image
									className="object-cover object-center rounded"
									alt="hero"
									fill
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
