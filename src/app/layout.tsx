import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTag from "@/components/GoogleTag";
import GoogleTagAnalytics from "@/components/GoogleTagAnalytics";
import BackPageAnimation, {
    BackPageAnimationProvider,
} from "@/components/BackPageAnimation";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Lucas Loans",
    description:
        "Pre-approval Calculator. Find out how much house you can afford.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[#eff4f7] text-tertiary w-full h-full flex flex-col items-center">
                <Script src="https://cdn.lordicon.com/lordicon.js" />
                <BackPageAnimationProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <BackPageAnimation />
                </BackPageAnimationProvider>
                {/* <FacebookPixel /> */}
            </body>
            <head>
                <GoogleTag />
                <GoogleTagAnalytics />
            </head>
        </html>
    );
}
