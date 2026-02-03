import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 text-neutral-soft max-w-4xl">
                <h1 className="text-3xl font-bold text-white mb-8">Politique de Confidentialité</h1>
                <div className="space-y-6">
                    <p>La protection de vos données est une priorité. Voici ce que nous en faisons.</p>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Collecte des données</h2>
                        <p>
                            Nous collectons uniquement les données que vous nous transmettez via :<br />
                            - Le formulaire de contact (nom, email)<br />
                            - L'inscription à la newsletter (email)<br />
                            - Les commandes (via nos prestataires de paiement)
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Utilisation</h2>
                        <p>Ces données servent uniquement à répondre à vos demandes, traiter vos commandes ou vous envoyer les informations demandées.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Vos droits</h2>
                        <p>Vous pouvez demander la modification ou suppression de vos données en nous contactant à contact@alerte-eleves.com.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
