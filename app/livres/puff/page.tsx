import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, ArrowRight, Shield, AlertTriangle, BookOpen, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PuffBookPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                {/* HERO PRODUCT */}
                <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -z-10 w-[50%] h-[100%] bg-primary/5 blur-3xl rounded-l-full" />

                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                            {/* Product Image */}
                            <div className="relative order-2 lg:order-1 flex justify-center">
                                <div className="relative w-[70%] md:w-[60%] lg:w-[80%] max-w-md aspect-[3/4]">
                                    {/* Blur Glow */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 blur-[60px] rounded-full" />

                                    <Image
                                        src="/images/book-cover.png"
                                        alt="Livre Puff"
                                        fill
                                        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                        priority
                                    />

                                    {/* Prevention Badge */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-max bg-surface border border-border px-4 py-2 rounded-full text-sm font-medium text-neutral-soft shadow-xl backdrop-blur-md flex items-center gap-2">
                                        <Shield className="h-4 w-4 text-secondary" />
                                        <span className="text-secondary font-bold">Contenu de prévention</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="order-1 lg:order-2 space-y-8">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-md border border-primary/20">Disponible</span>
                                        <span className="text-neutral-soft text-sm flex items-center gap-1"><Clock className="h-3 w-3" /> Lecture : 45 min</span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        Puff <span className="text-neutral-soft font-normal">|</span> Comprendre, résister, agir.
                                    </h1>
                                    <div className="text-sm text-neutral-soft mb-6 space-y-1">
                                        <p>Auteur : <span className="text-white">Anass.A-R (AM.17)</span></p>
                                        <p>Éditions : <a href="https://shou-edition.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">SHOU Edition</a></p>
                                    </div>
                                    <p className="text-xl text-neutral-soft leading-relaxed">
                                        Le guide de survie pour les élèves (et leurs parents) face à la nouvelle cigarette électronique jetable.
                                    </p>
                                </div>

                                <div className="space-y-4 border-t border-border pt-8">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-3xl font-bold text-white">17.00€</span>
                                            {/* <span className="text-neutral-soft line-through md:text-lg opacity-50">14.90€</span> */}
                                        </div>
                                        <p className="text-xs text-secondary mt-1">
                                            Disponible immédiatement sur le site.
                                        </p>
                                        <p className="text-xs text-neutral-soft italic">
                                            Sortie librairie physique : Mi-2026.
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button size="lg" className="w-full sm:w-auto h-12 text-base shadow-primary/20">
                                            Commander le livre
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Link href="/etablissements">
                                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-12">
                                                Devis établissement
                                            </Button>
                                        </Link>
                                    </div>
                                    <p className="text-xs text-neutral-soft/60 flex items-center gap-2">
                                        <Check className="h-3 w-3 text-secondary" />
                                        Livraison suivie 48h
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* BOOK DETAILS GRID */}
                <section className="py-20 bg-neutral-hard/10 border-y border-border">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                            {/* What's inside */}
                            <div className="md:col-span-2 space-y-12">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-6">Ce que contient ce livre</h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {[
                                            { title: "Le piège sensoriel", desc: "Pourquoi le goût sucré et le design 'jouet' trompent le cerveau." },
                                            { title: "L'effet Nicotine+", desc: "Comprendre les sels de nicotine qui agissent en quelques secondes." },
                                            { title: "Scripts de défense", desc: "Quoi répondre quand on te tend une puff en soirée ou au lycée." },
                                            { title: "Plan détox 21 jours", desc: "Une méthode progressive pour se débarrasser de l'envie." }
                                        ].map((item, i) => (
                                            <Card key={i} className="bg-surface/30 hover:bg-surface/50 transition-colors">
                                                <div className="p-5">
                                                    <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center mb-3">
                                                        <BookOpen className="h-4 w-4" />
                                                    </div>
                                                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                                    <p className="text-sm text-neutral-soft">{item.desc}</p>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-6">Sommaire simplifié</h2>
                                    <ul className="space-y-4">
                                        {[
                                            "Chapitre 1 : C'est juste de la vapeur ? (Spoiler : non)",
                                            "Chapitre 2 : Comment ils t'ont ciblé (Le marketing)",
                                            "Chapitre 3 : Ton cerveau sous influence",
                                            "Chapitre 4 : Reprendre le pouvoir (La méthode)",
                                            "Chapitre 5 : Aider un pote à arrêter"
                                        ].map((chapter, i) => (
                                            <li key={i} className="flex items-center gap-4 py-3 border-b border-border text-neutral-soft hover:text-white hover:pl-2 transition-all cursor-default">
                                                <span className="text-xs font-mono text-secondary opacity-70">0{i + 1}</span>
                                                {chapter}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar / Context */}
                            <div className="space-y-8">
                                <Card className="bg-primary/5 border-primary/20">
                                    <div className="p-6 space-y-4">
                                        <h3 className="font-bold text-white flex items-center gap-2">
                                            <AlertTriangle className="h-5 w-5 text-primary" />
                                            Pourquoi ce livre ?
                                        </h3>
                                        <p className="text-sm text-neutral-soft leading-relaxed">
                                            La puff est devenue l'addiction n°1 au collège. Les discours classiques ("c'est dangereux") ne marchent pas. Ce livre explique les <strong>mécanismes</strong> pour que l'ado comprenne qu'il se fait manipuler par une industrie.
                                        </p>
                                    </div>
                                </Card>

                                <div className="bg-surface border border-border rounded-xl p-6">
                                    <h3 className="font-bold text-white mb-4">Avis de lecteurs</h3>
                                    <div className="space-y-4">
                                        <div className="text-sm text-neutral-soft">
                                            "Mon fils de 14 ans l'a lu en une soirée. Il m'a dit : 'ok j'ai compris le truc du marketing'. C'est déjà une victoire."
                                            <div className="mt-2 flex items-center gap-2">
                                                <span className="bg-white/10 w-6 h-6 rounded-full block" />
                                                <span className="text-xs font-bold text-white">Sophie, mère d'élève</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA BOTTOM */}
                <section className="py-20 text-center">
                    <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                        <h2 className="text-3xl font-bold text-white mb-6">Prêt à reprendre le contrôle ?</h2>
                        <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20">
                            Commander le livre maintenant
                        </Button>
                        <p className="mt-4 text-sm text-neutral-soft">
                            Disponible aussi en packs pour les <Link href="/etablissements" className="text-white underline hover:text-primary">établissements scolaires</Link>.
                        </p>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
