"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

// Articles de blog (exemples)
const blogPosts = [
  {
    id: 1,
    title: "Comment développer sa conscience de soi au quotidien",
    excerpt: "Découvrez 5 pratiques simples pour renforcer votre connexion à vous-même et vivre en pleine conscience.",
    category: "Mindfulness",
    imageUrl: "/blog-1.jpg",
    date: "15 juin 2023",
    slug: "developper-conscience-de-soi"
  },
  {
    id: 2,
    title: "Les rituels du matin pour une journée harmonieuse",
    excerpt: "Un matin serein influence positivement toute votre journée. Voici les rituels que je recommande à mes clients.",
    category: "Bien-être",
    imageUrl: "/blog-2.jpg",
    date: "3 mai 2023",
    slug: "rituels-matin-harmonieux"
  },
  {
    id: 3,
    title: "Comment surmonter les blocages émotionnels",
    excerpt: "Les émotions refoulées peuvent créer des blocages profonds. Apprenez à les identifier et les libérer.",
    category: "Émotions",
    imageUrl: "/blog-3.jpg",
    date: "28 avril 2023",
    slug: "surmonter-blocages-emotionnels"
  },
];

// Carte d'article individuelle
function BlogCard({ post, index }: { post: typeof blogPosts[0], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="overflow-hidden rounded-xl relative mb-4">
        <div className="aspect-w-16 aspect-h-9 relative h-52">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
            {post.category}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">{post.date}</p>
        <h3 className="font-cormorant font-medium text-xl transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {post.excerpt}
        </p>
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm text-primary hover:text-accent transition-colors">
          Lire l&apos;article
          <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

export function BlogSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Le Blog</Badge>
          <h2 className="text-3xl md:text-4xl font-cormorant font-light mb-6">
            Inspirations & <span className="font-medium">Ressources</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes articles pour vous accompagner dans votre cheminement personnel
            et vous inspirer au quotidien.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button variant="ghost" size="lg" className="text-primary hover:text-accent transition-colors">
              Voir tous les articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 