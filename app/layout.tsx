import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shrika Dayal | AI & Business Enthusiast",
	description:
		"Hello! I am Shrika Dayal — an AI Enthusiast,  geek, and Business + Tech Enthusiast passionate about building modern digital experiences, scalable systems, and impactful ideas at the intersection of technology, strategy, and innovation.",
	openGraph: {
		type: "website",
		title: "Shrika Dayal | AI & Business Enthusiast",
		description:
			"Portfolio of Shrika Dayal — exploring AI,  , business strategy, branding, and modern technology through ambitious and impactful digital experiences.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Shrika Dayal | AI & Business Enthusiast",
		description:
			"Explore Shrika Dayal’s portfolio — AI Enthusiast,    geek, and Business + Tech Enthusiast focused on innovation, strategy, and scalable digital systems.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased overflow-x-hidden">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}