import UsersTable from "@/components/shared/UsersTable";
import { getUsersWithAddress } from "@/lib/actions/user.action";

interface pageProps {}

const page = async ({}: pageProps) => {
	const users = await getUsersWithAddress();
	return (
		<section>
			<UsersTable users={users} />
		</section>
	);
};

export default page;
