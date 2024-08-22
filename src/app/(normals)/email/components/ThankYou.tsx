"use client";

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

export default function ThankYou() {
    const { state, dispatch } = useCarouselContext();
    const [number, setNumber] = useState("0");
    const [loadingNumber, setLoadingNumber] = useState(true);

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "15",
            validation: () => true,
            validationValues: number,
        });
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (state.currentIndex >= state.keys.length - 1) {
            timer = setTimeout(() => {
                setLoadingNumber(false);
            }, 10000);
        }

        // Cleanup timer if the component unmounts before the timeout
        return () => clearTimeout(timer);
    }, [state]);

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
            <div className="w-full min-h-[75dvh] py-6 flex flex-col items-center justify-between ">
                <div className="text-center ">
                    <h2 className={mina.className + " text-3xl"}>Next Step:</h2>
                    <h2 className={mina.className + " text-3xl"}>
                        Guarantee your results by booking a call
                    </h2>
                    <p className={" text-lg mx-auto xl:w-3/4 "}>
                        Plus qualify for our no money down program, and get 5%
                        towards closing cost
                    </p>
                </div>

                {state.currentIndex >= state.keys.length - 1 && (
                    <video
                        autoPlay
                        playsInline
                        controls
                        className=" rounded shadow-md h-[12rem] md:h-[14rem] 2xl:h-[20rem] mx-auto bg-black"
                    >
                        <source src="/thankYou.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

                {/* <div className="flex flex-col items-center gap-y-1 w-full max-w-md">
                    <p className="text-lg">
                        Loading Home affordability estimate:
                    </p>
                    {loadingNumber ? (
                        <l-helix size="30" speed="2.5" color="black" />
                    ) : (
                        <p className="text-xl font-semibold text-center text-primary">
                            You will getting a text message with the number
                            soon!
                        </p>
                    )}
                </div> */}
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
