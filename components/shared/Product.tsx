import { Product } from "@/typings";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

// ✅ Reuse one formatter instance instead of new Intl.NumberFormat each time
const currencyFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "INR",
});

// ✅ Helper for safe currency display
function formatCurrency(value: number) {
	return currencyFormatter.format(value);
}

type Props = {
	product: Product;
	lowest: {
		price: number;
		discountPrice?: number;
	};
};

const ProductCard = ({ product, lowest }: Props) => {
	// ✅ Ensure short description (avoid rendering full text then clamping with CSS)
	const shortDescription =
		product.description.length > 150
			? product.description.slice(0, 150) + "..."
			: product.description;

	return (
		<Link href={`/product/${product.slug}`} prefetch={false}>
			<Card className="overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col py-0 rounded cursor-pointer relative">
				{/* Image */}
				<div className="aspect-square relative overflow-hidden">
					<Image
						src={product.image || "/placeholder.svg"}
						alt={product.name}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						placeholder="blur"
						blurDataURL="/placeholder.svg"
						loading="lazy"
						className="object-contain transition-transform duration-300 hover:scale-105"
					/>
				</div>

				{/* Content */}
				<CardContent className="p-4 flex flex-col flex-grow">
					<div className="flex items-start justify-between gap-2">
						<h3 className="font-semibold text-lg line-clamp-1">
							{product.name}
						</h3>

						<p className="font-bold text-base shrink-0">
							{lowest.discountPrice && lowest.discountPrice > 0 ? (
								<>
									<span className="line-through text-muted-foreground mr-2 text-xs">
										{formatCurrency(lowest.price)}
									</span>
									<span>{formatCurrency(lowest.discountPrice)}</span>
								</>
							) : (
								<span>{formatCurrency(lowest.price)}</span>
							)}
						</p>
					</div>

					<p className="text-muted-foreground text-sm mt-2">
						{shortDescription}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ProductCard;

