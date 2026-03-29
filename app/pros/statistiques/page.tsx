import { Users, TrendingUp, MonitorPlay, QrCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatistiquesPage() {
    return (
        <div className="max-w-5xl mx-auto pb-12">
            <header className="mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Suivi Statistiques
                </h1>
                <p className="text-neutral-400 text-lg">
                    Tracker de données anonymisées sur l'engagement de vos élèves suite à l'intervention.
                </p>
            </header>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Card className="bg-surface border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-neutral-400">Élèves ciblés</span>
                            <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">120</div>
                        <p className="text-xs text-neutral-500">4 classes de 3ème</p>
                    </CardContent>
                </Card>

                <Card className="bg-surface border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-neutral-400">Connexions Portail</span>
                            <MonitorPlay className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">0</div>
                        <p className="text-xs text-neutral-500">En attente d'intervention</p>
                    </CardContent>
                </Card>

                <Card className="bg-surface border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-neutral-400">Vidéos Vues</span>
                            <TrendingUp className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">0</div>
                        <p className="text-xs text-neutral-500">Total ressources</p>
                    </CardContent>
                </Card>

                <Card className="bg-surface border-border">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-neutral-400">Scan QR Code</span>
                            <QrCode className="w-4 h-4 text-orange-500" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-1">0%</div>
                        <p className="text-xs text-neutral-500">Taux de conversion estimé</p>
                    </CardContent>
                </Card>
            </div>

            {/* Chart Placeholder */}
            <Card className="bg-surface border-border">
                <CardContent className="p-8">
                    <h3 className="font-bold text-white text-lg mb-6">Évolution des connexions (30 jours)</h3>
                    <div className="w-full h-64 border-2 border-dashed border-white/5 rounded-xl flex items-center justify-center bg-white/[0.02]">
                        <p className="text-sm text-neutral-500 font-medium">Les données s'afficheront ici après l'intervention.</p>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
