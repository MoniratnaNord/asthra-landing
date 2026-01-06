import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Market-Neutral Yield | Delta-Neutral Strategies on Arbitrum",
	description:
		"Deploy funds into automated delta-neutral strategies designed to capture funding and basis across all market conditions. Without trading. Without directional risk.",
	icons: {
		icon: [
			{
				url: "/logo_removed.png",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/logo_removed.png",
				media: "(prefers-color-scheme: dark)",
			},
		],
		apple: "/logo_removed.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${_geistMono.className} font-sans`}>{children}</body>
		</html>
	);
}
