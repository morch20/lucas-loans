"use client";

import { useBackPageAnimation } from "@/components/BackPageAnimation";
import { useCarouselContext } from "@/components/carousel/Carousel";
import { calculateRefinance } from "@/utils/functions";
import { useEffect, useState } from "react";
import Boost from "./Boost";

export default function ThankYou() {
    const { state, dispatch } = useCarouselContext();
    const [number, setNumber] = useState("0");

    const { animationState, setAnimationState } = useBackPageAnimation();

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "10",
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
        if (state.currentIndex === state.keys.length - 1) {
            const piPayment = Number(
                state.keys[0].validationValues.split(",").join("")
            );
            const currentLoanAmount = Number(
                state.keys[1].validationValues.split(",").join("")
            );
            setNumber(
                calculateRefinance(
                    currentLoanAmount,
                    piPayment
                ).toLocaleString()
            );
        }
    }, [state]);

    return (
        <Boost
            streamLined={
                state.keys[6]?.validationValues === "FHA" ||
                state.keys[6]?.validationValues === "VA"
            }
            number={number}
            email={state.keys[8]?.validationValues}
        />
    );
}
