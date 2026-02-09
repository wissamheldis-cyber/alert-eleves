"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Check, AlertCircle, Shield, BookOpen, Clock, Users, FileText, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PresentationPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Navbar />

            <main className="flex-1">
                {/* HEADER / NAVIGATION */}
                <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                    <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                        <Link href="/etablissements">
                            <Button variant="ghost" size="sm" className="gap-2 text-neutral-soft hover:text-white pl-0">
                                <ArrowLeft className="h-4 w-4" />
                                Retour
                            </Button>
                        </Link>
                        <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
                            Fiche Intervention Prévention
                        </span>
                        <Button size="sm" variant="outline" className="hidden md:flex gap-2 border-primary/20 hover:bg-primary/10 text-primary">
                            <Download className="h-4 w-4" />
                            Télécharger PDF
                        </Button>
                    </div>
                </div>

                {/* HERO SECTION */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
                        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-neutral-soft text-xs font-bold uppercase mb-6">
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Sujet d'actualité
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                                Intervention <span className="text-primary">Puffs</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-soft max-w-3xl mx-auto leading-relaxed">
                                Comprendre, prévenir, reprendre la main. <br />
                                Une approche ciblée sans moralisation pour les collégiens et lycéens.
                            </p>
                        </motion.div>

                        {/* Key Meters */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
                        >
                            {[
                                { icon: Users, label: "Public", val: "Collège (4e-3e) / Lycée" },
                                { icon: Clock, label: "Durée", val: "1h ou 2h" },
                                { icon: Shield, label: "Cadre", val: "Référent Adulte Présent" },
                            ].map((item, i) => (
                                <Card key={i} className="bg-surface/50 border-border backdrop-blur-sm">
                                    <CardContent className="flex flex-col items-center justify-center p-6">
                                        <item.icon className="h-8 w-8 text-secondary mb-4" />
                                        <span className="text-sm text-neutral-soft uppercase font-bold">{item.label}</span>
                                        <span className="text-lg text-white font-medium mt-1">{item.val}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 1. CONTEXTE & JUSTIFICATION */}
                <section className="py-20 border-t border-border bg-neutral-hard/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="mb-12"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white text-lg">1</span>
                                Contexte & Justification
                            </h2>
                            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                                Les puffs (dispositifs de vapotage jetables), très visibles et attractives chez les adolescents (arômes, facilité, usage immédiat), représentent un enjeu de prévention scolaire majeur.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-xl bg-surface border border-border">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-primary" /> Cadre Réglementaire
                                    </h3>
                                    <p className="text-neutral-soft text-sm">Interdiction des puffs jetables (vente/offre/distribution) en France.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-surface border border-border">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-primary" /> Repères Santé
                                    </h3>
                                    <p className="text-neutral-soft text-sm">La nicotine favorise la dépendance, et le cerveau adolescent est plus vulnérable.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-surface border border-border">
                                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                                        <Check className="h-5 w-5 text-secondary" /> Notre Objectif
                                    </h3>
                                    <p className="text-neutral-soft text-sm">Une prévention concrète, sans stigmatisation, centrée sur les puffs (pas “le vapotage en général” de façon floue).</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. FINALITÉ */}
                <section className="py-20 border-t border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white text-lg">2</span>
                                Finalité : Réduire l'adhésion
                            </h2>
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <p className="text-xl text-white">
                                        Nous cassons le cycle : <span className="text-neutral-500">Curiosité → Essai → Répétition → Dépendance.</span>
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Donner des repères officiels (cadre + santé)",
                                            "Offrir une lecture mécanique (contextes + automatisme + pression sociale)",
                                            "Fournir des outils simples d’auto-contrôle utilisables immédiatement"
                                        ].map((txt, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-secondary mt-1 shrink-0" />
                                                <span className="text-neutral-300">{txt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Visual representation of the cycle */}
                                <div className="flex-1 w-full p-8 bg-surface/50 rounded-2xl border border-border flex flex-col items-center justify-center gap-4 text-center">
                                    <div className="text-neutral-500 font-bold">Curiosité</div>
                                    <div className="w-0.5 h-4 bg-border" />
                                    <div className="text-neutral-300 font-bold">Essai</div>
                                    <div className="w-0.5 h-4 bg-border" />
                                    <div className="text-white font-bold text-lg">Répétition</div>
                                    <div className="w-0.5 h-4 bg-primary" />
                                    <div className="text-primary font-black text-xl uppercase">Dépendance</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. OBJECTIFS & OUTILS */}
                <section className="py-20 border-t border-border bg-neutral-hard/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white text-lg">3</span>
                                Objectifs & Outils Élève
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* SAVOIR */}
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                                        <BookOpen className="h-5 w-5" /> Ce qu'ils vont comprendre
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="bg-surface p-4 rounded-lg border border-border">
                                            <strong className="block text-white mb-1">Les 3 Contextes Clés</strong>
                                            <span className="text-neutral-soft text-sm">Stress / Ennui / Groupe (et attente/fatigue) qui "ouvrent la porte".</span>
                                        </li>
                                        <li className="bg-surface p-4 rounded-lg border border-border">
                                            <strong className="block text-white mb-1">Les "Phrases-Passe"</strong>
                                            <span className="text-neutral-soft text-sm">Identifier les excuses typiques : "Juste une fois", "Je gère".</span>
                                        </li>
                                        <li className="bg-surface p-4 rounded-lg border border-border">
                                            <strong className="block text-white mb-1">La Réalité Nicotine</strong>
                                            <span className="text-neutral-soft text-sm">Vulnérabilité spécifique de l'ado (apprentissage, attention).</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* SAVOIR-FAIRE */}
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                                        <Shield className="h-5 w-5" /> Ce qu'ils vont emporter
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-br from-primary/10 to-surface p-4 rounded-lg border border-primary/20">
                                            <strong className="block text-white text-lg mb-1">1. SI — ALORS</strong>
                                            <p className="text-neutral-300 text-sm">Un plan de réaction pré-programmé pour ne pas être pris au dépourvu.</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-primary/10 to-surface p-4 rounded-lg border border-primary/20">
                                            <strong className="block text-white text-lg mb-1">2. Phrase Anti-Pression</strong>
                                            <p className="text-neutral-300 text-sm">4 mots maximum pour refuser sans se justifier ni perdre la face.</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-primary/10 to-surface p-4 rounded-lg border border-primary/20">
                                            <strong className="block text-white text-lg mb-1">3. Protocole 90 Secondes</strong>
                                            <p className="text-neutral-300 text-sm">Une technique pour laisser passer le "pic" d'envie sans craquer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 4. DEROULE (TIMELINE) */}
                <section className="py-20 border-t border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                                Déroulé Synthétique (2h)
                                <span className="block text-base font-normal text-neutral-soft mt-2">100% Puff-Ciblé</span>
                            </h2>

                            <div className="relative border-l-2 border-border ml-4 md:ml-12 space-y-12">
                                {/* Step A */}
                                <div className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-background" />
                                    <h3 className="text-xl font-bold text-white">A. Ouverture Cadrée (15 min)</h3>
                                    <p className="text-neutral-soft mt-2">
                                        Règles du jeu (signal stop, on parle "en général"). Mini-sondages anonymes (Kahoot ou papier) pour cartographier les "moments fragiles" de la classe sans viser personne.
                                    </p>
                                </div>

                                {/* Step B */}
                                <div className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-600 ring-4 ring-background" />
                                    <h3 className="text-xl font-bold text-white">B. Mécanique : Pourquoi ça colle ? (30 min)</h3>
                                    <p className="text-neutral-soft mt-2">
                                        Décryptage de l'immédiateté et de la récompense rapide. Analyse du rôle du groupe et des micro-rituels. Point clé : ce n'est pas un manque d'intelligence, c'est un mécanisme.
                                    </p>
                                </div>

                                {/* Step C */}
                                <div className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-600 ring-4 ring-background" />
                                    <h3 className="text-xl font-bold text-white">C. Repères Officiels (10 min)</h3>
                                    <p className="text-neutral-soft mt-2">
                                        Version courte, sans débat. Santé (dépendance rapide), Loi (interdiction vente/offre), OMS (aérosol ≠ air).
                                    </p>
                                </div>

                                {/* Step D */}
                                <div className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                                    <h3 className="text-xl font-bold text-white">D. Application : Autopsie (30 min)</h3>
                                    <p className="text-neutral-soft mt-2">
                                        Analyse de scènes typiques : stress avant contrôle, groupe à la sortie. Identification des promesses marketing vs la réalité (coût, friction).
                                    </p>
                                </div>

                                {/* Step E */}
                                <div className="relative pl-8 md:pl-12">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-background" />
                                    <h3 className="text-xl font-bold text-white">E. Reprise de Contrôle (30 min)</h3>
                                    <p className="text-neutral-soft mt-2">
                                        Atelier pratique : création des cartes SI-ALORS, définition de la phrase anti-pression, exercice du protocole 90 secondes.
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </section>

                {/* 5. METHODES & SECURITE */}
                <section className="py-20 border-t border-border bg-neutral-hard/30">
                    <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                        >
                            <div className="grid md:grid-cols-2 gap-12">
                                {/* METHODES */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Méthodes & Supports</h2>
                                    <ul className="space-y-4 text-neutral-300">
                                        <li className="flex gap-3">
                                            <Check className="h-5 w-5 text-secondary shrink-0" />
                                            <span><strong>Kahoot / Anonymat :</strong> Résultats agrégés, aucun nom, aucun "qui consomme ?".</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <Check className="h-5 w-5 text-secondary shrink-0" />
                                            <span><strong>Zéro Exposition :</strong> Aucune manipulation de produit (pas de puff, pas de e-liquide).</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <Check className="h-5 w-5 text-secondary shrink-0" />
                                            <span><strong>Zéro Mode d'Emploi :</strong> Aucune info sur l'accès ou l'acquisition.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* SECURITE */}
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-white mb-6">Cadre & Sécurité</h2>
                                    <div className="bg-surface border border-border p-6 rounded-xl space-y-4">
                                        <div className="text-sm text-neutral-soft">
                                            <span className="text-white font-bold block mb-1">Posture</span>
                                            Prévention non culpabilisante, non stigmatisante.
                                        </div>
                                        <div className="text-sm text-neutral-soft">
                                            <span className="text-white font-bold block mb-1">Confidentialité</span>
                                            Pas de collecte de données personnelles. Les cas personnels sont redirigés vers l'adulte référent en privé.
                                        </div>
                                        <div className="text-sm text-neutral-soft">
                                            <span className="text-white font-bold block mb-1">Gestion</span>
                                            En cas de mal-être repéré, transmission immédiate à l'infirmier(e) ou CPE selon procédure.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FOOTER CALL TO ACTION */}
                <section className="py-20 border-t border-border bg-gradient-to-b from-background to-background/50 text-center">
                    <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                            <h2 className="text-3xl font-bold text-white mb-6">Prêt à intervenir ?</h2>
                            <p className="text-neutral-soft mb-8 text-lg">
                                Cette fiche récapitulative est conçue pour être partagée avec vos collègues et votre direction.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                                    <Download className="h-5 w-5" />
                                    Télécharger le Dossier PDF
                                </Button>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline">
                                        Contacter l'auteur
                                    </Button>
                                </Link>
                            </div>
                            <div className="mt-12 pt-8 border-t border-border/50">
                                <p className="text-sm text-neutral-soft">
                                    <strong>Ressources d'aide :</strong> Tabac Info Service (3989)
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
