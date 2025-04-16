import Banner from "@/components/shared/Banner";
import Categories from "@/components/shared/Categories";
import Service from "@/components/shared/Services";

export default function Home() {
	return (
		<section>
			{/* Hero Banner (takes full screen height) */}
			<div className="relative w-full min-h-screen z-10">
				<Banner
					position="left"
					text="Unveil Your Elegance with Premium Arabic Perfumes."
				/>
			</div>

			{/* Categories below the banner */}
			<div className="relative z-20 bg-white py-10">
				<Categories />
				<Service />
			</div>
		</section>
	);
}
