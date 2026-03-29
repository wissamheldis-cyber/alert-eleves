import { CalendarDays, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProsPlanningPage() {
    return (
        <div className="max-w-5xl mx-auto pb-12">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Mon Planning & Actions
                </h1>
                <p className="text-neutral-400 text-lg">
                    Vue d'ensemble de l'avancée du pilote de prévention dans votre établissement.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left Col - Timeline */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="bg-surface border-border">
                        <CardContent className="p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Prochaines Étapes du Pilote</h2>
                            
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                                
                                {/* Item 1 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_rgba(79,70,229,0.5)] z-10">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-primary/10 border border-primary/20 p-4 rounded-xl shadow">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-bold text-primary">Prise de contact</h3>
                                            <span className="text-xs text-primary font-medium">Fait</span>
                                        </div>
                                        <p className="text-sm text-neutral-400">Validation des dates avec la direction.</p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <AlertCircle className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-border hover:border-border/80 p-4 rounded-xl shadow transition-colors cursor-pointer">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-bold text-white">Intervention Classes</h3>
                                            <span className="text-xs text-neutral-500 font-medium">En attente</span>
                                        </div>
                                        <p className="text-sm text-neutral-400">Passage de l'équipe dans les classes de 3ème.</p>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-surface border-border shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                        <Clock className="w-5 h-5 text-neutral-500" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent border border-transparent p-4 rounded-xl opacity-50">
                                        <h3 className="font-bold text-neutral-400">Suivi & Feed-back</h3>
                                        <p className="text-sm text-neutral-500">Collecte des questionnaires élèves.</p>
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Col - Quick Actions */}
                <div className="space-y-6">
                    <Card className="bg-primary/5 border-primary/20">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-white mb-2">Pilote Actif</h3>
                            <p className="text-sm text-neutral-400 mb-6">Votre établissement bénéficie du programme de test Alerte'Élèves.</p>
                            <Button className="w-full bg-primary hover:bg-primary/80 text-white font-bold">
                                Contacter l'équipe
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-surface border-border">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                <CalendarDays className="w-5 h-5 text-primary" /> Dates Clés
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-border">
                                    <div className="text-sm font-medium text-white">Réunion équipe</div>
                                    <div className="text-xs text-neutral-500 bg-white/5 px-2 py-1 rounded">12 Nov.</div>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-border">
                                    <div className="text-sm font-medium text-white">Lancement</div>
                                    <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">À définir</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    );
}
