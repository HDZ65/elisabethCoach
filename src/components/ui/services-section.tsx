"use client";

import { motion } from "framer-motion";
import { Badge } from "./badge";
import { Button } from "./button";
import { Heart, Brain, Leaf } from "lucide-react";
import Link from "next/link";

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceItem({ icon, title, description, delay }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="border border-muted/50 rounded-xl p-6 bg-background shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="bg-accent/10 p-3 w-12 h-12 flex items-center justify-center rounded-full mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-cormorant font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{description}</p>
      
      <Link href="/programmes">
        <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent/10">
          En savoir plus
        </Button>
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="container py-24 bg-background">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Services</Badge>
        <h2 className="text-3xl md:text-4xl font-cormorant font-light mb-6">
          Une approche <span className="font-medium">holistique</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Je vous accompagne dans un processus de transformation, en prenant en compte 
          toutes les dimensions de votre être pour un mieux-être durable.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <ServiceItem 
          icon={<Heart className="h-6 w-6 text-accent" strokeWidth={1.5} />}
          title="Accompagnement émotionnel"
          description="Libérez vos émotions bloquées et transformez-les en ressources pour avancer sereinement dans votre vie."
          delay={1}
        />
        
        <ServiceItem 
          icon={<Brain className="h-6 w-6 text-accent" strokeWidth={1.5} />}
          title="Développement personnel"
          description="Explorez vos talents et potentiels cachés pour créer une vie alignée avec vos aspirations profondes."
          delay={2}
        />
        
        <ServiceItem 
          icon={<Leaf className="h-6 w-6 text-accent" strokeWidth={1.5} />}
          title="Bien-être holistique"
          description="Retrouvez l'équilibre entre votre corps, votre esprit et vos émotions pour une santé globale optimale."
          delay={3}
        />
      </div>
      
      <div className="text-center mt-12">
        <Link href="/programmes">
          <Button variant="accent" size="lg" withHoverEffect={true}>
            Découvrir tous les programmes
          </Button>
        </Link>
      </div>
    </section>
  );
} 