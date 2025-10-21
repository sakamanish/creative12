import { Card } from "@/components/ui/card";
import { Scissors, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Scissors,
    title: "Embroidery",
    description: "Delicate needlework bringing your ideas to life with colorful threads and intricate designs.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Sparkles,
    title: "Doodle Art",
    description: "Playful hand-drawn illustrations that add character and whimsy to any space.",
    gradient: "from-secondary to-primary",
  },
];

export const Categories = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Create
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two unique art forms, infinite possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group p-8 hover:shadow-glow transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
