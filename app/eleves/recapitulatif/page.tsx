import { CheckCircle2, AlertTriangle, Lightbulb, Activity } from "lucide-react";

const points = [
    {
        icon: AlertTriangle,
        title: "L'illusion de contrôle",
        body: "Le sel de nicotine contenu dans la Puff frappe le cerveau en quelques secondes. C'est ce qui crée cet effet \"shoot\" immédiat, mais aussi la rapidité extrême de l'addiction. Tu penses gérer, mais c'est ton cerveau reptilien qui réclame la dose.",
        color: "#CC0000",
        bgOpacity: "bg-[#CC0000]/8",
        border: "border-[#CC0000]/20",
    },
    {
        icon: Activity,
        title: "Ton souffle en première ligne",
        body: "Essoufflement au sport, toux sèche, fatigue... Les composants chimiques chauffés endommagent les cils vibratiles de tes poumons dès les premières semaines d'utilisation quotidienne.",
        color: "#CC0000",
        bgOpacity: "bg-[#CC0000]/8",
        border: "border-[#CC0000]/20",
    },
    {
        icon: Lightbulb,
        title: "Reprendre le dessus",
        body: "Comprendre que c'est une drogue de synthèse est la première étape. Utiliser des substituts, retarder les prises, en parler. Le sevrage est totalement possible, et les bénéfices se sentent en seulement 48 heures.",
        color: "#22C55E",
        bgOpacity: "bg-green-500/8",
        border: "border-green-500/20",
    },
];

const bullets = [
    "Une Puff = 2 à 3 paquets de cigarettes en nicotine.",
    "Le cerveau termine son développement à 25 ans.",
    "Tu n'es pas seul face au stress du manque.",
];

export default function RecapitulatifPage() {
    return (
        <div className="max-w-4xl mx-auto pb-12">
            {/* Header */}
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 rounded-full bg-[#CC0000]" />
                    <h1
                        className="text-3xl md:text-4xl font-black text-white tracking-[0.05em] uppercase"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        Mon Récapitulatif
                    </h1>
                </div>
                <p className="text-neutral-500 text-base ml-4">
                    Un condensé de ce qu'on s'est dit pendant l'intervention. L'essentiel à retenir, sans langue de bois.
                </p>
            </header>

            <div className="space-y-5">
                {points.map((pt) => {
                    const Icon = pt.icon;
                    return (
                        <div
                            key={pt.title}
                            className={`bg-[#08080C]/60 backdrop-blur-xl border ${pt.border} rounded-2xl overflow-hidden`}
                        >
                            {/* Accent bar */}
                            <div className="h-0.5 w-full" style={{ background: pt.color }} />
                            <div className="p-6 md:p-8">
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`mt-0.5 w-11 h-11 rounded-2xl ${pt.bgOpacity} flex items-center justify-center shrink-0`}
                                    >
                                        <Icon className="w-5 h-5" style={{ color: pt.color }} />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-lg font-black text-white mb-2 uppercase tracking-wide"
                                            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                                        >
                                            {pt.title}
                                        </h3>
                                        <p className="text-neutral-400 leading-relaxed text-sm">{pt.body}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Checklist */}
                <div className="mt-8 p-6 md:p-8 bg-[#08080C]/80 border border-white/8 rounded-2xl backdrop-blur-xl">
                    <h3
                        className="text-base font-black text-white mb-6 flex items-center gap-2 uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}
                    >
                        <CheckCircle2 className="text-[#CC0000] w-5 h-5" />
                        À garder en tête
                    </h3>
                    <ul className="space-y-4">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-center gap-3 text-neutral-400 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] shrink-0" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
