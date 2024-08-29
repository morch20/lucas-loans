"use server";

import BoostAvailability from "@/models/BoostAvailability";

export const updateBoostAvailability = async (amount: number) => {
    try {
        await BoostAvailability.findOneAndUpdate({
            amount,
        });

        return "Success updating boost availability!";
    } catch (error) {
        console.log(error);
        return "Error updating boost availability!";
    }
};
