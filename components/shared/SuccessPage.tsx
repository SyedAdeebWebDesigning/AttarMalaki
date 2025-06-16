"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import clsx from "clsx";
import { validateStripeSessionWithEmail } from "@/lib/actions/stripe/checkout";
import { useAuth } from "@clerk/nextjs";
import { toast } from "react-toastify";

const SuccessPage = () => {
	const router = useRouter();

	useEffect(() => {
		const end = Date.now() + 3 * 1000;
		const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

		const frame = () => {
			if (Date.now() > end) return;

			confetti({
				particleCount: 2,
				angle: 60,
				spread: 55,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors,
			});
			confetti({
				particleCount: 2,
				angle: 120,
				spread: 55,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors,
			});

			requestAnimationFrame(frame);
		};

		frame();
	}, []);

	return (
		<section className="flex items-center justify-center h-screen bg-white py-20">
			<div
				className={clsx(
					"flex flex-col items-center justify-center space-y-4 text-center max-w-xl mx-auto px-4 transition-all duration-700 ease-out"
				)}>
				<h2 className="text-4xl md:text-6xl font-extrabold text-[#2e3539] logoText">
					thank you for your purchase!
				</h2>
				<p className="text-lg text-gray-600">
					We sincerely appreciate your order. Your fragrance will soon be on its
					way to elevate your senses.
				</p>
			</div>
		</section>
	);
};

export default SuccessPage;
