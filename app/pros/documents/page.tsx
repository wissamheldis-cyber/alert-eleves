import { FileText, Download, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
    return (
        <div className="max-w-5xl mx-auto pb-12">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Documentation
                </h1>
                <p className="text-neutral-400 text-lg">
                    Retrouvez tous les documents utiles, les devis et les trames administratives associées à votre projet de prévention.
                </p>
            </header>

            <div className="space-y-10">
                
                {/* Section Admin */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Administratif & Devis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="bg-surface border-border group hover:border-primary/50 transition-all cursor-pointer">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <FileText className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">Devis d'intervention</h3>
                                    <p className="text-sm text-neutral-500 mb-4">Proposition financière pour l'année scolaire en cours.</p>
                                    <Button variant="outline" size="sm" className="w-full text-xs font-bold border-white/10 text-neutral-300 hover:text-white">
                                        <Download className="w-3 h-3 mr-2" /> Télécharger PDF
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-surface border-border group hover:border-primary/50 transition-all cursor-pointer">
                            <CardContent className="p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">Convention de Partenariat</h3>
                                    <p className="text-sm text-neutral-500 mb-4">Accord de principe entre l'établissement et AM.17.</p>
                                    <Button variant="outline" size="sm" className="w-full text-xs font-bold border-white/10 text-neutral-300 hover:text-white">
                                        <Download className="w-3 h-3 mr-2" /> Télécharger PDF
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Section Ressources Pédago */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Outils Pédagogiques</h2>
                    <div className="bg-surface/50 border border-border rounded-2xl p-6">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
                            <div>
                                <h3 className="font-bold text-white text-lg mb-2">Guide Pratique pour l'équipe éducative</h3>
                                <p className="text-neutral-400 text-sm max-w-xl">
                                    Ce guide de 20 pages résume les points abordés pendant l'intervention, et propose des clés de langage pour désamorcer les conflits avec les élèves concernés par la Puff.
                                </p>
                            </div>
                            <Button className="shrink-0 bg-primary hover:bg-primary/90 text-white font-bold h-12 px-6">
                                Obtenir le guide
                            </Button>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
