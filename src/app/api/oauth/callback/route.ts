import { callback } from "@/utils/goHighLevel";
import { NextRequest } from "next/server";
import { connectToDB } from "@/utils/db";
import Token from "@/models/Token";

export const GET = async (req: NextRequest) => {

    try {
        
        const { searchParams } = new URL(req.url);
        const code = searchParams.get('code') || "";
    
        const token = await callback(code);
    
        await connectToDB();
        if(token && token?.access_token){
            const newToken = await Token.findOneAndUpdate(
                { _id: "6590ebaf7ffcd4b1842d708a" },
                {
                    accessToken: token.access_token,
                    refreshToken: token.refresh_token,
                    expires_in: token.expires_in,
                    created: new Date().toString(),
                }
            );
            console.log("Updated!", newToken);
            return new Response(JSON.stringify(newToken));
        }
    
        console.log("Same token :(");
        return new Response(JSON.stringify(token));
    } 
    catch (error) {
        console.log(error);
        return new Response("Invalid body", {status: 500});
    }
};