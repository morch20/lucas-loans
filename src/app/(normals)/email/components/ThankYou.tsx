"use client";

import { useCarouselContext } from "@/components/carousel/Carousel";
import { calculate } from "@/utils/functions";
import { Mina } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function ThankYou() {
    const { state, dispatch } = useCarouselContext();
    const [number, setNumber] = useState("0");

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "15",
            validation: () => true,
            validationValues: number,
        });
    }, []);

    useEffect(() => {
        const monthlyIncome = Number(
            state.keys[0]?.validationValues.split(",").join("")
        );
        const monthlyDebt = Number(
            state.keys[1]?.validationValues.split(",").join("")
        );
        const downPayment = Number(
            state.keys[3]?.validationValues.split(",").join("")
        );
        console.log(state);
        setNumber(
            calculate(monthlyIncome, monthlyDebt, downPayment).toLocaleString()
        );
    }, [state]);

    return (
        <div className="w-full h-[90dvh] py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    You can afford up to:
                </h2>
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    {number}
                </h2>
                {/* <h3 className="text-xl sm:text-2xl mb-6">
                    Thank you for using our calculator!
                </h3> */}
                <p
                    className={
                        "text-sm lg:text-base xl:text-lg mx-auto xl:w-3/4 "
                    }
                >
                    We are going to make our partners compete for your home
                    purchase to get you the best rate possible.
                </p>
            </div>

            <div className="flex flex-col items-center gap-y-2 w-full max-w-sm">
                <p
                    className={
                        "text-sm lg:text-base 2xl:text-lg mx-auto xl:w-3/4 text-center "
                    }
                >
                    We will be in touch with your shortly. Call us now with any
                    questions:
                </p>
                <p
                    className={
                        "text-sm lg:text-base 2xl:text-lg mx-auto xl:w-3/4 text-center text-primary "
                    }
                >
                    (833)-954-1998
                </p>

                {/* <lord-icon
                    src="https://cdn.lordicon.com/jjoolpwc.json"
                    trigger="hover"
                    colors="primary:#073944,secondary:#1560bd"
                    class="w-20 h-20 2xl:w-28 2xl:h-28"
                /> */}
            </div>

            <div className="flex flex-col items-center gap-y-2 w-full max-w-sm">
                <p
                    className={
                        "text-sm lg:text-base 2xl:text-lg mx-auto xl:w-3/4 text-center "
                    }
                >
                    Not what you expected? Calculate your Affordability with a
                    Partner - Go back and Recalculate!
                </p>
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
