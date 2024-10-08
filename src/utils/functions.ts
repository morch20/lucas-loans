import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function pause(delay = 200) {
    return new Promise((res) => setTimeout(res, delay));
}

export function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function validateInput(value: string | null | undefined) {
    return value && value !== "0";
}

export function formatPhoneNumber(input: string): string {
    input = input.replace(/\D/g, "");
    const size = input.length;
    if (size > 0) {
        input = "(" + input;
    }
    if (size > 3) {
        input = input.slice(0, 4) + ")-" + input.slice(4, 11);
    }
    if (size > 6) {
        input = input.slice(0, 9) + "-" + input.slice(9);
    }
    return input;
}

export function phoneValidator(input: string): boolean {
    return input.replace(/\D/g, "").length === 10;
}

export function calculate(
    monthlyIncome: number,
    monthlyDebt: number,
    downPayment: number
): number {
    // right side
    const escrowPayment = 550;
    // ! monthlyIncome is now a yearly income
    let principalAndInterestPayment =
        monthlyIncome / 12 / 2 - monthlyDebt - escrowPayment;

    // second equation
    const rate = parseFloat(process.env.NEXT_PUBLIC_MORTGAGE_RATE || "0.07");
    console.log("Rate:", rate);
    const n = 12;
    const t = 30;
    const P =
        (principalAndInterestPayment * (1 - Math.pow(1 + rate / n, -n * t))) /
        (rate / n);
    console.log("P: ", P);
    const total = P + downPayment;
    console.log("Total max affordability: ", total);
    if (total < 0) return 0;
    return Math.trunc(P + downPayment);
}

export function calculateRefinance(
    currentLoanAmount: number,
    piPayment: number
) {
    // // Get percentage value
    // currentInterestRate = currentInterestRate / 100;

    // // New payment
    // const NP =
    //     currentLoanAmount *
    //     ((currentInterestRate * Math.pow(1 + currentInterestRate, 360)) /
    //         (Math.pow(1 + currentInterestRate, 360) - 1));

    // // Monthly Savings
    // const MS = piPayment - NP;

    // // if (MS < 0) return 0;
    // return Math.trunc(MS);

    const rate = 0.053;
    const n = 12; // Number of payments per year

    // Regular Monthly Payment
    const R =
        (currentLoanAmount * (rate / n)) / (1 - Math.pow(1 + rate / n, -360));

    // Monthly Savings
    const MS = piPayment - R;

    if (MS < 0) return 0;
    return Math.trunc(MS);
}

export function generateCreditScoreTags(creditScore: number): string {
    let newCS = "Poor";
    if (creditScore < 580) newCS = "Poor";
    else if (creditScore >= 580 && creditScore <= 669) newCS = "Fair";
    else if (creditScore >= 670 && creditScore <= 739) newCS = "Good";
    else if (creditScore >= 740 && creditScore <= 799) newCS = "Very Good";
    else newCS = "Excellent";

    return newCS;
}

export function addSeconds(date: Date, seconds: number) {
    const dateCopy = new Date(date);
    dateCopy.setSeconds(date.getSeconds() + seconds);
    return dateCopy;
}
