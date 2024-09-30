import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Question7 from "./components/Question7";
import Question8 from "./components/Question8";
import Question9 from "./components/Question9";
import Question10 from "./components/Question10";
import ThankYou from "./components/ThankYou";
import ProgressBar from "./components/ProgressBar";

export default async function Calculator() {
    return (
        <>
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
                            <ThankYou />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </main>
        </>
    );
}
