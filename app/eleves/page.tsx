import { Bot, Sparkles, Scale, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ElevesChatbotsPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Tchatche avec nos Assistants
                </h1>
                <p className="text-neutral-400 text-lg">
                    Choisis le profil qui correspond le mieux à tes questions. C'est 100% anonyme, zéro jugement.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Chatbot 1: Le Coach */}
                <Card className="bg-surface border-border hover:border-secondary/50 transition-colors group cursor-pointer relative overflow-hidden">
                    <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-8 h-8 text-secondary" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Le Déclicker</h2>
                        <p className="text-neutral-500 mb-6">Besoin d'aide pour comprendre ce qu'il se passe dans ton cerveau et comment arrêter de fumer la Puff sans pression ?</p>
                        <div className="bg-secondary text-white text-sm font-bold py-3 px-6 rounded-xl text-center w-full mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                            Démarrer la discussion
                        </div>
                    </CardContent>
                </Card>

                {/* Chatbot 2: Loi & Faits */}
                <Card className="bg-surface border-border hover:border-blue-500/50 transition-colors group cursor-pointer relative overflow-hidden">
                    <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Scale className="w-8 h-8 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">L'Avocat</h2>
                        <p className="text-neutral-500 mb-6">Que des faits. Tu veux connaître les vrais risques légaux, les amendes ou tes droits au collège/lycée ?</p>
                        <div className="bg-blue-600 text-white text-sm font-bold py-3 px-6 rounded-xl text-center w-full mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                            Démarrer la discussion
                        </div>
                    </CardContent>
                </Card>

                {/* Chatbot 3: Santé & Corps */}
                <Card className="bg-surface border-border hover:border-green-500/50 transition-colors group cursor-pointer relative overflow-hidden">
                    <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <HeartHandshake className="w-8 h-8 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Le Doc</h2>
                        <p className="text-neutral-500 mb-6">Pose toutes tes questions sur les effets physiques exacts, le souffle, les poumons ou les produits chimiques.</p>
                        <div className="bg-green-600 text-white text-sm font-bold py-3 px-6 rounded-xl text-center w-full mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                            Démarrer la discussion
                        </div>
                    </CardContent>
                </Card>

                {/* Chatbot 4: L'Écoute (Générique) */}
                <Card className="bg-surface border-border hover:border-purple-500/50 transition-colors group cursor-pointer relative overflow-hidden">
                    <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Bot className="w-8 h-8 text-purple-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Alerte IA</h2>
                        <p className="text-neutral-500 mb-6">Assistant classique. Pose-moi n'importe quelle question sur l'intervention ou la prévention.</p>
                        <div className="bg-purple-600 text-white text-sm font-bold py-3 px-6 rounded-xl text-center w-full mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                            Démarrer la discussion
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
