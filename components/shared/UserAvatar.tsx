import { user } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { currentUser } from "@clerk/nextjs/server";

const UserAvatar = async () => {
	const _ = await currentUser();
	const user = (await getUserByClerkId(_?.id ?? "")) as user;
	return (
		<Avatar>
			<AvatarImage
				src={_?.imageUrl}
				className="object-cover rounded-full"
				alt={user.firstName}
			/>
			<AvatarFallback>
				{user.firstName[0]}
				{user.lastName[0]}
			</AvatarFallback>
		</Avatar>
	);
};

export default UserAvatar;
