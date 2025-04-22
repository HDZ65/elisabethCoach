import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Moon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Moon 
                className="h-4 w-4 text-accent opacity-80 transition-all duration-500 rotate-[30deg]" 
                strokeWidth={1.5}
              />
              <span className="text-xl font-cormorant font-light tracking-wide text-primary">
                Elisabeth
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground pr-4">
              Un accompagnement holistique personnalisé pour votre épanouissement 
              physique, mental et émotionnel.
            </p>
            
            {/* Contacts */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@elisabethcoach.fr</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+33 6 00 00 00 00</span>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-cormorant text-lg font-medium mb-4">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Accueil
              </Link>
              <Link href="/programmes" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Programmes
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Social & Newsletter */}
          <div>
            <h4 className="font-cormorant text-lg font-medium mb-4">Suivez-moi</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors">
                <Instagram className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </a>
              <a href="#" className="bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors">
                <Facebook className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </a>
              <a href="#" className="bg-accent/10 p-2 rounded-full hover:bg-accent/20 transition-colors">
                <Twitter className="h-5 w-5 text-accent" strokeWidth={1.5} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">
              Abonnez-vous à ma newsletter pour recevoir mes conseils et actualités
            </p>
            
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-grow px-3 py-2 text-sm border border-muted rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button 
                type="submit" 
                className="bg-accent text-accent-foreground px-4 py-2 text-sm rounded-r-md hover:bg-accent/90 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-muted/30 mt-10 pt-6 text-center text-xs text-muted-foreground">
          <p>© {currentYear} Elisabeth Coach Holistique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 