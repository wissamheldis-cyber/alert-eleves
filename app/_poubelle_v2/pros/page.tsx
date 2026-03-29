import { FolderOpen, Calendar, Film, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProsDashboard() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-white mb-2">Tableau de bord : Prévention</h1>
                <p className="text-neutral-soft">Gérez vos interventions et accédez aux ressources pédagogiques pour vos établissements.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "Interventions", val: "0", sub: "Planifiées", icon: Calendar },
                    { label: "Ressources", val: "12", sub: "Disponibles", icon: FolderOpen },
                    { label: "Vidéos", val: "4", sub: "Modules", icon: Film },
                    { label: "Suivi", val: "100%", sub: "Validation", icon: CheckCircle2 },
                ].map((stat, i) => (
                    <Card key={i} className="bg-surface border-border">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <stat.icon className="w-5 h-5 text-neutral-400" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
                            <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider">{stat.sub}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-bold text-white">Prochaines Étapes</h2>
                    <div className="bg-surface rounded-xl border border-border overflow-hidden">
                        {[
                            { step: "1", title: "Découvrir la méthode", desc: "Lisez le document de cadrage pédagogique." },
                            { step: "2", title: "Préparer l'intervention", desc: "Téléchargez le guide logistique pour l'établissement." },
                            { step: "3", title: "Prolonger le message", desc: "Accédez aux fiches de suivi post-intervention." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 border-b border-border/50 last:border-0 flex gap-4 hover:bg-white/5 transition-colors cursor-pointer">
                                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                    <p className="text-neutral-soft mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white">Accès Rapides</h2>
                    <div className="grid gap-4">
                        <div className="bg-surface p-5 rounded-xl border border-border border-l-4 border-l-primary hover:bg-white/5 cursor-pointer transition-colors">
                            <h3 className="font-bold text-white">Télécharger Plaquette</h3>
                            <p className="text-neutral-500 text-sm mt-1">PDF Résumé (2 pages)</p>
                        </div>
                        <div className="bg-surface p-5 rounded-xl border border-border border-l-4 border-l-secondary hover:bg-white/5 cursor-pointer transition-colors">
                            <h3 className="font-bold text-white">Contact Intervenant</h3>
                            <p className="text-neutral-500 text-sm mt-1">Ligne directe équipe AM.17</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
