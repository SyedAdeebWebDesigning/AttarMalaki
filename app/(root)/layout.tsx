import LoadingScreen from "@/components/LoadingScreen";
import { Footer } from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { Suspense } from "react";

interface layoutProps {
	children: React.ReactNode;
}

const layout = async ({ children }: layoutProps) => {
	return (
		<div>
			<NavBar />
			<div className="">
				<Suspense fallback={<LoadingScreen />}>{children}</Suspense>
			</div>
			<Footer />
		</div>
	);
};

export default layout;
