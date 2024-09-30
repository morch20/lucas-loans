"use client";

import { useCarouselContext } from "@/components/carousel/Carousel";
import { Progress } from "@/components/ui/Progress";

export default function ProgressBar() {
    const { state } = useCarouselContext();
    const percent = Math.floor(((state.currentIndex + 1) / 10) * 100);

    return (
        <div className=" flex items-center w-5/6 max-w-3xl mx-auto">
            <Progress value={percent} className="w-full h-2 bg-white border" />
            <p className=" text-sm ml-2">{percent}%</p>
        </div>
    );
}
