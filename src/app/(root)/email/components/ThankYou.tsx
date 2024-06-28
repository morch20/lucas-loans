import { Mina } from "next/font/google";
import Link from "next/link";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function ThankYou() {
    return (
        <div className="w-full h-[90dvh] py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h1 className={mina.className + " text-4xl"}>Thank you!</h1>
                <h3 className="text-2xl mb-6">
                    Thank you for using our calculator!
                </h3>
                <lord-icon
                    src="https://cdn.lordicon.com/jjoolpwc.json"
                    trigger="hover"
                    colors="primary:#073944,secondary:#1560bd"
                    class="w-20 h-20 md:w-28 md:h-28"
                />
            </div>

            <div className="text-center">
                <p className="md:text-lg">We&apos;ll be in touch soon!</p>
            </div>

            <div className="flex items-center justify-around w-full max-w-sm">
                <Link
                    href={"/"}
                    className="bg-white text-black text-lg px-8 md:px-10 py-2 md:py-4 rounded-md hover:shadow-md"
                >
                    Back
                </Link>
            </div>
        </div>
    );
}
