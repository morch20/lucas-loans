import { Mina } from "next/font/google";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});

export default function TryAgain() {
    return (
        <>
            <h2 className={mina.className + " text-2xl sm:text-3xl"}>
                Does something seems off with your Results?
            </h2>
            <h2 className={mina.className + " text-2xl sm:text-3xl mb-4"}>
                It might be a simple fix
            </h2>
            <p className={"text-lg font-medium "}>
                Watch the video to find out how to improve your numbers.
            </p>
        </>
    );
}
