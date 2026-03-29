"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TOOLS = [
    { id: 1, label: "Dire non clairement", desc: "Sans se justifier ni débattre." },
    { id: 2, label: "Créer des obstacles volontaires", desc: "Pour tenir son arrêt dans le temps." },
    { id: 3, label: "Remplacer le réflexe", desc: "Une habitude saine à la place." },
    { id: 4, label: "Soutenir sans juger", desc: "Ecouter, questionner, rester présent." },
    { id: 5, label: "Le test du meilleur futur", desc: "Cette habitude me rapproche ou m'en eloigne ?" },
];

type StepDef =
    | { type: "options"; id: string; phase: "A" | "B"; title: string; sub: string; options: string[] }
    | { type: "text" | "textarea"; id: string; phase: "A" | "B"; title: string; sub: string; placeholder: string }
    | { type: "tools"; id: string; phase: "A" | "B"; title: string; sub: string };

const STEPS: StepDef[] = [
    {
        type: "options", id: "lieux", phase: "A",
        title: "Ou le geste arrive ?",
        sub: "Selectionne autant que tu veux.",
        options: ["Devant mon lycee / college", "Chez des potes", "Dans la rue", "En soiree", "Aux transports", "Dans ma chambre", "Partout", "Je sais pas encore"]
    },
    {
        type: "options", id: "moments", phase: "A",
        title: "A quel moment ca arrive ?",
        sub: "Tes moments a risque.",
        options: ["Le matin avant les cours", "A la pause dejeuner", "Apres les cours", "Le soir", "Le week-end", "Quand je suis stresse", "Tout le temps"]
    },
    {
        type: "options", id: "etat", phase: "A",
        title: "Dans quel etat tu es quand ca arrive ?",
        sub: "Emotions, niveau d'energie...",
        options: ["Stresse / anxieux", "Ennuye", "Euphorique / festif", "Fatigue", "Sous pression scolaire", "Triste", "Heureux / en mode detente"]
    },
    {
        type: "options", id: "contexte", phase: "A",
        title: "Avec qui ? Dans quelle situation ?",
        sub: "Ton contexte social declencheur.",
        options: ["Seul", "En groupe d'amis", "Sous pression sociale", "Avec quelqu'un qui fume", "Pour m'integrer"]
    },
    {
        type: "textarea", id: "synthese", phase: "A",
        title: "Mes declencheurs — en resume",
        sub: "Reformule ce que tu viens d'identifier. En quelques mots. Pour toi.",
        placeholder: "Ex : Surtout en soiree avec des potes quand je suis stresse..."
    },
    {
        type: "textarea", id: "situation", phase: "B",
        title: "Ma situation aujourd'hui",
        sub: "Dis-le comme tu le ressentirais a un pote. Pas de filtre.",
        placeholder: "Ex : Je vapote environ 3-4 fois par jour, plutot le soir..."
    },
    {
        type: "text", id: "changer", phase: "B",
        title: "Ce que je voudrais changer — 1 seule chose",
        sub: "Pas une liste, juste la priorite numero 1.",
        placeholder: "Ex : Arreter de vapoter le soir avant de dormir"
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
        placeholder: "Ex : Je l'ai deja fait, c'est bon"
    },
    {
        type: "text", id: "declencheur", phase: "B",
        title: "Mon declencheur principal a surveiller",
        sub: "Une seule situation que tu veux garder en tete.",
        placeholder: "Ex : Les soirees avec X"
    },
    {
        type: "textarea", id: "confiance", phase: "B",
        title: "Des personnes en qui j'ai confiance",
        sub: "Pas obligatoire. Juste pour savoir a qui parler si besoin.",
        placeholder: "Ex : Mon infirmiere scolaire, mon CPE..."
    },
];

type Answers = Record<string, string | string[]>;

// ─── PARTICLES ────────────────────────────────────────────────────────────────
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

