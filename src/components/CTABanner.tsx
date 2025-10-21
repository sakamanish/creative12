import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-glow border-2 border-primary/20">
          <MessageCircle className="h-16 w-16 mx-auto mb-6 text-primary animate-float" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for Something Unique?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life! DM me on Instagram to discuss custom embroidery or doodle art pieces tailored just for you.
          </p>
          
          <Button 
            size="xl" 
            variant="cta"
            className="text-lg"
            asChild
          >
            <a href="https://www.instagram.com/_creative_.12/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Start Your Custom Order
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Follow @_creative_.12 for daily inspiration and behind-the-scenes looks
          </p>
        </div>
      </div>
    </section>
  );
};
