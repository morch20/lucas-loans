// import DynamicQuestions from "@/components/DynamicQuestions";
import FAQs from "@/components/FAQs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import ProgressBar from "@/components/pageComponents/ProgressBar";
import Question1 from "@/components/pageComponents/Question1";
import Question2 from "@/components/pageComponents/Question2";
import Question3 from "@/components/pageComponents/Question3";
import { Mina, Roboto } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import Question4 from "@/components/pageComponents/Question4";
import Question5 from "@/components/pageComponents/Question5";

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

export default function Home() {
    return (
        <>
            <Script src="https://cdn.lordicon.com/lordicon.js" />
            <main className=" w-full h-full ">
                {/* <div className="w-full min-h-[90dvh] h-full flex flex-col md:items-stretch md:py-6 md:flex-row md:justify-between">
                    <header className="max-h-[40rem] flex flex-col items-center md:justify-between md:w-2/5 my-4 md:my-0 h-1/5 md:h-auto left-to-middle">
                        <div className="text-center">
                            <h2
                                className={
                                    mina.className +
                                    " text-2xl lg:text-3xl 2xl:text-4xl"
                                }
                            >
                                Pre-approval Calculator
                            </h2>
                            <h3
                                className={
                                    roboto.className +
                                    " md:text-xl 2xl:text-2xl mt-2 sm:mt-4"
                                }
                            >
                                Find out your purchase power in 4 simple steps.
                            </h3>
                            <h3
                                className={
                                    roboto.className + " md:text-xl 2xl:text-2xl"
                                }
                            >
                                For the most accurate results, please answer
                                honestly.
                            </h3>
                        </div>

                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            width={50}
                            height={50}
                            className=" shadow-lg hidden md:block w-44 h-44 lg:w-52 lg:h-52 xl:w-64 xl:h-64 2xl:w-72 2xl:h-72 rounded-full"
                        />
                    </header>
                    <DynamicQuestions
                        buttonsTop
                        className="bg-white my-2 flex-col items-center justify-around flex h-full flex-auto rounded-md shadow-md"
                    />
                </div> */}
                <div className=" min-h-[90dvh] h-full flex flex-col items-stretch">
                    <Carousel>
                        <ProgressBar />
                        <CarouselContent>
                            <CarouselItem keyword="1" server>
                                <Question1 />
                            </CarouselItem>
                            <CarouselItem keyword="2">
                                <Question2 />
                            </CarouselItem>
                            <CarouselItem keyword="3">
                                <Question3 />
                            </CarouselItem>
                            <CarouselItem keyword="4">
                                <Question4 />
                            </CarouselItem>
                            <CarouselItem keyword="5">
                                <Question5 />
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="my-12 flex justify-between">
                    <div className="w-full lg:w-[60%]">
                        <h2
                            className={
                                mina.className +
                                " text-2xl lg:text-3xl 2xl:text-4xl"
                            }
                        >
                            FAQs
                        </h2>
                        <FAQs />
                    </div>
                    <div className="w-2/6 hidden lg:block">
                        <Image
                            src={"/logo.svg"}
                            alt="logo"
                            width={50}
                            height={50}
                            className=" mx-auto max-w-[18rem] w-full h-auto shadow-lg rounded-full"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}
