"use client";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const containerRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: containerRef.current!,
			smooth: true,
			lerp: 0.1,
			multiplier: 1,
			smartphone: {
				smooth: false,
			},
		});

		const resizeObserver = new ResizeObserver(() => {
			scroll.update();
		});
		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			scroll.destroy();
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, []);

	return (
		<div data-scroll-container ref={containerRef}>
			{children}
		</div>
	);
}
