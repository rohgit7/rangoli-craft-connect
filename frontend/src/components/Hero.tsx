import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-folk-art.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-earth overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional Indian Folk Art"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
              <Sparkles className="w-4 h-4 mr-2" />
              Celebrating Indian Heritage
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover the{" "}
                <span className="text-transparent bg-gradient-cultural bg-clip-text">
                  Magic
                </span>{" "}
                of Indian Folk Art
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Connect with master artisans, explore centuries-old traditions, and bring home authentic Indian folk art. From Madhubani to Warli, discover the stories behind every stroke.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/artforms" className="group">
                  Explore Artforms
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="warm" size="lg" asChild>
                <Link to="/artists">Meet Artists</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Art Forms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Artists</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
            </div>
          </div>

          {/* Featured Art Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-card rounded-lg shadow-soft hover:shadow-cultural transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-full h-full bg-gradient-warm rounded-lg opacity-20"></div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="text-lg font-semibold text-foreground">Featured Artworks</div>
                <div className="text-sm text-muted-foreground">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;