import { DM_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Getlinked.AI Task",
	description: "Frontend assessment for Getlinked.AI app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${dm_sans.className} bg-[#F8F9FB]`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
