import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import { isNumeric, validateInput } from "@/utils/functions";
import Script from "next/script";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question7 from "./components/Question7";
import Question8 from "./components/Question8";
import Question9 from "./components/Question9";
import Question10 from "./components/Question10";
import Question11 from "./components/Question11";
import Question12 from "./components/Question12";
import Question13 from "./components/Question13";
import Question14 from "./components/Question14";
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
    let MI = searchParams["MI"] || "10";
    let MD = searchParams["MD"] || "12";
    let DP = searchParams["DP"] || "13";
    let CS = searchParams["CS"] || "15";

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
            <Script
                type="module"
                defer
                src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/helix.js"
            />
            <Script src="https://cdn.lordicon.com/lordicon.js" />
            <main className=" min-h-[90dvh] h-full flex flex-col items-stretch">
                <Carousel>
                    <ProgressBar />
                    <CarouselContent className="h-full flex-auto">
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
                        {/* <CarouselItem keyword="3">Which are?</CarouselItem> */}
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
                            <Question11 />
                        </CarouselItem>
                        <CarouselItem keyword="12">
                            <Question12 />
                        </CarouselItem>
                        <CarouselItem keyword="13">
                            <Question13 />
                        </CarouselItem>
                        <CarouselItem keyword="14">
                            <Question14 />
                        </CarouselItem>
                        <CarouselItem keyword="15">
                            <ThankYou />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </main>
        </>
    );
}
