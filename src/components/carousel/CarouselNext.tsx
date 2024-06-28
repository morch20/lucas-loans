"use client";

import { cn } from "@/utils/functions";
import { useCarouselContext } from "./Carousel";

export type CarouselNextProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function CarouselNext({
    children,
    className = "",
}: CarouselNextProps) {
    const { state, dispatch } = useCarouselContext();

    const handleClick = async () => {
        dispatch({ type: "increment" });
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className={cn("cursor-pointer", className)}
        >
            {children}
        </button>
    );
}
