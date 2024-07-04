import { Mina } from "next/font/google";
import { CarouselNext } from "@/components/carousel";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Question1() {
    return (
        <div className="h-[80dvh] w-full py-6 flex flex-col justify-between">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Unlock Your Home Buying Potential Today
                </h2>
                <h4 className={" text-xl xl:text-2xl"}>
                    Get pre-qualified for a home loan in under 3 minutes.*
                </h4>
                <h4 className={" text-xl xl:text-2xl"}>
                    No credit score impact.
                </h4>
            </div>

            <lord-icon
                src={"https://cdn.lordicon.com/khheayfj.json"}
                trigger="hover"
                colors="primary:#073944,secondary:#1560bd"
                class={"w-20 h-20 sm:w-28 sm:h-28 mx-auto"}
            />

            <div className="text-center">
                <CarouselNext className="bg-primary max-w-xs w-full text-white text-lg px-4 py-2 rounded-md shadow-md">
                    Get Started
                </CarouselNext>
            </div>
        </div>
    );
}
