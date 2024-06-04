import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacebookPixel from "@/components/FacebookPixel";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
    title: "Lucas Loans",
    description:
        "Home Affordability Calculator. Find out how much house you can afford.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log("ENV: ", process.env.GOOGLE_TAG_MANAGER_ID);

    return (
        <html lang="en">
            <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ""} />
            <body className="bg-[#eff4f7] text-tertiary w-full h-full flex flex-col items-center">
                <Navbar />
                <div className="container w-full h-full px-5 sm:px-7 overflow-x-clip">
                    {children}
                </div>
                <Footer />
                <FacebookPixel />
            </body>
        </html>
    );
}
