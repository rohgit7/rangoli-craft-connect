import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Artforms from "./pages/Artforms";
import Artists from "./pages/Artists";
import Workshops from "./pages/Workshops";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ArtistReg from "./pages/ArtistReg";
import ArtformDetails from "./pages/ArtformDetails";
import Signup from "./pages/Signup";
import WorkshopRegistration from "./pages/WorkshopRegistration";
import TransformMemories from "./pages/TransformMemories";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artforms" element={<Artforms />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/workshops" element={<WorkshopRegistration />} />
          <Route path="/art" element={<TransformMemories />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<ArtistReg />} />
          <Route path="/artforms/:id" element={<ArtformDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
