import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Download, Users, FileText, Play } from "lucide-react";
import Link from 'next/link';

export default function ResourcesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                {/* HEADER */}
                <section className="py-20 bg-neutral-hard/20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Ressources Gratuites</h1>
                        <p className="text-neutral-soft text-lg max-w-2xl mx-auto">
                            Des outils à télécharger, imprimer et partager pour sensibiliser sans culpabiliser.
                        </p>
                    </div>
                </section>

                {/* RESOURCES GRID */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* KIT 1: PARENTS */}
                            <Card className="bg-surface border-border hover:border-primary/50 transition-all group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white group-hover:text-primary transition-colors">Guide Dialogue Parents</CardTitle>
                                    <CardDescription>PDF • 4 pages</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-neutral-soft">
                                        Les 5 phrases à ne pas dire ("Tu vas te bousiller la santé") et les alternatives qui marchent pour ouvrir la discussion.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full gap-2 hover:bg-primary hover:text-white hover:border-primary">
                                        <Download className="h-4 w-4" /> Télécharger
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* KIT 2: POSTERS */}
                            <Card className="bg-surface border-border hover:border-secondary/50 transition-all group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white group-hover:text-secondary transition-colors">Affiches Prévention</CardTitle>
                                    <CardDescription>Pack A3/A4 • Imprimable</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-neutral-soft">
                                        3 affiches "Vrai/Faux" sur la puff pour les couloirs, l'infirmerie ou la salle de classe. Design impactant.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full gap-2 hover:bg-secondary hover:text-white hover:border-secondary">
                                        <Download className="h-4 w-4" /> Télécharger
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* KIT 3: QUIZ */}
                            <Card className="bg-surface border-border hover:border-white/50 transition-all group">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                                        <Play className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-white">Quiz Interactif</CardTitle>
                                    <CardDescription>Lien Web + QR Code</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-neutral-soft">
                                        Un quiz de 10 questions pour tester ses connaissances sur la vape, la nicotine et le marketing. Idéal en début de séance.
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full gap-2 hover:bg-white hover:text-black hover:border-white">
                                        <Download className="h-4 w-4" /> Accéder au kit
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-neutral-hard/30 border-t border-border">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">Besoin de plus d'outils ?</h2>
                        <p className="text-neutral-soft mb-8">
                            Découvrez nos packs complets pour les établissements scolaires (livres + guides pédagogiques).
                        </p>
                        <Link href="/etablissements">
                            <Button>Voir les offres Établissements</Button>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
