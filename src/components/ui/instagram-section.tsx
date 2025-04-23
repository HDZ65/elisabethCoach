"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./badge";
import { Instagram } from "lucide-react";
import { Button } from "./button";

// Données pour les posts Instagram
const instagramPosts = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800",
    caption: "Méditation matinale, le meilleur moyen de commencer la journée",
    likes: 152,
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800",
    caption: "La nature est notre plus grand enseignant",
    likes: 237,
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800",
    caption: "Atelier de pleine conscience en plein air",
    likes: 183,
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800",
    caption: "Se reconnecter à soi, un pas à la fois",
    likes: 201,
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800",
    caption: "Respirez, relâchez, ressentez",
    likes: 169,
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800",
    caption: "Notre bien-être commence par de petits rituels quotidiens",
    likes: 215,
  },
];

// Données pour les citations
const quotes = [
  {
    id: 1,
    text: "La paix ne se trouve pas en cherchant à éviter les difficultés, mais en les accueillant avec conscience.",
    author: "Elisabeth"
  },
  {
    id: 2,
    text: "Nous ne sommes pas ce qui nous arrive, mais ce que nous choisissons de devenir.",
    author: "Elisabeth"
  },
  {
    id: 3,
    text: "Chaque respiration est une invitation à revenir au moment présent.",
    author: "Elisabeth"
  }
];

// Composant pour un post Instagram
function InstagramPost({ post, index }: { post: typeof instagramPosts[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="aspect-square relative">
        <Image
          src={post.imageUrl}
          alt={post.caption}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 50vw, 16vw"
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <p className="text-white text-sm line-clamp-2 mb-2">{post.caption}</p>
          <div className="flex items-center text-white/90 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
            {post.likes}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Composant pour une citation
function Quote({ quote, index }: { quote: typeof quotes[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      viewport={{ once: true }}
      className="text-center px-8 py-10 md:py-12 bg-secondary/5 rounded-xl"
    >
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-6 text-accent/30">
        <path d="M16.304 23.0959C14.1211 23.0959 12.3598 22.1439 11.0201 20.2399C9.68035 18.3358 9.01048 15.5439 9.01048 11.8639C9.01048 8.18392 9.91249 5.18392 11.7165 2.86392C13.5205 0.543922 15.7768 -0.468745 18.4854 -0.00808105C19.8251 0.159586 20.8875 0.735919 21.6727 1.72059C22.4579 2.70525 22.8505 3.74125 22.8505 4.81859C22.8505 6.50659 22.3131 7.87859 21.2384 8.93459C20.1637 9.99059 18.8554 10.5186 17.3137 10.5186C16.3647 10.5186 15.6111 10.2959 15.0528 9.85059C14.4944 9.40525 14.2151 8.81325 14.2151 8.07459C14.2151 7.60792 14.2894 7.23459 14.4381 6.95459C13.1341 7.54659 12.0594 8.68659 11.2141 10.3746C10.3688 12.0626 9.94613 14.0293 9.94613 16.2746V16.7626C10.0264 18.4506 10.4528 19.7853 11.2254 20.7666C11.9981 21.7479 13.0048 22.2386 14.2454 22.2386C15.5494 22.2386 16.6808 21.6693 17.6394 20.5306C18.5981 19.3919 19.0774 17.9759 19.0774 16.2826C19.0774 15.0346 18.9288 14.0959 18.6318 13.4666C18.3348 12.8373 17.8648 12.3466 17.2218 11.9946L17.7401 11.2306C19.3164 11.7826 20.5171 12.6493 21.3424 13.8306C22.1678 15.0119 22.5804 16.4813 22.5804 18.2386C22.5804 19.9959 22.0171 21.5173 20.8904 22.8026C19.7638 24.0879 18.2334 24.7306 16.304 24.7306V23.0959ZM1 23.0959C-1.18387 23.0959 -2.94516 22.1439 -4.28387 20.2399C-5.62258 18.3358 -6.29193 15.5439 -6.29193 11.8639C-6.29193 8.18392 -5.39032 5.18392 -3.58709 2.86392C-1.78387 0.543922 0.472504 -0.468745 3.18113 -0.00808105C4.52084 0.159586 5.58326 0.735919 6.36842 1.72059C7.15358 2.70525 7.54616 3.74125 7.54616 4.81859C7.54616 6.50659 7.00874 7.87859 5.93391 8.93459C4.85907 9.99059 3.55081 10.5186 2.00914 10.5186C1.06009 10.5186 0.306461 10.2959 -0.252184 9.85059C-0.81083 9.40525 -1.09016 8.81325 -1.09016 8.07459C-1.09016 7.60792 -1.01584 7.23459 -0.867196 6.95459C-2.17126 7.54659 -3.246 8.68659 -4.09138 10.3746C-4.93675 12.0626 -5.35944 14.0293 -5.35944 16.2746V16.7626C-5.27974 18.4506 -4.85338 19.7853 -4.08034 20.7666C-3.3073 21.7479 -2.3006 22.2386 -1.06009 22.2386C0.24398 22.2386 1.37534 21.6693 2.334 20.5306C3.29266 19.3919 3.77199 17.9759 3.77199 16.2826C3.77199 15.0346 3.62341 14.0959 3.32626 13.4666C3.0291 12.8373 2.55906 12.3466 1.91615 11.9946L2.43465 11.2306C4.01099 11.7826 5.2117 12.6493 6.03681 13.8306C6.86192 15.0119 7.27448 16.4813 7.27448 18.2386C7.27448 19.9959 6.71082 21.5173 5.5835 22.8026C4.45619 24.0879 2.92675 24.7306 1 24.7306V23.0959Z" fill="currentColor"/>
      </svg>
      
      <p className="text-xl md:text-2xl font-cormorant font-light italic mb-6">
        {quote.text}
      </p>
      
      <p className="text-accent font-medium text-sm">— {quote.author}</p>
    </motion.div>
  );
}

export function InstagramSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Inspirations</Badge>
          <h2 className="text-3xl md:text-4xl font-cormorant font-light mb-6">
            Suivez mon <span className="font-medium">quotidien</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Retrouvez-moi sur Instagram pour plus d&apos;inspirations, de conseils et de partages authentiques.
          </p>
        </div>
        
        {/* Grid Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-16">
          {instagramPosts.map((post, index) => (
            <InstagramPost key={post.id} post={post} index={index} />
          ))}
        </div>
        
        {/* Lien Instagram */}
        <div className="text-center mb-20">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors gap-2"
          >
            <Instagram className="h-4 w-4" />
            @elisabethcoach
          </a>
        </div>
        
        {/* Citation */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <Quote key={quote.id} quote={quote} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 