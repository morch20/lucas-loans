import Token from "@/models/Token";
import { addSeconds } from "../functions";
import { refresh } from "../goHighLevel";

export default async function getToken() {
    console.log("Getting token...");
    const token = await Token.findOne();
    let fetchingAccessToken = token.accessToken;

    const date = new Date(token.created);
    const newDate = addSeconds(date, token.expires_in);

    if (new Date() >= newDate) {
        console.log("Refreshing token...");
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
        console.log("Refreshed token saved to DB", savedToken);
        fetchingAccessToken = savedToken.accessToken;
    }

    console.log("Fetched token successfully", fetchingAccessToken.created);
    return fetchingAccessToken;
}
