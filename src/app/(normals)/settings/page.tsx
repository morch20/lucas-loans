import BoostAvailability from "@/models/BoostAvailability";
import { connectToDB } from "@/utils/db";
import { Mina } from "next/font/google";
import Form from "./components/Form";
import Link from "next/link";

const mina = Mina({
    subsets: ["latin"],
    weight: "700",
    variable: "--font-mina",
});
export default async function page() {
    await connectToDB();
    const boost = await BoostAvailability.findOne();

    if (!boost) {
        console.log("Error getting boost availability! Boost:", boost);
    }

    return (
        <main className="min-h-screen w-full py-11 space-y-12">
            <section className="text-center sayHi">
                <h2 className={mina.className + " text-3xl sm:text-4xl"}>
                    Welcome back
                </h2>
                <h2
                    className={
                        mina.className + " text-3xl sm:text-4xl text-primary"
                    }
                >
                    Lucas <span className="absolute">👋</span>
                </h2>
            </section>

            {boost ? (
                <section className="text-center">
                    <h3 className="text-2xl">Change Boost availability</h3>
                    <Form amount={boost.amount} updatedAt={boost.updatedAt} />
                </section>
            ) : (
                <section className="text-center">
                    <h3 className="text-2xl">
                        Error getting the boost availability
                    </h3>
                </section>
            )}

            <section className="text-center">
                <Link href={"/api/auth/signout"} className="text-red-500">
                    Sing out
                </Link>
            </section>
        </main>
    );
}
