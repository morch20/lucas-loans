export default function refinanceService(
    piPayment: number,
    currentLoanAmount: number,
    creditScore: number,
    MI: number,
    name: string,
    email: string,
    phone: string,
    tags: string[]
) {
    fetch("/api/refinance", {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify({
            email,
            phone: phone.replace("(", "").replace(")", ""),
            name,
            creditScore,
            MI,
            piPayment,
            currentLoanAmount,
            tags,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((e) => console.log(e));
}
