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

type Value = "Conventional" | "FHA" | "VA" | "Other";

export default function Question7() {
    const [value, setValue] = useState<Value>();
    const { dispatch } = useCarouselContext();

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "7",
            validation: (validationValue: string) => {
                return validationValue ? true : false;
            },
            validationValues: value || "",
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: "changeValidationValues",
            keyword: "7",
            validation: (validationValue: string) => {
                return validationValue ? true : false;
            },
            validationValues: value || "",
        });
    }, [dispatch, value]);

    const handleClick = (newValue: Value) => {
        setValue(newValue);
    };
    return (
        <div className="w-full h-[90dvh] py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Mortgage type?
                </h2>
            </div>

            <div className="flex flex-col py-6 items-center md:justify-center md:flex-row gap-5 md:gap-10 w-full">
                <SelectButton<Value>
                    handleClick={() => handleClick("Conventional")}
                    value="Conventional"
                    selected={value === "Conventional"}
                    lordIcon="https://cdn.lordicon.com/laqlvddb.json"
                />
                <SelectButton<Value>
                    handleClick={() => handleClick("FHA")}
                    value="FHA"
                    selected={value === "FHA"}
                    lordIcon="https://cdn.lordicon.com/vttzorhw.json"
                />
                <SelectButton<Value>
                    handleClick={() => handleClick("VA")}
                    value="VA"
                    selected={value === "VA"}
                    lordIcon="https://cdn.lordicon.com/knzzcfyy.json"
                />
                <SelectButton<Value>
                    handleClick={() => handleClick("Other")}
                    value="Other"
                    selected={value === "Other"}
                    lordIcon="https://cdn.lordicon.com/sbnjyzil.json"
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
