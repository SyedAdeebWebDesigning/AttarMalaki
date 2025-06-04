"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

const BackButton = () => {
	const router = useRouter();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => router.back()}
			aria-label="Go back"
			className="p-2 hover:bg-gray-100 rounded-full transition-colors">
			<ArrowLeft className="w-5 h-5 text-black" />
		</Button>
	);
};

export default BackButton;
