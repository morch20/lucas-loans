import { Mina } from "next/font/google";
import Link from "next/link";
import { CarouselNext } from "@/components/carousel";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Question1({ HACValue }: { HACValue: string }) {
    return (
        <div className="h-[80dvh] w-full py-6 flex flex-col justify-between">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    You can afford a house up to this much:
                </h2>
                <h2 className="text-primary text-3xl font-semibold">
                    ${HACValue}
                </h2>
            </div>

            <div className="text-center">
                <h4 className={mina.className + " text-xl xl:text-2xl"}>
                    Get pre-approved!
                </h4>
                <CarouselNext className="bg-primary max-w-xs w-full text-white text-lg px-4 py-2 rounded-md shadow-md">
                    Next
                </CarouselNext>
            </div>

            <div className="text-center">
                <div>
                    <p>Didn&apos;t like what you saw?</p>
                    <p>
                        Change the numbers by going back{" "}
                        <Link href="/" className="text-blue-500">
                            here
                        </Link>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
