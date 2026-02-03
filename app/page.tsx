import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, BookOpen, Shield, Users, AlertCircle, Quote, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
          {/* Hero Content */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

              {/* Text Column (Desktop Left, Mobile Order 2) */}
              <div className="flex-1 text-center md:text-left order-2 md:order-1 z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                  Prévenir, <br />
                  <span className="text-primary">
                    sans moraliser.
                  </span>
                </h1>
                <p className="mx-auto md:mx-0 max-w-xl text-lg md:text-xl text-neutral-soft mb-8 leading-relaxed">
                  Des outils concrets : le livre pour comprendre, l'intervention physique pour échanger.
                </p>
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
                  <Link href="/livres/puff" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full text-base gap-2 shadow-primary/25">
                      Découvrir le livre Puff
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/etablissements" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full text-base">
                      Je suis un établissement
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-neutral-soft/60">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-secondary/70" />
                    <span>Prévention validée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary/70" />
                    <span>Approche terrain</span>
                  </div>
                </div>
              </div>

              {/* Image Column (Desktop Right, Mobile Order 1) */}
              <div className="flex-1 relative order-1 md:order-2 w-full max-w-md md:max-w-full">
                <div className="relative aspect-[3/4] md:aspect-square w-full flex items-center justify-center">
                  {/* Glow effect behind cover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-3xl rounded-full opacity-0 animate-pulse md:opacity-40" />

                  <div className="relative w-[70%] md:w-[80%] lg:w-[60%] h-auto transform transition-transform duration-700 hover:scale-105 hover:rotate-1">
                    <Image
                      src="/images/book-cover.png"
                      alt="Livre Puff - Comprendre, résister, agir"
                      width={600}
                      height={800}
                      className="drop-shadow-2xl rounded-sm object-contain"
                      priority
                    />
                    {/* Prevention Badge */}
                    <div className="absolute -bottom-4 -right-4 bg-surface border border-border px-3 py-1.5 rounded-full text-xs font-medium text-neutral-soft shadow-lg backdrop-blur-md flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      Contenu de prévention
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NOW SECTION */}
        <section className="py-20 md:py-32 relative bg-surface/30 border-y border-border">
          {/* Background Texture for Section */}
          <div className="absolute inset-0 bg-[url('/images/inspiration_for_direction_artistic.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Visual Side: ILLUSTRATIONS */}
              <div className="relative hidden lg:block h-[600px] w-full">
                {/* Image 1: Situation */}
                <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden border border-border/50 group z-10">
                  <Image
                    src="/images/cover 2.png"
                    alt="Situation réelle"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
                {/* Image 2: Cover Illustration */}
                <div className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-2xl overflow-hidden border border-border/50 shadow-2xl z-20 group">
                  <Image
                    src="/images/cover.png"
                    alt="Illustration"
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Pourquoi c'est dur ?</h2>
                  <p className="text-neutral-soft text-lg leading-relaxed">
                    Ce n'est pas juste "de la vapeur". C'est un mécanisme conçu pour créer une habitude immédiate, renforcée par le groupe et le stress du quotidien.
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      icon: AlertCircle,
                      title: "L'habitude simplifiée",
                      text: "Pas de feu, pas d'odeur, pas de cendre. La barrière à l'entrée est nulle. Le geste devient automatique en quelques jours."
                    },
                    {
                      icon: Shield,
                      title: "Prévention concrète",
                      text: "Les discours alarmistes ne marchent plus. On démonte les mécanismes (marketing, chimie, cerveau) pour rendre le pouvoir à l'élève."
                    },
                    {
                      icon: BookOpen,
                      title: "Outils vs Sermons",
                      text: "On ne dit pas 'c'est mal'. On donne des techniques pour dire non sans perdre la face, et gérer le stress autrement."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_15px_-5px_var(--primary)] transition-all">
                          <item.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-neutral-soft text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOR WHO SECTION */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Pour qui ?</h2>
              <p className="text-neutral-soft max-w-2xl mx-auto">Une approche adaptée à chaque acteur de la prévention.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { role: "Élèves", desc: "Techniques rapides pour casser l’automatique et comprendre les pièges.", color: "text-secondary" },
                { role: "Parents", desc: "Repérer sans humilier. Dialoguer sans exploser. Des clés pour renouer le lien.", color: "text-primary" },
                { role: "Établissements", desc: "Kit prêt à l’emploi : séance + supports + suivi pour les équipes éducatives.", color: "text-white" },
              ].map((card, i) => (
                <Card key={i} className="hover:border-primary/30 group">
                  <CardHeader>
                    <CardTitle className={`text-xl ${card.color} group-hover:scale-105 transition-transform`}>{card.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-soft group-hover:text-white transition-colors">{card.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* COLLECTION / WHAT YOU WILL LEARN */}
        <section className="py-20 bg-neutral-hard/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12">

              {/* Left: What to learn (Bullets) */}
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl font-bold text-white">Ce que tu vas apprendre</h2>
                <ul className="space-y-4">
                  {[
                    "Comment la nicotine hacke le système de récompense",
                    "Les techniques marketing ciblées sur les ados",
                    "Scripts pour refuser sans s'isoler socialement",
                    "Plan d'action sur 3 semaines pour arrêter"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-border hover:border-secondary/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-neutral-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Roadmap (Micro-cards) */}
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl font-bold text-white">La collection s'élargit</h2>

                {/* Card 1: Puff (Active) */}
                <Link href="/livres/puff" className="block">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-surface/80 border border-primary/50 group cursor-pointer hover:bg-surface transition-all">
                    <div className="w-16 h-20 bg-neutral-900 rounded border border-border overflow-hidden relative shrink-0">
                      <Image
                        src="/images/book-cover.png"
                        alt="Cover"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">Puff</h3>
                        <span className="text-[10px] uppercase font-bold bg-primary text-white px-2 py-0.5 rounded-full">Dispo</span>
                      </div>
                      <p className="text-sm text-neutral-soft">Comprendre, résister, agir</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-soft group-hover:text-primary transition-colors" />
                  </div>
                </Link>

                {/* Card 2: Reseaux (Editing) */}
                <Link href="/prochaines-sorties" className="block">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-surface/30 border border-border border-dashed group cursor-pointer hover:border-secondary/50 transition-all">
                    <div className="w-16 h-20 bg-gradient-to-br from-neutral-900 to-secondary/20 rounded border border-border flex items-center justify-center shrink-0">
                      <div className="w-8 h-8 rounded-full border border-secondary/30" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-neutral-300 group-hover:text-secondary transition-colors">Réseaux</h3>
                        <span className="text-[10px] uppercase font-bold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">En édition</span>
                      </div>
                      <p className="text-sm text-neutral-soft">Attention & Influence</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-neutral-soft group-hover:text-secondary transition-colors" />
                  </div>
                </Link>

                {/* Other titles */}
                <div className="p-4 rounded-xl border border-transparent">
                  <p className="text-sm text-neutral-soft italic text-center">
                    + d'autres sujets à venir (Cyberharcèlement, Stress...)
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-20 relative overflow-hidden">
          {/* Glow background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[100px] -z-10" />

          <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Restez informés</h2>
            <p className="text-neutral-soft mb-8">
              Recevez les dates de sortie des prochains livres et nos nouvelles ressources gratuites.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="votre@email.com"
                className="h-12 bg-surface/50 border-border text-white placeholder:text-neutral-500 focus-visible:ring-primary/50"
              />
              <Button size="lg" className="h-12 px-8">M'inscrire</Button>
            </form>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
