"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./badge";
import { Button } from "./button";
import { HeartHandshake, Award, Sparkles } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="container py-24 bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image avec forme organique */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[28rem] w-full md:w-[90%] overflow-hidden rounded-tl-[5rem] rounded-br-[5rem]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800"
              alt="Portrait du coach"
              width={800}
              height={800}
              className="rounded-full object-cover"
            />
          </div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
          
          {/* Badge flottant */}
          <div className="absolute bottom-8 -right-8 bg-background shadow-xl rounded-xl p-4 max-w-[200px]">
            <p className="text-sm font-medium mb-1">Certifiée depuis</p>
            <p className="text-2xl font-cormorant font-medium text-accent">8+ ans</p>
          </div>
        </motion.div>
        
        {/* Contenu textuel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <Badge variant="outline" className="w-fit">À propos</Badge>
          
          <h2 className="text-3xl md:text-4xl font-cormorant font-light">
            Bienvenue, je suis <span className="font-medium text-primary">Elisabeth</span>
          </h2>
          
          <p className="text-muted-foreground">
            Passionnée par le développement personnel et le bien-être holistique depuis plus de 10 ans, 
            j&apos;ai consacré ma vie à accompagner les personnes vers leur épanouissement.
          </p>
          
          <p className="text-muted-foreground">
            Mon approche combine des techniques modernes et ancestrales pour vous offrir
            un accompagnement sur mesure qui prend en compte toutes les dimensions de votre être.
          </p>
          
          {/* Certifications / Approche */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-2 rounded-full mt-1">
                <HeartHandshake className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Accompagnement personnalisé</h4>
                <p className="text-sm text-muted-foreground">
                  Chaque parcours est unique, je m&apos;adapte à vos besoins spécifiques pour des résultats durables.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-2 rounded-full mt-1">
                <Award className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Certifications reconnues</h4>
                <p className="text-sm text-muted-foreground">
                  Praticienne en PNL, coach certifiée, thérapeute en médecines douces et mindfulness.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-accent/10 p-2 rounded-full mt-1">
                <Sparkles className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1">Approche holistique</h4>
                <p className="text-sm text-muted-foreground">
                  Corps, esprit et âme sont intimement liés. Je vous guide vers une harmonie globale.
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-primary hover:text-accent-foreground hover:bg-accent/10 border-primary/20">
                Prendre rendez-vous
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 