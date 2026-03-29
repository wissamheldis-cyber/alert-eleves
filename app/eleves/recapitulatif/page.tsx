import { CheckCircle2, AlertTriangle, Lightbulb, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RecapitulatifPage() {
    return (
        <div className="max-w-4xl mx-auto pb-12">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Mon Récapitulatif
                </h1>
                <p className="text-neutral-400 text-lg">
                    Un condensé de ce qu'on s'est dit pendant l'intervention. L'essentiel à retenir, sans langue de bois.
                </p>
            </header>

            <div className="space-y-8">
                {/* Point 1 */}
                <Card className="bg-surface/50 border-border overflow-hidden">
                    <div className="h-2 w-full bg-red-500" />
                    <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                <AlertTriangle className="w-5 h-5 text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">L'illusion de contrôle</h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    Le sel de nicotine contenu dans la Puff frappe le cerveau en quelques secondes. C'est ce qui crée cet effet "shoot" immédiat, mais aussi la rapidité extrême de l'addiction. Tu penses gérer, mais c'est ton cerveau reptilien qui réclame la dose.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Point 2 */}
                <Card className="bg-surface/50 border-border overflow-hidden">
                    <div className="h-2 w-full bg-secondary" />
                    <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                <Activity className="w-5 h-5 text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Ton souffle en première ligne</h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    Essoufflement au sport, toux sèche, fatigue... Les composants chimiques chauffés endommagent les cils vibratiles de tes poumons dès les premières semaines d'utilisation quotidienne.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Point 3 */}
                <Card className="bg-surface/50 border-border overflow-hidden">
                    <div className="h-2 w-full bg-green-500" />
                    <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                <Lightbulb className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Reprendre le dessus</h3>
                                <p className="text-neutral-300 leading-relaxed">
                                    Comprendre que c'est une drogue de synthèse est la première étape. Utiliser des substituts, retarder les prises, en parler. Le sevrage est totalement possible, et les bénéfices se sentent en seulement 48 heures.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Checklist Action */}
                <div className="mt-12 p-6 md:p-8 bg-black/40 border border-white/10 rounded-2xl">
                    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <CheckCircle2 className="text-secondary" /> À garder en tête :
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-neutral-300">
                            <span className="w-2 h-2 rounded-full bg-neutral-600" />
                            Une Puff = 2 à 3 paquets de cigarettes en nicotine.
                        </li>
                        <li className="flex items-center gap-3 text-neutral-300">
                            <span className="w-2 h-2 rounded-full bg-neutral-600" />
                            Le cerveau termine son développement à 25 ans.
                        </li>
                        <li className="flex items-center gap-3 text-neutral-300">
                            <span className="w-2 h-2 rounded-full bg-neutral-600" />
                            Tu n'es pas seul face au stress du manque.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
