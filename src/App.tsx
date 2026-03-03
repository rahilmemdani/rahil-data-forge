import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../src/ScrollToTop";

// Theme
import { ThemeProvider } from "./components/ThemeProvider";

// Sections
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";

// Persistent Components
import ParticleBackground from './components/ParticleBackground';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

// Single-page home with all sections
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </>
);

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Layout>
              <ScrollToTop />
              <ParticleBackground />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
