import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TextReveal } from "@/components/magicui/text-reveal";

const Banner = () => {
	return (
		<div className="">
			<MaxWidthWrapper>
				<div className="relative flex flex-col md:flex-row items-center justify-between max-w-xl">
					<TextReveal className="">
						Unveil Your Elegance with Premium Arabic Perfumes.
					</TextReveal>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Banner;
