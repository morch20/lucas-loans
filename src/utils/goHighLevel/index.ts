import { IAccessToken } from "@/Interfaces";
import { redirect } from "next/navigation";
const qs = require("qs");

const clientId = process.env.CLIENT_ID || "";
const clientSecret = process.env.CLIENT_SECRET || "";

export async function callback(code: string) {

    try {
        const response = await fetch(
            "https://services.leadconnectorhq.com/oauth/token",
            {
                cache: "no-store",
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: qs.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: "authorization_code",
                    code: code,
                    user_type: "Location",
                    redirect_uri: "http://localhost:3000/api/oauth/callback",
                })
            }
        );

        const data: IAccessToken = await response.json();
        return data;

    } 
    catch (e) {
        console.log('Error on callback!');
        console.log(e);
        return null;
    }
}

export function initiate() {
    const options = {
        requestType: "code",
        redirectUri: "http://localhost:3000/api/oauth/callback",
        scopes: [
            "contacts.write",
            "locations/tags.readonly",
            "locations/customFields.readonly",
            "locations/tags.write",
            "locations/customFields.write",
        ],
    };

    redirect(`
        https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=${
            options.requestType
        }&redirect_uri=${
            options.redirectUri
        }&client_id=${clientId}&scope=${options.scopes.join(" ")}
    `);

}

export async function refresh(refreshToken: string) {

    try {
        const response = await fetch(
            "https://services.leadconnectorhq.com/oauth/token",
            {
                cache: "no-store",
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: qs.stringify({
                    client_id: clientId,
                    client_secret: clientSecret,
                    grant_type: "refresh_token",
                    refresh_token: refreshToken,
                    user_type: "Location",
                    redirect_uri: "http://localhost:3000/oauth/callback",
                })
            }
        );

        const data = await response.json();
        console.log("Refresh data: ", data);
        return data;

    } 
    catch (error) {
        console.log("Error on refresh!");
        console.log(error);
        return null;
    }
}
