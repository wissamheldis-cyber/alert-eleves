import { Bot, Sparkles, Scale, HeartHandshake } from "lucide-react";

const bots = [
    {
        icon: Sparkles,
        name: "Le Déclicker",
        desc: "Besoin d'aide pour comprendre ce qu'il se passe dans ton cerveau et comment arrêter de fumer la Puff sans pression ?",
        color: "#CC0000",
        bgClass: "bg-[#CC0000]/10",
        borderHover: "hover:border-[#CC0000]/40",
        btnBg: "bg-[#CC0000]",
    },
    {
        icon: Scale,
        name: "L'Avocat",
        desc: "Que des faits. Tu veux connaître les vrais risques légaux, les amendes ou tes droits au collège/lycée ?",
        color: "#3B82F6",
        bgClass: "bg-blue-500/10",
        borderHover: "hover:border-blue-500/40",
        btnBg: "bg-blue-600",
    },
    {
        icon: HeartHandshake,
        name: "Le Doc",
        desc: "Pose toutes tes questions sur les effets physiques exacts, le souffle, les poumons ou les produits chimiques.",
        color: "#22C55E",
        bgClass: "bg-green-500/10",
        borderHover: "hover:border-green-500/40",
        btnBg: "bg-green-600",
    },
    {
        icon: Bot,
        name: "Alerte IA",
        desc: "Assistant classique. Pose-moi n'importe quelle question sur l'intervention ou la prévention.",
        color: "#A855F7",
        bgClass: "bg-purple-500/10",
        borderHover: "hover:border-purple-500/40",
        btnBg: "bg-purple-600",
    },
];

export default function ElevesChatbotsPage() {
    return (
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 rounded-full bg-[#CC0000]" />
                    <h1
                        className="text-3xl md:text-4xl font-black text-white tracking-[0.05em] uppercase"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        Tchatche avec nos Assistants
                    </h1>
                </div>
                <p className="text-neutral-500 text-base ml-4">
                    Choisis le profil qui correspond le mieux à tes questions. C'est 100% anonyme, zéro jugement.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {bots.map((bot) => {
                    const Icon = bot.icon;
                    return (
                        <div
                            key={bot.name}
                            className={`bg-[#08080C]/60 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 ${bot.borderHover} hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]`}
                        >
                            {/* Accent top bar */}
                            <div className="h-0.5 w-full" style={{ background: bot.color }} />
                            <div className="p-7">
                                <div
                                    className={`w-14 h-14 rounded-2xl ${bot.bgClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Icon className="w-7 h-7" style={{ color: bot.color }} />
                                </div>
                                <h2
                                    className="text-xl font-black text-white mb-2 tracking-wide uppercase"
                                    style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                                >
                                    {bot.name}
                                </h2>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-6">{bot.desc}</p>
                                <div
                                    className={`${bot.btnBg} text-white text-xs font-black py-3 px-5 rounded-xl text-center uppercase tracking-[0.2em] opacity-75 group-hover:opacity-100 transition-opacity`}
                                    style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}
                                >
                                    Démarrer la discussion
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
