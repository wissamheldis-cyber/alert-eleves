import { LoginGate } from "@/components/auth/LoginGate";
import Link from "next/link";
import { ArrowLeft, CalendarDays, FileText, BarChart3, Users } from "lucide-react";

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
            description="Le centre de pilotage logistique et pédagogique."
            acceptedPasswords={["liberte", "liberté"]}
            storageKey="auth_pros_v3"
            theme="pro"
        >
            <div className="min-h-screen bg-[#070A12] text-foreground flex flex-col md:flex-row font-sans">
                
                {/* Mobile Header */}
                <header className="md:hidden sticky top-0 z-50 bg-[#070A12]/80 backdrop-blur-xl border-b border-border p-4 flex justify-between items-center">
                    <div className="font-bold tracking-widest text-primary">PORTAIL PRO</div>
                    <Link href="/" className="text-neutral-500 hover:text-white">
                        <ArrowLeft className="w-5 h-5" /> 
                    </Link>
                </header>

                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-surface border-r border-border flex flex-col h-auto md:h-screen shrink-0 md:sticky md:top-0">
                    <div className="hidden md:flex p-6 border-b border-border items-center justify-between">
                        <div className="font-bold tracking-widest text-primary text-lg">PORTAIL PRO</div>
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors" title="Retour à l'accueil">
                            <ArrowLeft className="w-5 h-5" /> 
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-hidden hide-scrollbar">
                        {[
                            { name: "Mon Planning", icon: CalendarDays, href: "/pros" },
                            { name: "Documentation", icon: FileText, href: "/pros/documents" },
                            { name: "Suivi Statistiques", icon: BarChart3, href: "/pros/statistiques" },
                            { name: "Communauté \uD83D\uDD12", icon: Users, href: "/pros/communaute" },
                        ].map((link) => (
                            <Link key={link.name} href={link.href} className="flex flex-row items-center gap-3 px-4 py-3 md:py-4 rounded-xl text-sm font-medium text-neutral-400 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20 transition-all whitespace-nowrap md:whitespace-normal shrink-0">
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-border mt-auto hidden md:block">
                        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                            <h3 className="text-primary font-bold text-sm mb-1">Session Active</h3>
                            <p className="text-xs text-neutral-500">Accès Référent Éducatif.</p>
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
