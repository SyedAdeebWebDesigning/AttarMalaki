import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import { Amita } from "next/font/google";
import Link from "next/link";

const amita = Amita({
	subsets: ["latin"],
	weight: ["400", "700"],
	display: "swap",
});

interface PageProps {
	className?: string;
	isLink?: boolean;
	href?: string;
}

const Logo = ({ className, isLink, href }: PageProps) => {
	return (
		<>
			{isLink ? (
				<Link
					href={href ?? "/"}
					className={cn(
						"flex h-[50px] items-center justify-center md:justify-start object-contain object-left mr-2 text-4xl mt-1 font-[600] relative",
						amita.className,
						className
					)}>
					<p className="mt-2">Attar</p>
					<Image
						src={"/svg/AttarIcon.svg"}
						width={40}
						height={40}
						alt=""
						className="-mr-1 -ml-1 "
					/>
					<p className="mt-2">Malaki</p>
				</Link>
			) : (
				<div
					className={cn(
						"flex h-[50px] items-center justify-center md:justify-start object-contain object-left mr-2 text-4xl mt-1 font-[600] relative",
						amita.className,
						className
					)}>
					<p className="mt-2">Attar</p>
					<Image
						src={"/svg/AttarIcon.svg"}
						width={40}
						height={40}
						alt=""
						className="-mr-1 -ml-1 "
					/>
					<p className="mt-2">Malaki</p>
				</div>
			)}
		</>
	);
};

export default Logo;
