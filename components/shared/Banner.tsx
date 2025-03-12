import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TextReveal } from "@/components/magicui/text-reveal";

interface BannerProps {
	position: "left" | "right";
	text: string;
}

const Banner = (props: BannerProps) => {
	const position = props.position;
	const text = props.text;
	return (
		<div className="">
			<MaxWidthWrapper>
				<div
					className={`relative flex flex-col md:flex-row items-center justify-between   max-w-xl text-left ${
						position === "left" ? "mr-auto" : "ml-auto"
					}`}>
					<TextReveal className="mb-20">{text}</TextReveal>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Banner;
