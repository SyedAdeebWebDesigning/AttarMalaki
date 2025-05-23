import { Footer } from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollWrapper from "@/components/shared/ScrollWrapper";
import { getUserByClerkId } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { user } from "@prisma/client";

interface layoutProps {
	children: React.ReactNode;
}

const layout = async ({ children }: layoutProps) => {
	const _ = await currentUser();
	const user = (await getUserByClerkId(_?.id ?? "")) as user;

	return (
		<div>
			<NavBar user={user} />
			<div className="">{children}</div>
			<Footer />
		</div>
	);
};

export default layout;
