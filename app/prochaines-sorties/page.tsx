import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, PenTool, Search, CheckCircle2 } from "lucide-react";

export default function UpcomingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Prochaines Sorties</h1>
                    <p className="text-neutral-soft text-lg mb-8">
                        Nous travaillons sur les sujets qui impactent le quotidien des jeunes.
                        Soyez les premiers informés.
                    </p>
                </div>

                {/* FEATURED UPCOMING */}
                <div className="relative max-w-4xl mx-auto mb-20 group">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <Card className="relative border-secondary/50 bg-secondary/5 overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                            <div>
                                <div className="inline-block bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded mb-6 uppercase tracking-wider">
                                    En cours d'écriture
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Réseaux : Attention & Influence</h2>
                                <p className="text-neutral-soft mb-8 leading-relaxed">
                                    On prépare un guide sur l’attention, les algorithmes, la comparaison sociale, et les mécanismes d’emprise.
                                    Comment reprendre le contrôle sans tout couper ?
                                </p>

                                <div className="space-y-4 bg-surface/50 p-6 rounded-xl border border-border">
                                    <p className="text-sm font-bold text-white mb-2">Être prévenu dès la sortie :</p>
                                    <form className="flex gap-2">
                                        <Input placeholder="Votre email" className="bg-background border-border text-white" />
                                        <Button variant="secondary" className="whitespace-nowrap">M'inscrire</Button>
                                    </form>
                                </div>
                            </div>

                            {/* Abstract Visual */}
                            <div className="h-64 md:h-full min-h-[250px] bg-neutral-900/50 rounded-lg flex items-center justify-center border border-dashed border-secondary/30 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(80,160,208,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[background-position_0%_0%] hover:animate-[background-position_100%_100%] transition-all duration-[3s]" />
                                <PenTool className="h-16 w-16 text-secondary/40" />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* ROADMAP */}
                <div className="max-w-2xl mx-auto relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[19px] top-12 bottom-12 w-[2px] bg-neutral-hard" />

                    <h3 className="text-2xl font-bold text-white mb-10 text-center">La Roadmap</h3>
                    <div className="space-y-10">

                        {/* Done */}
                        <div className="flex gap-6 items-start opacity-60 hover:opacity-100 transition-opacity">
                            <div className="bg-primary hover:glow-hover text-white p-3 rounded-full shrink-0 z-10 border border-transparent transition-all">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <div className="pt-2">
                                <h4 className="text-xl font-bold text-white">Puff — comprendre, résister, agir</h4>
                                <p className="text-sm text-neutral-soft">Disponible • Édition 1</p>
                            </div>
                        </div>

                        {/* Current */}
                        <div className="flex gap-6 items-start">
                            <div className="bg-secondary text-white p-3 rounded-full shrink-0 z-10 animate-pulse shadow-[0_0_15px_-3px_var(--secondary)]">
                                <PenTool className="h-5 w-5" />
                            </div>
                            <div className="pt-2">
                                <h4 className="text-xl font-bold text-white">Réseaux — attention, capture, influence</h4>
                                <p className="text-sm text-secondary">En cours d'écriture • Sortie prévue [DATE]</p>
                            </div>
                        </div>

                        {/* Future */}
                        <div className="flex gap-6 items-start opacity-70">
                            <div className="bg-surface border border-border text-neutral-soft p-3 rounded-full shrink-0 z-10">
                                <Search className="h-5 w-5" />
                            </div>
                            <div className="pt-2">
                                <h4 className="text-lg font-bold text-neutral-300">Titre #3 : Cyberharcèlement ? Pornographie ?</h4>
                                <p className="text-sm text-neutral-soft">En phase de recherche</p>
                            </div>
                        </div>

                        {/* Future */}
                        <div className="flex gap-6 items-start opacity-50">
                            <div className="bg-surface border border-border text-neutral-soft p-3 rounded-full shrink-0 z-10">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <div className="pt-2">
                                <h4 className="text-lg font-bold text-neutral-300">Titre #4</h4>
                                <p className="text-sm text-neutral-soft">Prévu pour l'année prochaine</p>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
