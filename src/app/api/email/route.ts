import { NextRequest } from "next/server";
import { generateCreditScoreTags } from "@/utils/functions";
import { connectToDB } from "@/utils/db";
import Token from "@/models/Token";
import { addSeconds } from "@/utils/functions";
import { refresh } from "@/utils/goHighLevel";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const creditScore = body.creditScore || "0";
        const name = body.name;
        const email = body.email;
        const phone = "+1 " + body.phone;
        const { AN, MI, MD } = body;

        const newCS = generateCreditScoreTags(creditScore);

        await connectToDB();
        const token = await Token.findOne();
        console.log(token)
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
                "locationId": process.env.LOCATION_ID,
                name,
                email,
                phone,
                tags: ["Max Affordability", newCS],
                customFields: [
                    {
                        id: "Q2V4KRcnsmEgNlAYBVS6",
                        key: "contact.an",
                        field_value: AN,
                    },
                    {
                        id: "85u25DxpvkXfXN0tmy6g",
                        key: "contact.mi",
                        field_value: MI,
                    },
                    {
                        id: "4hNzCw0ilqnnUNxr0OYb",
                        key: "contact.md",
                        field_value: MD,
                    },
                ],
            }),
        });

        const data = await response.json();
        console.log("data:", data);
        return new Response(JSON.stringify(response.status));
    } catch (e) {
        console.log(e);
        return new Response("Invalid Body", { status: 500 });
    }
};
