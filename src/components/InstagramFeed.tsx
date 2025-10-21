import { Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import embroidery1 from "@/assets/embroidery-1.jpg";
import embroidery2 from "@/assets/embroidery-2.jpg";
import embroidery3 from "@/assets/embroidery-3.jpg";
import doodle1 from "@/assets/doodle-1.jpg";
import doodle2 from "@/assets/doodle-2.jpg";
import doodle3 from "@/assets/doodle-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const instagramPosts = [
  { 
    image: embroidery1, 
    likes: 234, 
    comments: 12,
    caption: "Floral embroidery dreams ✨🌸"
  },
  { 
    image: doodle1, 
    likes: 189, 
    comments: 8,
    caption: "Playful patterns & happy vibes 🎨"
  },
  { 
    image: embroidery2, 
    likes: 312, 
    comments: 15,
    caption: "Botanical beauty in every stitch 🌿"
  },
  { 
    image: doodle2, 
    likes: 276, 
    comments: 11,
    caption: "Cute characters coming to life! 💕"
  },
  { 
    image: embroidery3, 
    likes: 298, 
    comments: 19,
    caption: "Mandala magic ✨ Hours of love in every detail"
  },
  { 
    image: doodle3, 
    likes: 221, 
    comments: 9,
    caption: "Geometric joy & colorful fun 🌈"
  },
];

export const InstagramFeed = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Follow on Instagram
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Join my creative journey @_creative_.12
          </p>
          <Button
            variant="gradient"
            size="lg"
            className="gap-2"
            onClick={() => window.open("https://www.instagram.com/_creative_.12/", "_blank")}
          >
            <Instagram className="h-5 w-5" />
            Visit Instagram Profile
          </Button>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent>
            {instagramPosts.map((post, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <a
                  href="https://www.instagram.com/_creative_.12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-glow transition-all duration-300 bg-card"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center gap-4 text-white mb-2">
                      <div className="flex items-center gap-1">
                        <Heart className="h-5 w-5" />
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-semibold">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
