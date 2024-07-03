"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useCarouselContext } from "./Carousel";

export type CarouselItemProps = {
    keyword: string;
    children: React.ReactNode;
    server?: boolean;
};

export default function CarouselItem({
    keyword,
    children,
    server = false,
}: CarouselItemProps) {
    const { state, dispatch } = useCarouselContext();

    useEffect(() => {
        if (server) {
            dispatch({
                type: "setIndex",
                keyword,
                validation: () => true,
                validationValues: "",
            });
        }
    }, []);

    return (
        <motion.div
            style={{
                transform: `translateX(${-100 * state.currentIndex}%)`,
            }}
            animate={{
                x: -100 * state.currentIndex + "%",
                // opacity:
                //     keyword === state.keys[state.currentIndex]?.key ? 1 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                // opacity: {
                //     duration: 1,
                // },
            }}
            className=" translate-x-[100%] min-w-[100%] px-[5%] h-auto"
        >
            {children}
        </motion.div>
    );
}
