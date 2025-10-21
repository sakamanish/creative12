import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Handcrafted with Love
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md">
            By <span className="font-semibold text-accent">@_creative_12</span>
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Where every stitch tells a story and every doodle sparks joy. 
            Unique embroidery & whimsical art created just for you.
          </p>
          
          <Button 
            size="xl" 
            variant="cta"
            className="text-lg"
            asChild
          >
            <a href="https://www.instagram.com/_creative_.12/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              DM for Custom Orders
            </a>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
