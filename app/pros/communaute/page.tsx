import { Lock, MailWarning } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CommunautePage() {
    return (
        <div className="max-w-4xl mx-auto pb-12 relative min-h-[70vh]">
            
            <header className="mb-10 z-0 relative opacity-50 blur-[2px] select-none pointer-events-none">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Messages & Communauté
                </h1>
                <p className="text-neutral-400 text-lg">
                    Recevez les alertes et messages anonymes de vos élèves liés à des situations de harcèlement ou d'addiction sérieuses.
                </p>
            </header>

            {/* Blurred Fake UI Behind */}
            <div className="space-y-4 opacity-50 blur-sm select-none pointer-events-none z-0 relative">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="bg-surface border-border">
                        <CardContent className="p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                <MailWarning className="w-5 h-5 text-red-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Signalement Anonyme #{104 + i}</h3>
                                <p className="text-sm text-neutral-500 mb-2">Reçu hier à 14h30 - Classe de 3ème B</p>
                                <p className="text-neutral-400 text-sm">"Bonjour, je voudrais signaler une situation inquiétante dans les toilettes..."</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Lock Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/50 backdrop-blur-md rounded-3xl border border-white/5 mx-4 mt-8">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(79,70,229,0.3)]">
                    <Lock className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 text-center">Module Verrouillé</h2>
                <p className="text-neutral-400 text-center max-w-md mx-auto mb-8 font-medium leading-relaxed">
                    La messagerie anonyme Élève ↔ Référent est en cours de développement sécurisé (MVP).<br /> 
                    Bientôt ouvert.
                </p>
                <Button disabled className="bg-primary/50 text-white cursor-not-allowed">
                    Accès restreint
                </Button>
            </div>

        </div>
    );
}
