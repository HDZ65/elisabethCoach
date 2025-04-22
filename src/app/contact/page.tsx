"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Les métadonnées doivent être dans un fichier séparé car "use client" ne permet pas l'export de metadata
// Voir src/app/contact/metadata.ts

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simuler une soumission de formulaire
    setTimeout(() => {
      setFormStatus("success");
      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          topic: "",
          message: ""
        });
      }, 5000);
    }, 1500);
  };

  return (
    <main className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête de page */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Prenons <span className="font-medium">Contact</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Un accompagnement personnalisé commence par une rencontre. 
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informations de contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-cormorant text-2xl font-medium mb-6">
                Mes coordonnées
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                    <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      contact@elisabethcoach.fr
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                    <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">
                      +33 6 00 00 00 00
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                    <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Cabinet</h3>
                    <p className="text-muted-foreground">
                      25 rue de la Sérénité<br />
                      75008 Paris, France<br />
                      <span className="text-sm italic">
                        Sur rendez-vous uniquement
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-xl border border-muted/50 mt-8">
              <h3 className="font-cormorant text-xl font-medium mb-3">
                Horaires de consultation
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h - 14h</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-background rounded-xl p-6 md:p-8 border border-muted/50 shadow-sm"
          >
            <h2 className="font-cormorant text-2xl font-medium mb-6">
              Envoyez-moi un message
            </h2>
            
            {formStatus === "success" ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center bg-accent/10 p-4 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-muted text-foreground bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-muted text-foreground bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-muted text-foreground bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium mb-1">
                      Sujet
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-muted text-foreground bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="rdv">Prise de rendez-vous</option>
                      <option value="info">Demande d'information</option>
                      <option value="programme">Renseignements programme</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-muted text-foreground bg-background focus:outline-none focus:ring-1 focus:ring-accent"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
        
        {/* Carte Google Maps ou image décorative */}
        <div className="max-w-5xl mx-auto mt-16 rounded-xl overflow-hidden h-64 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342085!2d2.3002517155508636!3d48.87456857928896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc555555555%3A0x718baf57c7c2edf3!2s75008%20Paris!5e0!3m2!1sfr!2sfr!4v1634829667928!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte du cabinet"
          ></iframe>
        </div>
      </div>
    </main>
  );
} 