"use client";

import { useCarouselContext } from "@/components/carousel/Carousel";
import { Mina } from "next/font/google";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function TryAgain({
    number,
    showVideo,
}: {
    number: string;
    showVideo: boolean;
}) {
    const { dispatch } = useCarouselContext();

    const handleClick = () => {
        dispatch({ type: "resetToStart" });
    };
    return (
        <div className="w-full min-h-[65dvh] py-4 flex flex-col gap-y-10 items-center justify-between ">
            <div className="text-center">
                <p className={" font-bold"}>You can afford up to:</p>
                <p className={" text-lg font-bold "}>{number}</p>
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Does something seems off with your Results?
                </h2>
                <h2 className={mina.className + " text-2xl sm:text-3xl mb-4"}>
                    It might be a simple fix
                </h2>
                <p className={"text-lg font-medium mb-6"}>
                    Watch the video to find out how to improve your numbers.
                </p>

                <button
                    onClick={handleClick}
                    className="bg-primary max-w-xs text-white w-full py-3 rounded-lg mt-6"
                >
                    Go back
                </button>
            </div>
            {showVideo && (
                <video
                    autoPlay
                    playsInline
                    controls
                    className="rounded shadow-md h-[12rem] md:h-[14rem] 2xl:h-[20rem] mx-auto bg-black"
                >
                    <source src="/tryAgain.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}
