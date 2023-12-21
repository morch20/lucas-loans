import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const creditScore = body.creditScore || "0";
        const name = body.name;
        const email = body.email;

        let newCS = "Poor";
        if (creditScore < 580) newCS = "Poor";
        else if (creditScore >= 580 && creditScore <= 669) newCS = "Fair";
        else if (creditScore >= 670 && creditScore <= 739) newCS = "Good";
        else if (creditScore >= 740 && creditScore <= 799) newCS = "Very Good";
        else newCS = "Excellent";

        const response = await fetch(process.env.API_URL || "", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + process.env.API_KEY,
            },
            body: JSON.stringify({
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    PHONE: "",
                },
                tags: ["Max Affordability", newCS],
            }),
        });

        const data = await response.json();
        return new Response(JSON.stringify(data?.status));
    } catch (e) {
        console.log(e);
        return new Response("Invalid Body", { status: 500 });
    }
};
