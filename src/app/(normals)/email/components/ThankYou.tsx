"use client";

import { useBackPageAnimation } from "@/components/BackPageAnimation";
import { useCarouselContext } from "@/components/carousel/Carousel";
import { calculate } from "@/utils/functions";
import { Mina } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function ThankYou({ amount }: { amount: number }) {
    const { state, dispatch } = useCarouselContext();
    const [number, setNumber] = useState("0");

    const { animationState, setAnimationState } = useBackPageAnimation();

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "15",
            validation: () => true,
            validationValues: number,
        });

        return () => {
            setAnimationState("initial");
        };
    }, []);

    useEffect(() => {
        if (
            state.currentIndex > 0 &&
            state.currentIndex >= state.keys.length - 1
        ) {
            setAnimationState("inProgress");
        }
    }, [state.currentIndex]);

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
        setNumber(
            calculate(monthlyIncome, monthlyDebt, downPayment).toLocaleString()
        );
    }, [state]);

    return (
        <>
            <div className="w-full min-h-[65dvh] py-4 flex flex-col gap-y-10 items-center justify-between ">
                <div className="text-center ">
                    <p className={" font-bold"}>You can afford up to:</p>
                    <p className={" text-lg font-bold "}>{number}</p>
                    <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                        You just got Pre-Qualified!
                    </h2>
                    <h2
                        className={
                            mina.className + " text-2xl sm:text-3xl mb-4"
                        }
                    >
                        Now claim $23,435 in savings
                    </h2>
                    <p className={"text-lg font-medium "}>
                        <span className="text-primary">
                            You can buy a home with no money out of pocket!
                        </span>{" "}
                        If you don&apos;t believe me, watch the video.
                    </p>
                    <p className="text-lg font-medium mb-4"></p>
                    <p className={" text-lg font-medium "}>
                        Limited time offer we only have:{" "}
                    </p>
                    <p className={" text-lg font-medium text-red-500 "}>
                        {amount} spots left
                    </p>
                </div>
                {/* {state.currentIndex >= state.keys.length - 1 && */}
                {animationState === "finished" && (
                    <video
                        autoPlay
                        playsInline
                        controls
                        className="rounded shadow-md h-[12rem] md:h-[14rem] 2xl:h-[20rem] mx-auto bg-black"
                    >
                        <source src="/thankYou.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            {state.currentIndex >= state.keys.length - 1 && (
                <div className="min-h-screen flex h-full w-full">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/booking/Y0fBPK62Ip9kLvW40dsf"
                        className=" w-full flex-grow border-none overflow-hidden "
                        // scrolling="no"
                        id="Y0fBPK62Ip9kLvW40dsf_1704239607905"
                    ></iframe>
                    <Script
                        src="https://link.msgsndr.com/js/form_embed.js"
                        type="text/javascript"
                    ></Script>
                </div>
            )}
        </>
    );
}
