// components/LoadingScreen.tsx
import Image from "next/image";

export default function LoadingScreen() {
	return (
		<section
			className="w-full h-screen flex items-center justify-center"
			style={{
				backgroundImage: "url('/BannerBG.webp')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: 9999,
				backdropFilter: "blur(5px)",
			}}>
			<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ">
				<Image
					src="/loader_perfume.png"
					alt="Attar loading..."
					width={60}
					height={60}
					className="animate-spin"
				/>
			</div>
		</section>
	);
}
