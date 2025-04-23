"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Accueil", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "Contact", href: "/contact" },
];

const mantra = "Écoute ton intuition, elle connaît le chemin";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="container z-50 w-full bg-background backdrop-blur-md">
      <div className="flex h-24 items-center justify-between">
        {/* Logo & Branding */}
        <Link
          href="/"
          className="group relative flex items-center space-x-3 transition-opacity duration-300 hover:opacity-90"
        >
          <div className="relative">
            <Moon 
              className="h-5 w-5 text-accent opacity-80 transition-all duration-500 rotate-[30deg]" 
              strokeWidth={1.5}
            />
            <div className="absolute -inset-1 rounded-full bg-accent/10 animate-pulse [animation-duration:6s]"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-cormorant font-light tracking-wide text-primary/90">
              Elisabeth
            </span>
            <span className="text-xs font-work-sans uppercase tracking-widest text-muted-foreground/80 mt-0.5">
              Coach Holistique
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative font-work-sans text-sm font-normal tracking-wide text-foreground transition-all duration-300",
                "after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:-translate-x-1/2",
                "hover:text-primary ",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2",
                pathname === item.href && "text-primary after:w-1/2"
              )}
            >
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Call-to-Action Button */}
        <div className="hidden md:block">
          <Button
            variant="default"
            className="font-work-sans text-xs tracking-wide"
          >
            Prendre rendez-vous
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="md:hidden p-2 hover:bg-muted/10 focus-visible:ring-1 focus-visible:ring-secondary"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5 text-primary/90 opacity-80" strokeWidth={1.5} />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[280px] sm:w-[350px] bg-background/90 backdrop-blur-lg border-l border-muted/30"
          >
            <div className="flex flex-col h-full py-8">
              <div className="flex items-center mb-10 pl-4">
                <Moon 
                  className="h-4 w-4 text-accent opacity-80 transition-all duration-500 rotate-[30deg] mr-3" 
                  strokeWidth={1.5}
                />
                <span className="text-xl font-cormorant font-light tracking-wide text-primary/90">
                  Louise Durand
                </span>
              </div>
              
              <nav className="flex flex-col space-y-6 pl-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative font-work-sans text-sm tracking-wide text-primary/90 transition-all duration-300",
                      "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-secondary after:transition-all after:duration-300",
                      "hover:text-secondary/90 pl-2",
                      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:ring-offset-1",
                      pathname === item.href && "text-secondary/90 after:w-10"
                    )}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto pl-4">
                <p className="font-cormorant text-md text-secondary/80 italic mb-8">{mantra}</p>
                
                <Button
                  variant="default"
                  className="w-full font-work-sans text-xs tracking-wide"
                >
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}