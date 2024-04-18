import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "react-redux";
//import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "KofeGap",
	description: "Kofegap ...",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{/*<Provider store={store}>*/}
				<AppRouterCacheProvider>
					<ThemeRegistry>{children}</ThemeRegistry>
				</AppRouterCacheProvider>
				{/*</Provider>*/}
			</body>
		</html>
	);
}
