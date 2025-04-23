import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | Elisabeth Coach Holistique",
  description: "Découvrez mes programmes d'accompagnement holistique personnalisés pour votre épanouissement physique, mental et émotionnel. Éveil intérieur, reconnexion émotionnelle, conscience et présence.",
  keywords: "coaching holistique, programmes bien-être, développement personnel, accompagnement émotionnel, pleine conscience, méditation",
  openGraph: {
    title: "Programmes d'accompagnement | Elisabeth Coach Holistique",
    description: "Parcours personnalisés pour vous accompagner vers un mieux-être profond et durable.",
    type: "website",
  },
};

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Clock, Heart, Star } from "lucide-react";

// Données pour les programmes
const programmes = [
  {
    id: 1,
    title: "Éveil Intérieur",
    slug: "eveil-interieur",
    level: "Débutant",
    duration: "8 semaines",
    price: "1 200€",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    shortDescription: "Un parcours complet pour retrouver votre alignement et développer une vision positive de votre vie.",
    benefits: [
      "Techniques de méditation adaptées aux débutants",
      "Identification et libération des croyances limitantes",
      "Rituels quotidiens pour cultiver la gratitude",
      "Accompagnement personnalisé par appels hebdomadaires"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Reconnexion Émotionnelle",
    slug: "reconnexion-emotionnelle",
    level: "Intermédiaire",
    duration: "10 semaines",
    price: "1 600€",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80",
    shortDescription: "Transformez votre relation à vos émotions pour une vie plus équilibrée et authentique.",
    benefits: [
      "Cartographie émotionnelle personnalisée",
      "Libération des traumatismes émotionnels",
      "Pratiques d'autocompassion et de régulation",
      "3 séances individuelles incluses"
    ],
    featured: false
  },
  {
    id: 3,
    title: "Conscience & Présence",
    slug: "conscience-presence",
    level: "Tous niveaux",
    duration: "6 semaines",
    price: "950€",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80",
    shortDescription: "Développez votre pratique de pleine conscience pour une présence totale dans l'instant.",
    benefits: [
      "Techniques de méditation guidée et autonome",
      "Intégration de la pleine conscience au quotidien",
      "Gestion du stress par la présence consciente",
      "Manuel pratique et enregistrements audio"
    ],
    featured: false
  },
  {
    id: 4,
    title: "Transformation Profonde",
    slug: "transformation-profonde",
    level: "Avancé",
    duration: "12 semaines",
    price: "2 200€",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80",
    shortDescription: "Un programme intensif pour celles et ceux qui souhaitent transformer profondément leur vie.",
    benefits: [
      "Accompagnement personnalisé et suivi quotidien",
      "Travail sur les schémas inconscients limitants",
      "Techniques avancées de manifestation consciente",
      "Création d'une vision claire et alignée pour votre vie"
    ],
    featured: true
  }
];

// Composant pour une carte de programme
function ProgrammeCard({ programme }: { programme: typeof programmes[0] }) {
  return (
    <div className="group h-full flex flex-col rounded-xl overflow-hidden border border-muted/50 transition-shadow hover:shadow-lg bg-background">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={programme.image}
          alt={programme.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        {programme.featured && (
          <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-xs py-1 px-3 rounded-full">
            Programme phare
          </div>
        )}
      </div>
      
      {/* Contenu */}
      <div className="flex-grow flex flex-col p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="outline" className="text-xs bg-secondary/10">
            {programme.level}
          </Badge>
          <div className="flex items-center text-muted-foreground text-xs">
            <Clock className="h-3 w-3 mr-1" />
            {programme.duration}
          </div>
        </div>
        
        <h3 className="font-cormorant text-2xl font-medium mb-3">
          {programme.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {programme.shortDescription}
        </p>
        
        <ul className="space-y-2 mb-6 text-sm">
          {programme.benefits.slice(0, 2).map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Star className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" strokeWidth={1.5} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-cormorant font-medium">{programme.price}</span>
          <Link href={`/programmes/${programme.slug}`}>
            <Button variant="ghost" size="sm" className="text-primary hover:text-accent">
              Découvrir 
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Composant pour le programme en vedette
function FeaturedProgramme({ programme }: { programme: typeof programmes[0] }) {
  return (
    <div className="grid md:grid-cols-5 gap-8 p-8 rounded-2xl bg-secondary/5 border border-secondary/10">
      {/* Image */}
      <div className="md:col-span-2 relative h-60 md:h-80 rounded-xl overflow-hidden">
        <Image
          src={programme.image}
          alt={programme.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 40vw"
          className="transition-transform duration-700 hover:scale-105"
        />
      </div>
      
      {/* Contenu */}
      <div className="md:col-span-3 flex flex-col space-y-4">
        <Badge variant="accent" className="w-fit">Programme Phare</Badge>
        
        <h3 className="font-cormorant text-3xl md:text-4xl font-medium">
          {programme.title}
        </h3>
        
        <p className="text-lg text-muted-foreground">
          {programme.shortDescription}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-2 text-accent" strokeWidth={1.5} />
            {programme.level}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-accent" strokeWidth={1.5} />
            {programme.duration}
          </div>
        </div>
        
        <ul className="space-y-3 my-4">
          {programme.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Heart className="h-4 w-4 text-accent mr-3 mt-1 shrink-0" strokeWidth={1.5} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-cormorant font-medium">{programme.price}</span>
          <Link href={`/programmes/${programme.slug}`}>
            <Button variant="accent" size="lg">
              Découvrir ce programme
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProgrammesPage() {
  // Filtrer le programme mis en vedette (le premier trouvé)
  const featuredProgramme = programmes.find(p => p.featured);
  // Liste des programmes non mis en vedette
  const regularProgrammes = programmes.filter(p => !p.featured || p.id !== featuredProgramme?.id);
  
  return (
    <main className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête de page */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Programmes <span className="font-medium">d&apos;accompagnement</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Découvrez mes parcours transformationnels conçus pour vous accompagner dans votre
            cheminement personnel et vous aider à cultiver bien-être et harmonie intérieure.
          </p>
        </div>
        
        {/* Programme en vedette */}
        {featuredProgramme && (
          <div className="mb-20">
            <h2 className="font-cormorant text-2xl font-medium mb-6 text-center">
              Programme phare
            </h2>
            <FeaturedProgramme programme={featuredProgramme} />
          </div>
        )}
        
        {/* Autres programmes */}
        <div className="mb-10">
          <h2 className="font-cormorant text-2xl font-medium mb-6 text-center">
            Tous les programmes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map(programme => (
              <ProgrammeCard key={programme.id} programme={programme} />
            ))}
          </div>
        </div>
        
        {/* Section Consultation personnalisée */}
        <div className="bg-accent/10 rounded-xl p-8 text-center max-w-3xl mx-auto mt-16">
          <h3 className="font-cormorant text-2xl font-medium mb-4">
            Vous recherchez un accompagnement sur mesure?
          </h3>
          <p className="text-muted-foreground mb-6">
            Chaque parcours est unique. Si vous avez des besoins spécifiques, 
            contactez-moi pour une consultation personnalisée.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg" withHoverEffect={true}>
              Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 