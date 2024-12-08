import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Streaming Analytics Dashboard",
	description: "Real-time analytics for multi-platform streaming services",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				enableSystem={false}
				storageKey="streaming-theme"
			>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					{children}
				</body>
			</ThemeProvider>
		</html>
	);
}
