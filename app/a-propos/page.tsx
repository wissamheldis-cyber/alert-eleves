import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Lightbulb, Shield, Users, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">

                {/* HERO ABOUT */}
                <section className="py-20 bg-neutral-hard/20">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Notre Mission</h1>
                        <p className="text-neutral-soft text-lg leading-relaxed">
                            Alerte Élèves est né d'un constat simple (et alarmant) : les messages de prévention actuels ne passent plus.
                            Nous créons des outils qui parlent le langage des jeunes d'aujourd'hui, sans démagogie ni jugement.
                        </p>
                    </div>
                </section>

                {/* VALUES */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Target className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Pragmatisme Radical</h3>
                                <p className="text-neutral-soft leading-relaxed">
                                    Pas de grands discours moraux. On explique les mécanismes (biologiques, psychologiques, marketing) et on donne des outils pour hack back le système.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Bienveillance Active</h3>
                                <p className="text-neutral-soft leading-relaxed">
                                    Comprendre n'est pas excuser. Mais on ne peut pas changer un comportement par la honte. On mise sur l'intelligence et l'autonomie.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                    <Users className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Terrain, Terrain, Terrain</h3>
                                <p className="text-neutral-soft leading-relaxed">
                                    Nos contenus sont testés avec des élèves, des infirmières scolaires et des parents. Si ça ne marche pas en "réel", on ne le publie pas.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEAM / ORIGIN */}
                <section className="py-20 bg-neutral-hard/10 border-t border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl font-bold text-white">Qui sommes-nous ?</h2>
                                <p className="text-neutral-soft leading-relaxed">
                                    ALERTE ELEVES est déployé par la structure <strong><a href="https://shou-edition.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SHOU Edition</a></strong>.
                                </p>
                                <p className="text-neutral-soft leading-relaxed">
                                    L'auteur et fondateur, <strong>Anass.A-R</strong> (plus connu sous le pseudonyme <strong>AM.17</strong>), a conçu ce projet avec une vision claire : réinventer la prévention pour qu'elle soit enfin écoutée par les jeunes.
                                </p>
                                <p className="text-neutral-soft leading-relaxed">
                                    "Face à la vague des puffs, je voyais le désarroi des parents et des profs. Il fallait un outil radical, honnête et visuel. Pas de leçon de morale, juste des faits et des stratégies."
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="relative w-64 h-64 rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex flex-col items-center justify-center border border-white/5 p-6 text-center">
                                    <span className="text-2xl font-bold text-white mb-2">AM.17</span>
                                    <span className="text-sm text-neutral-soft">Anass.A-R</span>
                                    <span className="text-xs text-neutral-soft/50 mt-4 uppercase tracking-widest">Auteur & Fondateur</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
