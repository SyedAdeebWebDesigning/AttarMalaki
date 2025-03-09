import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
	return (
		<html lang="en">
			<head>
				<style>
					{`
            @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap");
            body {
              font-family: "Cairo", sans-serif;
              font-optical-sizing: auto;
            }
          `}
				</style>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
