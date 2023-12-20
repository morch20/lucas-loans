export function pause(delay = 200) {
    return new Promise((res) => setTimeout(res, delay));
}

export function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function validateInput(value: string | null | undefined){
    return value && value !== "0";
}

export function calculate(monthlyIncome: number, monthlyDebt: number, downPayment: number): number {
    // right side
    const escrowPayment = 550;
    let principalAndInterestPayment =  (monthlyIncome / 2) - monthlyDebt - escrowPayment;

    // second equation
    const rate = parseFloat(process.env.NEXT_PUBLIC_MORTGAGE_RATE || "0.07");
    const n = 12;
    const t = 30;
    const P = ( principalAndInterestPayment * (1 - Math.pow(1 + (rate/n), ((-n)*t)) )) / (rate/n);
    console.log("P: ", P);
    console.log('Total max affordability: ', P + downPayment);
    return Math.trunc(P + downPayment);
    
}
