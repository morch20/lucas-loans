import { IQuestion } from "@/Interfaces";
import { MdCreditScore, MdPayments, MdAttachMoney } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";

export const values: IQuestion[] = [
    {
        value: "MI",
        question: "Monthly income before taxes.",
        subtext: "Please put in the amount you make per month before taxes.",
        type: "tel",
        placeholder: "Enter monthly income...",
        icon: MdAttachMoney,
    },
    {
        value: "MD",
        question: "Monthly debt payments.",
        subtext:
            "Include car loans, credit card payments, personal loans and other mortgages.",
        type: "tel",
        placeholder: "Enter monthly debt...",
        icon: MdPayments,
    },
    {
        value: "CS",
        question: "Estimated Credit score.",
        subtext: "300-850",
        type: "tel",
        placeholder: "Enter credit score...",
        limit: 850,
        icon: MdCreditScore,
    },
    {
        value: "DP",
        question: "Down payment",
        subtext:
            "3-5% minimum for conventional loans and 3.5% for FHA.\n*Please put a dollar amount*",
        type: "tel",
        placeholder: "Enter down payment...",
        icon: TbPigMoney,
    },
];

export const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const howToBuyAHouseSteps = [
    {
        title: "Assess Your Finances",
        description:
            "Start by reviewing your credit score and financial situation. Determine how much you can comfortably afford, factoring in all potential costs like the down payment, closing fees, and monthly mortgage payments.",
        imageUrl: "/howToBuyAHouse/assessYourFinances.svg",
    },
    {
        title: "Get Preapproved for a Mortgage",
        description:
            "Connect with us to find the best mortgage rates and terms. Our experts will help you gather the necessary documents to get preapproved, giving you a clear picture of your borrowing power.",
        imageUrl: "/howToBuyAHouse/getPreapprovedForAMortgage.svg",
    },
    {
        title: "Choose Your Real Estate Agent",
        description:
            "Pick an agent who knows your desired neighborhood and can provide valuable insights. A great agent will be your guide through the complexities of the market.",
        imageUrl: "/howToBuyAHouse/chooseYourRealEstateAgent.svg",
    },
    {
        title: "Begin House Hunting",
        description:
            "List your priorities and preferences for your new home. Visit open houses and schedule showings to find the perfect match.",
        imageUrl: "/howToBuyAHouse/beginHouseHunting.svg",
    },
    {
        title: "Make a Competitive Offer",
        description:
            "With your agent's help, craft an offer that stands out in the current market conditions. Be ready for potential negotiations to get the best deal.",
        imageUrl: "/howToBuyAHouse/makeACompetitiveOffer.svg",
    },
    {
        title: "Conduct a Home Inspection",
        description:
            "Hire a professional to inspect the property thoroughly. Use their report to address any concerns and negotiate repairs or adjustments if needed.",
        imageUrl: "/howToBuyAHouse/conductAHomeInspection.svg",
    },
    {
        title: "Finalize Your Mortgage",
        description:
            "Work closely with us to complete your mortgage application. We'll guide you through locking in your interest rate and submitting any additional documents.",
        imageUrl: "/howToBuyAHouse/finalizeYourMortgage.svg",
    },
    {
        title: "Close the Deal",
        description:
            "Review and sign all necessary closing documents. Pay your down payment and closing costs, and then receive the keys to your new home!",
        imageUrl: "/howToBuyAHouse/closeTheDeal.svg",
    },
];
