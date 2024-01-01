import { Dispatch, SetStateAction } from "react";

interface IQuestion {
    value: string;
    question: string;
    type: string;
    placeholder: string;
    icon: any;
    subtext?: string;
    limit?: number;
}

interface IState {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
}

interface IStateNumber {
    state: number;
    setState: Dispatch<SetStateAction<number>>;
}

interface IAnimationNode {
    parent: IState | null;
    value: IState;
    child: IState | null;
}

interface IAccessToken {
    "access_token": string;
    "token_type": string;
    "expires_in": number;
    "refresh_token": string;
    "scope": string;
    "userType": string;
    "companyId": string;
    "locationId": string;
    "userId": string;
}

export type { IQuestion as IQuestion };
export type { IState as IState };
export type { IStateNumber as IStateNumber };
export type { IAnimationNode as IAnimationNode };
export type { IAccessToken as IAccessToken };
