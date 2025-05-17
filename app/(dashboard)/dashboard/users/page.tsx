import Heading from "@/components/shared/Heading";
import UsersTable from "@/components/shared/UsersTable";
import { getUsersWithAddress } from "@/lib/actions/user.action";

interface pageProps {}

const page = async ({}: pageProps) => {
	const users = await getUsersWithAddress();

	if (typeof users === "undefined") {
		return (
			<section>
				<Heading>Users</Heading>
				<div className="flex flex-col items-center justify-center w-full h-full">
					<p className="text-3xl">No users found</p>
				</div>
			</section>
		);
	}
	return (
		<section>
			<Heading>Users</Heading>
			<UsersTable users={users} />
		</section>
	);
};

export default page;
