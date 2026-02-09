"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Data derived from "fiche recap.txt"
const slides = [
    {
        id: 1,
        title: "Intervention Puff",
        subtitle: "Comprendre, Prévenir, Reprendre la main",
        type: "cover",
        content: {
            public: "Collège (4e-3e) / Lycée",
            duree: "1h à 2h",
            objectif: "Prévention scolaire ciblée"
        }
    },
    {
        id: 2,
        title: "Pourquoi ce sujet ?",
        subtitle: "Contexte & Urgence",
        type: "info",
        content: [
            "Phénomène massif : usage immédiat, arômes, facilité.",
            "Cerveau vulnérable : la nicotine piège le système de récompense ado.",
            "Objectif : Pas de morale, mais de la mécanique.",
        ]
    },
    {
        id: 3,
        title: "Mécanique du Piège",
        subtitle: "Pourquoi ça colle ?",
        type: "diagram",
        points: [
            { label: "Immédiateté", desc: "Pas de feu, pas de cendre, caché en main." },
            { label: "Social", desc: "Le groupe valide, la puff circule." },
            { label: "Chimie", desc: "Nicotine + Sels = Pic rapide sans irritation." }
        ]
    },
    {
        id: 4,
        title: "Outils Concrets",
        subtitle: "Repartir armé",
        type: "tools",
        tools: [
            { name: "Si-Alors", desc: "Planifier sa réaction à l'avance." },
            { name: "Phrase Anti-Pression", desc: "'Non merci, ça me donne mal au crâne'." },
            { name: "90 Secondes", desc: "La durée d'une envie. Attendre qu'elle passe." }
        ]
    },
    {
        id: 5,
        title: "Conclusion",
        subtitle: "Le pouvoir est à vous",
        type: "outro",
        quote: "La liberté, c'est de choisir, pas de subir un automatisme."
    }
];

export function PresentationSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const paginate = (newDirection: number) => {
        if (currentSlide + newDirection < 0 || currentSlide + newDirection >= slides.length) return;
        setDirection(newDirection);
        setCurrentSlide(currentSlide + newDirection);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowRight") paginate(1);
        if (e.key === "ArrowLeft") paginate(-1);
        if (e.key === "Escape") setIsFullscreen(false);
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                rotateY: { duration: 0.4 }
            } as any
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                rotateY: { duration: 0.4 }
            } as any
        }
        )
    };

    return (
        <div className={`relative w-full h-[600px] md:h-[800px] flex items-center justify-center bg-neutral-900 overflow-hidden ${isFullscreen ? 'fixed inset-0 z-50 h-screen w-screen' : 'rounded-xl border border-border'}`}>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

            {/* Controls */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="bg-black/50 border-white/10 hover:bg-white/10 text-white"
                >
                    {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-4 items-center">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(-1)}
                    disabled={currentSlide === 0}
                    className="rounded-full bg-black/50 border-white/10 text-white hover:bg-white/10 disabled:opacity-30"
                >
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <span className="text-white/50 font-mono text-sm">
                    {currentSlide + 1} / {slides.length}
                </span>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(1)}
                    disabled={currentSlide === slides.length - 1}
                    className="rounded-full bg-black/50 border-white/10 text-white hover:bg-white/10 disabled:opacity-30"
                >
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>

            {/* Slide Content */}
            <div className="relative w-full max-w-4xl px-4 md:px-0 h-[80%] perspective-1000">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                    >
                        <Card className="w-full h-full bg-surface border-border/50 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-16">

                            {/* Decorative elements */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

                            <div className="relative z-10 max-w-3xl space-y-8">
                                <div>
                                    <h2 className="text-sm md:text-base font-bold text-primary uppercase tracking-widest mb-2">
                                        {slides[currentSlide].subtitle}
                                    </h2>
                                    <h1 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight">
                                        {slides[currentSlide].title}
                                    </h1>
                                </div>

                                <div className="w-24 h-1 bg-white/10 mx-auto rounded-full" />

                                <div className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed">
                                    {renderSlideContent(slides[currentSlide])}
                                </div>
                            </div>

                            {/* Watermark/Background Logo */}
                            <div className="absolute bottom-4 right-6 text-white/5 font-black text-8xl pointer-events-none select-none">
                                AM.17
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function renderSlideContent(slide: any) {
    if (slide.type === "cover") {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                {Object.entries(slide.content).map(([key, value]: any) => (
                    <div key={key} className="bg-background/50 p-4 rounded-lg border border-white/5">
                        <span className="block text-xs uppercase text-white/40 mb-1">{key}</span>
                        <span className="text-lg font-medium text-white">{value}</span>
                    </div>
                ))}
            </div>
        );
    }

    if (slide.type === "info" && Array.isArray(slide.content)) {
        return (
            <ul className="text-left space-y-4 max-w-2xl mx-auto">
                {slide.content.map((item: string, i: number) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-3"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                        <span>{item}</span>
                    </motion.li>
                ))}
            </ul>
        );
    }

    if (slide.type === "diagram") {
        return (
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
                {slide.points.map((p: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex-1 bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">{p.label}</h3>
                        <p className="text-base text-white/60">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        )
    }

    if (slide.type === "tools") {
        return (
            <div className="space-y-4 text-left">
                {slide.tools.map((t: any, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-background/40 rounded-lg border-l-4 border-secondary">
                        <div className="font-bold text-white whitespace-nowrap">{t.name}</div>
                        <div className="hidden md:block w-px h-6 bg-white/10" />
                        <div className="text-white/80">{t.desc}</div>
                    </div>
                ))}
            </div>
        )
    }

    if (slide.type === "outro") {
        return (
            <div className="mt-8">
                <p className="italic text-3xl font-serif text-white/90">"{slide.quote}"</p>
                <div className="mt-12">
                    <Button size="lg" className="text-lg px-8 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                        Télécharger le PDF complet
                    </Button>
                </div>
            </div>
        )
    }

    return null;
}
