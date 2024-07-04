import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import Question1 from "./components/Question1";
import { calculate, isNumeric, validateInput } from "@/utils/functions";
import Question2 from "./components/Question2";
import Script from "next/script";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Question7 from "./components/Question7";
import Question8 from "./components/Question8";
import Question9 from "./components/Question9";
import Question10 from "./components/Question10";
import Question11 from "./components/Question11";
import ThankYou from "./components/ThankYou";
import ProgressBar from "./components/ProgressBar";
import { redirect } from "next/navigation";

type SearchParams = {
    [key: string]: string | undefined;
};
export default function Email({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    let MI = searchParams["MI"];
    let MD = searchParams["MD"];
    let DP = searchParams["DP"];
    let CS = searchParams["CS"];

    const validate = (input: string | undefined) => {
        if (!validateInput(input) || !isNumeric(input)) return false;
        return true;
    };

    const valid = validate(MI) && validate(MD) && validate(DP) && validate(CS);

    if (!valid) {
        redirect("/");
    }
    return (
        <>
            <Script src="https://cdn.lordicon.com/lordicon.js" />
            <main className=" min-h-[90dvh] h-full flex flex-col items-stretch">
                <Carousel>
                    <ProgressBar />
                    <CarouselContent className="h-full flex-auto">
                        <CarouselItem keyword="1" server>
                            <Question1
                                HACValue={calculate(
                                    parseInt(MI || "0"),
                                    parseInt(MD || "0"),
                                    parseInt(DP || "0")
                                ).toLocaleString()}
                            />
                        </CarouselItem>
                        <CarouselItem keyword="2">
                            <Question2 />
                        </CarouselItem>
                        {/* <CarouselItem keyword="3">Which are?</CarouselItem> */}
                        <CarouselItem keyword="4">
                            <Question4 />
                        </CarouselItem>
                        <CarouselItem keyword="5">
                            <Question5 />
                        </CarouselItem>
                        <CarouselItem keyword="6">
                            <Question6 />
                        </CarouselItem>
                        <CarouselItem keyword="7">
                            <Question7 />
                        </CarouselItem>
                        <CarouselItem keyword="8">
                            <Question8 />
                        </CarouselItem>
                        <CarouselItem keyword="9">
                            <Question9 />
                        </CarouselItem>
                        <CarouselItem keyword="10">
                            <Question10 />
                        </CarouselItem>
                        <CarouselItem keyword="11">
                            <Question11
                                monthlyIncome={parseInt(MI || "0")}
                                monthlyDebt={parseInt(MD || "0")}
                                downPayment={parseInt(DP || "0")}
                                creditScore={parseInt(CS || "0")}
                            />
                        </CarouselItem>
                        <CarouselItem keyword="12" server>
                            <ThankYou />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </main>
        </>
    );
}
