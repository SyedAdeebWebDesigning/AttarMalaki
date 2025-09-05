import Heading from "@/components/shared/Heading";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProductCard from "@/components/shared/Product";
import { ProductDetails } from "@/components/shared/ProductDetails";
import ReviewBar from "@/components/shared/ReviewBar";
import ReviewForm from "@/components/shared/ReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/actions/products/getProductBySlug";
import {
	getProductReviews,
	getRelatedProducts,
} from "@/lib/actions/products/products.action";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { checkWishlist } from "@/lib/actions/wishlist/checkWishlist.action";
import { Product, user } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { ProductCardSkeleton } from "@/components/shared/ProductSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Page = ({ params }) => {
	return (
		<section className="">
			<Suspense fallback={<ProductDetailsSkeleton />}>
				<RenderProduct slug={params.slug} />
			</Suspense>
		</section>
	);
};

export default Page;

async function RenderProduct({ slug }: { slug: string }) {
	const product = (await getProductBySlug(slug)) as Product | null;
	if (!product) return <MaxWidthWrapper>Product not found</MaxWidthWrapper>;

	const authUser = await currentUser();
	const userClerkId = authUser?.id;
	const user = userClerkId
		? ((await getUserByClerkId(userClerkId)) as user)
		: null;
	const userId = user?.id ?? null;

	const [rawRelatedProducts, productReviews] = await Promise.all([
		getRelatedProducts(product.category, product.id),
		getProductReviews(product.id),
	]);

	// Map rawRelatedProducts to ensure all Product properties exist
	const relatedProducts: Product[] = rawRelatedProducts.map((p: any) => ({
		...p,
		Review: p.Review ?? [],
		quantities: p.quantities ?? [],
		Wishlist: p.Wishlist ?? [],
		Bag: p.Bag ?? [],
		OrderItem: p.OrderItem ?? [],
	}));

	const wishlistItem = userId ? await checkWishlist(userId, product.id) : null;

	return (
		<MaxWidthWrapper>
			{/* Product Section */}
			<section>
				<ProductDetails
					product={product}
					userId={userId}
					wishlist={wishlistItem}
				/>
			</section>

			<Separator className="mx-auto" />

			{/* Related Products */}
			<section className="py-10">
				<Heading className="my-10 text-left">Related Products</Heading>
				<Suspense fallback={<RelatedProductsSkeleton />}>
					<RelatedProducts relatedProducts={relatedProducts} />
				</Suspense>
			</section>

			<Separator className="mx-auto" />

			{/* Reviews */}
			<section className="py-10">
				<Heading className="my-10 mx-0">Product Reviews</Heading>

				<ReviewBar
					reviews={productReviews.map((review: any) => ({
						id: review.id ?? "",
						userId: review.userId ?? review.user?.id ?? "",
						productId: review.productId ?? product.id,
						product: review.product ?? product,
						rating: review.rating,
						createdAt: review.createdAt,
						user: review.user,
						comment: review.comment,
					}))}
				/>

				<div className="flex flex-col sm:flex-row items-start justify-start gap-5 mt-8">
					{userId ? (
						<ReviewForm userId={userId} productId={product.id} />
					) : (
						<p className="text-sm text-gray-500">
							Please sign in to leave a review.
						</p>
					)}
					<ReviewList productId={product.id} />
				</div>
			</section>
		</MaxWidthWrapper>
	);
}

function RelatedProducts({ relatedProducts }: { relatedProducts: Product[] }) {
	if (!relatedProducts?.length) {
		return <p className="text-sm text-gray-500">No related products found.</p>;
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{relatedProducts.map((product) => {
				const sortedQuantities = [...product.quantities].sort((a, b) => {
					const priceA =
						a.discountPrice && a.discountPrice > 0 ? a.discountPrice : a.price;
					const priceB =
						b.discountPrice && b.discountPrice > 0 ? b.discountPrice : b.price;
					return priceA - priceB;
				});
				const lowest = sortedQuantities[0];
				return (
					<ProductCard key={product.id} lowest={lowest} product={product} />
				);
			})}
		</div>
	);
}

/* ---------------- Skeletons ---------------- */

function ProductDetailsSkeleton() {
	return (
		<MaxWidthWrapper>
			<section className="text-gray-600 body-font overflow-hidden pt-20">
				<div className="container px-5 py-24 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Left: Product Image */}
						<div className="w-full aspect-square relative overflow-hidden rounded-lg">
							<Skeleton className="size-[596px] rounded-lg " />
						</div>
						{/* Right: Product Info */}
						<div className="flex flex-col gap-4">
							<Skeleton className="h-4 w-32" /> {/* category */}
							<Skeleton className="h-8 w-3/4" /> {/* product name */}
							<Skeleton className="h-20 w-full" /> {/* description */}
							<Skeleton className="h-4 w-16" /> {/* tags label */}
							<div className="flex flex-wrap gap-2">
								{Array.from({ length: 3 }).map((_, i) => (
									<Skeleton key={i} className="h-6 w-16 rounded-full " />
								))}
							</div>
							{/* Variant Buttons */}
							<div className="my-6 flex flex-wrap gap-3">
								{Array.from({ length: 3 }).map((_, i) => (
									<Skeleton key={i} className="h-10 w-20 rounded-md" />
								))}
							</div>
							{/* Price and Stock */}
							<div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
								<div>
									<Skeleton className="h-6 w-24 mb-2" /> {/* price */}
									<Skeleton className="h-4 w-32" /> {/* stock info */}
								</div>
								{/* Quantity Controls */}
								<div className="flex items-center gap-4 w-full">
									<div className="flex items-center justify-between rounded w-32 h-12 px-2 gap-2">
										<Skeleton className="h-10 w-10 rounded-full" />
										<Skeleton className="h-6 w-6" />
										<Skeleton className="h-10 w-10 rounded-full" />
									</div>
									{/* Add to Bag */}
									<Skeleton className="h-12 w-full rounded-md" />
								</div>
								{/* Wishlist */}
								<Skeleton className="h-12 w-12 rounded-full" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</MaxWidthWrapper>
	);
}

function RelatedProductsSkeleton() {
	return (
		<MaxWidthWrapper>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{Array.from({ length: 4 }).map((_, i) => (
					<ProductCardSkeleton key={i} />
				))}
			</div>
		</MaxWidthWrapper>
	);
}
