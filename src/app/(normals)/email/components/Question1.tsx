"use client";

import { useEffect, useState } from "react";
import { CarouselNext } from "@/components/carousel";
import { Mina } from "next/font/google";
import { cn, isNumeric } from "@/utils/functions";
import { useCarouselContext } from "@/components/carousel/Carousel";
import Link from "next/link";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Question1() {
    const [value, setValue] = useState("");
    const { dispatch } = useCarouselContext();

    const handleValidation = (val: string) => {
        if (!val || val === "0") return false;
        return true;
    };

    const handleNext = async () => {
        dispatch({ type: "increment" });
    };

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "1",
            validation: (validationValue: string) => {
                return handleValidation(validationValue);
            },
            validationValues: value || "",
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: "changeValidationValues",
            keyword: "1",
            validation: (validationValue: string) => {
                return handleValidation(validationValue);
            },
            validationValues: value || "",
        });
    }, [dispatch, value]);

    return (
        <div className="w-full h-[90dvh] py-6 flex flex-col items-center justify-between">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    Monthly income before taxes
                </h2>
                <h4 className={"text-lg sm:text-xl xl:text-2xl"}>
                    Please put in the amount you make per month before taxes.
                </h4>
                <div className="flex mt-5 md:mt-16 flex-col items-center md:justify-center md:flex-row gap-5 md:gap-10 w-full">
                    <lord-icon
                        src="https://cdn.lordicon.com/wyqtxzeh.json"
                        trigger="hover"
                        colors="primary:#073944,secondary:#1560bd"
                        class="w-20 h-20 md:w-28 md:h-28"
                    />
                    <div className="w-full max-w-xs mb-6 sm:mb-0">
                        <input
                            id="MI"
                            type="tel"
                            className=" outline-none w-full max-w-xs rounded p-2 border bg-white focus:outline-primary"
                            placeholder="Enter your monthly income..."
                            value={value}
                            onKeyDownCapture={(e) => {
                                if (e.key === "Enter") handleNext();
                            }}
                            onChange={(e) => {
                                if (e.target.value === "") {
                                    setValue("0");
                                    return;
                                }

                                if (e.target.value.length > 8) return;
                                let value = e.target.value.replaceAll(",", "");
                                if (!isNumeric(value)) return;
                                const newValue = parseInt(value);
                                // if (limit && newValue > 850) return;
                                setValue(newValue.toLocaleString());
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-around w-full max-w-sm">
                <Link
                    href={"/"}
                    className="bg-white text-black text-lg px-8 md:px-10 py-2 md:py-4 rounded-md hover:shadow-md"
                >
                    Back
                </Link>
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