// ─── RIPPLE BUTTON ───────────────────────────────────────────────────────────
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
                style={{
                    width: c.size, height: c.size,
                    background: c.color,
                    opacity: c.opacity,
                    top: pos.y - c.size / 2,
                    left: pos.x - c.size / 2,
                }}
            />
            <div
                className="fixed pointer-events-none z-[998] rounded-full border transition-[width,height,border-color] duration-200"
                style={{
                    width: c.ring, height: c.ring,
                    borderColor: c.color,
                    opacity: 0.4,
                    top: pos.y - c.ring / 2,
                    left: pos.x - c.ring / 2,
                }}
            />
        </>
    );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function AtelierStandalone() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [cursorType, setCursorType] = useState<CursorType>("default");
    const [animDir, setAnimDir] = useState<"in" | "out">("in");
    const [visible, setVisible] = useState(true);

    const current = STEPS[step];
    const isDone = step >= STEPS.length;
    const progress = Math.min(((step + 1) / STEPS.length) * 100, 100);
    const totalA = STEPS.filter(s => s.phase === "A").length;

    // ── transitions ──
    const goTo = useCallback((nextStep: number) => {
        setVisible(false);
        setAnimDir("out");
        setTimeout(() => {
            setStep(nextStep);
            setAnimDir("in");
            setVisible(true);
        }, 260);
    }, []);

    const next = () => goTo(step + 1);
    const prev = () => goTo(step - 1);

    function toggleOption(id: string, val: string) {
        const prev2 = (answers[id] as string[] | undefined) ?? [];
        setAnswers({ ...answers, [id]: prev2.includes(val) ? prev2.filter(v => v !== val) : [...prev2, val] });
    }

    function setText(id: string, val: string) {
        setAnswers({ ...answers, [id]: val });
    }

    const canProceed = () => {
        if (!current) return false;
        if (current.type === "textarea" || current.type === "text") return true;
        const a = answers[current.id];
        return Array.isArray(a) ? a.length > 0 : !!a;
    };

    const selectedTool = TOOLS.find(t => t.id === Number(answers["outil"]));

    // ── phase label ──
    const phaseLabel = !isDone && current?.phase === "A"
        ? `ETAPE A — TES DECLENCHEURS (${step + 1}/${totalA})`
        : !isDone ? `ETAPE B — TON PLAN PERSO (${step - totalA + 1}/${STEPS.length - totalA})` : "";

    // ─── SUMMARY ───────────────────────────────────────────────────────────────
    const SummaryCard = () => (
        <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
                <div className="flex gap-3 flex-wrap">
                    {["Automatisme ≠ Choix", "Nicotine ado ≠ Adulte", "Aerosol ≠ Air"].map(k => (
                        <span key={k} className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">{k}</span>
                    ))}
                </div>
            </div>

            <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">Mes declencheurs</h3>
                <div className="space-y-1.5 text-sm text-neutral-300">
                    {([answers["lieux"]] as string[][]).flat().length > 0 && <p>Lieux :<span className="text-white ml-1">{([answers["lieux"]] as string[][]).flat().join(", ")}</span></p>}
                    {([answers["moments"]] as string[][]).flat().length > 0 && <p>Moments :<span className="text-white ml-1">{([answers["moments"]] as string[][]).flat().join(", ")}</span></p>}
                    {([answers["etat"]] as string[][]).flat().length > 0 && <p>Etat :<span className="text-white ml-1">{([answers["etat"]] as string[][]).flat().join(", ")}</span></p>}
                    {([answers["contexte"]] as string[][]).flat().length > 0 && <p>Contexte :<span className="text-white ml-1">{([answers["contexte"]] as string[][]).flat().join(", ")}</span></p>}
                </div>
                {(answers["synthese"] as string) && (
                    <p className="mt-3 text-sm text-white italic border-l-2 border-white/30 pl-3">{answers["synthese"] as string}</p>
                )}
            </section>

            <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-3">Mon plan</h3>
                <div className="space-y-3 text-sm">
                    {(answers["changer"] as string) && <p className="text-neutral-200">Changer :<span className="text-white font-bold ml-1">{answers["changer"] as string}</span></p>}
                    {selectedTool && (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                            <p className="text-[10px] uppercase text-neutral-400 mb-1">Outil {selectedTool.id}</p>
                            <p className="text-white font-bold">{selectedTool.label}</p>
                        </div>
                    )}
                    {(answers["phrase"] as string) && <p className="text-neutral-200 italic">"{answers["phrase"] as string}"</p>}
                    {(answers["declencheur"] as string) && <p className="text-neutral-200">A surveiller :<span className="text-white font-bold ml-1">{answers["declencheur"] as string}</span></p>}
                </div>
            </section>

            <div className="border-t border-white/10 pt-4 text-center">
                <p className="text-white text-sm font-bold italic leading-relaxed">
                    "La liberte commence quand le geste cesse de choisir a ta place."
                </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {["Infirmier scolaire", "CPE", "3989"].map(r => (
                    <div key={r} className="border border-white/10 bg-white/5 rounded-xl p-2 text-center">
                        <p className="text-[10px] font-black text-neutral-300">{r}</p>
                    </div>
                ))}
            </div>

            <RippleButton
                onClick={() => { setStep(0); setAnswers({}); }}
                variant="ghost"
                className="w-full py-3 rounded-xl text-sm font-bold tracking-widest uppercase"
                onMouseEnter={() => setCursorType("button")}
                onMouseLeave={() => setCursorType("default")}
            >
                Recommencer
            </RippleButton>
        </div>
    );

    return (
        <>
            <CustomCursor cursorType={cursorType} />
            <style>{`* { cursor: none !important; }`}</style>

            {/* ── BG LAYER 1: Grid ── */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "3.5rem 3.5rem",
                    filter: "blur(0.5px)",
                }}
            />

            {/* ── BG LAYER 2: Particles ── */}
            <ParticlesLayer />

            {/* ── BG LAYER 3: Vignette ── */}
            <div
                className="fixed inset-0 z-[3] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 75% 70% at 50% 50%, transparent 10%, rgba(0,0,0,0.75) 100%)"
                }}
            />

            {/* ── DASHBOARD ── */}
            <div className="relative z-[10] flex flex-col min-h-screen py-12 md:py-20">

                {/* ── TOP RED STRIPE ── */}
                <div className="w-full bg-[#CC0000] shrink-0 flex items-center justify-center h-10 md:h-11 z-20 mb-8 md:mb-12"
                    style={{ boxShadow: "0 2px 30px rgba(204,0,0,0.5)" }}
                >
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white">
                        Prevention
                    </span>
                </div>

                {/* ── CONTENT ── */}
                <div className="flex-1 flex items-start md:items-center justify-center p-3 py-6 md:p-8">
                <div
                    className="w-full max-w-2xl"
                    style={{
                        borderRadius: "1.5rem",
                        background: "rgba(8,8,12,0.85)",
                        backdropFilter: "blur(24px) saturate(1.4)",
                        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(255,255,255,0.04), 0 40px 120px rgba(0,0,0,0.8)",
                    }}
                >
                    {/* ── Header stripe ── */}
                    <div
                        className="flex items-center justify-between px-5 py-4 md:px-6"
                        style={{
                            borderBottom: "1px solid rgba(255,255,255,0.07)",
                            background: "rgba(255,255,255,0.03)"
                        }}
                    >
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-neutral-300">Alert'Eleves</p>
                            <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase">A.M. 17 — Portail LFD</p>
                        </div>
                        {!isDone && (
                            <div className="text-right">
                                <p className="text-[9px] uppercase tracking-widest text-white/20">{STEPS.length} etapes</p>
                                <p className="text-xs font-bold text-white/50">{step + 1}/{STEPS.length}</p>
                            </div>
                        )}
                    </div>

                    {/* ── Progress bar ── */}
                    {!isDone && (
                        <div className="h-[2px] bg-white/5 mx-5 md:mx-6 mt-4 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white/40 transition-all duration-500"
                                style={{ width: `${progress}%`, boxShadow: "0 0 8px rgba(255,255,255,0.3)" }}
                            />
                        </div>
                    )}

                    {/* ── Content ── */}
                    <div className="p-4 md:p-8 min-h-[20rem]">
                        <div
                            className="transition-all duration-250"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible
                                    ? "translateY(0)"
                                    : animDir === "out" ? "translateY(-12px)" : "translateY(12px)",
                            }}
                        >
                            {isDone ? (
                                <SummaryCard />
                            ) : (
                                <>
                                    {/* Phase label */}
                                    <p className="text-[9px] font-black uppercase tracking-[0.35em] text-neutral-500 mb-4">{phaseLabel}</p>

                                    {/* Question */}
                                    <h2 className="text-xl md:text-2xl font-black text-white mb-1 leading-tight tracking-tight" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>
                                        {current.title}
                                    </h2>
                                    <p className="text-neutral-500 text-sm mb-6">{current.sub}</p>

                                    {/* Input */}
                                    <div className="space-y-2">
                                        {current.type === "options" && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {current.options.map(opt => {
                                                    const sel = ((answers[current.id] as string[]) ?? []).includes(opt);
                                                    return (
                                                        <button
                                                            key={opt}
                                                            onClick={() => toggleOption(current.id, opt)}
                                                            onMouseEnter={() => setCursorType("option")}
                                                            onMouseLeave={() => setCursorType("default")}
                                                            className={cn(
                                                                "px-3 py-3 rounded-xl text-sm font-medium text-left border transition-all duration-150 active:scale-95",
                                                                sel
                                                                    ? "bg-white/10 border-white/40 text-white"
                                                                    : "bg-white/[0.03] border-white/10 text-neutral-300 hover:bg-white/[0.06] hover:border-white/20"
                                                            )}
                                                            style={sel ? { boxShadow: "0 0 14px rgba(255,255,255,0.12)" } : undefined}
                                                        >
                                                            {opt}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {current.type === "text" && (
                                            <input
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                                                placeholder={current.placeholder}
                                                value={(answers[current.id] as string) ?? ""}
                                                onChange={e => setText(current.id, e.target.value)}
                                                onFocus={() => setCursorType("text")}
                                                onBlur={() => setCursorType("default")}
                                            />
                                        )}

                                        {current.type === "textarea" && (
                                            <textarea
                                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm min-h-[120px] focus:outline-none focus:border-white/30 transition-colors resize-none"
                                                placeholder={current.placeholder}
                                                value={(answers[current.id] as string) ?? ""}
                                                onChange={e => setText(current.id, e.target.value)}
                                                onFocus={() => setCursorType("text")}
                                                onBlur={() => setCursorType("default")}
                                            />
                                        )}

                                        {current.type === "tools" && (
                                            <div className="space-y-2">
                                                {TOOLS.map(tool => {
                                                    const sel = answers["outil"] === String(tool.id);
                                                    return (
                                                        <button
                                                            key={tool.id}
                                                            onClick={() => setText("outil", String(tool.id))}
                                                            onMouseEnter={() => setCursorType("option")}
                                                            onMouseLeave={() => setCursorType("default")}
                                                            className={cn(
                                                                "w-full text-left p-4 rounded-xl border transition-all duration-150 active:scale-[0.99]",
                                                                sel
                                                                    ? "bg-white/10 border-white/35 text-white"
                                                                    : "bg-white/[0.03] border-white/10 text-neutral-300 hover:border-white/20 hover:bg-white/[0.05]"
                                                            )}
                                                            style={sel ? { boxShadow: "0 0 16px rgba(255,255,255,0.1)" } : undefined}
                                                        >
                                                            <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-1">Outil {tool.id}</span>
                                                            <span className="block font-bold text-sm">{tool.label}</span>
                                                            <span className="block text-neutral-500 text-xs mt-0.5">{tool.desc}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* ── Footer nav ── */}
                    {!isDone && (
                        <div
                            className="flex justify-between items-center px-4 md:px-6 py-4"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                        >
                            <RippleButton
                                onClick={prev}
                                disabled={step === 0}
                                variant="ghost"
                                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest"
                                onMouseEnter={() => setCursorType("button")}
                                onMouseLeave={() => setCursorType("default")}
                            >
                                Retour
                            </RippleButton>

                            <RippleButton
                                onClick={next}
                                disabled={current.type !== "text" && current.type !== "textarea" && !canProceed()}
                                variant="primary"
                                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest"
                                onMouseEnter={() => setCursorType("button")}
                                onMouseLeave={() => setCursorType("default")}
                            >
                                {step === STEPS.length - 1 ? "Voir ma carte" : "Suivant"}
                            </RippleButton>
                        </div>
                    )}
                </div>
                </div>

                {/* ── BOTTOM RED STRIPE ── */}
                <div className="w-full bg-[#CC0000] shrink-0 flex items-center justify-center h-10 md:h-11 z-20 mt-8 md:mt-12"
                    style={{ boxShadow: "0 -2px 30px rgba(204,0,0,0.5)" }}
                >
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white">
                        Pour College et Lycee
                    </span>
                </div>

                {/* ── A.M.17 SIGNATURE ── */}
                <div className="w-full bg-black shrink-0 h-9 flex items-center justify-center border-t border-white/5 z-20 mt-4">
                    <span className="font-black text-sm text-white tracking-[0.3em]">
                        A.M. <span className="text-[#CC0000]">17</span>
                    </span>
                </div>

            </div>
        </>
    );
}
