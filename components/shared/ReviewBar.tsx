"use client";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { AnimatedCircularProgressBar } from "../ui/animated-circular-progress-bar";

const ReviewBar = () => {
	const reviews = [
		{ rating: 5, count: 45 },
		{ rating: 4, count: 15 },
		{ rating: 3, count: 20 },
		{ rating: 2, count: 2 },
		{ rating: 1, count: 5 },
	];

	const totalReviews = reviews.reduce((acc, review) => acc + review.count, 0);
	const calculatePercentage = (rating: number) => {
		const count =
			reviews.find((review) => review.rating === rating)?.count || 0;
		return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
	};

	// Calculate the average rating
	const averageRating =
		(
			reviews.reduce((acc, review) => acc + review.rating * review.count, 0) /
			totalReviews
		).toFixed(1) || 0;

	return (
		<div className="flex flex-col sm:flex-row items-start justify-between mb-6 border-dashed border-2 rounded-xl p-10">
			{/* Review Rating Left */}
			<div className="flex items-start justify-start w-1/2">
				<AnimatedCircularProgressBar
					max={5}
					min={0}
					value={Number(averageRating)}
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
			{/* Review Rating Right */}
			<div className="w-full flex items-center sm:items-end flex-col gap-5 mt-10 sm:mt-0 pr-10">
				{reviews.map((review) => (
					<div
						className="flex justify-center w-full items-center sm:justify-end relative"
						key={review.rating}>
						<span className="text-xl text-gray-500 mr-2 flex items-center">
							{review.rating} <FaStar className="ml-2 size-5 text-[#FFA439]" />
						</span>
						<Progress
							value={calculatePercentage(review.rating)}
							className="sm:w-3/5"
							barClassName=""
						/>
						<p className="text-xl w-0 ml-2">{review.count}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReviewBar;

export const StarRating = ({ rating }: { rating: number }) => {
	const fullStars = Math.floor(rating); // 4
	const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75; // true if between .25 and .75
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // fill remaining stars

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
