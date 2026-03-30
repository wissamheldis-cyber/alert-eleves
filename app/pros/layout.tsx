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
            <div className="min-h-screen bg-[#08080C] text-foreground flex flex-col md:flex-row font-sans relative">

                {/* Global background: Fondd.png */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/Fondd.png"
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                        style={{ mixBlendMode: "screen" }}
                    />
                    {/* Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                            backgroundSize: "3.5rem 3.5rem",
                        }}
                    />
                    {/* Vignette */}
                    <div
                        className="absolute inset-0"
                        style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, #08080C 100%)" }}
                    />
                </div>

                {/* Mobile Header */}
                <header className="md:hidden sticky top-0 z-50 bg-[#08080C]/90 backdrop-blur-xl border-b border-white/5 flex flex-col shrink-0">
                    <div className="bg-[#CC0000] h-8 flex items-center justify-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                    </div>
                    <div className="p-3 flex justify-between items-center">
                        <div className="font-black tracking-widest text-indigo-400 text-sm" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>PORTAIL PRO</div>
                        <Link href="/" className="text-neutral-500 hover:text-white transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                    </div>
                </header>

                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-[#08080C]/95 backdrop-blur-xl border-r border-white/5 flex flex-col h-auto md:h-screen shrink-0 md:sticky md:top-0 relative z-10">
                    {/* Sidebar top ribbon */}
                    <div className="hidden md:block bg-[#CC0000] h-10 w-full">
                        <div className="h-full flex items-center justify-center">
                            <span className="text-xs font-black uppercase tracking-[0.35em] text-white" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Prévention</span>
                        </div>
                    </div>

                    <div className="hidden md:flex p-5 border-b border-white/5 items-center justify-between">
                        <div className="font-black tracking-[0.15em] text-white text-lg" style={{ fontFamily: "var(--font-oswald, sans-serif)" }}>PORTAIL PRO</div>
                        <Link href="/" className="text-neutral-600 hover:text-white transition-colors" title="Retour à l'accueil">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-3 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-hidden hide-scrollbar">
                        {[
                            { name: "Mon Planning", icon: CalendarDays, href: "/pros" },
                            { name: "Documentation", icon: FileText, href: "/pros/documents" },
                            { name: "Suivi Statistiques", icon: BarChart3, href: "/pros/statistiques" },
                            { name: "Communauté 🔒", icon: Users, href: "/pros/communaute" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="flex flex-row items-center gap-3 px-4 py-3 md:py-3.5 rounded-xl text-sm font-medium text-neutral-500 hover:bg-indigo-500/10 hover:text-indigo-400 border border-transparent hover:border-indigo-500/20 transition-all whitespace-nowrap md:whitespace-normal shrink-0"
                            >
                                <link.icon className="w-4 h-4 shrink-0" />
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="p-4 border-t border-white/5 mt-auto hidden md:block">
                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
                            <h3 className="text-indigo-400 font-black text-xs mb-1 tracking-widest uppercase" style={{ fontFamily: "var(--font-league-spartan, sans-serif)" }}>Session Active</h3>
                            <p className="text-xs text-neutral-600">Accès Référent Éducatif.</p>
                        </div>
                        <div className="mt-3 text-center">
                            <span className="font-black text-xs text-white/30 tracking-[0.3em]" style={{ fontFamily: "var(--font-orbitron, sans-serif)" }}>
                                A.M. <span className="text-[#CC0000]/50">17</span>
                            </span>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 overflow-x-hidden p-4 md:p-8 relative z-10">
                    {children}
                </main>
            </div>
        </LoginGate>
    );
}
