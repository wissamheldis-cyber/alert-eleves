import { LoginGate } from "@/components/auth/LoginGate";
import Link from "next/link";
import { ArrowLeft, MessageSquare, BookOpen, Video, QrCode, ClipboardList } from "lucide-react";

export const metadata = {
    title: "Portail Élèves — ALERT'ELEVES",
    description: "Espace privé dédié aux élèves.",
};

export default function ElevesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LoginGate 
            portalName="Portail Élèves"
            description="L'espace interactif réservé à ta classe."
            acceptedPasswords={["alerte"]}
            storageKey="auth_eleves_v3"
            theme="dark"
        >
            <div className="min-h-screen bg-[#04060A] text-foreground flex flex-col md:flex-row font-sans">
                
                {/* Mobile Header */}
                <header className="md:hidden sticky top-0 z-50 bg-[#04060A]/80 backdrop-blur-xl border-b border-border p-4 flex justify-between items-center">
                    <div className="font-bold tracking-widest text-secondary">ÉLÈVES</div>
                    <Link href="/" className="text-neutral-500 hover:text-white">
                        <ArrowLeft className="w-5 h-5" /> 
                    </Link>
                </header>

                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-surface border-r border-border flex flex-col h-auto md:h-screen shrink-0 md:sticky md:top-0">
                    <div className="hidden md:flex p-6 border-b border-border items-center justify-between">
                        <div className="font-bold tracking-widest text-secondary text-lg">ÉLÈVES</div>
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors" title="Retour à l'accueil">
                            <ArrowLeft className="w-5 h-5" /> 
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-hidden hide-scrollbar">
                        {[
                            { name: "Mes Chatbots", icon: MessageSquare, href: "/eleves" },
                            { name: "Mon Bilan", icon: BookOpen, href: "/eleves/recapitulatif" },
                            { name: "Vidéos & Infos", icon: Video, href: "/eleves/ressources" },
                            { name: "Mon Atelier", icon: ClipboardList, href: "/eleves/atelier" },
                            { name: "Contact & Feed-back", icon: QrCode, href: "/eleves/feedback" },
                        ].map((link) => (
                            <Link key={link.name} href={link.href} className="flex flex-row items-center gap-3 px-4 py-3 md:py-4 rounded-xl text-sm font-medium text-neutral-400 hover:bg-secondary/10 hover:text-secondary border border-transparent hover:border-secondary/20 transition-all whitespace-nowrap md:whitespace-normal shrink-0">
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-border mt-auto hidden md:block">
                        <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4">
                            <h3 className="text-secondary font-bold text-sm mb-1">Session Active</h3>
                            <p className="text-xs text-neutral-500">Connexion anonyme sécurisée.</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-x-hidden p-4 md:p-8">
                    {children}
                </main>
            </div>
        </LoginGate>
    );
}
