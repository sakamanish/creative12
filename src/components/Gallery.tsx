import embroidery1 from "@/assets/embroidery-1.jpg";
import embroidery2 from "@/assets/embroidery-2.jpg";
import embroidery3 from "@/assets/embroidery-3.jpg";
import doodle1 from "@/assets/doodle-1.jpg";
import doodle2 from "@/assets/doodle-2.jpg";
import doodle3 from "@/assets/doodle-3.jpg";

const artworks = [
  { image: embroidery1, title: "Floral Dreams", category: "Embroidery" },
  { image: doodle1, title: "Playful Patterns", category: "Doodle Art" },
  { image: embroidery2, title: "Botanical Wreath", category: "Embroidery" },
  { image: doodle2, title: "Cute Characters", category: "Doodle Art" },
  { image: embroidery3, title: "Mandala Magic", category: "Embroidery" },
  { image: doodle3, title: "Geometric Joy", category: "Doodle Art" },
];

export const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Art Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my creative world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-creative hover:shadow-glow transition-all duration-500 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-white w-full">
                  <p className="text-sm font-semibold mb-1 text-accent">{artwork.category}</p>
                  <h3 className="text-xl font-bold">{artwork.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
