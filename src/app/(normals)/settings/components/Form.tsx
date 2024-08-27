"use client";

import { updateBoostAvailability } from "@/utils/actions";
import { useState } from "react";

export default function Form({
    amount,
    updatedAt,
}: {
    amount: number;
    updatedAt: Date;
}) {
    const [newAmount, setNewAmount] = useState(amount);
    const [response, setResponse] = useState<
        | "Success updating boost availability!"
        | "Error updating boost availability!"
    >();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await updateBoostAvailability(newAmount);

        setResponse(res);

        if (res !== "Success updating boost availability!") {
            setNewAmount(amount);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto mt-12 text-start bg-white p-5 flex flex-col items-center gap-y-6 "
        >
            <div className="max-w-xs">
                <label htmlFor="amount">New Boost availability amount</label>
                <input
                    id="amount"
                    name="amount"
                    type="number"
                    value={newAmount}
                    onChange={(e) => setNewAmount(Number(e.target.value))}
                    className=" outline-none w-full max-w-xs rounded p-2 border bg-white focus:outline-primary mt-1"
                    placeholder="Enter new amount..."
                />
            </div>

            <div className="mt-6">
                <p>
                    Last updated:{" "}
                    <span className="text-gray-500">
                        {updatedAt.toLocaleString("en-US", {
                            timeZone: "America/New_York",
                        })}
                    </span>
                </p>
            </div>

            <button
                type="submit"
                className="w-full max-w-xs rounded p-2 mt-6 bg-primary text-white"
            >
                Update
            </button>

            {response && (
                <p
                    className={
                        response === "Success updating boost availability!"
                            ? "text-green-500"
                            : "text-red-500"
                    }
                >
                    {response}
                </p>
            )}
        </form>
    );
}
