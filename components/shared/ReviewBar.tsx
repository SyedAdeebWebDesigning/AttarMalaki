"use client";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { AnimatedCircularProgressBar } from "../ui/animated-circular-progress-bar";
import { Review } from "@/typings";

const ReviewBar = ({ reviews }: { reviews: Review[] }) => {
	// Group reviews by rating
	const getReviewCounts = (reviews: Review[]) => {
		const reviewCount = [
			{ rating: 5, count: 0 },
			{ rating: 4, count: 0 },
			{ rating: 3, count: 0 },
			{ rating: 2, count: 0 },
			{ rating: 1, count: 0 },
		];

		reviews.forEach((review) => {
			const found = reviewCount.find((r) => r.rating === review.rating);
			if (found) found.count += 1;
		});

		return reviewCount;
	};

	const reviewSummary = getReviewCounts(reviews);

	const totalReviews = reviewSummary.reduce((acc, r) => acc + r.count, 0);

	const calculatePercentage = (count: number) =>
		totalReviews > 0 ? (count / totalReviews) * 100 : 0;

	const averageRating = (
		reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews
	).toFixed(1);

	return (
		<div className="flex flex-col sm:flex-row items-start justify-between mb-4 border-dashed border-2 rounded-xl p-10">
			{/* Left: Circular rating */}
			<div className="flex items-start justify-start w-1/2">
				<AnimatedCircularProgressBar
					max={5}
					min={0}
					value={Number(averageRating) || 0}
					gaugePrimaryColor="rgb(255 164 57)"
					gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
				/>
				<div className="flex flex-col items-start ml-4">
					<div className="text-gray-500 text-sm min-[969px]:text-xl mt-0">
						<StarRating rating={Number(averageRating)} />
						from {totalReviews} reviews
					</div>
				</div>
			</div>

			{/* Right: Review breakdown bars */}
			<div className="w-full flex items-center sm:items-end flex-col gap-5 mt-10 sm:mt-0 pr-10">
				{reviewSummary.map(({ rating, count }) => (
					<div
						className="flex justify-center w-full items-center sm:justify-end relative"
						key={rating}>
						<span className="text-xl text-gray-500 mr-2 flex items-center">
							{rating} <FaStar className="ml-2 size-5 text-[#FFA439]" />
						</span>
						<Progress value={calculatePercentage(count)} className="sm:w-3/5" />
						<p className="text-xl w-0 ml-2">{count}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReviewBar;

// Star rendering component
export const StarRating = ({ rating }: { rating: number }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	const stars = [];

	for (let i = 0; i < fullStars; i++) {
		stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
	}

	if (hasHalfStar) {
		stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
	}

	for (let i = 0; i < emptyStars; i++) {
		stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
	}

	return <div className="flex items-center gap-1">{stars}</div>;
};
