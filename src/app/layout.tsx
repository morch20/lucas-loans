import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackPageAnimation, {
    BackPageAnimationProvider,
} from "@/components/BackPageAnimation";
import Script from "next/script";
import GoogleTagManager from "@/components/GoogleTagManager";
import GoogleTag from "@/components/GoogleTag";

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
            <head>
                <GoogleTagManager />
                <GoogleTag />
                {/* <GoogleTagAnalytics /> */}

                {/* Reviews.io */}
                <Script src="https://widget.reviews.io/carousel-inline-iframeless/dist.js?_t=2024092420" />
                <Script src="https://widget.reviews.io/badge-ribbon/dist.js" />
                <link
                    rel="stylesheet"
                    href="https://assets.reviews.io/css/widgets/carousel-widget.css?_t=2024092420"
                />
                <link
                    rel="stylesheet"
                    href="https://assets.reviews.io/iconfont/reviewsio-icons/style.css?_t=2024092420"
                />
                {/* End of Reviews.io */}
            </head>
            <body className="bg-[#eff4f7] text-tertiary w-full h-full flex flex-col items-center">
                {/* Google Tag Manager */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MJX7VCVH"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>

                <Script src="https://cdn.lordicon.com/lordicon.js" />
                <BackPageAnimationProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <BackPageAnimation />
                </BackPageAnimationProvider>
                {/* <FacebookPixel /> */}
                <Script src="/scripts/reviewsIO.js" />
            </body>
        </html>
    );
}
