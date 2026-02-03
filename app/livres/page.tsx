import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Clock, PenTool } from "lucide-react";

export default function BooksPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24">
                <div className="mb-16 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Notre Collection</h1>
                    <p className="text-neutral-soft text-lg max-w-2xl mx-auto">
                        Une série de livres courts et percutants pour décrypter les enjeux d'aujourd'hui.
                        Chaque tome aborde une problématique précise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* BOOK 1: PUFF (AVAILABLE) */}
                    <Link href="/livres/puff" className="group">
                        <Card className="h-full border-primary/30 bg-surface/40 hover:border-primary/60 transition-all duration-300 overflow-hidden relative">
                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors" />

                            <div className="relative aspect-[3/4] w-full bg-black/20 flex items-center justify-center p-8 border-b border-border">
                                <div className="relative w-[60%] h-full shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/images/book-cover.png"
                                        alt="Puff"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold uppercase px-2 py-1 rounded shadow-lg">
                                    Disponible
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Puff</h3>
                                <p className="text-sm font-medium text-neutral-soft mb-4">Comprendre, résister, agir</p>
                                <p className="text-neutral-soft/80 text-sm line-clamp-3 mb-6">
                                    Le guide essentiel pour comprendre les mécanismes de la puff et s'en libérer. Sans morale, juste des faits et des méthodes.
                                </p>
                                <div className="flex items-center text-primary font-bold text-sm">
                                    Découvrir <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* BOOK 2: RESEAUX (EN EDITION) */}
                    <Link href="/prochaines-sorties" className="group">
                        <Card className="h-full border-secondary/30 bg-surface/20 hover:border-secondary/60 transition-all duration-300 overflow-hidden relative">
                            {/* Generative Grid Background for "Editing" state */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(80,160,208,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(80,160,208,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                            <div className="relative aspect-[3/4] w-full flex items-center justify-center p-8 border-b border-border/50">
                                {/* Abstract Visual for "Réseaux" */}
                                <div className="w-32 h-32 rounded-full border border-secondary/30 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                                    <div className="absolute inset-0 border border-secondary/20 rounded-full animate-ping opacity-20" />
                                    <div className="w-24 h-24 rounded-full border border-secondary/50 flex items-center justify-center bg-secondary/5 backdrop-blur-sm">
                                        <PenTool className="h-10 w-10 text-secondary" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 bg-secondary/20 text-secondary border border-secondary/20 text-[10px] font-bold uppercase px-2 py-1 rounded">
                                    En édition
                                </div>
                            </div>

                            <CardContent className="p-6 relative z-10">
                                <h3 className="text-2xl font-bold text-neutral-300 mb-2 group-hover:text-secondary transition-colors">Réseaux</h3>
                                <p className="text-sm font-medium text-neutral-soft mb-4">Attention & Influence</p>
                                <p className="text-neutral-soft/60 text-sm line-clamp-3 mb-6">
                                    Algorithmes, validation sociale, temps d'écran... Comment reprendre le contrôle de son attention sans se couper du monde ?
                                </p>
                                <div className="flex items-center text-secondary font-bold text-sm">
                                    Voir la roadmap <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>

                    {/* BOOK 3: UPCOMING (PLACEHOLDER) */}
                    <div className="group cursor-default">
                        <Card className="h-full border-dashed border-neutral-soft/20 bg-transparent hover:border-neutral-soft/40 transition-all duration-300">
                            <div className="aspect-[3/4] w-full flex items-center justify-center p-8 border-b border-white/5">
                                <div className="w-24 h-32 border-2 border-dashed border-neutral-soft/20 rounded flex items-center justify-center">
                                    <Clock className="h-8 w-8 text-neutral-soft/30" />
                                </div>
                            </div>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-bold text-neutral-soft mb-2">Prochainement</h3>
                                <p className="text-sm text-neutral-soft/50 mb-6">
                                    Cyberharcèlement, Stress, Pornographie... <br />
                                    On travaille sur la suite.
                                </p>
                                <Button variant="ghost" size="sm" className="text-neutral-soft hover:text-white" disabled>
                                    Bientôt annoncé
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
