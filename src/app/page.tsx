import DynamicQuestions from "@/components/DynamicQuestions";
import { Mina, Roboto } from "next/font/google";
import Image from "next/image";

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
        <main className=" w-full min-h-[90dvh] flex flex-col md:items-stretch md:py-6 md:flex-row md:justify-between h-full ">
            <header className="max-h-[40rem] flex flex-col items-center md:justify-between md:w-2/5 my-4 md:my-0 h-1/5 md:h-auto left-to-middle">
                <div className="text-center">
                    <h2 className={mina.className + " text-2xl lg:text-3xl 2xl:text-4xl"}>
                        Max Home Affordability
                    </h2>
                    <h3
                        className={
                            roboto.className +
                            " md:text-xl lg:text-2xl mt-2 sm:mt-4"
                        }
                    >
                        Find out how much house you can afford
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
        </main>
    );
}
