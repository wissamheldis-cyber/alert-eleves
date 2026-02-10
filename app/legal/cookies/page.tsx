import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Gestion des Cookies — ALERT'ELEVES",
    description: "Politique de gestion des cookies du site alerte-eleves.fr : types de cookies utilisés, finalités et gestion de votre consentement.",
};

export default function CookiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 text-neutral-soft max-w-4xl">

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Gestion des Cookies</h1>
                <p className="text-sm text-neutral-soft/60 mb-12">Dernière mise à jour : 10 février 2026</p>

                <div className="space-y-10">

                    {/* INTRO */}
                    <section className="space-y-3">
                        <p>
                            Conformément à la directive européenne 2009/136/CE (dite « directive ePrivacy ») et aux recommandations de la CNIL, nous vous informons de l'utilisation de cookies sur le site <strong className="text-white">alerte-eleves.fr</strong> (ci-après « le Site »).
                        </p>
                    </section>

                    {/* ARTICLE 1 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 1 — Qu'est-ce qu'un cookie ?</h2>
                        <p>
                            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet au site de mémoriser des informations relatives à votre navigation (langue, préférences d'affichage, identifiant de session, etc.) afin de faciliter vos visites ultérieures.
                        </p>
                        <p>
                            Les cookies ne contiennent pas d'informations personnelles identifiables et ne peuvent pas endommager votre appareil. Ils ont une durée de vie limitée.
                        </p>
                    </section>

                    {/* ARTICLE 2 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 2 — Types de cookies utilisés</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-surface text-white text-left">
                                        <th className="p-3 border-b border-border font-semibold">Catégorie</th>
                                        <th className="p-3 border-b border-border font-semibold">Finalité</th>
                                        <th className="p-3 border-b border-border font-semibold">Durée</th>
                                        <th className="p-3 border-b border-border font-semibold">Consentement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3 font-medium text-white">Strictement nécessaires</td>
                                        <td className="p-3">Fonctionnement du site (session, sécurité, préférences de base). Ces cookies sont indispensables et ne peuvent être désactivés.</td>
                                        <td className="p-3">Session</td>
                                        <td className="p-3"><span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">Exempt</span></td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3 font-medium text-white">Analytiques</td>
                                        <td className="p-3">Mesure d'audience anonymisée pour comprendre l'utilisation du Site et l'améliorer (pages visitées, durée, origine du trafic).</td>
                                        <td className="p-3">13 mois max</td>
                                        <td className="p-3"><span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">Requis</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-medium text-white">Préférences</td>
                                        <td className="p-3">Mémorisation de vos choix (consentement cookies, thème, langue) pour améliorer l'expérience utilisateur.</td>
                                        <td className="p-3">6 mois</td>
                                        <td className="p-3"><span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-bold">Exempt</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-neutral-soft/60 mt-2">
                            <strong>Note :</strong> Aucun cookie publicitaire, de pistage ou de profilage n'est utilisé sur ce Site.
                        </p>
                    </section>

                    {/* ARTICLE 3 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 3 — Gestion de votre consentement</h2>
                        <p>
                            Lors de votre première visite sur le Site, un bandeau vous informe de l'utilisation de cookies et recueille votre consentement pour les cookies non essentiels. Vous pouvez à tout moment modifier vos préférences.
                        </p>
                        <h3 className="text-base font-bold text-white mt-4">Paramétrage via votre navigateur</h3>
                        <p>Vous pouvez également configurer votre navigateur pour accepter, refuser ou supprimer les cookies :</p>
                        <ul className="list-disc list-inside space-y-1 pl-2 text-sm">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                            <li><a href="https://support.microsoft.com/fr-fr/topic/supprimer-et-g%C3%A9rer-les-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                        </ul>
                        <div className="bg-surface border border-border rounded-lg p-4 mt-4">
                            <p className="text-xs text-neutral-soft/80">
                                <strong className="text-white">⚠ Attention :</strong> La désactivation de certains cookies peut altérer votre expérience de navigation et limiter l'accès à certaines fonctionnalités du Site.
                            </p>
                        </div>
                    </section>

                    {/* ARTICLE 4 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 4 — Cookies tiers</h2>
                        <p>
                            Le Site peut intégrer des services tiers (vidéos YouTube, formulaires, polices Google Fonts) qui sont susceptibles de déposer des cookies. Ces cookies sont soumis aux politiques de confidentialité de ces services tiers. L'Éditeur n'a aucun contrôle sur ces cookies.
                        </p>
                        <p>
                            Nous vous invitons à consulter les politiques de confidentialité de ces services pour en savoir plus sur leur utilisation des cookies.
                        </p>
                    </section>

                    {/* ARTICLE 5 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 5 — Plus d'informations</h2>
                        <p>
                            Pour toute question concernant notre politique de cookies, vous pouvez nous contacter à : <a href="mailto:anassabdelrahman2@gmail.com" className="text-primary hover:underline">anassabdelrahman2@gmail.com</a>.
                        </p>
                        <p>
                            Pour en savoir plus sur les cookies et vos droits, vous pouvez consulter le site de la <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CNIL</a>.
                        </p>
                    </section>

                </div>

            </main>
            <Footer />
        </div>
    );
}
