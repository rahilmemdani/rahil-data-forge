import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Effects from './components/site/Effects';
import FitScreens from './components/site/FitScreens';
import Nav from './components/site/Nav';
import Hero from './components/site/Hero';
import About from './components/site/About';
import Work from './components/site/Work';
import MoreWork from './components/site/MoreWork';
import Basecase from './components/site/Basecase';
import Security from './components/site/Security';
import Scale from './components/site/Scale';
import Experience from './components/site/Experience';
import Writing from './components/site/Writing';
import Contact from './components/site/Contact';
import NotFound from './pages/NotFound';

const BlogPost = lazy(() => import('./pages/BlogPost'));

/* Each section fills at least one screen; scrolling stays native, with light CSS reveals. */
const HomePage = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <About />
      <Work />
      <MoreWork />
      <Basecase />
      <Security />
      <Scale />
      <Experience />
      <Writing />
    </main>
    <Contact />
    <Effects />
    <FitScreens />
  </>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/blog/:slug"
        element={
          <Suspense fallback={<div className="min-h-screen bg-paper" />}>
            <BlogPost />
          </Suspense>
        }
      />
      {/* The old "coming soon" projects are live now, so send people to the work section */}
      <Route path="/coming-soon" element={<Navigate to="/#work" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
