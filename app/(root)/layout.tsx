import { Footer } from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { currentUser } from "@clerk/nextjs/server";
import { user } from "@prisma/client";

interface layoutProps {
	children: React.ReactNode;
}

const layout = async ({ children }: layoutProps) => {
	const clerkUser = await currentUser();
	const user = (await getUserByClerkId(clerkUser?.id ?? "")) as user;

	return (
		<div>
			<NavBar user={user} />
			<div className="">{children}</div>
			<Footer />
		</div>
	);
};

export default layout;
