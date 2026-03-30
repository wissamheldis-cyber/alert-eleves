"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// ─── TOOLS ───────────────────────────────────────────────────────────────────

const TOOLS = [
    {
        id: 1,
        label: "Dire non clairement",
        desc: "Non merci, je préfère pas. Sans te justifier. Sans débattre. Juste ça.",
        for: "Pour toi si la pression sociale est ton principal déclencheur."
    },
    {
        id: 2,
        label: "Créer des obstacles volontaires",
        desc: "Rends le geste plus difficile. Éloigne-toi. Attends 20 secondes.",
        for: "Pour toi si le geste arrive de façon automatique sans que tu t'en rendes compte."
    },
    {
        id: 3,
        label: "Remplacer le réflexe",
        desc: "Ton cerveau veut un geste, donne-lui en un autre. Respire, bouge, bois de l'eau.",
        for: "Pour toi si tu cherches quelque chose à faire à la place."
    },
    {
        id: 4,
        label: "Soutenir sans juger",
        desc: "Écoute d'abord. Pose des questions. Reste présent.",
        for: "Pour toi si quelqu'un autour de toi traverse quelque chose difficile."
    },
    {
        id: 5,
        label: "Le test du meilleur futur",
        desc: "Demande-toi : est-ce que ce geste rapproche ou éloigne la personne que je veux devenir ?",
        for: "Pour toi si tu veux un outil mental pour prendre du recul."
    },
];

type StepDef =
    | { type: "options"; id: string; title: string; sub: string; options: string[]; multi?: boolean }
    | { type: "text" | "textarea"; id: string; title: string; sub: string; placeholder: string }
    | { type: "tools"; id: string; title: string; sub: string }
    | { type: "multi-text"; id: string; title: string; sub: string; fields: { id: string; label: string; placeholder: string }[] }
    | { type: "choice-custom"; id: string; title: string; sub: string; groups: { label: string; options: string[] }[] };

type Answers = Record<string, string | string[]>;

// ─── PARTICLES ───────────────────────────────────────────────────────────────

function ParticlesLayer() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const particles: { x: number; y: number; size: number; speed: number; opacity: number; blur: number }[] = [];
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.4 + 0.1,
                opacity: Math.random() * 0.35 + 0.05,
                blur: Math.random() * 3,
            });
        }

        let animId: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.save();
                ctx.filter = `blur(${p.blur}px)`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
                ctx.fill();
                ctx.restore();
                p.y -= p.speed;
                if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-[2] pointer-events-none" />;
}

// ─── RIPPLE BUTTON ────────────────────────────────────────────────────────────

function RippleButton({
    children, onClick, className, disabled, variant = "primary", onMouseEnter, onMouseLeave
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    variant?: "primary" | "ghost";
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
    const ref = useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent) => {
        if (disabled) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples(r => [...r, { id, x, y }]);
        setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600);
        onClick?.();
    };

    return (
        <button
            ref={ref}
            onClick={handleClick}
            disabled={disabled}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={cn(
                "relative overflow-hidden transition-all duration-150 active:scale-95 select-none",
                variant === "primary" && "bg-white/10 hover:bg-white/15 text-white border border-white/20",
                variant === "ghost" && "bg-transparent text-neutral-500 hover:text-white border border-white/10 hover:border-white/20",
                disabled && "opacity-30 cursor-not-allowed active:scale-100",
                className
            )}
            style={{
                boxShadow: variant === "primary" && !disabled
                    ? "0 0 16px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)"
                    : undefined
            }}
        >
            {ripples.map(rp => (
                <span
                    key={rp.id}
                    className="absolute rounded-full bg-white/30 pointer-events-none animate-ping"
                    style={{ width: 80, height: 80, left: rp.x - 40, top: rp.y - 40, animationDuration: "0.6s", animationIterationCount: 1 }}
                />
            ))}
            {children}
        </button>
    );
}

// ─── CURSOR ───────────────────────────────────────────────────────────────────

