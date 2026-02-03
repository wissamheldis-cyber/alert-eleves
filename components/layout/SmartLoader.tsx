"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SmartLoader() {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        // Reset state for new navigation/load
        setIsLoading(true);
        setIsTransitioning(false);
        setShouldRender(true);

        const hasVisited = sessionStorage.getItem("has_visited_alerte_eleves");
        let duration = 1200; // Default: 1.2s for navigation

        if (!hasVisited) {
            duration = 3000; // First visit: 3s
            sessionStorage.setItem("has_visited_alerte_eleves", "true");
        }

        // Timer to start exit transition
        const timerCallback = setTimeout(() => {
            setIsTransitioning(true);

            // Timer to actually remove from DOM (cleanup)
            setTimeout(() => {
                setIsLoading(false);
                setShouldRender(false);
            }, 800); // Wait for transition (~800ms)
        }, duration);

        return () => clearTimeout(timerCallback);
    }, [pathname]);

    if (!shouldRender) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-1000 ease-in-out",
                isTransitioning ? "opacity-0 blur-xl scale-105" : "opacity-100 blur-0 scale-100"
            )}
        >
            <div className="relative h-20 w-80 md:w-96 mb-8 animate-pulse">
                <Image
                    src="/images/logo.png"
                    alt="ALERTE ELEVES"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Minimalist Text Container */}
            <div className={cn(
                "mt-12 text-center z-10 transition-all duration-1000",
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}>
                <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-neutral-400">
                    Prévenir avant de guérir
                </p>
                {/* Optional subtle glow or line if needed, but keeping it minimal per inspiration */}
            </div>
        </div>
    );
}
