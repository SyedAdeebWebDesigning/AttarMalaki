import ChatbotIframe from "@/components/ChatBot";
import { FaqSection } from "@/components/shared/Accordion";
import Banner from "@/components/shared/Banner";
import Categories from "@/components/shared/Categories";
import { FeaturedProducts } from "@/components/shared/FeaturedProducts";
import Service from "@/components/shared/Services";
import { Testimonials } from "@/components/shared/Testimonials";

export default function Home() {
	return (
		<section data-scroll-section>
			{/* Hero Banner (takes full screen height) */}
			<div className="relative w-full  z-10">
				<Banner
					position="left"
					text="Unveil Your Elegance with Premium Arabic Perfumes."
				/>
			</div>

			{/* Categories below the banner */}
			<div className="relative z-20 bg-white">
				<Categories />
				<FeaturedProducts />
				<Service />
				<Testimonials />
				<FaqSection />
			</div>
		</section>
	);
}
