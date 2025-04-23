"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Elisabeth m'a accompagnée pendant une période difficile de ma vie. Sa bienveillance et ses outils m'ont permis de retrouver un équilibre et une harmonie que je pensais avoir perdus.",
    author: "Marie T.",
    role: "Cadre en entreprise"
  },
  {
    id: 2,
    quote: "Grâce à l'approche holistique d'Elisabeth, j'ai pu travailler non seulement sur mon corps mais aussi sur mes émotions et mes pensées. Un accompagnement complet qui a changé ma vie.",
    author: "Thomas L.",
    role: "Entrepreneur"
  },
  {
    id: 3,
    quote: "Les séances avec Elisabeth sont des moments précieux où l'on se reconnecte à soi-même. Son écoute et sa présence font toute la différence dans le processus de transformation.",
    author: "Sophie M.",
    role: "Enseignante"
  },
];

export function TestimonialSection() {
  const [current, setCurrent] = useState(0);
  
  const prev = () => setCurrent((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  
  const testimonial = testimonials[current];
  
  return (
    <section className="container py-24 bg-background">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center px-6"
        >
          <div className="bg-accent/10 p-3 rounded-full mb-8">
            <Quote className="h-6 w-6 text-accent" strokeWidth={1.5} />
          </div>
          
          <blockquote className="text-xl md:text-2xl font-cormorant font-light mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="mt-4">
            <p className="font-medium">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </motion.div>
        
        {/* Contrôles */}
        <div className="flex justify-center space-x-3 mt-10">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-muted hover:bg-accent/10 transition-colors"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {/* Indicateurs */}
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  current === index ? "bg-accent w-6" : "bg-muted"
                )}
                aria-label={`Voir témoignage ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={next}
            className="p-2 rounded-full border border-muted hover:bg-accent/10 transition-colors"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
} 