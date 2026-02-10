import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* LEFT INFO */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
                            <p className="text-neutral-soft text-lg leading-relaxed">
                                Une question sur une commande ? Une demande de partenariat ?
                                Ou juste un mot pour nous dire ce que vous pensez de nos livres ?
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Email</h3>
                                    <a href="mailto:anassabdelrahman2@gmail.com" className="text-neutral-soft hover:text-primary transition-colors cursor-pointer block">anassabdelrahman2@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Téléphone</h3>
                                    <a href="tel:+33614766965" className="text-neutral-soft hover:text-primary transition-colors">06 14 76 69 65</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div>
                        <Card className="bg-surface border-border">
                            <CardContent className="p-6 md:p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Nom</label>
                                        <Input className="bg-background border-border" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Prénom</label>
                                        <Input className="bg-background border-border" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email</label>
                                    <Input type="email" className="bg-background border-border" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Message</label>
                                    <Textarea className="bg-background border-border min-h-[150px]" placeholder="Comment pouvons-nous vous aider ?" />
                                </div>
                                <Button className="w-full h-12 text-lg">Envoyer</Button>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
