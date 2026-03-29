import Link from "next/link";
import { PlayCircle, ShieldAlert, Sparkles, MessageCircleQuestion } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ElevesDashboard() {
    return (
        <div className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                    Bienvenue dans ton espace.
                </h1>
                <p className="text-neutral-soft text-lg md:text-xl max-w-2xl">
                    Ici, pas de leçon de morale. Juste des faits, des astuces, et des outils pour comprendre comment reprendre le contrôle.
                </p>
            </div>

            {/* Emergency Action */}
            <div className="mb-16">
                <Link href="/eleves/boite-a-outils">
                    <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between group hover:border-red-500/60 transition-colors cursor-pointer">
                        <div className="flex items-center gap-6 mb-4 md:mb-0">
                            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                <ShieldAlert className="w-8 h-8 text-red-500" />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Tu sens que ça dérape ?</h2>
                                <p className="text-neutral-300 text-sm md:text-base">Que faire si la puff prend trop de place dans ta vie.</p>
                            </div>
                        </div>
                        <div className="bg-red-500 text-white font-bold px-6 py-3 rounded-xl whitespace-nowrap group-hover:bg-red-600 transition-colors w-full md:w-auto text-center">
                            Voir les réflexes
                        </div>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Vidéos & Explications", desc: "Comprendre les mécanismes du cerveau.", icon: PlayCircle, color: "text-secondary", bg: "bg-secondary/10" },
                    { title: "Vrai ou Faux", desc: "Démonter les idées reçues.", icon: Sparkles, color: "text-primary", bg: "bg-primary/10" },
                    { title: "Assistant Anonyme", desc: "Pose tes questions sans jugement.", icon: MessageCircleQuestion, color: "text-white", bg: "bg-white/10" },
                ].map((item, i) => (
                    <Card key={i} className="bg-surface/50 border-white/5 hover:bg-surface hover:border-white/10 transition-all cursor-pointer group">
                        <CardContent className="p-6 md:p-8">
                            <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-neutral-soft text-sm leading-relaxed">{item.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
