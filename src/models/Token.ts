import { Schema, model, models } from "mongoose";

interface IToken {
    accessToken: string;
    refreshToken: string;
    expires_in: number;
    created: string;
}

const TokenSchema = new Schema<IToken>({
    accessToken: {
        type: String,
        required: [true, "Access token is required!"],
    },
    refreshToken: {
        type: String,
        required: [true, "Refresh token is required!"],
    },
    expires_in: {
        type: Number,
        required: [true, "Expires_in is required!"]
    },
    created: {
        type: String,
        required: [true, "Created field is required!"]
    }
});

const Token = models?.Token || model("Token", TokenSchema);

export default Token;
