import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleTag from "@/components/GoogleTag";

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
            <body className="bg-[#eff4f7] text-tertiary w-full h-full flex flex-col items-center">
                <Navbar />
                <div className="container w-full h-full px-5 sm:px-7 overflow-x-clip">
                    {children}
                </div>
                <Footer />
                {/* <FacebookPixel /> */}
            </body>
            <head>
                <GoogleTag />
            </head>
        </html>
    );
}
