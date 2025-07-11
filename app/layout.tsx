import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Attar Malaki",
	description:
		"Attar Malaki is a distinguished purveyor of luxurious Arabian perfumes, harmoniously blending the rich traditions of Middle Eastern fragrance artistry with contemporary sophistication. Our mission is to offer scents that not only captivate the senses but also embody the essence of royalty and elegance.",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (process.env.IS_COMPROMISED === "true") {
		return (
			<div className="text-red-500 text-center min-h-screen items-center justify-center flex flex-col">
				<h1 className="text-2xl font-bold">Security Alert</h1>
				<p className="mt-4">
					This application has been compromised. Please contact support
					immediately.
				</p>
			</div>
		);
	}

	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: "bg-rose-700!",
					userButtonPopoverCard:
						"top-[100px]! fixed! z-[100] right-0 w-[300px] max-w-[300px] rounded-lg shadow-lg",
				},
			}}>
			<html lang="en" suppressHydrationWarning={true}>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
					<NextTopLoader color="pink" />
					<main className="overflow-x-hidden">
						<ToastContainer
							position="top-right"
							autoClose={1500}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick={false}
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
						/>
						<Suspense fallback={<LoadingScreen />}>{children}</Suspense>
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
