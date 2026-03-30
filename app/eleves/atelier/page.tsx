"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Shield, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── TOOLS ────────────────────────────────────────────────
const TOOLS = [
    { id: 1, label: "Dire non clairement", desc: "Sans se justifier ni débattre." },
    { id: 2, label: "Créer des obstacles volontaires", desc: "Pour tenir son arrêt dans le temps." },
    { id: 3, label: "Remplacer le réflexe", desc: "Une habitude saine à la place." },
    { id: 4, label: "Soutenir sans juger", desc: "Écouter, questionner, rester présent." },
    { id: 5, label: "Le test du meilleur futur", desc: "Cette habitude m'en rapproche ou m'en éloigne ?" },
];

// ─── ALL STEPS ─────────────────────────────────────────────
type Step =
    | { type: "text" | "textarea"; id: string; phase: "A" | "B"; title: string; sub: string; placeholder: string }
    | { type: "options"; id: string; phase: "A" | "B"; title: string; sub: string; options: string[] }
    | { type: "tools"; id: string; phase: "A" | "B"; title: string; sub: string };

const STEPS: Step[] = [
    // ── Phase A ──
    {
        type: "options", id: "lieux", phase: "A",
        title: "Où le geste arrive ?",
        sub: "Sélectionne autant que tu veux.",
        options: ["Devant mon lycée / collège", "Chez des potes", "Dans la rue", "En soirée", "Aux transports", "Dans ma chambre", "Partout", "Je sais pas encore"]
    },
    {
        type: "options", id: "moments", phase: "A",
        title: "À quel moment ça arrive ?",
        sub: "Tes moments à risque.",
        options: ["Le matin avant les cours", "À la pause déjeuner", "Après les cours", "Le soir", "Le week-end", "Quand je suis stressé·e", "À n'importe quel moment"]
    },
    {
        type: "options", id: "etat", phase: "A",
        title: "Dans quel état tu es quand ça arrive ?",
        sub: "Émotions, niveau d'énergie...",
        options: ["Stressé·e / anxieux·se", "Ennuyé·e", "Euphorique / festif", "Fatigué·e", "Sous pression scolaire", "Triste", "Heureux·se / en mode détente"]
    },
    {
        type: "options", id: "contexte", phase: "A",
        title: "Avec qui ? Dans quelle situation ?",
        sub: "Ton contexte social déclencheur.",
        options: ["Seul·e", "En groupe d'amis", "Sous pression sociale (\"Vas-y t'es cheh\")", "Avec quelqu'un qui fume", "Pour m'intégrer"]
    },
    {
        type: "textarea", id: "synthese", phase: "A",
        title: "Mes déclencheurs à moi — en résumé",
        sub: "Reformule ce que tu viens d'identifier. En quelques mots. Pour toi.",
        placeholder: "Ex : Surtout en soirée avec des potes quand je suis stressé par les exams…"
    },
    // ── Phase B ──
    {
        type: "textarea", id: "situation", phase: "B",
        title: "Ma situation aujourd'hui",
        sub: "Dis-le comme tu le ressentirais à un pote. Pas de filtre.",
        placeholder: "Ex : Je vapote environ 3-4 fois par jour, plutôt le soir…"
    },
    {
        type: "text", id: "changer", phase: "B",
        title: "Ce que je voudrais changer — 1 seule chose",
        sub: "Pas une liste, juste la priorité numéro 1.",
        placeholder: "Ex : Arrêter de vapoter le soir avant de dormir"
    },
    {
        type: "tools", id: "outil", phase: "B",
        title: "L'outil que je vais tester en premier",
        sub: "Choisis-en un seul. Tu peux changer d'avis plus tard."
    },
    {
        type: "text", id: "phrase", phase: "B",
        title: "Ma phrase anti-pression",
        sub: "Quelque chose que tu peux dire (ou penser) quand quelqu'un te propose.",
        placeholder: "Ex : \"Je l'ai déjà fait, c'est bon\""
    },
    {
        type: "text", id: "declencheur", phase: "B",
        title: "Mon déclencheur principal à surveiller",
        sub: "Une seule situation que tu veux garder en tête.",
        placeholder: "Ex : Les soirées avec X"
    },
    {
        type: "textarea", id: "confiance", phase: "B",
        title: "Des personnes en qui j'ai confiance",
        sub: "Pas obligatoire. Juste pour savoir à qui parler si besoin.",
        placeholder: "Ex : Mon infirmière scolaire, ma grande sœur, mon CPE…"
    },
];

type Answers = Record<string, string | string[]>;

// ─── PILL CHOICE ───────────────────────────────────────────
function OptionPill({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-3 rounded-2xl text-sm font-medium text-left w-full border transition-all",
                selected
                    ? "bg-secondary/20 border-secondary text-white"
                    : "bg-surface border-border text-neutral-300 hover:border-secondary/40 hover:bg-surface/80"
            )}
        >
            {label}
        </button>
    );
}

