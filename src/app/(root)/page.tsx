import FAQs from "@/components/FAQs";
import { Mina } from "next/font/google";
import Image from "next/image";
import InfiniteCarousel from "@/components/infiniteCarousel/InfiniteCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Progress } from "@/components/ui/Progress";
import Link from "next/link";
import {
    adGroupTexts,
    adGroupTextsDefault,
    GroupText,
} from "@/utils/constants";
import { BadgeRibbon, Reviews } from "@/components/ReviewsIO";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string };
}) {
    const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };
    const SLIDES = [
        "lending-logo.webp",
        "rocket-mortgage-review.png",
        "penny mac logo.jpeg",
        "united-wholesale-mortgage.png",
        "visio lending.jpeg",
    ];

    const adGroup = searchParams["adGroup"] || adGroupTextsDefault;
    let adGroupData: GroupText;

    if (adGroup in adGroupTexts) {
        adGroupData = adGroupTexts[adGroup as keyof typeof adGroupTexts];
    } else {
        adGroupData = adGroupTexts[adGroupTextsDefault];
    }

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
                <div className="h-[85dvh] w-full pt-2 flex flex-col lg:flex-row justify-between lg:items-center container mx-auto px-5 sm:px-7">
                    <div className="lg:w-[45%]">
                        <div className="text-center mb-10 w-full">
                            {adGroupData.lines.map((i) => (
                                <h2
                                    key={i}
                                    className={
                                        mina.className +
                                        " sm:hidden " +
                                        adGroupData.size
                                    }
                                >
                                    {i}
                                </h2>
                            ))}
                            <h2
                                className={
                                    mina.className + " hidden sm:block text-3xl"
                                }
                            >
                                {adGroupData.line}
                            </h2>
                            <p
                                className={
                                    " text-lg lg:text-xl mt-2 mx-auto xl:w-3/4 "
                                }
                            >
                                No credit check, no risk, just numbers.{" "}
                                <span className="text-primary">
                                    Plus check no money-down eligibility{" "}
                                </span>
                                and best rates.
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
                                    {adGroupData.callToAction}
                                </Link>
                                <Image
                                    src={"/arrow.svg"}
                                    width={10}
                                    height={10}
                                    alt="arrow"
                                    className="text-black absolute -top-8 left-3 animate-bounce"
                                />
                            </button>
                            <p className=" mt-2 text-gray-500 mb-12">
                                Your info is private and stays with us
                            </p>
                            <BadgeRibbon />
                        </div>
                    </div>

                    <video
                        playsInline
                        poster="/videoPoster.jpg"
                        controls
                        className=" rounded shadow-md h-[10rem] md:h-[14rem] 2xl:h-auto lg:w-[40%] mx-auto bg-black"
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

                <div className="text-center w-full my-12">
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

                <Reviews />
            </main>
        </>
    );
}
