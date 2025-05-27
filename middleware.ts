import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
	"/sign-in(.*)",
	"/sign-up(.*)",
	"/",
	"/terms",
	"/privacy",
	"/shipping",
	"/api/webhooks/clerk",
	"/api/webhooks/stripe",
]);

const adminRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, request) => {
	if (adminRoute(request)) {
		// This is an admin route, so protect it and maybe check for admin role
		await auth.protect();

		// If you want to do role checking (pseudo-code)
		// const user = await auth.user();
		// if (!user.publicMetadata?.role || user.publicMetadata.role !== "admin") {
		//   throw new Response("Unauthorized", { status: 403 });
		// }
	} else if (!isPublicRoute(request)) {
		// For all other non-public routes, just protect normally
		await auth.protect();
	}
});

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
