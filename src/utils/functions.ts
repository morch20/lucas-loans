export function pause(delay = 200) {
    return new Promise((res) => setTimeout(res, delay));
}

export function isNumeric(n: any) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function calculate() {
    
    // left side
    let monthlyIncome = 10000;
    const monthlyDebt = 500;

    // right side
    let escrowPayment = 550;
    let principalAndInterestPayment =  (monthlyIncome / 2) - monthlyDebt - escrowPayment;
    console.log("pip", principalAndInterestPayment);

    // later
     let downPayment = 20000;



    // second equation
    console.log("env", process.env.MORTGAGE_RATE);
    const rate = parseFloat(process.env.NEXT_PUBLIC_MORTGAGE_RATE || "0.07");
    console.log('RATE', rate)
    const n = 12;
    const t = 30;
    const P = ( principalAndInterestPayment * (1 - Math.pow(1 + (rate/n), ((-n)*t)) )) / (rate/n);
    console.log('FINAL VALUE:', P);
    console.log('Total max affordability: ', P + downPayment);
    
}
