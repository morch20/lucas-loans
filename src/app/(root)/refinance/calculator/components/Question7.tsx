"use client";

import { useEffect, useState } from "react";
import { CarouselBack, CarouselNext } from "@/components/carousel";
import { Mina } from "next/font/google";
import { cn } from "@/utils/functions";
import { useCarouselContext } from "@/components/carousel/Carousel";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Question7() {
    const [value, setValue] = useState("");
    const { dispatch } = useCarouselContext();

    const validateName = (name: string) => {
        if (name && name.trim()) return true;
        return false;
    };

    const handleNext = () => {
        dispatch({ type: "increment" });
    };

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "7",
            validation: (validationValue: string) => {
                return validateName(validationValue);
            },
            validationValues: value || "",
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: "changeValidationValues",
            keyword: "7",
            validation: (validationValue: string) => {
                return validateName(validationValue);
            },
            validationValues: value || "",
        });
    }, [dispatch, value]);

    return (
        <div className="w-full h-[90dvh] py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    What is your name?
                </h2>
                <div className="flex flex-col mt-5 md:mt-16 items-center md:justify-center md:flex-row gap-5 md:gap-10 w-full">
                    <lord-icon
                        src="https://cdn.lordicon.com/qitvuzec.json"
                        trigger="hover"
                        colors="primary:#073944,secondary:#1560bd"
                        class="w-20 h-20 md:w-28 md:h-28"
                    />
                    <div className="w-full max-w-xs">
                        <input
                            id="name"
                            type="text"
                            className=" outline-none w-full max-w-xs border rounded p-2 bg-white focus:outline-primary"
                            placeholder="Enter name..."
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onKeyDownCapture={(e) => {
                                if (e.key === "Enter") handleNext();
                            }}
                        />
                        {!validateName(value) && (
                            <p className=" text-red-400">
                                Please enter a valid name *
                            </p>
                        )}
                    </div>
                </div>
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
