import { Heart, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              @_creative_12
            </h3>
            <p className="text-muted-foreground">
              Handcrafted embroidery & doodle art
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/_creative_12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by @_creative_12
          </p>
        </div>
      </div>
    </footer>
  );
};
