"use server";

import Token from "@/models/Token";
import { connectToDB } from "./db";
import { addSeconds, generateCreditScoreTags } from "./functions";
import { unstable_noStore as noStore } from "next/cache";
import { refresh } from "./goHighLevel";

export default async function refinanceService(
    piPayment: number,
    currentLoanAmount: number,
    creditScore: number,
    MI: number,
    name: string,
    email: string,
    phone: string,
    tags: string[]
) {
    noStore();
    try {
        const newCS = generateCreditScoreTags(creditScore);

        await connectToDB();
        const token = await Token.findOne();
        console.log(token);
        let fetchingAccessToken = token.accessToken;

        const date = new Date(token.created);
        const newDate = addSeconds(date, token.expires_in);

        if (new Date() >= newDate) {
            console.log("EXPIRED");
            const newToken = await refresh(token.refreshToken);

            const savedToken = await Token.findOneAndUpdate(
                { _id: "6590ebaf7ffcd4b1842d708a" },
                {
                    accessToken: newToken.access_token,
                    refreshToken: newToken.refresh_token,
                    expires_in: newToken.expires_in,
                    created: new Date().toString(),
                }
            );
            console.log("DB Updated!", savedToken);
            fetchingAccessToken = savedToken.accessToken;
        }

        const response = await fetch(process.env.API_URL + "contacts/", {
            cache: "no-store",
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + fetchingAccessToken,
                "Content-Type": "application/json",
                Version: "2021-07-28",
            },
            body: JSON.stringify({
                locationId: process.env.LOCATION_ID,
                name,
                email,
                phone,
                tags: ["Refinance", newCS, ...tags],
                customFields: [
                    {
                        id: "N9nbliVr6lte0aG8bS5s",
                        key: "contact.pi_payment",
                        field_value: piPayment.toString(),
                    },
                    {
                        id: "85u25DxpvkXfXN0tmy6g",
                        key: "contact.mi",
                        field_value: MI.toString(),
                    },
                    {
                        id: "oslhBfBLZKjzcMdM3J1Y",
                        key: "contact.remaining_mortgage_balance",
                        field_value: currentLoanAmount.toString(),
                    },
                ],
            }),
        });

        const data = await response.json();
        console.log("data:", data);
        return new Response(JSON.stringify(response.status));
    } catch (e) {
        console.log(e);
    }
}
