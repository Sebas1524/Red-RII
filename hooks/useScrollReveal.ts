"use client";

import { useEffect, useRef } from "react";


export function useScrollReveal(dependencies: any[] = []) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const targets = root.querySelectorAll(".scroll-reveal, .stagger-children");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, dependencies);

    return containerRef;
}
