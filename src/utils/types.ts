export type User = {
    id: string;
    email: string;
    password: string;
};

export type BoostAvailability = {
    _id: string;
    amount: string;
    createdAt: Date;
    updatedAt: Date;
};
