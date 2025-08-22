import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArtforms from "@/components/FeaturedArtforms";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedArtforms />
    </div>
  );
};

export default Index;
