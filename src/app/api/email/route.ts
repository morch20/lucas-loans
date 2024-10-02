import { NextRequest } from "next/server";
import { generateCreditScoreTags } from "@/utils/functions";
import { connectToDB } from "@/utils/db";
import getToken from "@/utils/db/getToken";
import getContact from "@/utils/getContact";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const creditScore = body.creditScore || "0";
        const name = body.name;
        const email = body.email;
        const phone = "+1 " + body.phone;
        const { AN, MI, MD, tags } = body;

        const newCS = generateCreditScoreTags(creditScore);

        await connectToDB();
        const fetchingAccessToken = await getToken();

        const tagsAndCustomFields = {
            tags: ["Max Affordability", newCS, ...tags],
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
            console.log("Updated Home Affordability contact:", updatedData);

            return new Response(JSON.stringify(updatedResponse.status));
        } else {
            console.log("Creating contact: ", email);
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
            console.log("Created Home Affordability contact: ", data);
            return new Response(JSON.stringify(response.status));
        }
    } catch (e) {
        console.log("Error creating Home Affordability contact: ", e);
        return new Response("Invalid Body", { status: 500 });
    }
};

export const GET = async (req: NextRequest) => {
    try {
        await connectToDB();
        const fetchingAccessToken = await getToken();

        const searchParams = req.nextUrl.searchParams;
        const query = searchParams.get("query");
        const action = searchParams.get("action") || "app send email";

        if (!query) return new Response("Invalid Body", { status: 500 });

        console.log("Getting contact: ", query);
        const data = await getContact(query, fetchingAccessToken);

        if (data?.contacts?.length === 1) {
            const updatedResponse = await fetch(
                process.env.API_URL + "contacts/" + data.contacts[0].id,
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
                        tags: [...data.contacts[0].tags, action],
                    }),
                }
            );

            const updatedData = await updatedResponse.json();
            console.log("Updated contact:", updatedData);

            return new Response(JSON.stringify(updatedResponse.status));
        }

        return new Response("Invalid Body", { status: 500 });
    } catch (e) {
        console.log("Error updating contact: ", e);
        return new Response("Invalid Body", { status: 500 });
    }
};
