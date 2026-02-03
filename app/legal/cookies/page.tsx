import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CookiesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24 text-neutral-soft max-w-4xl">
                <h1 className="text-3xl font-bold text-white mb-8">Gestion des Cookies</h1>
                <div className="space-y-6">
                    <p>Nous utilisons un minimum de cookies pour assurer le bon fonctionnement du site.</p>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Cookies essentiels</h2>
                        <p>Nécessaires à la navigation et à la commande.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">Cookies analytiques</h2>
                        <p>Nous utilisons des outils anonymes pour comprendre l'utilisation du site et l'améliorer.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
