"use client";
import Question from "./Question";
import { IoMdMail } from "react-icons/io";
import { TbPigMoney } from "react-icons/tb";
import { useState } from "react";
import { IQuestion, IState, IAnimationNode } from "@/Interfaces";
import { MdCreditScore, MdPayments, MdAttachMoney } from "react-icons/md";

const DynamicQuestions = ({
    buttonsTop = false,
    className = "",
    strict = true,
}) => {
    const values: IQuestion[] = [
        {
            value: "MI",
            question: "Monthly income before taxes.",
            subtext: "Input the general amount of money you make monthly before taxes.",
            type: "text",
            placeholder: "Enter monthly income...",
            icon: <MdAttachMoney />
        },
        {
            value: "MD",
            question: "Monthly debt payments.",
            subtext:
            "Include car loans, credit card payments, personal loans and other mortgages.",
            type: "text",
            placeholder: "Enter monthly debt...",
            icon: <MdPayments />
        },
        {
            value: "CS",
            question: "Estimated Credit score.",
            type: "text",
            placeholder: "Enter credit score...",
            limit: 850,
            icon: <MdCreditScore />
        },
        {
            value: "DP",
            question: "Down payment",
            type: "text",
            placeholder: "Enter down payment...",
            icon: <TbPigMoney />
        },
        // {
        //     value: "email",
        //     question: "Input email to get max affordability.",
        //     type: "email",
        //     placeholder: "Enter email...",
        //     icon: <IoMdMail />
        // },
    ];

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
            } 
            else {
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
