"use client";

import { Mina } from "next/font/google";
import { useState } from "react";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function NoBoost({
    email,
    showVideo,
    number,
}: {
    email: string;
    showVideo: boolean;
    number: string;
}) {
    const [hideButton, setHideButton] = useState(false);
    const handleClick = () => {
        setHideButton(true);
        fetch(`/api/email?query=${email}`)
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };
    return (
        <div className="w-full min-h-[65dvh] py-4 flex flex-col gap-y-10 items-center justify-between ">
            <div className="text-center">
                <p className={" font-bold"}>You can afford up to:</p>
                <p className={" text-lg font-bold "}>{number}</p>
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Now you are pre-qualified
                </h2>
                <h2 className={mina.className + " text-2xl sm:text-3xl mb-4"}>
                    Finish to get the best rates guaranteed.
                </h2>
                <p className={"text-lg font-medium mb-4 "}>
                    You don&apos;t need to talk to a single lender or bank.
                    <span className="text-primary">
                        {" "}
                        We will give you the best options for you to pick.
                    </span>{" "}
                </p>
                {hideButton ? (
                    <p className="mt-6">
                        Thank you! Check your email and text messages.
                    </p>
                ) : (
                    <button
                        onClick={handleClick}
                        className="bg-primary max-w-xs text-white w-full py-3 rounded-lg mt-6"
                    >
                        Claim Now!
                    </button>
                )}
            </div>

            {showVideo && (
                <video
                    autoPlay
                    playsInline
                    controls
                    className="rounded shadow-md h-[12rem] md:h-[14rem] 2xl:h-[20rem] mx-auto bg-black"
                >
                    <source src="/noBoost.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
}
