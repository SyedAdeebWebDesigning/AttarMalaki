import NavBar from "@/components/shared/NavBar";

interface layoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
	return (
		<div>
			<NavBar />
			<main>{children}</main>
		</div>
	);
};

export default layout;
