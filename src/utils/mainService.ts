import { calculate } from "./functions";

export default function mainService(
    creditScore: number,
    monthlyIncome: number,
    monthlyDebt: number,
    downPayment: number,
    email: string,
    number: string,
    name: string,
    tags: string[]
) {
    // event("Lead");
    // @ts-ignore
    function gtag_report_conversion(url?: any) {
        var callback = function () {
            if (typeof url != "undefined") {
                window.location = url;
            }
        };
        // @ts-ignore
        gtag("event", "conversion", {
            send_to: "AW-16532080367/nsqrCN_AzLYZEO-Njss9",
            event_callback: callback,
        });
        return false;
    }
    gtag_report_conversion();

    fetch("/api/email", {
        cache: "no-store",
        method: "POST",
        body: JSON.stringify({
            email,
            phone: number.replace("(", "").replace(")", ""),
            name,
            creditScore,
            MI: monthlyIncome,
            MD: monthlyDebt,
            AN: calculate(
                monthlyIncome,
                monthlyDebt,
                downPayment
            ).toLocaleString(),
            tags,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((e) => console.log(e));
}
