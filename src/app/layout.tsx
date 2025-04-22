import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Elisabeth | Coach Holistique & Accompagnement Bien-être",
  description: "Accompagnement holistique personnalisé pour votre épanouissement physique, mental et émotionnel. Développez votre plein potentiel et retrouvez l'harmonie intérieure.",
  keywords: "coach holistique, bien-être, développement personnel, méditation, équilibre, harmonie, spiritualité, accompagnement, épanouissement",
  authors: [{ name: "Elisabeth" }],
  creator: "Elisabeth",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.elisabethcoach.fr",
    title: "Elisabeth | Coach Holistique & Accompagnement Bien-être",
    description: "Accompagnement holistique personnalisé pour votre épanouissement physique, mental et émotionnel.",
    siteName: "Elisabeth Coach Holistique",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
