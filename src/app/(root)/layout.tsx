import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container w-full h-full px-5 sm:px-7 overflow-x-clip">
            {children}
        </div>
    );
}
