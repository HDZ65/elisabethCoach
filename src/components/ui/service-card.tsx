"use client";

import { Clock, Heart } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  featured?: boolean;
}

export function ServiceCard({ 
  title, 
  description, 
  price, 
  duration,
  featured = false 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-muted/50 p-6 flex flex-col",
        featured ? "bg-accent/5 shadow-lg" : "bg-background shadow-md"
      )}
    >
      {featured && (
        <div className="absolute -right-8 top-5 rotate-45 bg-accent/80 px-10 py-1 text-xs font-medium text-accent-foreground">
          Populaire
        </div>
      )}
      
      <h3 className="font-cormorant text-xl sm:text-2xl font-medium mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock size={16} className="mr-2" />
          <span>{duration}</span>
        </div>
        
        <span className="text-muted-foreground text-sm">
          Séances individuelles
        </span>
      </div>
      
      <div className="flex items-end justify-between">
        <div className="flex items-baseline">
          <span className="text-2xl font-medium">{price}</span>
        </div>
        
        <Button variant="outline" size="sm" className="text-xs">
          En savoir plus
        </Button>
      </div>
    </motion.div>
  );
}
