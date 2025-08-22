import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const artforms = [
  {
    id: 1,
    name: "Madhubani",
    region: "Bihar",
    description: "Traditional art form known for intricate patterns and vibrant colors, often depicting nature and mythology.",
    period: "Ancient",
    image: "bg-gradient-cultural",
  },
  {
    id: 2,
    name: "Warli",
    region: "Maharashtra",
    description: "Tribal art form using geometric patterns to depict daily life, nature, and social ceremonies.",
    period: "3000 BCE",
    image: "bg-gradient-warm",
  },
  {
    id: 3,
    name: "Gond",
    region: "Madhya Pradesh",
    description: "Intricate art form featuring dots and lines to create elaborate patterns inspired by nature.",
    period: "Ancient",
    image: "bg-gradient-primary",
  },
  {
    id: 4,
    name: "Kalamkari",
    region: "Andhra Pradesh",
    description: "Hand-painted or block-printed cotton textile art depicting mythological stories.",
    period: "Ancient",
    image: "bg-gradient-cultural",
  },
];

const FeaturedArtforms = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Explore Traditional{" "}
            <span className="text-transparent bg-gradient-cultural bg-clip-text">
              Artforms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the rich heritage of Indian folk art through these timeless traditions passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artforms.map((artform) => (
            <Card key={artform.id} className="group hover:shadow-cultural transition-all duration-300 transform hover:scale-105 bg-card border-border">
              <CardHeader className="pb-4">
                <div className={`w-full h-48 ${artform.image} rounded-lg mb-4 opacity-80`}></div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {artform.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {artform.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{artform.region}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{artform.period}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link to={`/artforms/${artform.id}`} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cultural" size="lg" asChild>
            <Link to="/artforms" className="group">
              View All Artforms
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtforms;