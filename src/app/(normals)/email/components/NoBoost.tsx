import { Mina } from "next/font/google";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function NoBoost() {
    return (
        <>
            <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                Now you are pre-qualified
            </h2>
            <h2 className={mina.className + " text-2xl sm:text-3xl mb-4"}>
                Finish to get the best rates guaranteed.
            </h2>
            <p className={"text-lg font-medium mb-4 "}>
                You don&apos;t need to talk to a single lender or bank.
                <span className="text-primary">
                    {" "}
                    We will give you the best options for you to pick.
                </span>{" "}
            </p>
        </>
    );
}
