"use client";

import { Mina } from "next/font/google";
import { useState } from "react";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Boost({
    amount,
    number,
    email,
    showVideo,
}: {
    amount: number;
    number: string;
    email: string;
    showVideo: boolean;
}) {
    const [hideButton, setHideButton] = useState(false);
    const handleClick = (action: string) => {
        setHideButton(true);
        fetch(`/api/email?query=${email}&action=${action}`)
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };
    return (
        <div className="w-full min-h-[65dvh] py-4 flex flex-col gap-y-10 items-center justify-between ">
            <div className="text-center ">
                <p className={" font-bold"}>You can afford up to:</p>
                <p className={" text-lg font-bold "}>{number}</p>
                <h2
                    className={
                        mina.className + " text-primary text-2xl sm:text-3xl"
                    }
                >
                    You just got Pre-Qualified!
                </h2>
                <h2 className={mina.className + " text-2xl sm:text-3xl mb-4"}>
                    How would you like to get your $23,435 towards closing cost?
                </h2>
                {/* <p className={"text-lg font-medium mb-4 "}>
                    <span className="text-primary">
                        You can buy a home with no money out of pocket!
                    </span>{" "}
                    If you don&apos;t believe me, watch the video.
                </p>
                <p className={" text-lg font-medium "}>
                    Limited time offer we only have:{" "}
                </p>
                <p className={" text-lg font-medium text-red-500 "}>
                    {amount} spots left
                </p> */}
                {hideButton ? (
                    <p className="mt-6">
                        Thank you! Check your email and text messages.
                    </p>
                ) : (
                    <div className=" flex flex-col items-center gap-y-5  gap-x-10 justify-center">
                        <button
                            id="app-send-text"
                            onClick={() => handleClick("app send text")}
                            className="bg-white max-w-xs shadow w-full py-3 rounded-lg mt-6"
                        >
                            By text
                        </button>
                        <button
                            id="app-send-email"
                            onClick={() => handleClick("app send email")}
                            className="bg-primary max-w-xs text-white w-full py-3 rounded-lg mt-6"
                        >
                            By email
                        </button>
                    </div>
                )}
            </div>

            {/* {showVideo && (
                <video
                    autoPlay
                    playsInline
                    controls
                    className="rounded shadow-md h-[12rem] md:h-[14rem] 2xl:h-[20rem] mx-auto bg-black"
                >
                    <source src="/boost.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )} */}
        </div>
    );
}
