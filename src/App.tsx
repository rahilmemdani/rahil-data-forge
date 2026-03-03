import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../src/ScrollToTop";

// Theme
import { ThemeProvider } from "./components/ThemeProvider";

// Static Sections (Above the fold)
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

// Lazy Loaded Sections (Below the fold)
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

// Optional/Heavy Components
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

// Pages
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Loading Fallback
const SectionLoading = () => <div className="min-h-[200px] w-full" />;

// Single-page home with all sections
const HomePage = () => (
  <Suspense fallback={<SectionLoading />}>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </Suspense>
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
              <Suspense fallback={null}>
                <ParticleBackground />
              </Suspense>
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
