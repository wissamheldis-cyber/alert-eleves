"use client";

import { useState } from "react";
import { QrCode, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function FeedbackPage() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
    });

    const questions = [
        {
            title: "Salut !",
            desc: "On va faire un mini bilan de l'intervention. C'est 100% anonyme.",
            q: "Globalement, comment as-tu trouvé cet échange ?",
            type: "options",
            options: ["Génial, très clair", "Plutôt intéressant", "Bof, sans plus", "Je n'ai rien appris"],
            key: "q1"
        },
        {
            title: "Question 2/4",
            desc: "Sois honnête !",
            q: "Quelle info t'a le plus marqué(e) aujourd'hui ?",
            type: "options",
            options: ["L'impact sur mon souffle", "L'arnaque des arômes chimiques", "La quantité folle de nicotine", "Rien de spécial"],
            key: "q2"
        },
        {
            title: "Question 3/4",
            desc: "L'après...",
            q: "Penses-tu changer tes habitudes après cette intervention ?",
            type: "options",
            options: ["Oui, j'arrête direct", "Je vais essayer de diminuer", "Peut-être plus tard", "Non, je continue"],
            key: "q3"
        },
        {
            title: "Dernière question",
            desc: "Espace libre.",
            q: "As-tu une question à poser à l'équipe ou quelque chose à signaler (anonymement) ?",
            type: "text",
            key: "q4"
        }
    ];

    const currentQ = questions[step];

    const handleOptionSelect = (key: string, value: string) => {
        setAnswers({ ...answers, [key]: value });
        setTimeout(() => setStep(step + 1), 280);
    };

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    // SUMMARY SCREEN
    if (step >= questions.length) {
        return (
            <div className="max-w-md mx-auto pb-12 pt-2 px-2">
                <div className="text-center mb-6">
                    <h1
                        className="text-2xl font-black text-white mb-2 uppercase tracking-[0.08em]"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        Ton Bilan Personnel
                    </h1>
                    <p className="text-sm text-neutral-500">Prends une capture d'écran pour garder une trace !</p>
                </div>

                {/* Screenshot card */}
                <div className="bg-[#08080C]/90 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative">
                    {/* Top ribbon */}
                    <div className="bg-[#CC0000] h-9 flex items-center justify-center">
                        <span className="text-xs font-black uppercase tracking-[0.35em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                    </div>

                    <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-7 pb-4 border-b border-white/8">
                            <div className="w-10 h-10 rounded-xl bg-[#CC0000]/15 border border-[#CC0000]/30 flex items-center justify-center shrink-0">
                                <QrCode className="w-5 h-5 text-[#CC0000]" />
                            </div>
                            <div>
                                <h2
                                    className="text-base font-black text-white leading-tight uppercase tracking-wider"
                                    style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                                >
                                    ALERT'ÉLÈVES
                                </h2>
                                <p className="text-[10px] text-[#CC0000] font-black tracking-[0.3em] uppercase">Bilan Anonyme</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-black block mb-1.5" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Ressenti Global</span>
                                <div className="text-white font-medium bg-white/5 px-4 py-3 rounded-xl border border-white/8 text-sm">{answers.q1 || "Non répondu"}</div>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-black block mb-1.5" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Fait Marquant</span>
                                <div className="text-white font-medium bg-white/5 px-4 py-3 rounded-xl border border-white/8 text-sm">{answers.q2 || "Non répondu"}</div>
                            </div>
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-black block mb-1.5" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>État d'esprit</span>
                                <div className="text-emerald-400 font-bold bg-emerald-500/10 px-4 py-3 rounded-xl border border-emerald-500/20 text-sm">{answers.q3 || "Non répondu"}</div>
                            </div>
                            {answers.q4 && (
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-black block mb-1.5" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Message Libre</span>
                                    <div className="text-neutral-400 text-sm bg-white/5 px-4 py-3 rounded-xl border border-white/8 italic">&ldquo;{answers.q4}&rdquo;</div>
                                </div>
                            )}
                        </div>

                        <div className="text-center pt-5 mt-5 border-t border-white/8">
                            <div className="inline-flex items-center gap-2 text-xs font-black text-neutral-600 uppercase tracking-widest" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                Généré en toute sécurité
                            </div>
                        </div>
                    </div>

                    {/* Bottom ribbon */}
                    <div className="bg-black h-8 flex items-center justify-center border-t border-white/5">
                        <span className="font-black text-xs text-white/30 tracking-[0.3em]" style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}>
                            A.M. <span className="text-[#CC0000]/50">17</span>
                        </span>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        onClick={() => setStep(0)}
                        className="w-full h-11 bg-white/5 border border-white/10 text-neutral-500 hover:text-white hover:border-white/20 rounded-xl text-sm font-bold transition-all"
                    >
                        Recommencer
                    </button>
                </div>
            </div>
        );
    }

    // WIZARD SCREEN
    return (
        <div className="max-w-xl mx-auto pb-12 pt-2 px-2">
            {/* Header */}
            <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-7 w-1 rounded-full bg-[#CC0000]" />
                    <h1
                        className="text-2xl font-black text-white uppercase tracking-[0.05em]"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        Contact & Feed-back
                    </h1>
                </div>
            </header>

            {/* Card */}
            <div className="bg-[#08080C]/70 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden">
                {/* Progress ribbon */}
                <div className="h-1 w-full bg-white/5">
                    <div
                        className="h-full bg-[#CC0000] transition-all duration-500"
                        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                    />
                </div>

                <div className="p-6 md:p-8">
                    <span
                        className="text-[10px] font-black text-[#CC0000] uppercase tracking-[0.3em] block mb-3"
                        style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}
                    >
                        {currentQ.title}
                    </span>
                    <h2
                        className="text-xl md:text-2xl font-black text-white mb-2 leading-snug"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        {currentQ.q}
                    </h2>
                    <p className="text-neutral-500 text-sm mb-7">{currentQ.desc}</p>

                    <div className="space-y-3 mb-7">
                        {currentQ.type === "options" ? (
                            <div className="grid grid-cols-1 gap-2.5">
                                {currentQ.options?.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleOptionSelect(currentQ.key, opt)}
                                        className={`p-4 text-left rounded-xl border transition-all duration-200 text-sm font-medium ${
                                            answers[currentQ.key as keyof typeof answers] === opt
                                                ? "bg-[#CC0000]/15 border-[#CC0000]/50 text-white"
                                                : "bg-white/4 border-white/8 text-neutral-400 hover:border-white/20 hover:text-white hover:bg-white/8"
                                        }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <textarea
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm min-h-[130px] focus:outline-none focus:border-[#CC0000]/40 transition-colors resize-none placeholder:text-neutral-700"
                                placeholder="Écris ton message ici..."
                                value={answers[currentQ.key as keyof typeof answers]}
                                onChange={(e) => setAnswers({ ...answers, [currentQ.key]: e.target.value })}
                            />
                        )}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                        <button
                            onClick={handlePrev}
                            disabled={step === 0}
                            className="flex items-center gap-2 text-sm text-neutral-600 hover:text-white disabled:opacity-30 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" /> Retour
                        </button>

                        {(currentQ.type === "text" || answers[currentQ.key as keyof typeof answers]) && (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-[#CC0000] hover:bg-[#AA0000] text-white font-black text-xs uppercase tracking-[0.2em] px-5 py-3 rounded-xl transition-all"
                                style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}
                            >
                                {step === questions.length - 1 ? "Voir mon Bilan" : "Suivant"}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
