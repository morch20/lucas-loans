"use client";

import { cn } from "@/utils/functions";
import { useCarouselContext } from "./Carousel";

export type CarouselBackProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function CarouselBack({
    children,
    className = "",
}: CarouselBackProps) {
    const { state, dispatch } = useCarouselContext();

    const handleClick = () => {
        dispatch({ type: "decrement" });
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            disabled={state.currentIndex <= 0}
            className={cn(
                " disabled:cursor-default",
                {
                    "cursor-pointer": state.currentIndex > 0,
                },
                className
            )}
        >
            {children}
        </button>
    );
}
