import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { BlogSection } from "@/components/ui/blog-section";
import { InstagramSection } from "@/components/ui/instagram-section";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <BlogSection />
      <InstagramSection />
    </main>
  );
}
