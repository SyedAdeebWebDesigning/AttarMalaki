"use client";

import { useEffect } from "react";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import confetti from "canvas-confetti";

interface pageProps {}

const page = ({}: pageProps) => {
	useEffect(() => {
		const end = Date.now() + 3 * 1000; // 3 seconds
		const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

		const frame = () => {
			if (Date.now() > end) return;

			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors: colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors: colors,
			});

			requestAnimationFrame(frame);
		};

		frame();
	}, []);

	return (
		<section className="flex items-center justify-center h-screen bg-white py-20">
			<MaxWidthWrapper>
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<h2 className="text-4xl md:text-6xl font-extrabold text-[#2e3539] logoText">
						thank you for your purchase!
					</h2>
					<p className="text-lg text-gray-600 max-w-xl">
						We sincerely appreciate your order. Your fragrance will soon be on
						its way to elevate your senses.
					</p>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default page;
