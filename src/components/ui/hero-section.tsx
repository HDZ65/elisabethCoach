"use client";

import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Brain, Heart, Leaf } from 'lucide-react';

// Variantes d'animation améliorées
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={stagger}
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-[85vh] overflow-hidden bg-background"
    >
      {/* Image de fond avec parallaxe */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&h=1080"
          alt="Personne contemplant l'océan au coucher du soleil depuis une falaise"
          fill
          priority
          className="opacity-70 object-cover"
        />
        {/* Superposition de dégradé améliorée */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6F3]/90 via-[#FDF6F3]/70 to-transparent"></div>
      </motion.div>

      {/* Contenu centré */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Contenu gauche */}
        <div className="relative z-10 max-w-xl lg:max-w-2xl flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C2C2C] m-0"
              >
                Cultivez Votre
              </motion.h1>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#2C2C2C] m-0"
              >
                Jardin Intérieur
              </motion.h1>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#4A4A4A] max-w-lg leading-relaxed"
            >
              Un accompagnement holistique pour révéler votre lumière et trouver l&apos;harmonie au quotidien.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6">
            <motion.blockquote
              variants={fadeInUp}
              className="border-l-2 border-[#C4A69A] pl-4 sm:pl-6 italic text-[#4A4A4A] text-base sm:text-lg"
            >
              &ldquo;Le plus grand voyage commence par un simple pas à l&apos;intérieur.&rdquo;
            </motion.blockquote>

            <motion.div
              variants={fadeInUp}
              className="flex gap-6 text-[#C4A69A]"
            >
              <Brain size={32} strokeWidth={1.5} />
              <Heart size={32} strokeWidth={1.5} />
              <Leaf size={32} strokeWidth={1.5} />
            </motion.div>
          </div>

          <motion.div variants={fadeInUp}>
            <Button
              variant="accent"
              size="lg"
              className="bg-[#C4A69A] hover:bg-[#B39589] text-white px-8 py-4 text-lg rounded-md"
              withHoverEffect={true}
            >
              Découvrir mon approche
            </Button>
          </motion.div>
        </div>

        {/* Partie droite avec images */}
        <div className="hidden lg:block relative w-[400px] h-[500px]">
          {/* Image de fond */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 top-4 w-[250px] h-[350px]"
          >
            <div className="relative w-full h-full rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=800&h=1000"
                alt="Arrangement zen minimaliste"
                fill
                className="object-cover"
              />
            </div>
            {/* Bordure décorative */}
            <div className="absolute -inset-2 border-2 border-[#C4A69A]/40 rounded-tl-[3.25rem] rounded-br-[3.25rem]"></div>
          </motion.div>

          {/* Image avant */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-0 bottom-4 w-[250px] h-[350px]"
          >
            <div className="relative w-full h-full rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&h=1000"
                alt="Méditation et bien-être"
                fill
                className="object-cover"
              />
            </div>
            {/* Bordure décorative */}
            <div className="absolute -inset-2 border-2 border-[#C4A69A]/40 rounded-tr-[3.25rem] rounded-bl-[3.25rem]"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 