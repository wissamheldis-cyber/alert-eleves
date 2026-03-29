"use client";

import { useState } from "react";
import { QrCode, ArrowRight, ArrowLeft, CheckCircle2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            title: "Salut ! 👋",
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
            title: "Dernière question 📝",
            desc: "Espace libre.",
            q: "As-tu une question à poser à l'équipe ou quelque chose à signaler (anonymement) ?",
            type: "text",
            key: "q4"
        }
    ];

    const currentQ = questions[step];

    const handleOptionSelect = (key: string, value: string) => {
        setAnswers({ ...answers, [key]: value });
        setTimeout(() => setStep(step + 1), 300); // auto-advance
    };

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    // SUMMARY SCREEN
    if (step >= questions.length) {
        return (
            <div className="max-w-md mx-auto pb-12 pt-4 px-2">
                
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-white mb-2">Ton Bilan Personnel</h1>
                    <p className="text-sm text-neutral-400">Prends un screen (capture d'écran) de cette carte pour garder une trace ! 📸</p>
                </div>

                {/* THE SCREENSHOT CARD */}
                <div id="summary-card" className="bg-gradient-to-br from-surface to-background border border-border rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full" />
                    
                    <div className="flex items-center gap-3 mb-8 relative z-10 border-b border-white/10 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                            <QrCode className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white leading-tight">ALERT'ÉLÈVES</h2>
                            <p className="text-xs text-secondary font-medium tracking-widest uppercase">Bilan Anonyme</p>
                        </div>
                    </div>

                    <div className="space-y-6 relative z-10 mb-8">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">Ressenti Global</span>
                            <div className="text-white font-medium bg-white/5 px-4 py-3 rounded-xl border border-white/5">{answers.q1 || "Non répondu"}</div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">Fait Marquant</span>
                            <div className="text-white font-medium bg-white/5 px-4 py-3 rounded-xl border border-white/5">{answers.q2 || "Non répondu"}</div>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">État d'esprit</span>
                            <div className="text-emerald-400 font-bold bg-emerald-500/10 px-4 py-3 rounded-xl border border-emerald-500/20">{answers.q3 || "Non répondu"}</div>
                        </div>
                        {answers.q4 && (
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block mb-1">Message Libre</span>
                                <div className="text-neutral-300 text-sm bg-white/5 px-4 py-3 rounded-xl border border-white/5 italic">"{answers.q4}"</div>
                            </div>
                        )}
                    </div>

                    <div className="text-center pt-6 border-t border-white/10 relative z-10">
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Généré en toute sécurité
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Button variant="outline" className="w-full border-neutral-800 text-neutral-400" onClick={() => setStep(0)}>
                        Recommencer
                    </Button>
                </div>
            </div>
        );
    }

    // WIZARD SCREEN
    return (
        <div className="max-w-xl mx-auto pb-12 pt-4 px-4">
            
            {/* Progress Bar */}
            <div className="w-full bg-surface h-2 rounded-full mb-8 overflow-hidden">
                <div 
                    className="h-full bg-secondary transition-all duration-500" 
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }} 
                />
            </div>

            <header className="mb-8">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">{currentQ.title}</span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white mt-2 mb-2">
                    {currentQ.q}
                </h1>
                <p className="text-neutral-400 text-sm">
                    {currentQ.desc}
                </p>
            </header>

            <div className="space-y-4 mb-8">
                {currentQ.type === "options" ? (
                    <div className="grid grid-cols-1 gap-3">
                        {currentQ.options?.map((opt) => (
                            <button 
                                key={opt}
                                onClick={() => handleOptionSelect(currentQ.key, opt)}
                                className={`p-4 md:p-5 text-left rounded-2xl border transition-all duration-200 font-medium ${answers[currentQ.key as keyof typeof answers] === opt ? 'bg-secondary/20 border-secondary text-white' : 'bg-surface border-border text-neutral-300 hover:border-secondary/50 hover:bg-surface/80'}`}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        <textarea 
                            className="w-full bg-surface border border-border rounded-2xl p-4 text-white min-h-[150px] focus:outline-none focus:border-secondary transition-colors resize-none"
                            placeholder="Écris ton message ici..."
                            value={answers[currentQ.key as keyof typeof answers]}
                            onChange={(e) => setAnswers({ ...answers, [currentQ.key]: e.target.value })}
                        />
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <Button 
                    variant="ghost" 
                    onClick={handlePrev} 
                    disabled={step === 0}
                    className="text-neutral-500 hover:text-white"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                </Button>

                {(currentQ.type === "text" || answers[currentQ.key as keyof typeof answers]) && (
                    <Button 
                        onClick={handleNext} 
                        className="bg-secondary hover:bg-secondary/80 text-white font-bold"
                    >
                        {step === questions.length - 1 ? "Voir mon Bilan" : "Suivant"} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                )}
            </div>
            
        </div>
    );
}
