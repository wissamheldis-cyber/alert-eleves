import { LoginGate } from "@/components/auth/LoginGate";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Portail Élèves — ALERT'ELEVES",
    description: "Espace privé dédié aux élèves. Comprendre, prévenir, reprendre la main.",
};

export default function ElevesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LoginGate 
            portalName="Portail Élèves"
            description="L'espace confidentiel pour comprendre, sans être jugé."
            acceptedPasswords={["alerte"]}
            storageKey="auth_eleves_v1"
            theme="dark"
        >
            <div className="min-h-screen bg-[#04060A] text-foreground flex flex-col font-sans relative overflow-hidden">
                {/* Custom minimal Topbar for students */}
                <header className="absolute top-0 left-0 w-full z-50 p-4 md:p-6 flex justify-between items-center">
                    <Link href="/">
                        <button className="flex items-center gap-2 text-neutral-soft hover:text-white transition-colors text-sm font-medium">
                            <ArrowLeft className="w-4 h-4" /> Quitter l'espace
                        </button>
                    </Link>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                        Espace Protégé
                    </div>
                </header>

                <main className="flex-1 relative z-10">
                    {children}
                </main>
            </div>
        </LoginGate>
    );
}
