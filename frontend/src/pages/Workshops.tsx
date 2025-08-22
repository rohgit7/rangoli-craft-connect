import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Users, Star, Filter } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Introduction to Madhubani Painting",
    instructor: "Sita Devi",
    artform: "Madhubani",
    date: "2024-01-15",
    time: "10:00 AM - 4:00 PM",
    duration: "6 hours",
    location: "Online",
    price: 2500,
    capacity: 20,
    enrolled: 15,
    rating: 4.8,
    level: "Beginner",
    description: "Learn the traditional techniques of Madhubani painting including natural pigment preparation, basic motifs, and storytelling through art.",
    materials: ["Natural colors", "Handmade paper", "Brushes", "Reference guides"],
    avatar: "",
  },
  {
    id: 2,
    title: "Warli Art Workshop",
    instructor: "Ramesh Hengadi",
    artform: "Warli",
    date: "2024-01-20",
    time: "2:00 PM - 6:00 PM",
    duration: "4 hours",
    location: "Mumbai, Maharashtra",
    price: 1800,
    capacity: 15,
    enrolled: 8,
    rating: 4.9,
    level: "Beginner",
    description: "Discover the geometric beauty of Warli art and create your own tribal-inspired masterpiece using traditional white pigment techniques.",
    materials: ["White pigment", "Canvas", "Brushes", "Pattern templates"],
    avatar: "",
  },
  {
    id: 3,
    title: "Advanced Gond Art Techniques",
    instructor: "Bhuri Bai",
    artform: "Gond",
    date: "2024-01-25",
    time: "9:00 AM - 5:00 PM",
    duration: "8 hours",
    location: "Bhopal, Madhya Pradesh",
    price: 3500,
    capacity: 12,
    enrolled: 10,
    rating: 4.9,
    level: "Advanced",
    description: "Master the intricate dot-and-line patterns of Gond art with contemporary interpretations while maintaining traditional essence.",
    materials: ["Acrylic colors", "Canvas", "Fine brushes", "Design templates"],
    avatar: "",
  },
  {
    id: 4,
    title: "Kalamkari Hand Painting Workshop",
    instructor: "Niranjan Swamy",
    artform: "Kalamkari",
    date: "2024-02-01",
    time: "10:00 AM - 3:00 PM",
    duration: "5 hours",
    location: "Online",
    price: 2200,
    capacity: 25,
    enrolled: 18,
    rating: 4.7,
    level: "Intermediate",
    description: "Learn the ancient art of Kalamkari hand painting with natural dyes and create mythological narratives on fabric.",
    materials: ["Cotton fabric", "Natural dyes", "Pens", "Mordants"],
    avatar: "",
  },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const artforms = ["All", "Madhubani", "Warli", "Gond", "Kalamkari"];
const locations = ["All", "Online", "Mumbai", "Bhopal", "Delhi"];

const Workshops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedArtform, setSelectedArtform] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "All" || workshop.level === selectedLevel;
    const matchesArtform = selectedArtform === "All" || workshop.artform === selectedArtform;
    const matchesLocation = selectedLocation === "All" || workshop.location.includes(selectedLocation);
    return matchesSearch && matchesLevel && matchesArtform && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            Art{" "}
            <span className="text-transparent bg-gradient-cultural bg-clip-text">
              Workshops
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from master artists in hands-on workshops. Whether you're a beginner or advanced artist, find the perfect workshop to enhance your skills.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search workshops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Level</label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLevel(level)}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
            
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
              <label className="text-sm font-medium text-foreground">Location</label>
              <div className="flex flex-wrap gap-2">
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location)}
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredWorkshops.length} of {workshops.length} workshops
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredWorkshops.map((workshop) => (
            <Card key={workshop.id} className="group hover:shadow-cultural transition-all duration-300 bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{workshop.artform}</Badge>
                      <Badge variant={workshop.level === "Beginner" ? "default" : 
                                    workshop.level === "Intermediate" ? "secondary" : "destructive"}>
                        {workshop.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {workshop.title}
                    </CardTitle>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">₹{workshop.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">{workshop.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={workshop.avatar} alt={workshop.instructor} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                      {workshop.instructor.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{workshop.instructor}</div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{workshop.rating}</span>
                    </div>
                  </div>
                </div>
                
                <CardDescription className="text-muted-foreground mt-4">
                  {workshop.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{new Date(workshop.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{workshop.enrolled}/{workshop.capacity} enrolled</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Materials Included:</div>
                  <div className="flex flex-wrap gap-1">
                    {workshop.materials.map((material, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(workshop.enrolled / workshop.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    {workshop.capacity - workshop.enrolled} spots remaining
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  className="w-full"
                  disabled={workshop.enrolled >= workshop.capacity}
                >
                  {workshop.enrolled >= workshop.capacity ? "Workshop Full" : "Book Workshop"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No workshops found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedLevel("All");
                setSelectedArtform("All");
                setSelectedLocation("All");
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

export default Workshops;