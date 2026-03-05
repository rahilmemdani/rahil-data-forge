import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
const AIOrchestrator = lazy(() => import("./components/AIOrchestrator"));
const Experience = lazy(() => import("./components/Experience"));
const Blog = lazy(() => import("./components/Blog"));
const Contact = lazy(() => import("./components/Contact"));

// Optional/Heavy Components
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

// Pages
import NotFound from "./pages/NotFound";
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Chatbot = lazy(() => import("./components/Chatbot"));

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
    <AIOrchestrator />
    <Experience />
    <Blog />
    <Contact />
  </Suspense>
);

// Wrapper to conditionally render layout elements based on route
const AppContent = () => {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/');

  return (
    <>
      {/* Hide Navbar when viewing a blog post */}
      {!isBlogPost && <Navbar />}
      <Layout>
        <ScrollToTop />
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<Suspense fallback={<SectionLoading />}><BlogPost /></Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
            <Suspense fallback={null}>
              {/* <Chatbot /> */}
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
