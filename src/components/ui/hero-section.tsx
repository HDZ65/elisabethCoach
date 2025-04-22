"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from './../../../public/hero.jpg';
import { Brain, Heart, Leaf  } from 'lucide-react'; // Icônes thématiques et flèche

// Variantes d'animation
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroSection() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={stagger}
      className="relative flex flex-col justify-center h-[80vh] overflow-hidden bg-background pt-20"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt="Personne contemplant l'océan au coucher du soleil depuis une falaise"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
          className="opacity-40"
        />
        {/* Superposition de dégradé */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Contenu Central */}
      <div className="container relative z-10 mx-auto flex flex-grow flex-col justify-center px-4">
        <div className="max-w-xl text-left">
          {/* Titre scindé */}
          <motion.h1
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-1 leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]"
          >
            Cultivez Votre
          </motion.h1>
          <motion.h1
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-serif)' }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-foreground mb-6 leading-tight [text-shadow:1px_1px_3px_rgba(0,0,0,0.1)]"
          >
            Jardin Intérieur
          </motion.h1>

          {/* Paragraphe */}
          <motion.p
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-sans)' }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Un accompagnement holistique pour révéler votre lumière et trouver l&apos;harmonie au quotidien.
          </motion.p>

          {/* Citation Inspirante */}
          <motion.blockquote
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-sans)' }}
            className="mb-10 border-l-2 border-accent/50 pl-4 italic text-muted-foreground"
          >
            &ldquo;Le plus grand voyage commence par un simple pas à l&apos;intérieur.&rdquo;
          </motion.blockquote>

          {/* Icônes Thématiques */}
          <motion.div
            variants={fadeInUp}
            className="flex space-x-6 mb-10 text-accent"
          >
            <Brain size={28} strokeWidth={1.5} />
            <Heart size={28} strokeWidth={1.5} />
            <Leaf size={28} strokeWidth={1.5} />
          </motion.div>

          {/* Bouton */}
          <motion.div variants={fadeInUp}>
            <Button
              variant="accent"
              size="xl"
              withHoverEffect={true}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Découvrir mon approche
            </Button>
          </motion.div>
        </div>
      </div>


    </motion.section>
  );
} 