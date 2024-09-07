"use client";

import { useBackPageAnimation } from "@/components/BackPageAnimation";
import { useCarouselContext } from "@/components/carousel/Carousel";
import { calculate } from "@/utils/functions";
import { useEffect, useState } from "react";
import Boost from "./Boost";
import TryAgain from "./TryAgain";
import NoBoost from "./NoBoost";

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
            {Number(number.replaceAll(",", "")) < 100000 ? (
                <TryAgain
                    number={number}
                    showVideo={animationState === "finished"}
                />
            ) : state.keys[9].validationValues === "No" ? (
                <NoBoost
                    number={number}
                    showVideo={animationState === "finished"}
                    email={state.keys[11].validationValues}
                />
            ) : (
                <Boost
                    number={number}
                    showVideo={animationState === "finished"}
                    amount={amount}
                    email={state.keys[11].validationValues}
                />
            )}
        </>
    );
}
