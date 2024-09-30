"use client";

import { useEffect, useState } from "react";
import { CarouselBack, CarouselNext } from "@/components/carousel";
import { Mina } from "next/font/google";
import { cn, isNumeric } from "@/utils/functions";
import { useCarouselContext } from "@/components/carousel/Carousel";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Question3() {
    const [value, setValue] = useState("0");
    const { dispatch } = useCarouselContext();

    const handleValidation = (val: string) => {
        if (!val || val === "0") return false;
        return true;
    };

    const handleNext = () => {
        dispatch({ type: "increment" });
    };

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "3",
            validation: (validationValue: string) => {
                return handleValidation(validationValue);
            },
            validationValues: value || "",
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: "changeValidationValues",
            keyword: "3",
            validation: (validationValue: string) => {
                return handleValidation(validationValue);
            },
            validationValues: value || "",
        });
    }, [dispatch, value]);

    return (
        <div className="w-full h-[90dvh] py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Current interest rate
                </h2>
                <h4 className={" text-xl xl:text-2xl"}>
                    Enter rate in percentage
                </h4>
                <div className="flex flex-col mt-5 md:mt-16 items-center md:justify-center md:flex-row gap-5 md:gap-10 w-full">
                    <lord-icon
                        src="https://cdn.lordicon.com/kxockqqi.json"
                        trigger="hover"
                        colors="primary:#073944,secondary:#1560bd"
                        class="w-20 h-20 md:w-28 md:h-28"
                    />
                    <div className="w-full max-w-xs flex items-center">
                        <input
                            id="currentInterestRate"
                            type="number"
                            className=" outline-none w-full max-w-xs rounded p-2 border bg-white focus:outline-primary"
                            placeholder="Enter interest rate..."
                            value={value}
                            onKeyDownCapture={(e) => {
                                if (e.key === "Enter") handleNext();
                            }}
                            onChange={(e) => {
                                // if (e.target.value === "") {
                                //     setValue("0");
                                //     return;
                                // }

                                // if (e.target.value.length > 3) return;
                                // let value = e.target.value.replaceAll(",", "");
                                // if (!isNumeric(value)) return;
                                // const newValue = Number(value);
                                // if (newValue > 850) return;
                                setValue(
                                    Number(e.target.value).toString() || "0"
                                );
                            }}
                        />
                        <p className="ml-2 text-lg font-bold">%</p>
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
