import FAQs from "@/components/FAQs";
import { Mina } from "next/font/google";
import Image from "next/image";
import InfiniteCarousel from "@/components/infiniteCarousel/InfiniteCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Progress } from "@/components/ui/Progress";
import Link from "next/link";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Home() {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const SLIDES = [
        "lending-logo.webp",
        "rocket-mortgage-review.png",
        "penny mac logo.jpeg",
        "united-wholesale-mortgage.png",
        "visio lending.jpeg",
    ];

    return (
        <>
            <main className=" w-full h-full ">
                <div className=" flex items-center w-5/6 max-w-3xl mx-auto">
                    <Progress
                        value={0}
                        className="w-full h-2 bg-white border"
                    />
                    <p className=" text-sm ml-2">0%</p>
                </div>
                <div className="h-[85dvh] w-full pt-2 flex flex-col justify-between container mx-auto px-5 sm:px-7">
                    <div className="text-center ">
                        <h2 className={mina.className + " text-3xl sm:hidden"}>
                            Effortlessly find your
                        </h2>
                        <h2 className={mina.className + " text-3xl sm:hidden"}>
                            Home-Buying Power
                        </h2>
                        <h2 className={mina.className + " text-3xl sm:hidden"}>
                            in under 60 seconds.
                        </h2>
                        <h2
                            className={
                                mina.className + " hidden sm:block text-3xl"
                            }
                        >
                            Effortlessly find your Home-Buying Power in under 60
                            seconds.
                        </h2>
                        <p
                            className={
                                " text-lg lg:text-xl mx-auto mt-2 xl:w-3/4 "
                            }
                        >
                            Instantly know how much you can afford. We will find
                            the best rates from our trusted partners risk free.
                        </p>
                        <p className={" text-lg lg:text-xl font-semibold"}>
                            We guarantee it.
                        </p>
                    </div>

                    <div className="text-center w-full">
                        <button className="max-w-xs w-full bg-primary h-14 text-white text-lg rounded-md shadow-md relative">
                            <Link
                                href={"/email"}
                                className="w-full flex h-full justify-center items-center py-4"
                            >
                                Calculate Now!
                            </Link>
                            <Image
                                src={"/arrow.svg"}
                                width={10}
                                height={10}
                                alt="arrow"
                                className="text-black absolute -top-8 left-3 animate-bounce"
                            />
                        </button>
                        <p className=" mt-2 text-gray-500">
                            Your info is private and stays with us
                        </p>
                    </div>

                    <video
                        poster="/videoPoster.jpg"
                        controls
                        className=" rounded shadow-md h-[10rem] md:h-[14rem] 2xl:h-[20rem] mx-auto bg-black"
                    >
                        <source src="/lucasVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="w-full h-full bg-white my-12">
                    <h2
                        className={
                            mina.className +
                            " container mx-auto px-5 sm:px-7 pt-5 text-2xl sm:text-3xl text-center"
                        }
                    >
                        Our Partners
                    </h2>
                    <InfiniteCarousel slides={SLIDES} options={OPTIONS} />
                </div>
                <div className="my-12 flex justify-between container mx-auto px-5 sm:px-7">
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

                <div className="text-center w-full">
                    <button className="max-w-xs w-full bg-primary h-14 text-white text-lg rounded-md shadow-md">
                        <Link
                            href={"/email"}
                            className="w-full flex h-full justify-center items-center py-4"
                        >
                            Calculate Now!
                        </Link>
                    </button>
                    <p className=" mt-2 text-gray-500">
                        Your info is private and stays with us
                    </p>
                </div>
            </main>
        </>
    );
}
