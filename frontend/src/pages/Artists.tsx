import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, ArrowRight, MessageCircle } from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Sita Devi",
    artform: "Madhubani",
    region: "Bihar",
    bio: "Master artist with 30+ years of experience in traditional Madhubani painting. Recognized by Government of India for her contribution to folk art.",
    rating: 4.9,
    reviews: 156,
    artworks: 89,
    avatar: "",
    verified: true,
    price: "₹2,500 - ₹15,000",
  },
  {
    id: 2,
    name: "Bhuri Bai",
    artform: "Gond",
    region: "Madhya Pradesh",
    bio: "Contemporary Gond artist known for her innovative approach while maintaining traditional techniques. Recipient of Padma Shri award.",
    rating: 4.8,
    reviews: 134,
    artworks: 76,
    avatar: "",
    verified: true,
    price: "₹3,000 - ₹20,000",
  },
  {
    id: 3,
    name: "Ramesh Hengadi",
    artform: "Warli",
    region: "Maharashtra",
    bio: "Third-generation Warli artist preserving the ancient tribal art form. Conducts workshops to teach traditional techniques.",
    rating: 4.7,
    reviews: 98,
    artworks: 64,
    avatar: "",
    verified: true,
    price: "₹1,800 - ₹12,000",
  },
  {
    id: 4,
    name: "Niranjan Swamy",
    artform: "Kalamkari",
    region: "Andhra Pradesh",
    bio: "Expert in Srikalahasti style Kalamkari with specialization in mythological themes. Works with natural dyes and hand-painted techniques.",
    rating: 4.9,
    reviews: 203,
    artworks: 112,
    avatar: "",
    verified: true,
    price: "₹2,200 - ₹18,000",
  },
  {
    id: 5,
    name: "Laxmi Ben",
    artform: "Pithora",
    region: "Gujarat",
    bio: "Tribal artist specializing in Pithora wall paintings. Preserves ritual art traditions of Rathwa community.",
    rating: 4.6,
    reviews: 67,
    artworks: 43,
    avatar: "",
    verified: false,
    price: "₹1,500 - ₹8,000",
  },
  {
    id: 6,
    name: "Kalyan Joshi",
    artform: "Phad",
    region: "Rajasthan",
    bio: "Traditional Phad scroll painter from Bhilwara. Specializes in epic narratives and folk deity stories with musical performances.",
    rating: 4.8,
    reviews: 89,
    artworks: 52,
    avatar: "",
    verified: true,
    price: "₹4,000 - ₹25,000",
  },
];

const artforms = ["All", "Madhubani", "Gond", "Warli", "Kalamkari", "Pithora", "Phad"];
const regions = ["All", "Bihar", "Madhya Pradesh", "Maharashtra", "Andhra Pradesh", "Gujarat", "Rajasthan"];

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArtform, setSelectedArtform] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArtform = selectedArtform === "All" || artist.artform === selectedArtform;
    const matchesRegion = selectedRegion === "All" || artist.region === selectedRegion;
    return matchesSearch && matchesArtform && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Meet Our{" "}
            <span className="text-transparent bg-gradient-cultural bg-clip-text">
              Artists
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with master craftsmen and women who have dedicated their lives to preserving and evolving Indian folk art traditions.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Artform</label>
              <div className="flex flex-wrap gap-2">
                {artforms.map((artform) => (
                  <Button
                    key={artform}
                    variant={selectedArtform === artform ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedArtform(artform)}
                  >
                    {artform}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Region</label>
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
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredArtists.length} of {artists.length} artists
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className="group hover:shadow-cultural transition-all duration-300 transform hover:scale-105 bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={artist.avatar} alt={artist.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-bold">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {artist.name}
                      </CardTitle>
                      {artist.verified && (
                        <Badge variant="default" className="text-xs">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{artist.artform}</Badge>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{artist.region}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground mt-4">
                  {artist.bio}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{artist.rating}</span>
                    <span className="text-muted-foreground">({artist.reviews} reviews)</span>
                  </div>
                  <div className="text-muted-foreground">
                    {artist.artworks} artworks
                  </div>
                </div>
                
                <div className="text-sm">
                  <span className="text-muted-foreground">Price range: </span>
                  <span className="font-medium text-foreground">{artist.price}</span>
                </div>
                
                <div className="space-y-2">
                  <Button variant="default" className="w-full" asChild>
                    <Link to={`/artists/${artist.id}`} className="flex items-center justify-center">
                      View Profile
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/contact/${artist.id}`} className="flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact Artist
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No artists found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedArtform("All");
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

export default Artists;