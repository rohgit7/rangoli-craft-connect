import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const artforms = [
  {
    id: 1,
    name: "Madhubani",
    region: "Bihar",
    description: "Traditional art form known for intricate patterns and vibrant colors, often depicting nature and mythology. Created primarily by women, this art uses natural dyes and pigments.",
    period: "Ancient",
    artists: 45,
    image: "bg-gradient-cultural",
    tags: ["Painting", "Traditional", "Mythological"],
  },
  {
    id: 2,
    name: "Warli",
    region: "Maharashtra",
    description: "Tribal art form using geometric patterns to depict daily life, nature, and social ceremonies. Simple yet powerful visual language using white pigment on mud walls.",
    period: "3000 BCE",
    artists: 32,
    image: "bg-gradient-warm",
    tags: ["Tribal", "Geometric", "Cultural"],
  },
  {
    id: 3,
    name: "Gond",
    region: "Madhya Pradesh",
    description: "Intricate art form featuring dots and lines to create elaborate patterns inspired by nature. Stories and beliefs of Gond tribe expressed through vibrant colors.",
    period: "Ancient",
    artists: 28,
    image: "bg-gradient-primary",
    tags: ["Tribal", "Nature", "Dots"],
  },
  {
    id: 4,
    name: "Kalamkari",
    region: "Andhra Pradesh",
    description: "Hand-painted or block-printed cotton textile art depicting mythological stories. Two main styles: Srikalahasti (hand-painted) and Machilipatnam (block-printed).",
    period: "Ancient",
    artists: 38,
    image: "bg-gradient-cultural",
    tags: ["Textile", "Mythological", "Hand-painted"],
  },
  {
    id: 5,
    name: "Pithora",
    region: "Gujarat",
    description: "Ritual wall painting art form of Rathwa and Bhilala tribes. Painted to fulfill vows and celebrate important occasions with bright colors and bold patterns.",
    period: "Ancient",
    artists: 15,
    image: "bg-gradient-warm",
    tags: ["Ritual", "Wall Painting", "Tribal"],
  },
  {
    id: 6,
    name: "Phad",
    region: "Rajasthan",
    description: "Scroll painting depicting stories of folk deities and epic tales. Painted on cloth using natural colors and performed with musical narration.",
    period: "Ancient",
    artists: 12,
    image: "bg-gradient-primary",
    tags: ["Scroll", "Epic", "Performance"],
  },
];

const regions = ["All", "Bihar", "Maharashtra", "Madhya Pradesh", "Andhra Pradesh", "Gujarat", "Rajasthan"];

const Artforms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredArtforms = artforms.filter((artform) => {
    const matchesSearch = artform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artform.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All" || artform.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Indian Folk{" "}
            <span className="text-transparent bg-gradient-cultural bg-clip-text">
              Artforms
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the diverse traditions of Indian folk art, each with its unique style, cultural significance, and artistic heritage.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search artforms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedRegion(region)}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredArtforms.length} of {artforms.length} artforms
          </p>
        </div>

        {/* Artforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtforms.map((artform) => (
            <Card key={artform.id} className="group hover:shadow-cultural transition-all duration-300 transform hover:scale-105 bg-card border-border">
              <CardHeader className="pb-4">
                <div className={`w-full h-48 ${artform.image} rounded-lg mb-4 opacity-80`}></div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {artform.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {artform.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {artform.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{artform.region}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{artform.period}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground col-span-2">
                    <Users className="w-4 h-4" />
                    <span>{artform.artists} artists practicing</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="default" className="w-full" asChild>
                    <Link to={`/artforms/${artform.id}`} className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/artists?artform=${artform.name}`}>
                      View Artists
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredArtforms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No artforms found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedRegion("All");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artforms;