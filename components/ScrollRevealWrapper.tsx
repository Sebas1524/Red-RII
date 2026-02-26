"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ReactNode } from "react";

interface ScrollRevealWrapperProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default function ScrollRevealWrapper({
    children,
    className = "",
    style = {},
}: ScrollRevealWrapperProps) {
    const containerRef = useScrollReveal();

    return (
        <div ref={containerRef} className={className} style={style}>
            {children}
        </div>
    );
}
