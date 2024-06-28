import { cn } from "@/utils/functions";

export type CarouselContentProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function CarouselContent({
    children,
    className = "",
    ...props
}: CarouselContentProps) {
    return (
        <div
            className={cn(
                "w-full h-full flex items-stretch overflow-clip",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
