"use client";
import { IAnimationNode, IState, IStateNumber, IQuestion } from "@/Interfaces";
import { isNumeric, pause } from "@/utils/functions";
import { FaArrowLeftLong } from "react-icons/fa6";

const Question = ({
    question,
    index,
    maxIndex,
    strict,
    animationState,
    inputState,
    className,
    buttonsTop,
    currentIndex,
    limit
}: {
    question: IQuestion;
    index: number;
    maxIndex: number;
    strict: boolean;
    animationState: IAnimationNode;
    inputState: IState;
    className: string;
    buttonsTop: boolean;
    currentIndex: IStateNumber;
    limit: number | undefined
}) => {

    const handleBack = async () => {
        if (index > 0) {
            animationState.parent?.setState("left-to-middle");
            animationState.child?.setState("right-to-middle");
            animationState.value.setState("middle-to-right");
            await pause(400);
            currentIndex.setState(prev => prev - 1);
        }
    };

    const handleNext = async () => {
        // TODO: change 'true' to validate if the input is valid
        if (index < maxIndex && inputState.state && inputState.state !== '0') {
            animationState.parent?.setState("left-to-middle");
            animationState.child?.setState("right-to-middle");
            animationState.value.setState("middle-to-left");
            await pause(400);
            currentIndex.setState(prev => prev + 1);
        }
    };

    if(currentIndex.state !== index) return <></>;

    return (
        <>
            <div className="max-h-[40rem] h-full md:w-1/2 md:h-auto flex flex-col md:flex-initial flex-auto">
                {buttonsTop && (
                    <div
                        className={
                            "w-full h-10 flex justify-between items-center "
                        }
                    >
                        <button
                            onClick={handleBack}
                            className={
                                " flex items-center justify-center text-lg w-16 h-9 transition-all rounded-md " +
                                (index !== 0
                                    ? " shadow-md hover:shadow-lg active:shadow-lg hover:text-xl active:text-xl bg-white "
                                    : " cursor-default bg-gray-300")
                            }
                        >
                            <FaArrowLeftLong />
                        </button>
                        <button
                            onClick={handleNext}
                            className={
                                " flex items-center justify-center text-lg w-16 h-9 transition-all rounded-md shadow-md " +
                                (inputState.state && inputState.state !== "0"
                                    ? index === maxIndex
                                        ? "bg-secondary text-white hover:bg-primary active:bg-primary hover:text-xl active:text-xl hover:shadow-lg active:shadow-md"
                                        : "bg-white hover:text-xl active:text-xl hover:shadow-lg active:shadow-md"
                                    : "cursor-default bg-gray-300")
                            }
                        >
                            <FaArrowLeftLong className=" rotate-180" />
                        </button>
                    </div>
                )}
                <div className={className + " " + animationState.value.state}>
                    <div className="w-4/5 flex items-center">
                        <div className=" text-2xl lg:text-4xl bg-secondary p-4 rounded-full border border-white text-white">
                            {question.icon}
                        </div>
                        <h2 className="text-xl pl-5 sm:pl-10 md:pl-12 lg:text-2xl xl:text-3xl font-medium">
                            {question.question}
                        </h2>
                    </div>
                    {question.subtext && (
                        <p className="text-gray-500 text-center xl:text-lg">
                            {question.subtext}
                        </p>
                    )}
                    <input
                        type={question.type}
                        className=" outline-none w-4/5 rounded py-1 px-2 bg-gray-200 focus:outline-primary"
                        placeholder={question.placeholder}
                        value={inputState.state}
                        onChange={() => {}}
                        onKeyUp={(e) => {
                            if (e.key === "Backspace" && inputState.state) {
                                const newValue = parseFloat(
                                    inputState.state
                                        .substring(
                                            0,
                                            inputState.state.length - 1
                                        )
                                        .replaceAll(",", "") + e.key
                                ).toLocaleString();
                                inputState.setState(
                                    newValue === "NaN" ? "0" : newValue
                                );
                            }
        
                            if (!isNumeric(e.key) || inputState.state.length > 7 )return;
                            else {
                                const newValue = parseFloat(
                                    inputState.state.replaceAll(",", "") + e.key
                                );
                                if(limit && newValue > 850) return;
                                inputState.setState(newValue.toLocaleString());
                            }
                        }}
                    />
                    <div className="w-full xsm:w-4/5 flex items-center justify-around">
                        {[...Array(maxIndex + 1).keys()].map((i: number) => {
                            if (maxIndex === 0) return <></>;
                            return (
                                <>
                                    <div
                                        className={
                                            " flex items-center justify-center rounded-full w-8 h-8 text-white " +
                                            (index > i
                                                ? "bg-primary "
                                                : "bg-gray-400 ") +
                                            (index === i
                                                ? " border-secondary border-2"
                                                : "")
                                        }
                                    >
                                        {i + 1}
                                    </div>
                                    {i !== maxIndex && (
                                        <div
                                            className={
                                                "  rounded-xl w-[5%] sm:w-[10%] md:w-[15%] min-w-[2rem] h-1 text-white " +
                                                (index > i
                                                    ? "bg-primary"
                                                    : "bg-gray-400")
                                            }
                                        ></div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;
