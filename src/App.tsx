import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../src/ScrollToTop";
// Pages
import HeroPage from "./components/Hero";
import AboutPage from "./components/About";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./components/Projects";
import ExperiencePage from "./components/Experience";
import ContactPage from "./components/Contact";
import NotFound from "./pages/NotFound";
// Persistent Components
import ParticleBackground from './components/ParticleBackground';
import Chatbot from "@/components/Chatbot";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Navbar />
          {/* Scroll to top on route change */}
          <ScrollToTop />
          <ParticleBackground />
          <Chatbot />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
};

export default App;
