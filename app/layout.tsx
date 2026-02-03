import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SmartLoader } from "@/components/layout/SmartLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alerte-eleves.com'), // Replace with actual domain
  title: {
    default: "ALERTE ELEVES — Prévention Puff & Vapotage",
    template: "%s | ALERTE ELEVES"
  },
  description: "Des outils de prévention courts, clairs et sans moralisation pour aider élèves, parents et établissements à comprendre les risques de la Puff et reprendre le contrôle. Déployé par SHOU Edition. Fondé par AM.17.",
  keywords: ["Puff", "Vapotage", "Prévention", "École", "Collège", "Lycée", "Santé", "Éducation", "Addiction", "AM.17", "SHOU Edition"],
  authors: [{ name: "AM.17", url: "https://shou-edition.com" }],
  creator: "SHOU Edition",
  publisher: "SHOU Edition",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://alerte-eleves.com",
    title: "ALERTE ELEVES — Prévention Puff & Vapotage",
    description: "Prévenir sans moraliser. Découvrez le livre Puff et nos interventions en milieu scolaire. Une initiative AM.17.",
    siteName: "ALERTE ELEVES",
    images: [
      {
        url: "/images/cover.png", // Ensure this aims at a valid OG image
        width: 1200,
        height: 630,
        alt: "ALERTE ELEVES - Prévention",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALERTE ELEVES — Prévention Puff",
    description: "Des outils concrets pour lutter contre le fléau de la Puff chez les jeunes. Découvrez le livre et les interventions.",
    images: ["/images/cover.png"],
    creator: "@ShouEdition",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${sora.variable} antialiased`}
      >
        <SmartLoader />
        {children}
      </body>
    </html>
  );
}
