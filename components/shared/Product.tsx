import { Product } from "@/typings";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

type Props = {
	product: Product;
	lowest: {
		price: number;
		discountPrice?: number;
	};
};

const ProductCard = ({ product, lowest }: Props) => {
	return (
		<Link href={`/product/${product.slug}`} prefetch>
			<Card
				key={product.id}
				className="overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col py-0 rounded cursor-pointer">
				<div className="aspect-square relative overflow-hidden">
					<Image
						src={product.image || "/placeholder.svg"}
						alt={product.name}
						fill
						loading="lazy"
						className="object-contain transition-transform duration-300"
					/>
				</div>
				<CardContent className="p-4 flex flex-col h-40">
					<div>
						<div className="flex items-center justify-between mb-2">
							<h3 className="font-semibold text-2xl">{product.name}</h3>
							<p className="font-bold text-xl mt-auto pt-2">
								{lowest.discountPrice && lowest.discountPrice > 0 ? (
									<>
										<span className="line-through text-muted-foreground mr-2 text-sm">
											{formatCurrency(lowest.price)}
										</span>
										<span>{formatCurrency(lowest.discountPrice)}</span>
									</>
								) : (
									<span>{formatCurrency(lowest.price)}</span>
								)}
							</p>
						</div>
						<p className="text-muted-foreground text-sm line-clamp-3 mt-1 text-justify">
							{product.description}
						</p>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

export default ProductCard;
