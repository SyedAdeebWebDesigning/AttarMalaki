import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default: "bg-[#D12A5C] text-[#FFF1F4] shadow-xs hover:bg-[#B02550]", // Primary
				destructive: "bg-[#FF4D4D] text-white shadow-xs hover:bg-[#D93636]", // Red
				outline:
					"border border-[#CCCCCC] bg-[#FFFFFF] text-[#333] shadow-xs hover:bg-[#F5F5F5]", // Gray Outline
				secondary: "bg-[#6B7280] text-[#F9FAFB] shadow-xs hover:bg-[#4B5563]", // Gray Secondary
				ghost: "hover:bg-[#E5E7EB] hover:text-[#111827]", // Light Ghost
				link: "text-[#2563EB] underline-offset-4 hover:underline", // Blue Link
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-11 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