// ─── MAIN PAGE ─────────────────────────────────────────────
export default function AtelierPage() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});

    const current = STEPS[step];
    const isLastStep = step === STEPS.length - 1;
    const totalA = STEPS.filter(s => s.phase === "A").length;
    const inPhaseB = current?.phase === "B";
    const progress = ((step + 1) / STEPS.length) * 100;

    function toggleOption(id: string, val: string) {
        const prev = (answers[id] as string[] | undefined) ?? [];
        setAnswers({ ...answers, [id]: prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val] });
    }

    function setText(id: string, val: string) {
        setAnswers({ ...answers, [id]: val });
    }

    function canProceed() {
        if (!current) return false;
        if (current.type === "textarea" || current.type === "text") return true;
        const a = answers[current.id];
        const perso = answers[current.id + "_perso"] as string;
        return Array.isArray(a) ? (a.length > 0 || !!perso) : (!!a || !!perso);
    }

    function next() { if (step < STEPS.length) setStep(s => s + 1); }
    function prev() { if (step > 0) setStep(s => s - 1); }

    const selectedTool = TOOLS.find(t => t.id === Number(answers["outil"]));

    // ── PHASE MARKER ─────────────────────────────────────────
    const phaseLabel = current?.phase === "A"
        ? `🔍 Étape A, Tes déclencheurs (${step + 1}/${totalA})`
        : `⚡ Étape B, Ton plan perso (${step - totalA + 1}/${STEPS.length - totalA})`;

    // ─── SUMMARY CARD ─────────────────────────────────────────
    if (step >= STEPS.length) {
        const lieuArr = (answers["lieux"] as string[] | undefined) ?? [];
        const momentArr = (answers["moments"] as string[] | undefined) ?? [];
        const etatArr = (answers["etat"] as string[] | undefined) ?? [];
        const contexteArr = (answers["contexte"] as string[] | undefined) ?? [];

        return (
            <div className="max-w-sm mx-auto pb-12 pt-4 px-2 flex flex-col items-center">
                <div className="w-full mb-4 text-center">
                    <p className="text-neutral-400 text-sm">📸 Screenshot cette carte et garde-la avec toi.</p>
                </div>

                {/* ── THE CARD ── */}
                <div id="atelier-card" className="w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                    {/* Header */}
                    <div className="bg-[#FF1E1E] px-6 pt-6 pb-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-100 mb-1">A.M.17 Alert'Élèves</p>
                        <h1 className="text-2xl font-black text-white leading-tight">Ma Carte<br />Anti-Puff</h1>
                    </div>

                    {/* 3 Keys */}
                    <div className="bg-black px-6 py-3 flex gap-2 justify-between border-b border-white/10">
                        {["Automatisme ≠ Choix", "Nicotine ado ≠ Adulte", "Aérosol ≠ Air"].map(k => (
                            <span key={k} className="text-[9px] font-bold text-red-400 uppercase leading-tight text-center">{k}</span>
                        ))}
                    </div>

                    {/* Body */}
                    <div className="bg-[#0A0A0E] px-6 py-5 space-y-5">

                        {/* Triggers */}
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-widest text-[#FF1E1E] mb-2">Mes déclencheurs</h2>
                            <div className="space-y-1">
                                {lieuArr.length > 0 && <p className="text-neutral-300 text-xs">📍 {lieuArr.join(", ")}</p>}
                                {momentArr.length > 0 && <p className="text-neutral-300 text-xs">⏱ {momentArr.join(", ")}</p>}
                                {etatArr.length > 0 && <p className="text-neutral-300 text-xs">🧠 {etatArr.join(", ")}</p>}
                                {contexteArr.length > 0 && <p className="text-neutral-300 text-xs">👥 {contexteArr.join(", ")}</p>}
                            </div>
                            {(answers["synthese"] as string) && (
                                <p className="mt-2 text-white text-xs italic border-l-2 border-[#FF1E1E] pl-2">"{answers["synthese"]}"</p>
                            )}
                        </section>

                        {/* Plan */}
                        <section>
                            <h2 className="text-[10px] font-black uppercase tracking-widest text-[#FF1E1E] mb-2">Mon plan</h2>
                            {(answers["changer"] as string) && (
                                <p className="text-neutral-200 text-xs mb-2">🎯 Je veux changer : <span className="text-white font-bold">{answers["changer"]}</span></p>
                            )}
                            {selectedTool && (
                                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-2">
                                    <p className="text-[10px] uppercase text-neutral-500 mb-0.5">Mon outil n°{selectedTool.id}</p>
                                    <p className="text-white font-bold text-xs">{selectedTool.label}</p>
                                </div>
                            )}
                            {(answers["phrase"] as string) && (
                                <p className="text-neutral-200 text-xs mb-1">💬 <span className="italic text-white">"{answers["phrase"]}"</span></p>
                            )}
                            {(answers["declencheur"] as string) && (
                                <p className="text-neutral-200 text-xs">⚠️ À surveiller : <span className="text-white font-bold">{answers["declencheur"]}</span></p>
                            )}
                        </section>

                        {/* Quote */}
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-white text-xs font-bold italic text-center leading-relaxed">
                                "La liberté commence quand le geste cesse de choisir à ta place."
                            </p>
                        </div>

                        {/* Resources */}
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                            <p className="text-[9px] uppercase tracking-widest text-neutral-500 mb-1 font-bold">Si t'as besoin :</p>
                            <div className="grid grid-cols-3 gap-1">
                                {["Infirmier·ère", "CPE", "3989"].map(r => (
                                    <div key={r} className="bg-[#FF1E1E]/10 border border-[#FF1E1E]/20 rounded-lg p-1.5 text-center">
                                        <p className="text-[9px] font-bold text-[#FF1E1E]">{r}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 w-full space-y-3">
                    <Button
                        variant="outline"
                        className="w-full border-neutral-700 text-neutral-400"
                        onClick={() => { setStep(0); setAnswers({}); }}
                    >
                        Recommencer
                    </Button>
                </div>
            </div>
        );
    }

    // ─── WIZARD ───────────────────────────────────────────────
    return (
        <div className="max-w-xl mx-auto pb-12 pt-4 px-4">

            {/* Phase indicator */}
            <div className="mb-2">
                <span className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    inPhaseB ? "text-primary" : "text-secondary"
                )}>
                    {phaseLabel}
                </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-surface h-1.5 rounded-full mb-6 overflow-hidden">
                <div
                    className="h-full bg-[#FF1E1E] transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Question */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                    {current.title}
                </h1>
                <p className="text-neutral-400 text-sm">{current.sub}</p>
            </div>

            {/* Input */}
            <div className="mb-8 space-y-3">
                {current.type === "options" && (
                    <div className="space-y-2">
                        {current.options.map((opt: string) => (
                            <OptionPill
                                key={opt}
                                label={opt}
                                selected={((answers[current.id] as string[]) ?? []).includes(opt)}
                                onClick={() => toggleOption(current.id, opt)}
                            />
                        ))}
                        <div className="pt-2">
                            <p className="text-[10px] font-bold text-neutral-600 mb-2 ml-1 uppercase tracking-widest">Ta propre réponse (facultatif) :</p>
                            <input
                                className="w-full bg-surface border border-border rounded-2xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF1E1E] transition-colors"
                                placeholder="Précise ta situation..."
                                value={(answers[current.id + "_perso"] as string) ?? ""}
                                onChange={e => setText(current.id + "_perso", e.target.value)}
                            />
                        </div>
                    </div>
                )}

                {current.type === "text" && (
                    <input
                        className="w-full bg-surface border border-border rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-[#FF1E1E] transition-colors"
                        placeholder={current.placeholder}
                        value={(answers[current.id] as string) ?? ""}
                        onChange={e => setText(current.id, e.target.value)}
                    />
                )}

                {current.type === "textarea" && (
                    <textarea
                        className="w-full bg-surface border border-border rounded-2xl px-4 py-4 text-white min-h-[130px] focus:outline-none focus:border-[#FF1E1E] transition-colors resize-none"
                        placeholder={current.placeholder}
                        value={(answers[current.id] as string) ?? ""}
                        onChange={e => setText(current.id, e.target.value)}
                    />
                )}

                {current.type === "tools" && (
                    <div className="space-y-3">
                        {TOOLS.map(tool => (
                            <button
                                key={tool.id}
                                onClick={() => setText("outil", String(tool.id))}
                                className={cn(
                                    "w-full text-left p-4 rounded-2xl border transition-all",
                                    answers["outil"] === String(tool.id)
                                        ? "bg-[#FF1E1E]/15 border-[#FF1E1E] text-white"
                                        : "bg-surface border-border text-neutral-300 hover:border-[#FF1E1E]/30"
                                )}
                            >
                                <span className="text-xs font-black text-[#FF1E1E] uppercase tracking-wider block mb-0.5">Outil {tool.id}</span>
                                <span className="font-bold text-sm block">{tool.label}</span>
                                <span className="text-neutral-400 text-xs">{tool.desc}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer nav */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <Button
                    variant="ghost"
                    onClick={prev}
                    disabled={step === 0}
                    className="text-neutral-500 hover:text-white"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                </Button>

                <Button
                    onClick={next}
                    disabled={current.type !== "text" && current.type !== "textarea" && !canProceed()}
                    className="bg-[#FF1E1E] hover:bg-red-700 text-white font-bold px-6"
                >
                    {isLastStep ? (
                        <><CheckCircle2 className="w-4 h-4 mr-2" /> Voir ma carte</>
                    ) : (
                        <>Suivant <ArrowRight className="w-4 h-4 ml-2" /></>
                    )}
                </Button>
            </div>
        </div>
    );
}
