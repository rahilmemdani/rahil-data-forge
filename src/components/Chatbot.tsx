import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

// --- Enhanced Resume Data ---
const resumeData = `
Name: Rahil Memdani
Contact: +91-9167156829 | rmemdanib@gmail.com | LinkedIn: linkedin.com/in/rahil-memdani | Portfolio: rahilmemdani-portfolio.vercel.app

PROFESSIONAL SUMMARY:
Full-Stack Software Engineer with 4 years in agritech, building scalable platforms with React, Node.js, and .NET Core. Worked with Snowflake, using SQL Macros, Power BI, and Excel reporting to deliver real-time, data-driven insights for Grow Indigo and Mahyco. Applying advanced analytics and Data Science to drive intelligent, measurable business outcomes.

PERSONAL BACKGROUND & JOURNEY:
- Originally from Mumbai, studied Electronics & Telecommunication Engineering at University of Mumbai
- Career pivot: Started in traditional engineering, discovered passion for software development during internship
- Self-taught web development skills while completing engineering degree
- Transitioned into AgriTech at Grow Indigo, found passion for data-driven agricultural solutions
- Recently promoted to SDE-II in July 2025 for exceptional performance and leadership
- Currently exploring advanced Data Science and ML to drive innovation
- Interests: Building scalable systems, mentoring junior developers, data analytics, solving real-world problems

EXPERIENCE (4 YEARS):
SOFTWARE DEVELOPMENT ENGINEER II | GROW INDIGO (Aug '21 - Present)
Promoted to SDE-II in July 2025 for driving platform scalability and team mentorship.

Key Achievements:
- Built commission analytics system using .NET Core and PostgreSQL, processing 5,000+ monthly transactions with 10% revenue accuracy improvement and 15% faster reporting.
- Created React-based seller onboarding dashboard serving 600+ monthly registrations, reducing onboarding time by 30% for 2M+ user platforms across 15+ states.
- Integrated Rupifi Buy Now Pay Later and HDFC payment APIs, managing 250+ weekly verifications and accelerating reconciliation by 35%.
- Automated ledger workflows using Node.js and PostgreSQL, generating 200+ monthly reports while cutting manual errors by 40%.
- Developed predictive forecasting models improving inventory accuracy by 25% and refund processing by 20% through machine learning.
- Implemented Snowflake anomaly detection providing bi-weekly sales insights, helping teams identify patterns and make data-driven decisions.
- Deployed barcode inventory system enhancing stock accuracy by 30% across 7M+ acres of agricultural operations.
- Built Electron Human Resources payroll system with MongoDB, reducing processing time from 30 days to 2 days.
- Led SaaS platform transformation to multi-tenant architecture, enabling global scalability for enterprise solutions. (Product link: growindigo.co.in/agri-cloud)
- Mentored team through 8 technical interviews and onboarded 3 engineers, contributing to technical leadership and growth.
- Built Snowflake SQL Macros for reusable, scalable query logic at Grow Indigo, and integrated Snowflake with Excel for Mahyco, enabling automated real-time reporting and adoption across business teams.

WEB DEVELOPMENT INTERN | AGA KHAN EDUCATION BOARD (Feb '21 - Mar '21)
- Developed full-stack school portal using Node.js, MySQL, and React with location filtering and encrypted URL routing.
- Delivered a responsive, end-to-end solution with integrated curriculum data across multiple education boards.

DETAILED PROJECTS PORTFOLIO:

1. SNOWFLAKE MACROS FOR GROW INDIGO (Data & Analytics)
   - Developed reusable Snowflake SQL macros to streamline complex query patterns across agricultural datasets
   - Enabled modular, efficient, and scalable query logic for enterprise reporting and analytics workloads
   - Technologies: Snowflake, SQL Macros, Data Warehousing, ETL
   - Impact: Reduced query complexity, improved performance & maintainability
   - Tagline: "Reusable data logic for scalable insights"

2. EXCEL REPORTING WITH SNOWFLAKE FOR MAHYCO (Data Reporting)
   - Implemented seamless integration of Snowflake with Excel for Mahyco's business teams
   - Delivered automated reporting dashboards enabling real-time access to sales, supply chain, and R&D data directly in Excel
   - Technologies: Snowflake, Excel, ODBC/JDBC, Power Query, Data Visualization
   - Impact: Real-time data access, automated refresh, high adoption across business teams
   - Tagline: "Excel-native reporting powered by Snowflake"

3. GROW INDIGO - AGRITECH PLATFORM (Enterprise)
   - Enterprise-scale agricultural technology platform serving 2M+ farmers across 15+ states with 7M+ acres coverage
   - Built scalable systems for sustainable agriculture, biological products, and carbon solutions
   - Technologies: React, Node.js, .NET Core, PostgreSQL, AWS
   - Impact: 2M+ farmers, 15+ states, 7M+ acres coverage
   - URL: https://www.growindigo.co.in/
   - Tagline: "Accelerated ag transformation for healthy planet"

4. SAAS PLATFORM - AGRICLOUD (Enterprise Dashboard)
   - SaaS platform streamlining onboarding, commission, and payments for agricultural operations
   - Achieved 20% time savings, 20% better recovery, 10% cost savings, and enabled 5+ schemes
   - Technologies: React, TypeScript, Node.js, .NET Core, PostgreSQL, MongoDB
   - Impact: Part of Grow Indigo's AgriCloud Platform — automation, insights, scale
   - Tagline: "Streamlined seller operations with data-driven insights"

5. ZOSHE - LUXURY PERFUME PLATFORM (E-Commerce)
   - Modern e-commerce platform specializing in premium fragrances with advanced SEO optimization
   - Features intelligent product search, seamless mobile experience, comprehensive analytics tracking
   - Technologies: React, JavaScript, CSS3, Google Analytics, SEO Optimization, Responsive Design
   - Impact: Active e-commerce platform, SEO optimized, mobile-first design
   - URL: https://www.zoshe.in/
   - Tagline: "Where luxury meets technology in fragrance commerce"

6. TIMELESS TALES DECOR (Design & Events)
   - Elegant event design and styling platform for intimate celebrations
   - Includes gender reveals, baby & bridal showers, proposals, and weddings with custom backdrop designs
   - Technologies: React, Next.js, TypeScript, Tailwind CSS
   - Impact: Custom event designs & styling services
   - URL: https://timelesstalesdecor.vercel.app/
   - Tagline: "Transforming ordinary moments into timeless memories"

7. CORRA CULINARY (Hospitality)
   - Premium restaurant experience platform featuring culinary artistry where tradition meets innovation
   - Includes daily specials, menu management, location services, and reservation systems across Mumbai
   - Technologies: React, Next.js, JavaScript, CSS3
   - Impact: Multiple locations, premium dining experience
   - URL: https://corra-culinary.vercel.app/
   - Tagline: "Celebrating flavor and craft through digital experience"

SKILLS:
- Programming Languages: JavaScript, Node.js, React, React Native, C# .NET Core, Python, HTML5, CSS3
- Databases and Cloud: MongoDB, PostgreSQL, MySQL, AWS EC2, AWS S3, AWS RDS, Snowflake, Docker, Jenkins
- Development Tools: Git, Jira, Visual Studio, RESTful APIs, Microservices, ETL Pipelines, Unit Testing, Debugging
- Analytics and Leadership: Predictive Analytics, Machine Learning, Agile Methodologies, Cross-functional Collaboration, Technical Mentoring

WORKING STYLE & PHILOSOPHY:
- Believes in data-driven decision making and measurable business outcomes
- Focuses on building scalable, maintainable systems that solve real-world problems
- Strong advocate for clean code, proper documentation, and knowledge sharing
- Enjoys mentoring and helping team members grow technically
- Prefers agile methodologies and collaborative development approaches
- Always learning new technologies and staying updated with industry trends

NOTABLE RECOGNITION & LEADERSHIP:
- Snowflake Data for Good APJ Award 2025 - Recognized for innovative agritech data solutions
- Promoted to SDE-II ahead of typical timeline due to exceptional performance
- Successfully mentored 3 new engineers through technical interviews and onboarding
- Led critical SaaS platform transformation enabling global scalability
- Reduced company-wide manual processing errors by 40% through automation initiatives
- Built systems serving 2M+ farmers across 15+ states with 7M+ acres coverage

SOFT SKILLS & LEADERSHIP QUALITIES:
- Technical Leadership: Successfully led platform transformation and mentored team members
- Problem Solving: Consistently delivered solutions that improved efficiency by 30-50%
- Communication: Excellent at explaining complex technical concepts to business stakeholders
- Adaptability: Successfully transitioned from electronics engineering to software development
- Collaboration: Works effectively with cross-functional teams across business and technical domains
- Continuous Learning: Self-motivated learner, recently expanding into AI/ML and advanced data science

INDUSTRY EXPERTISE:
- AgriTech: Deep understanding of agricultural supply chains, farmer onboarding, crop management
- Data Analytics: Experience with large-scale data processing, reporting, and business intelligence
- E-commerce: Built modern e-commerce platforms with SEO optimization and analytics
- Payment Systems: Integration experience with Buy Now Pay Later and banking APIs
- SaaS Platforms: Expertise in multi-tenant architecture and enterprise scalability

ACHIEVEMENTS:
- Engineered enterprise systems serving 2M+ farmers across 15+ states with 7M+ acres agricultural coverage, demonstrating large-scale system architecture and performance optimization
- Optimized operational efficiency by 30-50% through automation and predictive analytics across payment processing, inventory management, and financial reconciliation
- Reduced manual processing errors by 40% and improved system accuracy by 25-30% through automated workflows and real-time tracking systems
- Successfully transformed monolithic application to scalable SaaS platform enabling multi-tenant support and global market expansion

EDUCATION:
University of Mumbai, B.E. Electronics and Telecommunication (CGPA: 7.52/10), Aug '17 – June '21

CERTIFICATIONS & AWARDS:
- HackerRank Certified: Core Java (Credential ID: 0aae57b1fde8)
- Data for Good – APJ Award 2025 by Snowflake for impactful agritech data innovation

CURRENT AVAILABILITY & INTERESTS:
- Open to: Senior Full-Stack Developer roles, Data Engineering positions, Tech Lead opportunities
- Interested in: Remote work, AgriTech, FinTech, E-commerce, Data Analytics companies
- Available for: Full-time positions, consulting projects, technical mentoring
- Location: Based in Mumbai, India - open to remote work globally
- Notice Period: Currently employed, standard notice period applies
- Consulting Services: Snowflake implementation, data analytics, full-stack development, technical mentoring

CAREER ASPIRATIONS & GOALS:
- Short-term: Advance expertise in AI/ML and apply it to solve complex business problems
- Long-term: Technical leadership roles in data-driven organizations
- Passionate about: Using technology to create measurable positive impact (like the agricultural sector)
- Learning: Currently exploring advanced Data Science, Machine Learning, and AI technologies
- Contributing: Open to speaking at tech conferences and mentoring junior developers

HOW TO CONNECT WITH RAHIL:
- Email: rmemdanib@gmail.com (best for detailed discussions)
- LinkedIn: linkedin.com/in/rahil-memdani (professional networking)
- Portfolio: rahilmemdani-portfolio.vercel.app (view all projects and details)
- Phone: +91-9167156829 (available for important opportunities)
- Response Time: Typically responds within 24 hours to professional inquiries
- Best Contact Method: Email or LinkedIn for initial outreach
`;

