import { Mina } from "next/font/google";
import { LuHome } from "react-icons/lu";
import Image from "next/image";
import Step from "./components/Step";
import { howToBuyAHouseSteps } from "@/utils/constants";
import Link from "next/link";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function HowToBuyAHouse() {
    return (
        <main className="min-h-screen w-full">
            <header className="bg-white min-h-[60px] border-t ">
                <div className="container p-6 md:py-12 sm:px-7 mx-auto flex flex-col lg:flex-row lg:justify-between items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <div className=" mx-auto sm:mx-0 w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full">
                            <LuHome className="text-2xl text-tertiary" />
                        </div>
                        <div className=" text-center sm:text-start">
                            <h1 className={mina.className + " text-4xl "}>
                                How to Buy a House in
                            </h1>
                            <h1
                                className={
                                    mina.className + " text-4xl text-primary "
                                }
                            >
                                8 Steps
                            </h1>
                        </div>
                        <p className="text-gray-500">
                            Welcome to our guide on &quot;How to Buy a House in
                            8 Steps.&quot; Whether you&apos;re a first-time
                            buyer or upgrading to your dream home, this page
                            will walk you through the process. From assessing
                            your finances to closing the deal, we&apos;ve
                            simplified each step to make your journey smooth and
                            stress-free.
                        </p>
                        <p className="text-gray-500">
                            At Lucas Loans, we know buying a home is a
                            significant investment. We&apos;re committed to
                            providing personalized service and expert advice at
                            every stage. Let&apos;s start turning your
                            homeownership dreams into reality! Start by checking
                            out our{" "}
                            <Link className=" text-blue-400" href={"/"}>
                                Home Affordability Calculator
                            </Link>
                            .
                        </p>
                    </div>
                    <Image
                        className=" my-12 lg:my-0"
                        src={"/searchHouse.svg"}
                        width={400}
                        height={400}
                        alt="searchHouse"
                    />
                </div>
            </header>

            <div className=" mx-auto container px-5 sm:px-7">
                <h2 className="text-3xl font-medium my-12">Steps</h2>
                <div className="flex flex-col items-center space-y-8">
                    {howToBuyAHouseSteps.map((step, index) => (
                        <Step key={index} step={step} index={index + 1} />
                    ))}
                </div>
                <div className="mt-12 text-center text-gray-500 max-w-4xl mx-auto">
                    <p>
                        At Lucas Loans, we&apos;re here to support you every
                        step of the way with personalized service and expert
                        advice. Let&apos;s make your home buying experience
                        smooth and stress-free! Start by checking out our{" "}
                        <Link className=" text-blue-400" href={"/"}>
                            Home Affordability Calculator
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </main>
    );
}
