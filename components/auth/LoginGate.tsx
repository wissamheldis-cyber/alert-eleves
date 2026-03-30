"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface LoginGateProps {
    children: React.ReactNode;
    portalName: string;
    description: string;
    acceptedPasswords: string[];
    storageKey: string;
    theme?: "dark" | "pro";
}

export function LoginGate({
    children,
    portalName,
    description,
    acceptedPasswords,
    storageKey,
    theme = "dark"
}: LoginGateProps) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const authStat = sessionStorage.getItem(storageKey);
        setIsAuthenticated(authStat === "true");
    }, [storageKey]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (acceptedPasswords.includes(password.toLowerCase().trim())) {
            sessionStorage.setItem(storageKey, "true");
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword("");
        }
    };

    if (isAuthenticated === null) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#08080C]">
                <div className="w-8 h-8 rounded-full border-t-2 border-[#CC0000] animate-spin" />
            </div>
        );
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    const isPro = theme === "pro";
    const accentHex = isPro ? "#4F46E5" : "#CC0000";
    const accentHover = isPro ? "hover:bg-indigo-500" : "hover:bg-[#AA0000]";
    const iconBorder = isPro ? "border-indigo-500/30 text-indigo-400" : "border-[#CC0000]/30 text-[#CC0000]";

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#08080C] relative overflow-hidden p-4">

            {/* Fondd.png background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/Fondd.png"
                    alt=""
                    className="w-full h-full object-cover opacity-35"
                    style={{ mixBlendMode: "screen" }}
                />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                    backgroundSize: "3.5rem 3.5rem",
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 30%, #08080C 90%)" }}
            />

            {/* Accent glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
                style={{ background: accentHex }}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.34, 1.2, 0.64, 1] }}
                className="w-full max-w-md relative z-10"
            >
                {/* Top ribbon */}
                <div
                    className="w-full h-10 flex items-center justify-center rounded-t-2xl"
                    style={{ background: accentHex }}
                >
                    <span
                        className="text-xs font-black uppercase tracking-[0.35em] text-white"
                        style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}
                    >
                        Prévention
                    </span>
                </div>

                {/* Card */}
                <div className="bg-[#08080C]/90 backdrop-blur-3xl border-x border-white/10 px-8 md:px-10 py-8 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.9)]">
                    {/* Inner corner glow */}
                    <div
                        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[70px] opacity-[0.08] pointer-events-none"
                        style={{ background: accentHex }}
                    />

                    <div className="flex justify-center mb-6 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-[#111] border flex items-center justify-center ${iconBorder}`}>
                            {isPro ? <ShieldCheck className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                        </div>
                    </div>

                    <div className="text-center mb-8 relative z-10">
                        <h1
                            className="text-2xl font-black text-white mb-2 tracking-[0.08em] uppercase"
                            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                        >
                            {portalName}
                        </h1>
                        <p className="text-neutral-500 text-sm leading-relaxed">{description}</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4 relative z-10">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Mot de passe d'accès..."
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError(false);
                                }}
                                className={`h-12 bg-white/5 border-white/10 text-center text-lg tracking-widest text-white placeholder:text-neutral-700 focus-visible:ring-0 focus-visible:border-white/30 ${error ? "!border-red-500" : ""}`}
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-500 text-xs text-center font-bold animate-pulse tracking-wide">
                                    Mot de passe incorrect
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`w-full h-12 text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-2 rounded-xl transition-all duration-200 ${accentHover}`}
                            style={{ background: accentHex, fontFamily: "var(--font-league-spartan, sans-serif)" }}
                        >
                            Déverrouiller l&apos;accès
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-8 text-center relative z-10">
                        <p className="text-xs text-neutral-700 leading-relaxed">
                            Session temporaire et sécurisée.<br />Identifiants fournis par l&apos;intervenant AM.17.
                        </p>
                    </div>
                </div>

                {/* Bottom ribbon */}
                <div className="w-full h-9 bg-black flex items-center justify-center rounded-b-2xl border border-t-0 border-white/5">
                    <span
                        className="font-black text-xs text-white tracking-[0.3em]"
                        style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}
                    >
                        A.M. <span style={{ color: accentHex }}>17</span>
                    </span>
                </div>
            </motion.div>
        </div>
    );
}
