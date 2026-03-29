"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LiquidLoaderPage() {
    const [phase, setPhase] = useState<"initial" | "splitting" | "split">("initial");

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("splitting"), 2500);
        const t2 = setTimeout(() => setPhase("split"), 3200);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col font-sans select-none">

            {/* ── SVG Goo Filter ── */}
            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 38 -18" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            {/* ── WARPED MESH GRID (like the reference image) ── */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.07]"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <filter id="warp">
                            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" seed="5" result="noise" />
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
                        </filter>
                    </defs>
                    <g filter="url(#warp)">
                        {/* Vertical lines */}
                        {Array.from({ length: 30 }).map((_, i) => (
                            <line key={`v${i}`} x1={`${(i / 29) * 100}%`} y1="0" x2={`${(i / 29) * 100}%`} y2="100%" stroke="white" strokeWidth="0.5" />
                        ))}
                        {/* Horizontal lines */}
                        {Array.from({ length: 18 }).map((_, i) => (
                            <line key={`h${i}`} y1={`${(i / 17) * 100}%`} x1="0" y2={`${(i / 17) * 100}%`} x2="100%" stroke="white" strokeWidth="0.5" />
                        ))}
                    </g>
                </svg>
                {/* Radial black hole mask in the centre */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse 55% 55% at 50% 50%, #000 20%, transparent 75%)"
                    }}
                />
            </div>

            {/* ── TOP STRIPE ── */}
            <div className="relative z-20 w-full bg-[#CC0000] h-10 flex items-center justify-center shrink-0">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-white">Prévention</span>
            </div>

            {/* ── MAIN STAGE ── */}
            <div className="flex-1 relative z-10 flex flex-col items-center justify-center min-h-0">

                {/* Gooey blobs layer */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ filter: "url(#goo)" }}>
                    {/* Centre blob */}
                    <div className={cn(
                        "absolute w-72 h-72 md:w-96 md:h-96 transition-all duration-[2000ms] ease-in-out animate-blob-1",
                        phase === "initial" ? "scale-100 bg-white/20" : "scale-[2.5] opacity-0"
                    )} />
                    {/* Left — Elèves */}
                    <div className={cn(
                        "absolute w-52 h-52 md:w-72 md:h-72 transition-all duration-[1600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] animate-blob-2",
                        phase === "split" || phase === "splitting" ? "scale-100" : "scale-0",
                        phase === "split" ? "-translate-y-[140px] md:translate-y-0 md:-translate-x-[210px] lg:-translate-x-[270px] bg-red-700/90" : "bg-white/20"
                    )} />
                    {/* Right — Pros */}
                    <div className={cn(
                        "absolute w-52 h-52 md:w-72 md:h-72 transition-all duration-[1600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] animate-blob-3",
                        phase === "split" || phase === "splitting" ? "scale-100" : "scale-0",
                        phase === "split" ? "translate-y-[140px] md:translate-y-0 md:translate-x-[210px] lg:translate-x-[270px] bg-zinc-700/90" : "bg-white/20"
                    )} />
                </div>

                {/* TITLE — Phase initial */}
                <div className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-700",
                    phase === "initial" ? "opacity-100 scale-100" : "opacity-0 scale-110 blur-sm"
                )}>
                    <h1
                        className="text-[clamp(3rem,12vw,7rem)] font-black uppercase tracking-[0.05em] text-white leading-none text-center"
                        style={{
                            textShadow: "0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(255,255,255,0.4), 0 0 120px rgba(255,255,255,0.2)",
                            fontFamily: "var(--font-sora), Impact, sans-serif"
                        }}
                    >
                        ALERT&apos;<br className="hidden md:block" />ÉLÈVES
                    </h1>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="h-px w-12 bg-[#CC0000]" />
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#CC0000]">A.M. 17</span>
                        <div className="h-px w-12 bg-[#CC0000]" />
                    </div>
                </div>

                {/* PORTAL LINKS — Phase split */}
                {/* Left — Élèves */}
                <div className={cn(
                    "absolute w-52 h-52 md:w-72 md:h-72 transition-all duration-[1600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    phase === "split" ? "opacity-100 -translate-y-[140px] md:translate-y-0 md:-translate-x-[210px] lg:-translate-x-[270px]" : "opacity-0 scale-50 pointer-events-none"
                )}>
                    <Link href="/eleves" className={cn(
                        "absolute inset-0 glass-3d-red animate-blob-2 flex flex-col items-center justify-center p-6 text-center group transition-all duration-500",
                        phase === "split" ? "pointer-events-auto hover:scale-105 hover:shadow-[0_0_120px_rgba(204,0,0,0.7)]" : "pointer-events-none"
                    )}>
                        <Users className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-lg" />
                        <h2 className="text-base md:text-xl font-black text-white tracking-[0.2em] uppercase" style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}>
                            Portail Élèves
                        </h2>
                        <p className="text-[10px] md:text-[11px] text-red-200/80 font-bold tracking-widest uppercase mt-1">Collège & Lycée</p>
                    </Link>
                </div>

                {/* Right — Pros */}
                <div className={cn(
                    "absolute w-52 h-52 md:w-72 md:h-72 transition-all duration-[1600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                    phase === "split" ? "opacity-100 translate-y-[140px] md:translate-y-0 md:translate-x-[210px] lg:translate-x-[270px]" : "opacity-0 scale-50 pointer-events-none"
                )}>
                    <Link href="/pros" className={cn(
                        "absolute inset-0 glass-3d-white animate-blob-3 flex flex-col items-center justify-center p-4 md:p-6 text-center group border border-white/10 transition-all duration-500",
                        phase === "split" ? "pointer-events-auto hover:scale-105 hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]" : "pointer-events-none"
                    )}>
                        <Shield className="w-10 h-10 md:w-12 md:h-12 text-white mb-3 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-lg" />
                        <h2 className="text-base md:text-xl font-black text-white tracking-[0.2em] uppercase" style={{ textShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
                            Portail Pro
                        </h2>
                        <p className="text-[10px] md:text-[11px] text-neutral-400 font-bold tracking-widest uppercase mt-1">CPE, Directeurs, Profs</p>
                    </Link>
                </div>

            </div>

            {/* ── BOTTOM STRIPE ── */}
            <div className="relative z-20 w-full bg-[#CC0000] h-10 flex items-center justify-center shrink-0">
                <span className="text-xs font-black uppercase tracking-[0.35em] text-white">Pour Collège et Lycée</span>
            </div>

            {/* ── A.M. 17 SIGNATURE ── */}
            <div className="relative z-20 w-full bg-black h-10 flex items-center justify-center shrink-0 border-t border-white/5">
                <span className="font-black text-sm text-white tracking-[0.3em]">A.M. <span className="text-[#CC0000]">17</span></span>
            </div>
        </div>
    );
}
