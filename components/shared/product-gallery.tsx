"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
	images: string;
	productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
	const [mainImage, setMainImage] = useState(images[0]);

	return (
		<div className="space-y-4">
			{/* Main Image */}
			<div className="relative aspect-square overflow-hidden rounded-lg border border-slate-200 bg-white">
				<Image
					src={mainImage || "/placeholder.svg"}
					alt={productName}
					fill
					className="object-cover object-center"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
				/>
			</div>
		</div>
	);
}
