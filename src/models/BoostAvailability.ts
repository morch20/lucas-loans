import { Schema, model, models } from "mongoose";

interface IBoostAvailability {
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}

const BoostAvailabilitySchema = new Schema<IBoostAvailability>(
    {
        amount: {
            type: Number,
            required: [true, "Amount is required!"],
        },
    },
    { timestamps: true }
);

const BoostAvailability =
    models?.BoostAvailability ||
    model<IBoostAvailability>("BoostAvailability", BoostAvailabilitySchema);

export default BoostAvailability;
