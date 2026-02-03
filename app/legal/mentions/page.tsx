import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MentionsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 text-neutral-soft max-w-4xl">
                <h1 className="text-3xl font-bold text-white mb-8">Mentions Légales</h1>
                <div className="space-y-6">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Éditeur du site</h2>
                        <p>
                            <strong><a href="https://shou-edition.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SHOU Edition</a></strong><br />
                            Dirigé par Anass.A-R (AM.17)<br />
                            [Adresse complète]<br />
                            [SIRET]<br />
                            Directeur de la publication : Anass.A-R
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Hébergement</h2>
                        <p>
                            Ce site est hébergé par Vercel Inc.<br />
                            440 N Barranca Ave #4133<br />
                            Covina, CA 91723<br />
                            privacy@vercel.com
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
