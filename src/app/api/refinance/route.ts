import { NextRequest } from "next/server";
import { generateCreditScoreTags } from "@/utils/functions";
import { connectToDB } from "@/utils/db";
import getToken from "@/utils/db/getToken";
import getContact from "@/utils/getContact";

export const POST = async (req: NextRequest) => {
    try {
        await connectToDB();

        const body = await req.json();
        const creditScore = body.creditScore || "0";
        const name = body.name;
        const email = body.email;
        const phone = "+1 " + body.phone;
        const { piPayment, MI, currentLoanAmount, tags } = body;

        const newCS = generateCreditScoreTags(creditScore);

        const fetchingAccessToken = await getToken();

        const tagsAndCustomFields = {
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
        };

        console.log("Getting contact: ", email);
        const contact = await getContact(email, fetchingAccessToken);

        if (contact?.contacts?.length === 1) {
            console.log("Updating contact: ", email);
            const updatedResponse = await fetch(
                process.env.API_URL + "contacts/" + contact.contacts[0].id,
                {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + fetchingAccessToken,
                        "Content-Type": "application/json",
                        Version: "2021-07-28",
                    },
                    cache: "no-store",
                    body: JSON.stringify({
                        tags: [
                            ...contact.contacts[0]?.tags,
                            ...tagsAndCustomFields.tags,
                        ],
                        customFields: [
                            ...contact.contacts[0]?.customFields,
                            ...tagsAndCustomFields.customFields,
                        ],
                    }),
                }
            );

            const updatedData = await updatedResponse.json();
            console.log("Updated Refinance contact:", updatedData);

            return new Response(JSON.stringify(updatedResponse.status));
        } else {
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
                    ...tagsAndCustomFields,
                }),
            });

            const data = await response.json();
            console.log("Created Refinance contact: ", data);
            return new Response(JSON.stringify(response.status));
        }
    } catch (e) {
        console.log(e);
        return new Response("Invalid Body", { status: 500 });
    }
};
