import Banner from "@/components/shared/Banner";
import Categories from "@/components/shared/Categories";
import { FeaturedProducts } from "@/components/shared/FeaturedProducts";
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
			<div className="relative z-20 bg-white pb-10">
				<Categories />
				<Service />
				<FeaturedProducts />
			</div>
		</section>
	);
}
