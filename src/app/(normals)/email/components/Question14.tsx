"use client";

import { useEffect, useState } from "react";
import { CarouselBack, CarouselNext } from "@/components/carousel";
import { Mina } from "next/font/google";
import { cn, formatPhoneNumber, phoneValidator } from "@/utils/functions";
import { useCarouselContext } from "@/components/carousel/Carousel";
import { validAreaCodes } from "@/utils/constants";
import mainService from "@/utils/mainService";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Question14() {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const { state, dispatch } = useCarouselContext();

    const validatePhoneNumber = (number: string) => {
        if (number && phoneValidator(number)) {
            const areaCode = number.slice(1, 4);
            if (validAreaCodes.hasOwnProperty(areaCode)) {
                return true;
            }

            return false;
        }
        return false;
    };

    const handleNext = () => {
        dispatch({ type: "increment" });
    };

    useEffect(() => {
        dispatch({
            type: "setIndex",
            keyword: "14",
            validation: (validationValue: string) => {
                if (validatePhoneNumber(validationValue)) {
                    const tags: string[] = [];

                    // TODO: improve this hardcoded code
                    const monthlyIncome = Number(
                        state.keys[0].validationValues.split(",").join("")
                    );
                    const monthlyDebt = Number(
                        state.keys[1].validationValues.split(",").join("")
                    );

                    const creditScore = Number(
                        state.keys[2].validationValues.split(",").join("")
                    );
                    const downPayment = Number(
                        state.keys[3].validationValues.split(",").join("")
                    );

                    tags.push(
                        `First time home buyer: ${state.keys[4].validationValues}`
                    );
                    tags.push(state.keys[5].validationValues);
                    tags.push(state.keys[6].validationValues);
                    tags.push(`Has realtor: ${state.keys[7].validationValues}`);
                    tags.push(state.keys[8].validationValues);
                    tags.push(`Boost: ${state.keys[9].validationValues}`);

                    const name = state.keys[10].validationValues;
                    const email = state.keys[11].validationValues;
                    const phone = state.keys[12].validationValues;

                    mainService(
                        creditScore,
                        monthlyIncome,
                        monthlyDebt,
                        downPayment,
                        email,
                        phone,
                        name,
                        tags
                    );

                    return true;
                }

                return false;
            },
            validationValues: value,
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: "changeValidationValues",
            keyword: "14",
            validation: (validationValue: string) => {
                if (validatePhoneNumber(validationValue)) {
                    const tags: string[] = [];

                    // TODO: improve this hardcoded code
                    const monthlyIncome = Number(
                        state.keys[0].validationValues.split(",").join("")
                    );
                    const monthlyDebt = Number(
                        state.keys[1].validationValues.split(",").join("")
                    );

                    const creditScore = Number(
                        state.keys[2].validationValues.split(",").join("")
                    );
                    const downPayment = Number(
                        state.keys[3].validationValues.split(",").join("")
                    );

                    tags.push(
                        `First time home buyer: ${state.keys[4].validationValues}`
                    );
                    tags.push(state.keys[5].validationValues);
                    tags.push(state.keys[6].validationValues);
                    tags.push(`Has realtor: ${state.keys[7].validationValues}`);
                    tags.push(state.keys[8].validationValues);
                    tags.push(`Boost: ${state.keys[9].validationValues}`);

                    const name = state.keys[10].validationValues;
                    const email = state.keys[11].validationValues;
                    const phone = state.keys[12].validationValues;

                    mainService(
                        creditScore,
                        monthlyIncome,
                        monthlyDebt,
                        downPayment,
                        email,
                        phone,
                        name,
                        tags
                    );

                    return true;
                }

                return false;
            },
            validationValues: value,
        });
    }, [dispatch, value]);

    return (
        <div className="w-full h-[90dvh] md:h-[100dvh] py-6 flex flex-col items-center justify-between ">
            <div className="text-center ">
                <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                    What is your phone number?
                </h2>
                <div className="flex flex-col mt-5 md:mt16 items-center md:justify-center md:flex-row gap-5 md:gap-10 w-full">
                    <lord-icon
                        src="https://cdn.lordicon.com/rbztokoj.json"
                        trigger="hover"
                        colors="primary:#073944,secondary:#1560bd"
                        class="w-20 h-20 md:w-28 md:h-28"
                    />
                    <div className="w-full max-w-xs">
                        <input
                            id="number"
                            type="tel"
                            className=" outline-none w-full rounded p-2 bg-white focus:outline-primary border"
                            placeholder="(xxx)-xxx-xxxx"
                            value={value}
                            onChange={(e) =>
                                setValue(formatPhoneNumber(e.target.value))
                            }
                            onKeyDownCapture={(e) => {
                                if (e.key === "Enter") handleNext();
                            }}
                        />
                        {!validatePhoneNumber(value) && (
                            <p className=" text-red-400">
                                Please enter a valid US phone number *
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <CarouselNext
                className={cn(
                    " text-white text-lg px-8 md:px-10 py-2 md:py-4 rounded-md",
                    {
                        "bg-primary cursor-pointer hover:shadow-md": value,
                        "bg-secondary cursor-default": !value,
                    }
                )}
            >
                Click to text results!
            </CarouselNext>
            <div className="text-xs max-w-2xl my-3">
                <p className="inline">
                    By providing your contact info and clicking &quot;Click to
                    text results!&quot; below, you agree to our{" "}
                    <a
                        className="text-blue-500"
                        href="https://www.termsfeed.com/live/afa2ca79-cec2-4e4a-b463-bbe50c6af066"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms and Conditions
                    </a>
                    , which{" "}
                </p>
                {open ? (
                    <>
                        <p className="inline">
                            include your agreement to arbitrate claims related
                            to the Telephone Consumer Protection Act. You also
                            expressly consent by electronic signature to receive
                            sales, marketing, and other calls and texts,
                            including those sent by any automated system or
                            other means for selecting and dialing telephone
                            numbers or using an artificial or prerecorded voice
                            message when a connection is completed, from Rocket
                            Mortgage at the telephone number you provided, even
                            if that telephone number is on a do-not-call list.
                            Agreement to receive such calls or texts is not a
                            condition of purchasing goods or services from us.{" "}
                        </p>
                        <button
                            onClick={() => setOpen(false)}
                            type="button"
                            className="text-blue-500"
                        >
                            See less
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setOpen(true)}
                        type="button"
                        className="text-blue-500"
                    >
                        See more...
                    </button>
                )}
            </div>

            <CarouselBack className="bg-white text-black text-lg px-8 md:px-10 py-2 md:py-4 rounded-md hover:shadow-md">
                Back
            </CarouselBack>
        </div>
    );
}