// --- Helper Components ---
const BotIcon = () => (
  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md flex-shrink-0">
    <Bot size={18} />
  </div>
);

const UserIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
    <User size={18} />
  </div>
);

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      parts: [{ text: "👋 Hello! I'm Rahil's AI assistant and I know everything about his impressive journey from Electronics Engineering to becoming an SDE-II! I can tell you about his Snowflake Data for Good APJ Award, his work with 2M+ farmers, his transition into AI/ML, and so much more. What would you like to discover about Rahil?" }]
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasSentFirstMessage, setHasSentFirstMessage] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const suggestionQuestions = [
    "🚀 Tell me about his career journey and promotion",
    "💼 What's his experience with Snowflake?",
    "🏆 What awards has he received?",
    "📊 Show me his projects",
    "🎯 What are his career goals?",
    "💡 What's his working style?",
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const callGeminiAPI = async (userInput: string) => {
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) throw new Error("API key not found.");

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: `You are Rahil's AI assistant. Answer based on this data: ${resumeData}\n\nUser: ${userInput}` }] }]
        })
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini";

      return { role: "model", parts: [{ text }] };
    } catch (error) {
      return { role: "model", parts: [{ text: "Sorry, I'm having trouble connecting right now. 🔄" }] };
    }
  };

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;
    setHasSentFirstMessage(true);
    const newUserMessage = { role: "user", parts: [{ text: messageText }] };
    setChatHistory(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await callGeminiAPI(messageText);
      setChatHistory(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-[9999] w-[90vw] max-w-sm h-[600px] max-h-[85vh] bg-card text-card-foreground rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-border sm:w-[380px] animate-slide-up ring-1 ring-primary/10">
          <header className="bg-primary text-primary-foreground p-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-90"></div>
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold tracking-tight">AI Assistant</h1>
                  <p className="text-[10px] text-white/70 flex items-center gap-1.5 uppercase tracking-widest font-mono">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsVisible(false)} className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-300">
                <X size={20} />
              </button>
            </div>
          </header>

          <main ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth bg-gradient-to-b from-background to-muted/20">
            {chatHistory.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 animate-fade-in ${message.role === 'user' ? 'justify-end' : ''}`}>
                {message.role === 'model' && <BotIcon />}
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm border ${message.role === 'user' ? 'bg-primary text-primary-foreground border-primary rounded-tr-none' : 'bg-card text-foreground border-border/40 rounded-tl-none'}`}>
                  <div className="whitespace-pre-wrap leading-relaxed text-sm" dangerouslySetInnerHTML={{
                    __html: message.parts[0].text
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-primary">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                      .replace(/\n/g, '<br>')
                  }} />
                </div>
                {message.role === 'user' && <UserIcon />}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 animate-fade-in">
                <BotIcon />
                <div className="p-4 bg-card rounded-2xl rounded-tl-none border border-border/40 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>

          {!isLoading && !hasSentFirstMessage && (
            <div className="px-5 pb-5 bg-background">
              <div className="flex flex-col gap-2">
                {suggestionQuestions.slice(0, 3).map((q, i) => (
                  <button key={i} onClick={() => handleSendMessage(q)} className="px-4 py-2 bg-muted/30 hover:bg-primary/5 border border-border/40 hover:border-primary/30 rounded-xl text-xs text-foreground/80 hover:text-primary transition-all duration-300 text-left">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <footer className="bg-card border-t border-border p-4">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(userInput); }}
                placeholder="Type a message..."
                className="flex-1 bg-muted/50 border border-border/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button onClick={() => { handleSendMessage(userInput); setUserInput(''); }} disabled={!userInput.trim() || isLoading} className="p-2.5 bg-primary text-primary-foreground rounded-xl shadow-lg disabled:opacity-50">
                <Send size={18} />
              </button>
            </div>
          </footer>
        </div>
      )}

      {!isVisible && (
        <button onClick={() => setIsVisible(true)} className="fixed bottom-6 right-6 z-[9999] bg-primary text-primary-foreground p-4 rounded-[22px] shadow-2xl hover:scale-110 transition-transform group">
          <MessageCircle size={26} className="group-hover:rotate-12 transition-transform" />
          {!hasSentFirstMessage && <span className="absolute top-2 right-2 w-3 h-3 bg-rose-500 rounded-full border-2 border-primary" />}
        </button>
      )}

      <style>{`
        .animate-slide-up { animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        @keyframes slide-up { from { opacity: 0; transform: translateY(40px) scale(0.9); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
};

export default Chatbot;
