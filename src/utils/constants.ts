import { IQuestion } from "@/Interfaces";
import { MdCreditScore, MdPayments, MdAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

const values: IQuestion[] = [
    {
        value: "MI",
        question: "Monthly income before taxes.",
        subtext:
            "Please put in the amount you make per month before taxes",
        type: "text",
        placeholder: "Enter monthly income...",
        icon: MdAttachMoney,
    },
    {
        value: "MD",
        question: "Monthly debt payments.",
        subtext:
            "Include car loans, credit card payments, personal loans and other mortgages.",
        type: "text",
        placeholder: "Enter monthly debt...",
        icon: MdPayments ,
    },
    {
        value: "CS",
        question: "Estimated Credit score.",
        subtext: "300-850",
        type: "text",
        placeholder: "Enter credit score...",
        limit: 850,
        icon: MdCreditScore ,
    },
    {
        value: "DP",
        question: "Down payment",
        subtext: "3-5% minimum for conventional loans and 3.5% for FHA",
        type: "text",
        placeholder: "Enter down payment...",
        icon: TbPigMoney ,
    }
];

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export { values, emailValidator };