"use client";

import { Mina } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Boost({
    streamLined,
    number,
    email,
}: {
    streamLined: boolean;
    number: string;
    email: string;
}) {
    const [hideButton, setHideButton] = useState(false);
    const handleClick = (action: string) => {
        setHideButton(true);
        // fetch(`/api/email?query=${email}&action=${action}`)
        //     .then((data) => data.json())
        //     .then((data) => console.log(data))
        //     .catch((error) => console.log(error));
    };
    return (
        <div className="w-full min-h-[65dvh] py-4 text-center space-y-10 flex flex-col items-center justify-around ">
            <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                {streamLined
                    ? "You are eligible for a streamline refinance!"
                    : "You are eligible!"}
            </h2>

            <lord-icon
                src="https://cdn.lordicon.com/kvuyljqb.json"
                trigger="loop"
                colors="primary:#073944,secondary:#1560bd"
                class="w-20 h-20 md:w-28 md:h-28"
            />

            <div>
                <p className=" font-medium text-xl mb-4">
                    Would you like to save{" "}
                    <span className="text-primary">${number}</span> per month?
                </p>
                {hideButton ? (
                    <p className="mt-6">
                        Thank you! Check your email and text messages.
                    </p>
                ) : (
                    <div className=" flex flex-col items-center gap-y-5  gap-x-10 justify-center">
                        <Link
                            href="/refinance"
                            className="bg-white max-w-xs shadow w-full py-3 rounded-lg mt-6"
                        >
                            No
                        </Link>
                        <button
                            id="app-send-email"
                            onClick={() => handleClick("app send email")}
                            className="bg-primary max-w-xs text-white w-full py-3 rounded-lg mt-6"
                        >
                            Yes
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
