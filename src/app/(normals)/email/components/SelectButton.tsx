"use client";

import { cn } from "@/utils/functions";

export type SelectButtonProps<T> = {
    selected: boolean;
    value: T;
    handleClick: Function;
    lordIcon: string;
    className?: string;
    textClassName?: string;
    lordIconClassName?: string;
};

export default function SelectButton<T>({
    selected,
    value,
    handleClick,
    lordIcon,
    className = "",
    textClassName = "",
    lordIconClassName = "",
}: SelectButtonProps<T>) {
    return (
        <button
            onClick={() => handleClick()}
            type="button"
            className={cn(
                "w-full md:max-w-[11rem] flex flex-col items-center border p-2 bg-white rounded-md hover:shadow-md",
                {
                    " outline outline-primary": selected,
                },
                className
            )}
        >
            <lord-icon
                src={lordIcon}
                trigger="hover"
                colors="primary:#073944,secondary:#1560bd"
                class={cn("w-12 h-12 md:w-28 md:h-28", lordIconClassName)}
            />
            <p className={cn("md:text-lg", textClassName)}>{value as string}</p>
        </button>
    );
}
