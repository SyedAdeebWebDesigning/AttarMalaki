import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
	children: React.ReactNode;
	className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
	return (
		<>
			<h2 className={cn("text-2xl md:text-3xl m-4  font-semibold", className)}>
				{children}
			</h2>
		</>
	);
};

export default Heading;
