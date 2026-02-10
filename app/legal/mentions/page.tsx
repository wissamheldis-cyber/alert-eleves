import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Mentions Légales — ALERT'ELEVES",
    description: "Mentions légales du site alerte-eleves.fr : éditeur, hébergement, propriété intellectuelle et responsabilité.",
};

export default function MentionsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 text-neutral-soft max-w-4xl">

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Mentions Légales</h1>
                <p className="text-sm text-neutral-soft/60 mb-12">Dernière mise à jour : 10 février 2026</p>

                <div className="space-y-10">

                    {/* ARTICLE 1 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 1 — Éditeur du site</h2>
                        <p>
                            Le site <strong className="text-white">alerte-eleves.fr</strong> (ci-après « le Site ») est édité par :
                        </p>
                        <div className="bg-surface border border-border rounded-lg p-5 space-y-1 text-sm">
                            <p><strong className="text-white">Raison sociale :</strong> SHOU Edition</p>
                            <p><strong className="text-white">Forme juridique :</strong> Micro-entreprise</p>
                            <p><strong className="text-white">Dirigeant :</strong> Anass Abdelrahman (AM.17)</p>
                            <p><strong className="text-white">SIRET :</strong> 99030124400010</p>
                            <p><strong className="text-white">Email :</strong> <a href="mailto:anassabdelrahman2@gmail.com" className="text-primary hover:underline">anassabdelrahman2@gmail.com</a></p>
                            <p><strong className="text-white">Téléphone :</strong> <a href="tel:+33614766965" className="text-primary hover:underline">06 14 76 69 65</a></p>
                            <p><strong className="text-white">Directeur de la publication :</strong> Anass Abdelrahman</p>
                        </div>
                    </section>

                    {/* ARTICLE 2 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 2 — Hébergement</h2>
                        <p>Le Site est hébergé par :</p>
                        <div className="bg-surface border border-border rounded-lg p-5 space-y-1 text-sm">
                            <p><strong className="text-white">Hébergeur :</strong> Vercel Inc.</p>
                            <p><strong className="text-white">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                            <p><strong className="text-white">Contact :</strong> <a href="mailto:privacy@vercel.com" className="text-primary hover:underline">privacy@vercel.com</a></p>
                            <p><strong className="text-white">Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a></p>
                        </div>
                    </section>

                    {/* ARTICLE 3 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 3 — Propriété intellectuelle</h2>
                        <p>
                            L'ensemble des contenus présents sur le Site (textes, illustrations, photographies, logos, graphismes, vidéos, mises en page, codes sources) sont la propriété exclusive de SHOU Edition ou de ses partenaires, et sont protégés par les dispositions du Code de la propriété intellectuelle.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication, distribution, retransmission, ou exploitation de quelque manière que ce soit, de tout ou partie du Site, sans l'autorisation écrite et préalable de l'éditeur, est strictement interdite et constituerait une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
                        </p>
                    </section>

                    {/* ARTICLE 4 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 4 — Limitation de responsabilité</h2>
                        <p>
                            L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                        </p>
                        <p>
                            L'éditeur ne pourra être tenu responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au Site, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications requises, soit de l'apparition d'un bug ou d'une incompatibilité.
                        </p>
                        <p>
                            Le Site peut contenir des liens hypertextes vers d'autres sites. L'éditeur ne dispose d'aucun moyen de contrôle du contenu de ces sites tiers et n'assume, en conséquence, aucune responsabilité de ce fait.
                        </p>
                    </section>

                    {/* ARTICLE 5 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 5 — Droit applicable et juridiction</h2>
                        <p>
                            Les présentes mentions légales sont régies par le droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
                        </p>
                    </section>

                    {/* ARTICLE 6 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 6 — Contact</h2>
                        <p>
                            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:anassabdelrahman2@gmail.com" className="text-primary hover:underline">anassabdelrahman2@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