type CursorType = "default" | "button" | "text" | "option";
function CustomCursor({ cursorType }: { cursorType: CursorType }) {
    const [pos, setPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const config: Record<CursorType, { size: number; ring: number; color: string; opacity: number }> = {
        default: { size: 8, ring: 28, color: "#fff", opacity: 0.5 },
        button: { size: 12, ring: 40, color: "#e5e5e5", opacity: 0.9 },
        text: { size: 3, ring: 22, color: "#fff", opacity: 0.8 },
        option: { size: 10, ring: 36, color: "#d4d4d4", opacity: 0.7 },
    };
    const c = config[cursorType];

    return (
        <>
            <div
                className="fixed pointer-events-none z-[999] rounded-full mix-blend-difference transition-[width,height] duration-150"
                style={{ width: c.size, height: c.size, background: c.color, opacity: c.opacity, top: pos.y - c.size / 2, left: pos.x - c.size / 2 }}
            />
            <div
                className="fixed pointer-events-none z-[998] rounded-full border transition-[width,height,border-color] duration-200"
                style={{ width: c.ring, height: c.ring, borderColor: c.color, opacity: 0.4, top: pos.y - c.ring / 2, left: pos.x - c.ring / 2 }}
            />
        </>
    );
}

// ─── BACKGROUND LAYERS ────────────────────────────────────────────────────────

function BgLayers() {
    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none bg-black">
                <div className="absolute inset-0 bg-[url('/images/Fondd.png')] bg-cover bg-center mix-blend-screen opacity-60" />
            </div>
            <div className="fixed inset-0 z-[1] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "3.5rem 3.5rem", filter: "blur(0.5px)" }} />
            <ParticlesLayer />
            <div className="fixed inset-0 z-[3] pointer-events-none" style={{ background: "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 10%, rgba(0,0,0,0.85) 100%)" }} />
        </>
    );
}

// ─── LOADER ───────────────────────────────────────────────────────────────────

function AtelierLoader({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 4000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 bg-black/40 backdrop-blur-xl">
            <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
                <div className="mb-10 relative text-center flex flex-col items-center">
                    <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-full opacity-50 pointer-events-none" />
                    <img src="/images/logo.png" alt="Logo" className="w-16 h-auto mb-6 brightness-0 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                    <img src="/images/chargement_eleves.png" alt="Chargement..." className="w-48 md:w-56 h-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] animate-pulse" />
                </div>

                <div className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-7 rounded-[2.5rem] shadow-2xl space-y-5">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#CC0000] animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Analyse Perso</span>
                    </div>
                    <div className="space-y-2">
                        <p className="text-white text-sm text-center font-black leading-tight uppercase tracking-[0.1em]">
                            Prends 2 minutes pour toi.
                        </p>
                        <p className="text-white/40 text-[10px] text-center font-bold leading-relaxed tracking-[0.15em]">
                            Découvre ton mode de fonctionnement<br />et tes propres déclencheurs.
                        </p>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" style={{ animation: "load 4s linear forwards" }} />
                    </div>
                </div>
            </div>

            <style>{`@keyframes load { 0% { width: 0%; } 100% { width: 100%; } }`}</style>
        </div>
    );
}

// ─── PRENOM SCREEN ────────────────────────────────────────────────────────────

