'use client';
import { useSearchParams, useRouter } from "next/navigation";
import EmailModal from "./component/EmailModal";
import { Mina, Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import { values } from "@/utils/constants";
import { validateInput, isNumeric, calculate } from "@/utils/functions";
import { IQuestion } from "@/Interfaces";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: "500",
    variable: "--font-roboto",
});

const Email = () => {

    const [showVideo, setShowVideo] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    // TODO: credit score goes to mailchimp

    useEffect(() => {
        values.forEach((i: IQuestion) => {
            if(!validateInput(searchParams.get(i.value)) || !isNumeric(searchParams.get(i.value))) {
                console.log("AHHHAHAHAHA!!!!", i.value)
                router.push("/");
            }
        });
    }, []);


    return (
        <main className=" w-full h-full min-h-[90dvh] flex flex-col md:items-stretch md:py-6 md:flex-row md:justify-between ">
            <header className="max-h-[40rem] flex flex-col items-center md:justify-between md:w-2/5 my-4 md:my-0 h-1/5 md:h-auto left-to-middle">
                <div className="text-center ">
                    <h2
                        className={
                            mina.className +
                            " text-2xl lg:text-3xl 2xl:text-4xl"
                        }
                    >
                        Max Home Affordability
                    </h2>
                    <h3
                        className={
                            roboto.className +
                            " md:text-xl lg:text-2xl mt-2 sm:mt-4"
                        }
                    >
                        {showVideo
                            ? "You can afford this much house upon approval*"
                            : "Find out how much house you can afford"}
                    </h3>
                    {showVideo && <p className="md:text-lg my-2">Please watch video to see full disclosures</p>}
                </div>

                {showVideo ? (
                    <div className="w-full h-1/2 my-10 md:my-0 flex items-center justify-center">
                        <p className=" left-to-middle text-xl md:font-medium md:text-2xl lg:text-3xl py-2 px-4 lg:py-3 lg:px-5 rounded-md bg-tertiary text-white shadow-lg shadow-blue-200">
                            $
                            {calculate(
                                parseInt(searchParams.get("MI") || "0"),
                                parseInt(searchParams.get("MD") || "0"),
                                parseInt(searchParams.get("DP") || "0")
                            ).toLocaleString()}
                        </p>
                    </div>
                ) : (
                    <div className=" relative hidden md:flex items-center justify-center w-full h-auto ">
                        <Image
                            src={"/email.svg"}
                            alt="email"
                            width={50}
                            height={50}
                            className="w-3/4 h-3/4 "
                        />
                        <Image
                            src={"/blob.svg"}
                            alt="background"
                            width={50}
                            height={50}
                            className="w-full -z-10 h-full drop-shadow-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] "
                        />
                    </div>
                )}
            </header>

            <div className="max-h-[40rem] relative h-full md:w-1/2 md:h-auto flex flex-col md:flex-initial flex-auto">
                {showVideo ? (
                    <video controls className=" rounded shadow-md">
                        <source src="/lucasVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <EmailModal setShowVideo={setShowVideo} />
                )}
            </div>
        </main>
    );
};

export default Email;
