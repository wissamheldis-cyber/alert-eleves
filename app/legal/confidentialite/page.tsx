import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
    title: "Politique de Confidentialité — ALERT'ELEVES",
    description: "Politique de confidentialité et de protection des données personnelles du site alerte-eleves.fr.",
};

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 text-neutral-soft max-w-4xl">

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Politique de Confidentialité</h1>
                <p className="text-sm text-neutral-soft/60 mb-12">Dernière mise à jour : 10 février 2026</p>

                <div className="space-y-10">

                    {/* PREAMBULE */}
                    <section className="space-y-3">
                        <p>
                            La présente politique de confidentialité définit et vous informe de la manière dont SHOU Edition (ci-après « l'Éditeur ») utilise et protège les informations que vous transmettez lors de l'utilisation du site <strong className="text-white">alerte-eleves.fr</strong> (ci-après « le Site »), conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
                        </p>
                    </section>

                    {/* ARTICLE 1 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 1 — Responsable du traitement</h2>
                        <div className="bg-surface border border-border rounded-lg p-5 space-y-1 text-sm">
                            <p><strong className="text-white">Responsable :</strong> Anass Abdelrahman — SHOU Edition</p>
                            <p><strong className="text-white">Email :</strong> <a href="mailto:anassabdelrahman2@gmail.com" className="text-primary hover:underline">anassabdelrahman2@gmail.com</a></p>
                            <p><strong className="text-white">Téléphone :</strong> 06 14 76 69 65</p>
                            <p><strong className="text-white">SIRET :</strong> 99030124400010</p>
                        </div>
                    </section>

                    {/* ARTICLE 2 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 2 — Données collectées</h2>
                        <p>Nous collectons uniquement les données que vous nous transmettez volontairement. Les traitements de données réalisés sont les suivants :</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-surface text-white text-left">
                                        <th className="p-3 border-b border-border font-semibold">Finalité</th>
                                        <th className="p-3 border-b border-border font-semibold">Données</th>
                                        <th className="p-3 border-b border-border font-semibold">Base légale</th>
                                        <th className="p-3 border-b border-border font-semibold">Durée</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3">Formulaire de contact</td>
                                        <td className="p-3">Nom, prénom, email, message</td>
                                        <td className="p-3">Consentement</td>
                                        <td className="p-3">12 mois</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3">Newsletter</td>
                                        <td className="p-3">Adresse email</td>
                                        <td className="p-3">Consentement</td>
                                        <td className="p-3">Jusqu'au désabonnement</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="p-3">Demande de devis (établissements)</td>
                                        <td className="p-3">Nom de l'établissement, ville, email, message</td>
                                        <td className="p-3">Intérêt légitime</td>
                                        <td className="p-3">24 mois</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Navigation</td>
                                        <td className="p-3">Cookies techniques, adresse IP (anonymisée)</td>
                                        <td className="p-3">Intérêt légitime</td>
                                        <td className="p-3">13 mois max</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ARTICLE 3 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 3 — Utilisation des données</h2>
                        <p>Les données personnelles collectées sont utilisées exclusivement pour :</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>Répondre à vos demandes de contact ou de devis</li>
                            <li>Vous envoyer la newsletter si vous y êtes inscrit(e)</li>
                            <li>Améliorer l'expérience utilisateur et la navigation sur le Site</li>
                            <li>Assurer la sécurité et le bon fonctionnement du Site</li>
                        </ul>
                        <p>
                            <strong className="text-white">Aucune donnée n'est vendue, cédée ou louée à des tiers.</strong> Aucun transfert de données en dehors de l'Union européenne n'est effectué, à l'exception de l'hébergement (Vercel Inc., États-Unis) qui bénéficie de clauses contractuelles types approuvées par la Commission européenne.
                        </p>
                    </section>

                    {/* ARTICLE 4 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 4 — Sécurité des données</h2>
                        <p>
                            L'Éditeur met en œuvre des mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque, conformément à l'article 32 du RGPD. Ces mesures incluent notamment :
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>Le chiffrement des communications via HTTPS (TLS 1.3)</li>
                            <li>L'accès restreint aux données personnelles aux seules personnes habilitées</li>
                            <li>Des sauvegardes régulières et la redondance des systèmes</li>
                        </ul>
                    </section>

                    {/* ARTICLE 5 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 5 — Vos droits (RGPD)</h2>
                        <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            {[
                                { droit: "Droit d'accès", desc: "Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie." },
                                { droit: "Droit de rectification", desc: "Faire corriger vos données personnelles inexactes ou incomplètes." },
                                { droit: "Droit à l'effacement", desc: "Demander la suppression de vos données dans les conditions prévues par le RGPD." },
                                { droit: "Droit à la portabilité", desc: "Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine." },
                                { droit: "Droit d'opposition", desc: "Vous opposer au traitement de vos données pour des motifs légitimes." },
                                { droit: "Droit de limitation", desc: "Demander la limitation du traitement de vos données dans certains cas." },
                            ].map((item, i) => (
                                <div key={i} className="bg-surface border border-border rounded-lg p-4">
                                    <h3 className="font-bold text-white text-sm mb-1">{item.droit}</h3>
                                    <p className="text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4">
                            Pour exercer ces droits, contactez-nous à : <a href="mailto:anassabdelrahman2@gmail.com" className="text-primary hover:underline">anassabdelrahman2@gmail.com</a>.
                            Nous nous engageons à répondre dans un délai maximum de 30 jours.
                        </p>
                        <p>
                            En cas de litige non résolu, vous avez le droit d'introduire une réclamation auprès de la <strong className="text-white">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>.
                        </p>
                    </section>

                    {/* ARTICLE 6 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 6 — Mineurs</h2>
                        <p>
                            Le Site s'adresse à un public de prévention incluant les mineurs (collégiens et lycéens). Aucune collecte de données personnelles n'est effectuée directement auprès des mineurs. Les formulaires de contact et la newsletter sont destinés aux adultes (parents, enseignants, personnels éducatifs).
                        </p>
                        <p>
                            Les interventions en établissement scolaire ne collectent aucune donnée nominative. Les éventuels sondages réalisés en séance sont strictement anonymes et agrégés.
                        </p>
                    </section>

                    {/* ARTICLE 7 */}
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-white border-b border-border pb-2">Article 7 — Modifications</h2>
                        <p>
                            L'Éditeur se réserve le droit de modifier la présente politique de confidentialité à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. Il est recommandé de consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                        </p>
                    </section>

                </div>

            </main>
            <Footer />
        </div>
    );
}
