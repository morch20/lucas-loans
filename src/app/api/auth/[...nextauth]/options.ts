import { User } from "@/utils/types";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "jsmith@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req): Promise<User | null> {
                const validCredentials = {
                    id: "1",
                    email: process.env.EMAIL || "",
                    password: process.env.PASSWORD || "",
                };

                if (
                    validCredentials.email === "" ||
                    validCredentials.password === ""
                ) {
                    console.log(
                        "Missing EMAIL or PASSWORD environment variables"
                    );
                    return null;
                }
                if (
                    credentials?.email === validCredentials.email &&
                    credentials?.password === validCredentials.password
                ) {
                    console.log("Valid credentials");
                    return validCredentials;
                }
                // Return null if user data could not be retrieved
                return null;
            },
        }),
    ],
    // pages: {
    //     signIn: "/login",
    // }
};
