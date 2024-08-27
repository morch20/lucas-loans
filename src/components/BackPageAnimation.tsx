"use client";

import { Mina, Roboto } from "next/font/google";
import React, {
    createContext,
    useState,
    ReactNode,
    useEffect,
    Dispatch,
    SetStateAction,
} from "react";
import { FaHome } from "react-icons/fa";
import { cn, pause } from "@/utils/functions";

type AnimationState = "initial" | "inProgress" | "finished";
interface BackPageAnimationContextType {
    animationState: AnimationState;
    setAnimationState: Dispatch<SetStateAction<AnimationState>>;
}

// Create the context with an undefined initial value
export const BackPageAnimationContext = createContext<
    BackPageAnimationContextType | undefined
>(undefined);

// Define the provider component's props
interface BackPageAnimationProviderProps {
    children: ReactNode;
}

export function useBackPageAnimation() {
    const context = React.useContext(BackPageAnimationContext);

    if (!context) {
        throw new Error(
            "useBackPageAnimation must be used within a <BackPageAnimationProvider />"
        );
    }

    return context;
}

// Create the provider component
export function BackPageAnimationProvider({
    children,
}: BackPageAnimationProviderProps) {
    const [animationState, setAnimationState] =
        useState<AnimationState>("initial");

    return (
        <BackPageAnimationContext.Provider
            value={{ animationState, setAnimationState }}
        >
            {children}
        </BackPageAnimationContext.Provider>
    );
}

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-roboto",
});

export default function BackPageAnimation() {
    const { animationState, setAnimationState } = useBackPageAnimation();
    const [current, setCurrent] = useState(1);

    const handleAnimation = async () => {
        await pause(4000);
        setCurrent(2);
        await pause(4000);
        setAnimationState("finished");
    };

    useEffect(() => {
        if (animationState === "inProgress") {
            handleAnimation();
        }
    }, [animationState]);

    return (
        <>
            {animationState === "inProgress" && (
                <div className="fixed top-0 left-0 w-full text-white bg-primary pb-14 h-screen flex flex-col items-center justify-around ">
                    <div className="w-fit h-14 flex items-center justify-center ">
                        <FaHome className=" w-6 h-6 md:w-10 md:h-10 " />
                        <div className="h-fit w-fit">
                            <h2 className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mina !leading-none">
                                <span className={mina.className}>Lucas</span>
                                <span className={roboto.className}>Loans</span>
                            </h2>
                            <p className="w-fit text-[8px] lg:text-xs !leading-[0] mx-auto">
                                Your path to home ownership
                            </p>
                        </div>
                    </div>
                    <div className="w-fit flex-col flex items-center space-y-6">
                        <div className=" w-40 h-40 bg-white rounded-full flex items-center justify-center">
                            <lord-icon
                                src="https://cdn.lordicon.com/ozmbktct.json"
                                trigger="loop"
                                colors="primary:#073944,secondary:#1560bd"
                                class={cn("w-24 h-24", {
                                    "fade-out-0 animate-out slide-out-to-left fill-mode-forwards":
                                        current !== 1,
                                    "fade-in-0 animate-in slide-in-from-right pl-10":
                                        current === 1,
                                })}
                            />
                            <lord-icon
                                src="https://cdn.lordicon.com/abwrkdvl.json"
                                trigger="loop"
                                colors="primary:#073944,secondary:#1560bd"
                                class={cn("w-24 h-24", {
                                    "fade-out-0 animate-out slide-out-to-left fill-mode-forwards":
                                        current !== 2,
                                    "fade-in-0 animate-in slide-in-from-right pr-40":
                                        current === 2,
                                })}
                            />
                        </div>
                        <p
                            className={cn("text-lg duration-300", {
                                "fade-out-0 animate-out slide-out-to-left fill-mode-forwards":
                                    current !== 1,
                                "fade-in-0 animate-in slide-in-from-right":
                                    current === 1,
                            })}
                        >
                            Matching you to the best options...
                        </p>

                        <p
                            className={cn("text-lg duration-300", {
                                "fade-out-0 animate-out slide-out-to-left fill-mode-forwards":
                                    current !== 2,
                                "fade-in-50 animate-in slide-in-from-right":
                                    current === 2,
                            })}
                        >
                            Checking your eligibility...
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
