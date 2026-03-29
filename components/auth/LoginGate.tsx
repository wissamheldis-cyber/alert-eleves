"use client";

import { useState, useEffect } from "react";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        // Check session storage on mount
        const authStat = sessionStorage.getItem(storageKey);
        if (authStat === "true") {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
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
        return <div className="min-h-screen flex items-center justify-center bg-background"><div className="w-8 h-8 rounded-full border-t-2 border-primary animate-spin" /></div>;
    }

    if (isAuthenticated) {
        return <>{children}</>;
    }

    const isPro = theme === "pro";

    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isPro ? 'bg-primary' : 'bg-secondary'}`} />
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-surface/80 backdrop-blur-xl border border-border p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                    {/* Top Accent line */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${isPro ? 'bg-primary' : 'bg-secondary'}`} />
                    
                    <div className="flex justify-center mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-background border flex items-center justify-center ${isPro ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'}`}>
                            {isPro ? <ShieldCheck className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-white mb-2">{portalName}</h1>
                        <p className="text-neutral-soft text-sm">{description}</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Mot de passe d'accès..."
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) setError(false);
                                }}
                                className={`h-12 bg-background/50 border-border text-center text-lg tracking-widest ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-500 text-xs text-center font-medium animate-pulse">
                                    Mot de passe incorrect
                                </p>
                            )}
                        </div>

                        <Button 
                            type="submit" 
                            className={`w-full h-12 gap-2 text-white ${isPro ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                        >
                            Déverrouiller l'accès
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-neutral-soft/50">
                            Session temporaire et sécurisée. Identifiants fournis par l'intervenant AM.17.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
