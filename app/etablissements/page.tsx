import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { School, Users, BookOpen, Check, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SchoolsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">

                {/* HEADER */}
                <section className="py-20 md:py-24 bg-neutral-hard/20 border-b border-border">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Prévention en Établissement</h1>
                        <p className="text-neutral-soft text-lg md:text-xl mb-8 leading-relaxed">
                            Collèges, Lycées, CFA : une offre double pour un impact maximal.
                            Une intervention physique d'1h par l'auteur (AM.17) et des supports pédagogiques durables.
                            Une approche <span className="text-white font-semibold">sans moralisation</span> qui favorise le dialogue.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-neutral-soft">
                            <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border">
                                <School className="h-4 w-4 text-primary" /> Validé par les infirmières scolaires
                            </div>
                            <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border">
                                <Users className="h-4 w-4 text-secondary" /> Adapté aux "Années Collège"
                            </div>
                        </div>
                    </div>
                </section>

                {/* OFFERS */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* PACK CLASSE */}
                            <Card className="bg-surface border-border flex flex-col relative overflow-hidden group hover:border-white/30 transition-all">
                                <CardHeader className="text-center pb-8 border-b border-border/50">
                                    <CardTitle className="text-xl font-bold text-white mb-2">Pack Classe</CardTitle>
                                    <CardDescription>Pour un atelier ciblé</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-3xl font-bold text-white">290€</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 pt-8 space-y-4">
                                    {[
                                        "30 exemplaires du livre Puff",
                                        "1 Guide pédagogique (PDF)",
                                        "3 Affiches prévention A3"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-neutral-soft">
                                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            {item}
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Demander un devis</Button>
                                </CardFooter>
                            </Card>

                            {/* PACK ETABLISSEMENT (POPULAR) */}
                            <Card className="bg-surface border-primary/50 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-xl shadow-primary/10">
                                <div className="absolute top-0 w-full h-1.5 bg-primary" />
                                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Recommandé</div>

                                <CardHeader className="text-center pb-8 border-b border-border/50">
                                    <CardTitle className="text-2xl font-bold text-white mb-2">Pack Établissement</CardTitle>
                                    <CardDescription>Pour le CDI & Vie Scolaire</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-3xl font-bold text-white">850€</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 pt-8 space-y-4">
                                    {[
                                        "1h d'intervention par AM.17",
                                        "50 exemplaires du livre Puff",
                                        "3 Guides pédagogiques imprimés",
                                        "10 Affiches prévention (A3/A2)",
                                        "Accès ressources numériques illimité",
                                        "Support email prioritaire"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                            {item}
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button size="lg" className="w-full shadow-lg shadow-primary/20">Demander un devis</Button>
                                </CardFooter>
                            </Card>

                            {/* SUR MESURE */}
                            <Card className="bg-surface border-border flex flex-col relative overflow-hidden group hover:border-white/30 transition-all">
                                <CardHeader className="text-center pb-8 border-b border-border/50">
                                    <CardTitle className="text-xl font-bold text-white mb-2">Sur Mesure</CardTitle>
                                    <CardDescription>Réseaux d'éducation / Mairies</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-2xl font-bold text-white">Sur devis</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 pt-8 space-y-4">
                                    {[
                                        "Quantités ajustables (> 500 ex)",
                                        "Intervention / Conférence experte",
                                        "Personnalisation possible",
                                        "Formation des équipes"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-neutral-soft">
                                            <Check className="h-4 w-4 text-white shrink-0 mt-0.5" />
                                            {item}
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full">Contacter l'équipe</Button>
                                </CardFooter>
                            </Card>

                        </div>
                    </div>
                </section>

                {/* CONTACT FORM */}
                <section className="py-20 bg-neutral-hard/10 border-t border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Demander un devis</h2>
                            <p className="text-neutral-soft">
                                Réponse sous 24h. Paiement par mandat administratif accepté (Chorus Pro).
                            </p>
                        </div>

                        <Card className="bg-surface border-border">
                            <CardContent className="p-6 md:p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Nom de l'établissement</label>
                                        <Input placeholder="Collège Jean Jaurès..." className="bg-background border-border" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Ville</label>
                                        <Input placeholder="Paris 75011" className="bg-background border-border" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email de contact</label>
                                    <Input type="email" placeholder="intendance@ac-academie.fr" className="bg-background border-border" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Votre besoin</label>
                                    <Textarea placeholder="Bonjour, je souhaiterais un devis pour 2 packs classe..." className="bg-background border-border min-h-[120px]" />
                                </div>

                                <Button className="w-full text-lg h-12">Envoyer la demande</Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
