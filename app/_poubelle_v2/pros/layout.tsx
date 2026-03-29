import { LoginGate } from "@/components/auth/LoginGate";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Portail Professionnels — ALERT'ELEVES",
    description: "Espace privé dédié aux équipes éducatives, enseignants et professionnels de prévention.",
};

export default function ProsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LoginGate 
            portalName="Portail Professionnels"
            description="Le centre de pilotage logistique et pédagogique des interventions."
            acceptedPasswords={["liberte", "liberté"]}
            storageKey="auth_pros_v1"
            theme="pro"
        >
            <div className="min-h-screen bg-[#070A12] text-foreground flex flex-col font-sans">
                {/* Specific B2B Topbar */}
                <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border h-16 flex items-center px-4 md:px-6">
                    <div className="container mx-auto flex justify-between items-center">
                        <Link href="/">
                            <button className="flex items-center gap-2 text-neutral-soft hover:text-white transition-colors text-sm font-medium">
                                <ArrowLeft className="w-4 h-4" /> Retour
                            </button>
                        </Link>
                        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
                            <Link href="/pros" className="hover:text-primary transition-colors">Dashboard</Link>
                            <Link href="/pros/organisation" className="hover:text-primary transition-colors">Organisation</Link>
                            <Link href="/pros/ressources" className="hover:text-primary transition-colors">Ressources</Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-xs uppercase font-bold text-neutral-300 tracking-widest">Connecté</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </LoginGate>
    );
}
