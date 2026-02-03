import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-border bg-surface/50 backdrop-blur-sm pt-16 pb-8 relative overflow-hidden">
            {/* Texture Overlay for Footer specifically if needed, or rely on body */}
            <div className="absolute inset-0 bg-[url('/images/inspiration_for_direction_artistic.png')] opacity-[0.12] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Mission */}
                    <div className="space-y-4">
                        <span className="text-xl font-bold font-heading text-white tracking-tight">ALERT'ELEVES</span>
                        <p className="text-sm text-neutral-soft leading-relaxed">
                            Prévention utile, directe et non moralisatrice. Des outils concrets pour élèves, parents et établissements.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-neutral-soft hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-neutral-soft hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="#" className="text-neutral-soft hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3 text-sm text-neutral-soft">
                            <li><Link href="/livres" className="hover:text-white transition-colors">Nos Livres</Link></li>
                            <li><Link href="/ressources" className="hover:text-white transition-colors">Ressources Gratuites</Link></li>
                            <li><Link href="/etablissements" className="hover:text-white transition-colors">Pour les Établissements</Link></li>
                            <li><Link href="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Légal</h3>
                        <ul className="space-y-3 text-sm text-neutral-soft">
                            <li><Link href="/legal/mentions" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                            <li><Link href="/legal/confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
                            <li><Link href="/legal/cookies" className="hover:text-white transition-colors">Gestion des Cookies</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Restez informé</h3>
                        <p className="text-sm text-neutral-soft mb-4">
                            Recevez nos dernières ressources et alertes.
                        </p>
                        <form className="space-y-2">
                            <Input type="email" placeholder="votre@email.com" />
                            <Button className="w-full">S'inscrire</Button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-neutral-soft/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-soft">
                    <p>© {new Date().getFullYear()} ALERTE ELEVES — Déployé par <a href="https://shou-edition.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors cursor-pointer">SHOU Edition</a>.</p>
                    <a href="mailto:contact@alerte-eleves.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                        contact@alerte-eleves.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