function PrenomScreen({ onSubmit, isMobile, setCursorType }: {
    onSubmit: (name: string) => void;
    isMobile: boolean;
    setCursorType: (t: CursorType) => void;
}) {
    const [name, setName] = useState("");

    const handleSubmit = () => {
        onSubmit(name.trim());
    };

    return (
        <div className="relative z-[10] flex flex-col min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <div className="w-full bg-[#08080C]/90 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.9)] overflow-hidden">
                    <div className="flex flex-col items-center justify-center px-6 py-8 border-b border-white/5 bg-white/[0.02]">
                        <img src="/images/logo.png" alt="Logo" className="w-12 h-auto mb-5 brightness-0 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] text-white text-center" style={{ fontFamily: "var(--font-oswald, sans-serif)", textShadow: "0 0 30px rgba(255,255,255,0.3)" }}>
                            Avant de commencer
                        </h1>
                    </div>

                    <div className="p-8 md:p-10 space-y-8">
                        <div className="text-center space-y-2">
                            <p className="text-white font-bold text-lg leading-snug">
                                Comment tu t&apos;appelles ?
                            </p>
                            <p className="text-neutral-500 text-sm">
                                Pour personnaliser ton atelier. Facultatif.
                            </p>
                        </div>

                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/15 rounded-2xl px-6 py-5 text-white text-base font-bold text-center focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="Ton prénom..."
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && handleSubmit()}
                            onFocus={() => setCursorType("text")}
                            onBlur={() => setCursorType("default")}
                            autoFocus={!isMobile}
                            maxLength={30}
                        />

                        <RippleButton
                            onClick={handleSubmit}
                            variant="primary"
                            className="w-full py-5 rounded-2xl text-sm font-black uppercase tracking-[0.4em]"
                            onMouseEnter={() => setCursorType("button")}
                            onMouseLeave={() => setCursorType("default")}
                        >
                            {name.trim() ? `C'est parti, ${name.trim()} !` : "Commencer l'atelier"}
                        </RippleButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function AtelierStandalone() {
    const [stage, setStage] = useState<"loading" | "prenom" | "quiz">("loading");
    const [prenom, setPrenom] = useState("");
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [cursorType, setCursorType] = useState<CursorType>("default");
    const [visible, setVisible] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // ── STEPS (with prenom) ──
    const STEPS: StepDef[] = [
        {
            type: "options", id: "devenir",
            title: prenom
                ? `${prenom}, qu'est-ce qui t'empêche d'être la version de toi que tu veux devenir ?`
                : "Qu'est-ce qui t'empêche d'être la version de toi que tu veux devenir ?",
            sub: "Une seule chose. La première qui te vient.",
            options: ["La puff / le vapotage", "Les réseaux sociaux", "Le manque de sommeil", "La procrastination", "L'alimentation", "L'alcool", "Les jeux vidéo", "Autre chose"]
        },
        {
            type: "options", id: "frequence",
            title: prenom
                ? `${prenom}, honnêtement, ça arrive à quelle fréquence ?`
                : "Honnêtement, ça arrive à quelle fréquence ?",
            sub: "Choisis-en une seule.",
            options: ["Tout le temps, je le fais sans y penser", "Souvent, plusieurs fois par semaine", "Parfois, mais ça revient toujours", "Rarement, mais j'aimerais comprendre pourquoi ça arrive"]
        },
        {
            type: "options", id: "contexte_detailed", multi: true,
            title: prenom
                ? `${prenom}, ça arrive surtout quand...`
                : "Ça arrive surtout quand...",
            sub: "Sélectionne autant que tu veux.",
            options: [
                "Je suis stressé / sous pression scolaire",
                "Je m'ennuie et j'ai rien à faire",
                "Je suis épuisé, plus d'énergie pour résister",
                "Je suis avec des gens qui le font",
                "Je veux m'intégrer, pas être à part",
                "Je veux oublier quelque chose qui me pèse",
                "Je suis seul et j'ai besoin de combler un vide",
                "Je cherche une pause rapide pour souffler",
                "Je me récompense après un effort",
                "Sans raison précise, ça arrive tout seul"
            ]
        },
        {
            type: "tools", id: "outil",
            title: prenom
                ? `${prenom}, parmi ces 5 outils, lequel te correspond le plus ?`
                : "Parmi ces 5 outils, lequel te correspond le plus ?",
            sub: "Celui qui colle le mieux à ta situation. Un seul."
        },
        {
            type: "multi-text", id: "futur",
            title: prenom
                ? `${prenom}, complète ces phrases. Pour toi. Personne ne voit tes réponses.`
                : "Complète ces phrases. Pour toi. Personne ne voit tes réponses.",
            sub: "Projette-toi dans ton meilleur futur.",
            fields: [
                { id: "devenir_goal", label: "Je vais devenir...", placeholder: "Ex : médecin, footballeur pro, entrepreneur, quelqu'un de libre..." },
                { id: "demain_action", label: "Et pour ça, dès demain je vais...", placeholder: "Ex : utiliser mon outil, éviter mon déclencheur principal..." }
            ]
        },
        {
            type: "choice-custom", id: "phrase_finale",
            title: prenom
                ? `${prenom}, choisis ta phrase pour te rappeler ce que tu risques de perdre.`
                : "Ma phrase pour me rappeler ce que je risque de perdre ou de détruire.",
            sub: "Choisis ou écris la tienne.",
            groups: [
                { label: "Pour refuser", options: ["Non merci, je préfère pas.", "C'est bon pour moi."] },
                { label: "Pour couper l'automatisme", options: ["C'est moi qui décide.", "Pas aujourd'hui.", "Je choisis mon futur.", "Mon cerveau propose. Moi je choisis.", "Je passe."] },
                { label: "Pour avancer", options: ["Je vais le faire parce que je peux le faire.", "La liberté commence quand le geste cesse de choisir à ma place."] }
            ]
        }
    ];

    const current = STEPS[step];
    const isDone = step >= STEPS.length;
    const progress = Math.min(((step + 1) / STEPS.length) * 100, 100);

    // ── transitions ──
    const goTo = useCallback((nextStep: number) => {
        setVisible(false);
        setTimeout(() => {
            setStep(nextStep);
            setVisible(true);
        }, 260);
    }, []);

    const next = () => goTo(step + 1);
    const prev = () => goTo(step - 1);

    function toggleOption(id: string, val: string, multi: boolean) {
        if (!multi) {
            setAnswers({ ...answers, [id]: val });
            return;
        }
        const prev2 = (answers[id] as string[] | undefined) ?? [];
        setAnswers({ ...answers, [id]: prev2.includes(val) ? prev2.filter(v => v !== val) : [...prev2, val] });
    }

    function setText(id: string, val: string) {
        setAnswers({ ...answers, [id]: val });
    }

    const canProceed = () => {
        if (!current) return false;
        if (current.type === "multi-text") {
            return current.fields.some(f => !!answers[f.id]);
        }
        if (current.type === "choice-custom") {
            return !!answers[current.id] || !!answers[current.id + "_custom"];
        }
        if (current.type === "options") {
            const a = answers[current.id];
            const perso = answers[current.id + "_perso"] as string;
            return Array.isArray(a) ? a.length > 0 : (!!a || !!perso);
        }
        if (current.type === "tools") {
            return !!answers[current.id];
        }
        return true; // text/textarea are optional
    };

    const selectedTool = TOOLS.find(t => t.id === Number(answers["outil"]));
    const finalPhrase = (answers["phrase_finale_custom"] as string) || (answers["phrase_finale"] as string) || "";
    const contextTriggers = ([answers["contexte_detailed"]] as string[][]).flat().filter(Boolean);

    // ─── BILAN (screenshot-friendly, même layout que le quiz) ───────────────

    if (isDone) {
        return (
            <>
                <BgLayers />
                {!isMobile && <CustomCursor cursorType={cursorType} />}
                <style>{!isMobile ? `* { cursor: none !important; }` : ""}</style>

                {/* Layout fixe plein écran — centré sur mobile */}
                <div className="relative z-[10] h-dvh flex flex-col overflow-hidden">

                    {/* Header identique au quiz */}
                    <div className="flex flex-col items-center pt-8 md:pt-14 pb-4 md:pb-8 shrink-0">
                        <img src="/images/logo.png" alt="Logo" className="w-10 md:w-14 h-auto mb-5 md:mb-8 brightness-0 drop-shadow-[0_0_8px_rgba(255,255,255,1)]" />
                        <div className="w-full bg-[#CC0000] flex items-center justify-center h-9 md:h-11 shadow-[0_2px_45px_rgba(204,0,0,0.55)]">
                            <span className="text-[9px] md:text-sm font-black uppercase tracking-[0.55em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                        </div>
                    </div>

                    {/* Carte bilan — centrée, hauteur contrainte */}
                    <div className="flex-1 flex items-center justify-center px-3 md:px-8 overflow-hidden">
                        <div className="w-full max-w-2xl bg-[#08080C]/85 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden" style={{ maxHeight: "calc(100dvh - 170px)" }}>

                            {/* En-tête carte */}
                            <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-6 border-b border-white/5 bg-white/[0.02] shrink-0">
                                <h1 className="text-lg md:text-3xl font-black uppercase tracking-[0.35em] text-white"
                                    style={{ fontFamily: "var(--font-oswald, sans-serif)", textShadow: "0 0 20px rgba(255,255,255,0.35)" }}>
                                    Alert&apos;Élèves
                                </h1>
                                <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#CC0000]">
                                    {prenom ? `Bilan · ${prenom}` : "Mon bilan"}
                                </p>
                            </div>

                            {/* Barre 100% */}
                            <div className="h-[2px] w-full bg-white/5 shrink-0">
                                <div className="h-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" style={{ width: "100%" }} />
                            </div>

                            {/* Contenu compact — NO SCROLL, tout tient en 1 vue */}
                            <div className="flex-1 overflow-hidden px-4 md:px-8 py-4 md:py-6 flex flex-col gap-3">

                                {/* PHRASE */}
                                {finalPhrase && (
                                    <div className="relative overflow-hidden rounded-2xl shrink-0">
                                        <div className="absolute inset-0 bg-white/[0.04]" />
                                        <div className="absolute inset-0 border border-white/12 rounded-2xl" />
                                        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                                        <div className="relative px-4 py-3 md:px-6 md:py-4 text-center">
                                            <p className="text-[8px] font-black uppercase tracking-[0.6em] text-white/35 mb-1.5">Ma phrase</p>
                                            <p className="text-sm md:text-base font-black italic text-white leading-snug"
                                                style={{ textShadow: "0 0 30px rgba(255,255,255,0.25)" }}>
                                                &ldquo;{finalPhrase}&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* OUTIL + DÉCLENCHEURS côte à côte sur md, empilés sur mobile */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 shrink-0">
                                    {selectedTool && (
                                        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-3 md:p-4 flex items-center gap-3">
                                            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0 shadow-[0_0_14px_rgba(204,0,0,0.4)]">
                                                <span className="text-xs font-black text-white">{selectedTool.id}</span>
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-[#CC0000] mb-0.5">Mon outil</p>
                                                <p className="text-sm font-black text-white leading-tight truncate">{selectedTool.label}</p>
                                                <p className="text-[10px] text-neutral-500 leading-tight mt-0.5 line-clamp-1">{selectedTool.desc}</p>
                                            </div>
                                        </div>
                                    )}
                                    {contextTriggers.length > 0 && (
                                        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-3 md:p-4">
                                            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/25 mb-2">Déclencheurs</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {contextTriggers.slice(0, 4).map(t => (
                                                    <span key={t} className="px-2 py-1 bg-[#CC0000]/10 border border-[#CC0000]/20 rounded-full text-[10px] font-medium text-[#FF6666] leading-none">
                                                        {t}
                                                    </span>
                                                ))}
                                                {contextTriggers.length > 4 && (
                                                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-neutral-500 leading-none">
                                                        +{contextTriggers.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* OBSTACLE + FRÉQUENCE + OBJECTIF */}
                                <div className="grid grid-cols-3 gap-2 shrink-0">
                                    {(answers["devenir"] as string) && (
                                        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-2.5 md:p-3">
                                            <p className="text-[7px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">Obstacle</p>
                                            <p className="text-[10px] md:text-xs font-bold text-white leading-snug line-clamp-2">{answers["devenir"] as string}</p>
                                        </div>
                                    )}
                                    {(answers["frequence"] as string) && (
                                        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-2.5 md:p-3">
                                            <p className="text-[7px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">Fréquence</p>
                                            <p className="text-[10px] md:text-xs font-medium text-neutral-300 leading-snug line-clamp-2">{answers["frequence"] as string}</p>
                                        </div>
                                    )}
                                    {(answers["devenir_goal"] as string) && (
                                        <div className="bg-white/[0.03] border border-white/8 rounded-xl p-2.5 md:p-3">
                                            <p className="text-[7px] font-black uppercase tracking-[0.3em] text-white/20 mb-1">Objectif</p>
                                            <p className="text-[10px] md:text-xs font-medium text-white leading-snug line-clamp-2">{answers["devenir_goal"] as string}</p>
                                        </div>
                                    )}
                                </div>

                                {/* ACTION DU LENDEMAIN */}
                                {(answers["demain_action"] as string) && (
                                    <div className="bg-white/[0.03] border border-white/8 rounded-xl px-4 py-2.5 flex gap-3 items-center shrink-0">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                                        <p className="text-[10px] md:text-xs text-neutral-400 leading-snug">{answers["demain_action"] as string}</p>
                                    </div>
                                )}

                                {/* CLÉS + RESSOURCES */}
                                <div className="grid grid-cols-2 gap-2 shrink-0 mt-auto">
                                    <div className="border border-white/5 rounded-xl px-3 py-2.5">
                                        <div className="space-y-1">
                                            {["Automatisme ≠ Choix", "Nicotine ado ≠ Adulte", "Aérosol ≠ Air"].map(k => (
                                                <p key={k} className="text-[8px] font-bold uppercase text-neutral-700 leading-tight">{k}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-[7px] font-black uppercase tracking-[0.4em] text-white/20 text-center">Si t&apos;as besoin</p>
                                        <div className="grid grid-cols-3 gap-1">
                                            {["Infirmier·ère", "CPE", "3989"].map(r => (
                                                <div key={r} className="bg-[#CC0000]/8 border border-[#CC0000]/20 rounded-lg py-1.5 px-1 text-center">
                                                    <p className="text-[8px] font-black text-[#FF5555] leading-tight">{r}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Pied de carte */}
                            <div className="flex justify-center px-5 py-3 md:py-4 bg-white/[0.02] border-t border-white/5 shrink-0">
                                <RippleButton
                                    onClick={() => { setStep(0); setAnswers({}); }}
                                    variant="ghost"
                                    className="px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest"
                                    onMouseEnter={() => setCursorType("button")}
                                    onMouseLeave={() => setCursorType("default")}
                                >
                                    Recommencer
                                </RippleButton>
                            </div>

                        </div>
                    </div>

                    {/* Footer identique */}
                    <div className="w-full bg-[#CC0000] shrink-0 flex items-center justify-center h-9 md:h-10 z-20 shadow-[0_-2px_40px_rgba(204,0,0,0.5)]">
                        <span className="text-[9px] md:text-sm font-black uppercase tracking-[0.55em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                    </div>
                    <div className="w-full bg-black shrink-0 h-9 md:h-10 flex items-center justify-center border-t border-white/5 z-20">
                        <span className="font-black text-[13px] md:text-[15px] text-white tracking-[0.4em]" style={{ fontFamily: "var(--font-orbitron, monospace)" }}>
                            A.M. <span className="text-[#CC0000]">17</span>
                        </span>
                    </div>

                </div>

                <style jsx global>{`
                    .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 10px; }
                `}</style>
            </>
        );
    }

    // ─── RENDER ───────────────────────────────────────────────────────────────

    if (stage === "loading") {
        return (
            <>
                <BgLayers />
                {!isMobile && <CustomCursor cursorType={cursorType} />}
                <style>{!isMobile ? `* { cursor: none !important; }` : ""}</style>
                <AtelierLoader onComplete={() => setStage("prenom")} />
            </>
        );
    }

    if (stage === "prenom") {
        return (
            <>
                <BgLayers />
                {!isMobile && <CustomCursor cursorType={cursorType} />}
                <style>{!isMobile ? `* { cursor: none !important; }` : ""}</style>
                <PrenomScreen
                    onSubmit={(name) => { setPrenom(name); setStage("quiz"); }}
                    isMobile={isMobile}
                    setCursorType={setCursorType}
                />
            </>
        );
    }

    return (
        <>
            {!isMobile && <CustomCursor cursorType={cursorType} />}
            <style>{!isMobile ? `* { cursor: none !important; }` : ""}</style>

            <BgLayers />

            {/* ── STAGE — fixe sur mobile, min-h sur desktop ── */}
            <div className="relative z-[10] flex flex-col h-dvh md:min-h-screen md:h-auto overflow-hidden md:overflow-visible">

                {/* ── LOGO & TOP RIBBON ── */}
                <div className="flex flex-col items-center pt-8 md:pt-20 pb-4 md:pb-10 shrink-0">
                    <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="w-10 md:w-14 h-auto mb-5 md:mb-10 brightness-0 drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                    />
                    <div className="w-full bg-[#CC0000] flex items-center justify-center h-9 md:h-11 shadow-[0_2px_45px_rgba(204,0,0,0.55)]">
                        <span className="text-[9px] md:text-sm font-black uppercase tracking-[0.55em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-center px-3 pb-3 md:pb-8 md:p-8 overflow-hidden">
                    <div className="w-full max-w-2xl bg-[#08080C]/85 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_40px_120px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col" style={{ maxHeight: "calc(100dvh - 180px)" }}>

                        {/* Header Branding */}
                        <div className="flex flex-col items-center justify-center px-6 py-5 md:py-10 border-b border-white/5 bg-white/[0.02] shrink-0">
                            <h1 className="text-xl md:text-4xl font-black uppercase tracking-[0.4em] text-white text-center"
                                style={{ fontFamily: "var(--font-oswald, sans-serif)", textShadow: "0 0 30px rgba(255,255,255,0.4)" }}>
                                Alert&apos;Élèves
                            </h1>
                        </div>

                        {/* Progress */}
                        {!isDone && (
                            <div className="h-[2.5px] w-full bg-white/5">
                                <div className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500" style={{ width: `${progress}%` }} />
                            </div>
                        )}

                        {/* Body */}
                        <div className="p-4 md:p-10 flex-1 overflow-hidden">
                            <div style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.25s, transform 0.25s" }}>
                                <div className="flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-6">
                                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#CC0000]">Étape {step + 1}</p>
                                            <p className="text-[10px] font-black text-white/20 tracking-widest">{step + 1} / {STEPS.length}</p>
                                        </div>

                                        <div className="overflow-y-auto pr-1 custom-scrollbar" style={{ maxHeight: "calc(100dvh - 320px)", minHeight: "200px" }}>
                                            <h2 className="text-xl md:text-3xl font-black text-white mb-3 leading-tight tracking-tight" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>
                                                {current.title}
                                            </h2>
                                            <p className="text-neutral-500 text-[13px] mb-8 tracking-wide font-medium opacity-80 leading-relaxed">{current.sub}</p>

                                            <div className="space-y-4 pb-4">

                                                {/* OPTIONS */}
                                                {current.type === "options" && (
                                                    <div className="space-y-3">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                            {current.options.map(opt => {
                                                                const sel = Array.isArray(answers[current.id])
                                                                    ? (answers[current.id] as string[]).includes(opt)
                                                                    : answers[current.id] === opt;
                                                                return (
                                                                    <button
                                                                        key={opt}
                                                                        onClick={() => toggleOption(current.id, opt, !!current.multi)}
                                                                        onMouseEnter={() => setCursorType("option")}
                                                                        onMouseLeave={() => setCursorType("default")}
                                                                        className={cn(
                                                                            "px-4 py-3.5 rounded-xl text-sm font-medium text-left border transition-all duration-150 active:scale-[0.98] leading-snug",
                                                                            sel ? "bg-white/15 border-white/50 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]" : "bg-white/[0.04] border-white/10 text-neutral-300 hover:bg-white/[0.07] hover:border-white/25"
                                                                        )}
                                                                    >
                                                                        {opt}
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                        {current.id !== "frequence" && (
                                                            <div className="mt-4">
                                                                <p className="text-[10px] font-bold text-neutral-600 mb-2 ml-1 tracking-widest uppercase">Ta propre réponse (facultatif) :</p>
                                                                <input
                                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                                                                    placeholder="Précise ta situation..."
                                                                    value={(answers[current.id + "_perso"] as string) ?? ""}
                                                                    onChange={e => setText(current.id + "_perso", e.target.value)}
                                                                    onFocus={() => setCursorType("text")}
                                                                    onBlur={() => setCursorType("default")}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {/* TOOLS */}
                                                {current.type === "tools" && (
                                                    <div className="space-y-3">
                                                        {TOOLS.map(tool => {
                                                            const sel = answers["outil"] === String(tool.id);
                                                            return (
                                                                <button
                                                                    key={tool.id}
                                                                    onClick={() => setText("outil", String(tool.id))}
                                                                    onMouseEnter={() => setCursorType("option")}
                                                                    onMouseLeave={() => setCursorType("default")}
                                                                    className={cn(
                                                                        "w-full text-left p-5 rounded-2xl border transition-all duration-150 active:scale-[0.99]",
                                                                        sel ? "bg-white/12 border-white/40 text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]" : "bg-white/5 border-white/10 text-neutral-400 hover:border-white/20"
                                                                    )}
                                                                >
                                                                    <p className="text-[10px] font-black text-[#CC0000] uppercase tracking-[0.4em] mb-1.5">Outil {tool.id}</p>
                                                                    <p className="font-black text-white text-sm md:text-base mb-1 leading-snug">{tool.label}</p>
                                                                    <p className="text-xs text-neutral-500 mb-3 leading-relaxed">{tool.desc}</p>
                                                                    <div className="h-[1px] w-10 bg-white/10 mb-3" />
                                                                    <p className="text-[10px] italic text-neutral-600">{tool.for}</p>
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                )}

                                                {/* MULTI-TEXT */}
                                                {current.type === "multi-text" && (
                                                    <div className="space-y-7">
                                                        {current.fields.map(f => (
                                                            <div key={f.id}>
                                                                <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-3 ml-1">{f.label}</label>
                                                                <input
                                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 text-white text-sm font-medium focus:outline-none focus:border-white/30 transition-colors shadow-inner"
                                                                    placeholder={f.placeholder}
                                                                    value={(answers[f.id] as string) ?? ""}
                                                                    onChange={e => setText(f.id, e.target.value)}
                                                                    onFocus={() => setCursorType("text")}
                                                                    onBlur={() => setCursorType("default")}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* CHOICE-CUSTOM (question 6) */}
                                                {current.type === "choice-custom" && (
                                                    <div className="space-y-6">
                                                        {current.groups.map(group => (
                                                            <div key={group.label}>
                                                                <div className="flex items-center gap-3 mb-4">
                                                                    <div className="h-[1px] flex-1 bg-white/5" />
                                                                    <p className="text-[9px] font-black text-[#CC0000] tracking-[0.4em] opacity-80 uppercase">{group.label}</p>
                                                                    <div className="h-[1px] flex-1 bg-white/5" />
                                                                </div>
                                                                <div className="grid grid-cols-1 gap-2">
                                                                    {group.options.map(opt => (
                                                                        <button
                                                                            key={opt}
                                                                            onClick={() => setAnswers(prev => ({ ...prev, [current.id]: opt, [current.id + "_custom"]: "" }))}
                                                                            onMouseEnter={() => setCursorType("option")}
                                                                            onMouseLeave={() => setCursorType("default")}
                                                                            className={cn(
                                                                                "px-4 py-3.5 rounded-xl text-sm font-medium border text-left transition-all",
                                                                                answers[current.id] === opt ? "bg-white/15 border-white/50 text-white shadow-lg" : "bg-transparent border-white/8 text-neutral-400 hover:text-neutral-200 hover:border-white/20"
                                                                            )}
                                                                        >
                                                                            {opt}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="pt-5 border-t border-white/5">
                                                            <label className="block text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 mb-4 text-center">Ou exprime-la à ta façon</label>
                                                            <input
                                                                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white text-sm font-medium text-center focus:outline-none focus:border-white/40 transition-colors shadow-inner"
                                                                placeholder="Ta phrase personnelle..."
                                                                value={(answers[current.id + "_custom"] as string) ?? ""}
                                                                onChange={e => setAnswers(prev => ({ ...prev, [current.id + "_custom"]: e.target.value, [current.id]: "" }))}
                                                                onFocus={() => setCursorType("text")}
                                                                onBlur={() => setCursorType("default")}
                                                                onMouseEnter={() => setCursorType("text")}
                                                                onMouseLeave={() => setCursorType("default")}
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* TEXT */}
                                                {current.type === "text" && (
                                                    <input
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 text-white text-sm font-medium focus:outline-none focus:border-white/30 transition-colors"
                                                        placeholder={current.placeholder}
                                                        value={(answers[current.id] as string) ?? ""}
                                                        onChange={e => setText(current.id, e.target.value)}
                                                        onFocus={() => setCursorType("text")}
                                                        onBlur={() => setCursorType("default")}
                                                    />
                                                )}

                                                {/* TEXTAREA */}
                                                {current.type === "textarea" && (
                                                    <textarea
                                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 text-white min-h-[130px] text-sm font-medium focus:outline-none focus:border-white/30 transition-colors resize-none"
                                                        placeholder={current.placeholder}
                                                        value={(answers[current.id] as string) ?? ""}
                                                        onChange={e => setText(current.id, e.target.value)}
                                                        onFocus={() => setCursorType("text")}
                                                        onBlur={() => setCursorType("default")}
                                                    />
                                                )}

                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* Actions */}
                        {!isDone && (
                            <div className="flex justify-between items-center px-5 md:px-8 py-6 bg-white/[0.03] border-t border-white/5">
                                <RippleButton onClick={prev} disabled={step === 0} variant="ghost" className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-[0.3em]" onMouseEnter={() => setCursorType("button")} onMouseLeave={() => setCursorType("default")}>Retour</RippleButton>
                                <RippleButton onClick={next} disabled={!canProceed()} variant="primary" className="px-8 md:px-12 py-3.5 rounded-xl text-xs font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(255,255,255,0.05)]" onMouseEnter={() => setCursorType("button")} onMouseLeave={() => setCursorType("default")}>
                                    {step === STEPS.length - 1 ? "Voir mon bilan" : "Suivant"}
                                </RippleButton>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── BOTTOM RED RIBBON ── */}
                <div className="w-full bg-[#CC0000] shrink-0 flex items-center justify-center h-10 z-20 mt-8 shadow-[0_-2px_50px_rgba(204,0,0,0.5)]">
                    <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.55em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                </div>

                <div className="w-full bg-black shrink-0 h-10 flex items-center justify-center border-t border-white/5 z-20">
                    <span className="font-black text-[15px] text-white tracking-[0.4em]" style={{ fontFamily: "var(--font-orbitron, monospace)" }}>
                        A.M. <span className="text-[#CC0000]">17</span>
                    </span>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 10px; }
            `}</style>
        </>
    );
}
