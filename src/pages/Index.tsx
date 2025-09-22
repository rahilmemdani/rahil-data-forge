// import React, { useEffect, useState } from 'react';
// import Navigation from '../components/Navigation';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import Skills from '../components/Skills';
// import Projects from '../components/Projects';
// import Experience from '../components/Experience';
// import Contact from '../components/Contact';
// import ParticleBackground from '../components/ParticleBackground';

// const Index = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);

//   return (
//     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
//       <ParticleBackground />
//       <Navigation />
//       <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Contact />
//       </main>
//     </div>
//   );
// };

// export default Index;

// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
