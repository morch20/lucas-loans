import { Mina } from "next/font/google";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function Boost({ amount }: { amount: number }) {
    return (
        <>
            <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                You just got Pre-Qualified!
            </h2>
            <h2 className={mina.className + " text-2xl sm:text-3xl mb-4"}>
                Now claim $23,435 in savings
            </h2>
            <p className={"text-lg font-medium mb-4 "}>
                <span className="text-primary">
                    You can buy a home with no money out of pocket!
                </span>{" "}
                If you don&apos;t believe me, watch the video.
            </p>
            <p className={" text-lg font-medium "}>
                Limited time offer we only have:{" "}
            </p>
            <p className={" text-lg font-medium text-red-500 "}>
                {amount} spots left
            </p>
        </>
    );
}
