import { getProductReviews } from "@/lib/actions/products/products.action";
import { Review } from "@/typings";
import Image from "next/image";

import { FaStar, FaRegStar } from "react-icons/fa";

interface ReviewListProps {
	productId: string;
}

const ReviewList = async ({ productId }: ReviewListProps) => {
	const reviews = (await getProductReviews(productId)) as Review[];

	return (
		<div className="border-dashed border-2 rounded-2xl w-full sm:w-1/2 max-h-[256px] min-h-[256px] p-6">
			<h2 className="text-xl font-semibold mb-4 ">Reviews</h2>
			<div className=" overflow-y-auto max-h-[180px]">
				{reviews.length > 0 ? (
					<div>
						{reviews.map((review, index) => (
							<div
								key={index}
								className="border-b border-gray-200 py-4 last:border-0">
								<div className="flex items-center justify-between mb-2">
									<div className="flex items-center justify-start gap-3">
										<Image
											src={review.user.imgUrl}
											alt={`${review.user.firstName} ${review.user.lastName}`}
											loading="lazy"
											width={40}
											height={40}
											className="rounded-full"
										/>
										<p className="flex flex-col items-start ">
											<span className="font-medium text-neutral-600 text-sm">
												{review.user.email}
											</span>
											<span className="font-normal text-lg">
												{review.user.firstName} {review.user.lastName}
											</span>
										</p>
									</div>
									<span className="text-[#FFA439] flex items-center gap-1">
										{Array.from({ length: 5 }, (_, i) =>
											i < review.rating ? (
												<FaStar key={i} />
											) : (
												<FaRegStar key={i} />
											)
										)}
									</span>
								</div>
								<p className="text-gray-600 mb-1 line-clamp-2">
									{review.comment}
								</p>
								<span className="text-sm text-gray-400">
									{new Date(review.createdAt).toLocaleDateString("en-IN")}
								</span>
							</div>
						))}
					</div>
				) : (
					<p className="text-gray-500 text-left">No reviews yet.</p>
				)}
			</div>
		</div>
	);
};

export default ReviewList;
