"use client";
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

    const handleSubmit = (number: string, name: string, email: string) => {
        const creditScore = parseInt(searchParams.get("CS") || "0");
        const monthlyIncome = parseInt(searchParams.get("MI") || "0");
        const monthlyDebt = parseInt(searchParams.get("MD") || "0");

        // event("Lead");

        // @ts-ignore
        console.log("gtag", gtag);
        function gtag_report_conversion(url?: any) {
            var callback = function () {
                if (typeof url != "undefined") {
                    window.location = url;
                }
            };
            // @ts-ignore
            gtag("event", "conversion", {
                send_to: "AW-16532080367/nsqrCN_AzLYZEO-Njss9",
                event_callback: callback,
            });
            return false;
        }

        gtag_report_conversion();

        fetch("/api/email", {
            cache: "no-store",
            method: "POST",
            body: JSON.stringify({
                email,
                phone: number.replace("(", "").replace(")", ""),
                name,
                creditScore,
                MI: monthlyIncome,
                MD: monthlyDebt,
                AN: calculate(
                    monthlyIncome,
                    monthlyDebt,
                    parseInt(searchParams.get("DP") || "0")
                ).toLocaleString(),
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((e) => console.log(e));

        setShowVideo(true);
    };

    useEffect(() => {
        values.forEach((i: IQuestion) => {
            if (
                !validateInput(searchParams.get(i.value)) ||
                !isNumeric(searchParams.get(i.value))
            ) {
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
                        Home Affordability Calculator
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
                </div>

                {showVideo ? (
                    <div className="w-full h-1/2 my-10 md:my-0 flex flex-col items-center justify-center">
                        <p className=" left-to-middle text-xl md:font-medium md:text-2xl lg:text-3xl py-2 px-4 lg:py-3 lg:px-5 rounded-md bg-tertiary text-white shadow-lg shadow-blue-200">
                            $
                            {calculate(
                                parseInt(searchParams.get("MI") || "0"),
                                parseInt(searchParams.get("MD") || "0"),
                                parseInt(searchParams.get("DP") || "0")
                            ).toLocaleString()}
                        </p>

                        {/* <h3
                            className={
                                roboto.className +
                                " md:text-xl lg:text-2xl mb-4 mt-10 "
                            }
                        >
                            Finalize Offer Now
                        </h3>

                        <div className="flex w-full justify-between lg:justify-around ">
                            <Link
                                href={"/calendar"}
                                className="w-32 h-10 bg-primary flex items-center justify-center text-white rounded shadow-md hover:shadow-lg active:shadow-lg hover:text-lg active:text-lg transition-all"
                            >
                                Book a free call
                            </Link>
                            <a
                                href="https://www.blink.mortgage/app/signup/p/lucasloansinc"
                                target="_blank"
                                rel="noreferrer"
                                className="w-32 h-10 bg-primary flex items-center justify-center text-white rounded shadow-md hover:shadow-lg active:shadow-lg hover:text-lg active:text-lg transition-all"
                            >
                                Apply Now
                            </a>
                        </div> */}
                        {showVideo && (
                            <p className="2xl:text-lg mt-8">
                                You will be contacted by a Lucas Loans
                                representative shortly.
                            </p>
                        )}
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

            <div className="max-h-[40rem] min-h-[20rem] relative h-full md:w-1/2 md:h-auto flex flex-col md:flex-initial flex-auto">
                {showVideo ? (
                    // <video controls className=" rounded shadow-md">
                    //     <source src="/lucasVideo.mp4" type="video/mp4" />
                    //     Your browser does not support the video tag.
                    // </video>
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={50}
                        height={50}
                        className=" m-auto shadow-lg block w-44 h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full"
                    />
                ) : (
                    <EmailModal submit={handleSubmit} />
                )}
            </div>
        </main>
    );
};

export default Email;
