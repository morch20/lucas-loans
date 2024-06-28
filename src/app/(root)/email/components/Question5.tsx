"use client";

import { useEffect, useState } from "react";
import { CarouselBack, CarouselNext } from "@/components/carousel";
import { Mina } from "next/font/google";
import { cn } from "@/utils/functions";
import { useCarouselContext } from "@/components/carousel/Carousel";
import SelectButton from "./SelectButton";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

type Value =
    | "I'm under contract"
    | "I'm house shopping"
    | "I'm Just researching"
    | "Found a home";

export default function Question5() {
    const [value, setValue] = useState<Value>();
    const { dispatch } = useCarouselContext();

    useEffect(() => {
        dispatch({
            type: "changeValidationValues",
            keyword: "5",
            validation: (args: any[]) => {
                return typeof args[0] === "string";
            },
            validationValues: [value],
        });
    }, [dispatch, value]);

    const handleClick = (newValue: Value) => {
        setValue(newValue);
    };
    return (
        <div className="w-full h-full py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Where in the home-buying process are you?
                </h2>
            </div>

            <div className="flex flex-col py-6 items-center md:justify-center md:flex-row gap-5 md:gap-10 w-full">
                <SelectButton<Value>
                    handleClick={() => handleClick("I'm under contract")}
                    value="I'm under contract"
                    selected={value === "I'm under contract"}
                    lordIcon="https://cdn.lordicon.com/vistbkts.json"
                />
                <SelectButton<Value>
                    handleClick={() => handleClick("I'm house shopping")}
                    value="I'm house shopping"
                    selected={value === "I'm house shopping"}
                    lordIcon="https://cdn.lordicon.com/odavpkmb.json"
                />
                <SelectButton<Value>
                    handleClick={() => handleClick("I'm Just researching")}
                    value="I'm Just researching"
                    selected={value === "I'm Just researching"}
                    lordIcon="https://cdn.lordicon.com/unukghxb.json"
                />

                <SelectButton<Value>
                    handleClick={() => handleClick("Found a home")}
                    value="Found a home"
                    selected={value === "Found a home"}
                    lordIcon="https://cdn.lordicon.com/sncsryxo.json"
                />
            </div>

            <div className="flex items-center justify-around w-full max-w-sm">
                <CarouselBack className="bg-white text-black text-lg px-8 md:px-10 py-2 md:py-4 rounded-md hover:shadow-md">
                    Back
                </CarouselBack>
                <CarouselNext
                    className={cn(
                        " text-white text-lg px-8 md:px-10 py-2 md:py-4 rounded-md",
                        {
                            "bg-primary cursor-pointer hover:shadow-md": value,
                            "bg-secondary cursor-default": !value,
                        }
                    )}
                >
                    Next
                </CarouselNext>
            </div>
        </div>
    );
}
