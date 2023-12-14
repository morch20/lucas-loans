"use client";
import Question from "./Question";
import { IoMdMail } from "react-icons/io";
import { TbPigMoney } from "react-icons/tb";
import { useState, useEffect } from "react";
import { IQuestion, IAnimate, IAnimationNode } from "@/Interfaces";
import { MdCreditScore, MdPayments, MdAttachMoney } from "react-icons/md";

const DynamicQuestions = ({
    buttonsTop = false,
    className = "",
    strict = false,
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
            type: "number",
            placeholder: "Enter credit score...",
            icon: <MdCreditScore />
        },
        {
            value: "DP",
            question: "Down payment",
            type: "number",
            placeholder: "Enter down payment...",
            icon: <TbPigMoney />
        },
        {
            value: "email",
            question: "Input email to get max affordability.",
            type: "email",
            placeholder: "Enter email...",
            icon: <IoMdMail />
        },
    ];

    const generateAnimationsStates = (): IAnimationNode[] => {
        let parent: IAnimate | null = null;
        let animations: IAnimationNode[] = [];

        values.forEach((i: IQuestion, index: number) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [animate, setAnimate] = useState("right-to-middle");

            if (index === 0) {
                animations.push({
                    parent: null,
                    value: { animate, setAnimate },
                    child: null,
                });
            } 
            else {
                if (index < values.length) {
                    animations[index - 1].child = { animate, setAnimate };
                }
                animations.push({
                    parent: parent,
                    value: { animate, setAnimate },
                    child: null,
                });
            }

            parent = { animate, setAnimate };
        });

        return animations;
    };

    const animationsStates = generateAnimationsStates();

    useEffect(() => {
        console.log(animationsStates);
    }, [animationsStates]);

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
                    className={className}
                    buttonsTop={buttonsTop}
                />
            ))}
        </>
    );
};

export default DynamicQuestions;
