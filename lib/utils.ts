import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(value: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
	}).format(value);
}

export const formatSize = (size: string): string => {
	switch (size) {
		case "ML_20":
			return "20 ml";
		case "ML_50":
			return "50 ml";
		case "ML_100":
			return "100 ml";
		default:
			return size;
	}
};
