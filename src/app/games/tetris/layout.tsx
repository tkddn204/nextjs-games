import type { PropsWithChildren } from "react";

export default function TetrisLayout ({ children }: PropsWithChildren) {
    return <div className="p-12">
        {children}
    </div>
};