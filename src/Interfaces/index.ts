import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

interface IQuestion {
    value: string;
    question: string;
    subtext?: string;
    type: string;
    placeholder: string;
    icon: any
}

interface IAnimate {
    animate: string;
    setAnimate: Dispatch<SetStateAction<string>>;
}

interface IAnimationNode {
    parent: IAnimate | null;
    value: IAnimate;
    child: IAnimate | null;
}

export type { IQuestion as IQuestion };
export type { IAnimate as IAnimate };
export type { IAnimationNode as IAnimationNode };
