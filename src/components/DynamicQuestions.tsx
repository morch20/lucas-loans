"use client";
import Question from "./Question";
import { useState } from "react";
import { IQuestion, IState, IAnimationNode } from "@/Interfaces";
import { useRouter } from "next/navigation";
import { values } from "@/utils/constants";

const DynamicQuestions = ({
    buttonsTop = false,
    className = "",
    strict = true,
}) => {
    const router = useRouter();

    const handleFinalStep = async (inputStates: IState[]) => {
        let queries = "?";
        values.forEach((i: IQuestion, index: number) => {
            if (index > 0) queries += "&";
            queries += `${i.value}=${inputStates[index].state
                .split(",")
                .join("")}`;
        });
        router.push("/email" + queries);
    };

    const generateAnimationsStates = (): IAnimationNode[] => {
        let parent: IState | null = null;
        let animations: IAnimationNode[] = [];

        values.forEach((i: IQuestion, index: number) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [state, setState] = useState("right-to-middle");

            if (index === 0) {
                animations.push({
                    parent: null,
                    value: { state, setState },
                    child: null,
                });
            } else {
                if (index < values.length) {
                    animations[index - 1].child = { state, setState };
                }
                animations.push({
                    parent: parent,
                    value: { state, setState },
                    child: null,
                });
            }

            parent = { state, setState };
        });

        return animations;
    };

    const generateInputStates = (): IState[] => {
        return values.map((i: IQuestion) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [state, setState] = useState("0");
            return { state, setState };
        });
    };

    const animationsStates = generateAnimationsStates();
    const inputStates = generateInputStates();

    const [state, setState] = useState(0);

    return (
        <>
            {values.map((i: IQuestion, index: number) => (
                <Question
                    key={index}
                    index={index}
                    submit={() => handleFinalStep(inputStates)}
                    question={i}
                    maxIndex={values.length - 1}
                    strict={strict}
                    animationState={animationsStates[index]}
                    inputState={inputStates[index]}
                    className={className}
                    buttonsTop={buttonsTop}
                    currentIndex={{ state, setState }}
                    limit={i?.limit}
                />
            ))}
        </>
    );
};

export default DynamicQuestions;
