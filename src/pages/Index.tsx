import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Gallery } from "@/components/Gallery";
import { InstagramFeed } from "@/components/InstagramFeed";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Categories />
      <Gallery />
      <InstagramFeed />
      <CTABanner />
      <Footer />
    </main>
  );
};

export default Index;
