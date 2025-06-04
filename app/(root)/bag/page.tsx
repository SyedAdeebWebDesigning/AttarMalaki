import { getUserBag } from "@/lib/actions/bag/bag.action";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { user } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
	const clerkUser = await currentUser();
	const userId = clerkUser.id;
	const user = (await getUserByClerkId(userId)) as user;
	const bag = await getUserBag(user.id);

	if (!bag || bag.length === 0) {
		return (
			<div className="flex items-center justify-center h-screen">
				<h1 className="text-2xl font-bold">Your bag is empty</h1>
			</div>
		);
	}

	return <div></div>;
};

export default page;
