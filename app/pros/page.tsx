import { CalendarDays, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProsPlanningPage() {
    return (
        <div className="max-w-5xl mx-auto pb-12">
            {/* Header */}
            <header className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-1 rounded-full bg-indigo-500" />
                    <h1
                        className="text-3xl md:text-4xl font-black text-white tracking-[0.05em] uppercase"
                        style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                    >
                        Mon Planning & Actions
                    </h1>
                </div>
                <p className="text-neutral-500 text-base ml-4">
                    Vue d'ensemble de l'avancée du pilote de prévention dans votre établissement.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Col — Timeline */}
                <div className="lg:col-span-2">
                    <div className="bg-[#08080C]/70 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden">
                        <div className="h-0.5 w-full bg-indigo-500" />
                        <div className="p-7">
                            <h2
                                className="text-lg font-black text-white mb-7 uppercase tracking-[0.08em]"
                                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                            >
                                Prochaines Étapes du Pilote
                            </h2>

                            <div className="space-y-7 relative before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

                                {/* Done */}
                                <div className="relative flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.4)] z-10">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-xl">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3
                                                className="font-black text-indigo-300 uppercase tracking-wide text-sm"
                                                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                                            >
                                                Prise de contact
                                            </h3>
                                            <span className="text-[10px] text-indigo-400 font-black bg-indigo-500/20 px-2 py-0.5 rounded-full uppercase tracking-widest" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Fait</span>
                                        </div>
                                        <p className="text-sm text-neutral-500">Validation des dates avec la direction.</p>
                                    </div>
                                </div>

                                {/* Pending */}
                                <div className="relative flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-full bg-[#08080C] border-2 border-indigo-500/50 flex items-center justify-center shrink-0 z-10">
                                        <AlertCircle className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div className="flex-1 bg-white/4 border border-white/8 p-4 rounded-xl hover:border-indigo-500/30 transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3
                                                className="font-black text-white uppercase tracking-wide text-sm"
                                                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                                            >
                                                Intervention Classes
                                            </h3>
                                            <span className="text-[10px] text-neutral-600 font-black uppercase tracking-widest" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>En attente</span>
                                        </div>
                                        <p className="text-sm text-neutral-500">Passage de l'équipe dans les classes de 3ème.</p>
                                    </div>
                                </div>

                                {/* Upcoming */}
                                <div className="relative flex items-start gap-5 opacity-40">
                                    <div className="w-10 h-10 rounded-full bg-[#08080C] border border-white/10 flex items-center justify-center shrink-0 z-10">
                                        <Clock className="w-5 h-5 text-neutral-600" />
                                    </div>
                                    <div className="flex-1 p-4">
                                        <h3
                                            className="font-black text-neutral-500 uppercase tracking-wide text-sm"
                                            style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                                        >
                                            Suivi & Feed-back
                                        </h3>
                                        <p className="text-sm text-neutral-600">Collecte des questionnaires élèves.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Col */}
                <div className="space-y-5">
                    {/* Pilote actif */}
                    <div className="bg-[#08080C]/70 backdrop-blur-xl border border-indigo-500/20 rounded-2xl overflow-hidden">
                        <div className="h-0.5 w-full bg-indigo-500" />
                        <div className="p-6">
                            <h3
                                className="font-black text-white mb-2 uppercase tracking-wide text-sm"
                                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                            >
                                Pilote Actif
                            </h3>
                            <p className="text-sm text-neutral-500 mb-5 leading-relaxed">Votre établissement bénéficie du programme de test Alerte'Élèves.</p>
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-xs h-11" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>
                                Contacter l'équipe
                            </Button>
                        </div>
                    </div>

                    {/* Dates clés */}
                    <div className="bg-[#08080C]/70 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden">
                        <div className="h-0.5 w-full bg-white/10" />
                        <div className="p-6">
                            <h3
                                className="font-black text-white mb-5 flex items-center gap-2 uppercase tracking-wide text-sm"
                                style={{ fontFamily: "var(--font-oswald, sans-serif)" }}
                            >
                                <CalendarDays className="w-4 h-4 text-indigo-400" />
                                Dates Clés
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <div className="text-sm font-medium text-white">Réunion équipe</div>
                                    <div className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded-lg">12 Nov.</div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-medium text-white">Lancement</div>
                                    <div className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-lg border border-indigo-500/20">À définir</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
