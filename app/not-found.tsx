"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFoundPage() {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6">
			{/* Animated Text */}
			<motion.h1
				className="text-8xl font-bold text-primary"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				404
			</motion.h1>

			<p className="mt-4 text-lg text-muted-foreground">
				Oops! The page you’re looking for doesn’t exist.
			</p>

			{/* Animated Button */}
			<motion.div
				className="mt-6"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.2, duration: 0.3 }}>
				<Button
					onClick={() => router.push("/")}
					className="px-6 py-3 text-lg font-medium cursor-pointer">
					Go Home
				</Button>
			</motion.div>
		</div>
	);
}
