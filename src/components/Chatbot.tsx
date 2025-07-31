import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';

// --- Resume Data ---
// The resume data is stored in a constant to be used in the system prompt.
const resumeData = `
Name: Rahil Memdani
Contact: +91-9167156829 | rmemdanib@gmail.com | LinkedIn: linkedin.com/in/rahil-memdani | Portfolio: rahilmemdani-portfolio.vercel.app

PROFESSIONAL SUMMARY:
Full-Stack Software Engineer with 3+ years of experience in React, Node.js, .NET Core, and databases, delivering 50% operational gains through machine learning and predictive analytics in agritech. Built forecasting platforms serving 2M+ users; now pursuing advanced Data Science to drive innovation through data-driven solutions.

EXPERIENCE (3+ YEARS):
SOFTWARE DEVELOPMENT ENGINEER I | GROW INDIGO (Aug '21 - Present)
- Built commission analytics system using .NET Core and PostgreSQL, processing 5,000+ monthly transactions with 10% revenue accuracy improvement and 15% faster reporting.
- Created React-based seller onboarding dashboard serving 600+ monthly registrations, reducing onboarding time by 30% for 2M+ user platform across 15+ states.
- Integrated Rupifi Buy Now Pay Later and HDFC payment APIs, managing 250+ weekly verifications and accelerating reconciliation by 35%.
- Automated ledger workflows using Node.js and PostgreSQL, generating 200+ monthly reports while cutting manual errors by 40%.
- Developed predictive forecasting models improving inventory accuracy by 25% and refund processing by 20% through machine learning.
- Implemented Snowflake anomaly detection providing bi-weekly sales insights.
- Deployed barcode inventory system enhancing stock accuracy by 30%.
- Built Electron Human Resources payroll system with MongoDB, reducing processing time from 30 days to 5-10 days.
- Led SaaS platform transformation to multi-tenant architecture. (Product link: growindigo.co.in/agri-cloud)
- Mentored team through 8 technical interviews and onboarded 3 engineers.

WEB DEVELOPMENT INTERN | AGA KHAN EDUCATION BOARD (Feb '21 - Mar '21)
- Developed full-stack school portal using Node.js, MySQL, and React.
- Delivered a responsive, end-to-end solution with integrated curriculum data.
- Handled full-stack development independently.

SKILLS:
- Programming Languages: JavaScript, Node.js, React, React Native, C#.NET Core, Python, HTML5, CSS3.
- Databases and Cloud: MongoDB, PostgreSQL, MySQL, AWS EC2, AWS S3, AWS RDS, Snowflake, Docker, Jenkins.
- Development Tools: Git, Jira, Visual Studio, RESTful APIs, Microservices, ETL Pipelines, Unit Testing, Debugging.
- Analytics and Leadership: Predictive Analytics, Machine Learning, Agile Methodologies, Cross-functional Collaboration, Technical Mentoring.

ACHIEVEMENTS:
- Engineered systems for 2M+ farmers across 15+ states.
- Optimized operational efficiency by 30-50%.
- Reduced manual processing errors by 40%.
- Transformed monolithic application to scalable SaaS platform.

EDUCATION:
- University of Mumbai, B.E. Electronics and Telecommunication (CGPA: 7.52/10), Aug '17 - June '21.

CERTIFICATIONS:
- HackerRank Certified: Core Java
- Docker for Developers - LinkedIn
- Introduction to SQL - DataCamp
`;

// --- Helper Components ---

const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const BotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
    <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5h-6.75zm0 3.75a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5h-6.75zm0 3.75a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5h-6.75z" clipRule="evenodd" />
  </svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-slate-500">
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
  </svg>
);

// --- Main Chat Component ---

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: "model", parts: [{ text: "Hello! I am Rahil's AI assistant. You can ask me any questions about his skills, experience, and projects based on his resume." }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const suggestionQuestions = [
    "What are Rahil's key skills?",
    "Describe his experience at Grow Indigo.",
    "What were his main achievements?",
    "What is his educational background?",
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // This function now handles the core logic of sending a message
  const handleSendMessage = async (messageText) => {
    if (!messageText.trim() || isLoading) return;

    setHasSentFirstMessage(true);

    const newUserMessage = { role: "user", parts: [{ text: messageText }] };
    const newHistory = [...chatHistory, newUserMessage];

    setChatHistory(newHistory);
    setIsLoading(true);

    try {
      const aiResponse = await callGeminiAPI(newHistory);
      setChatHistory(prevHistory => [...prevHistory, aiResponse]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = {
        role: "model",
        parts: [{ text: "Sorry, I'm having trouble connecting. Please try again later." }]
      };
      setChatHistory(prevHistory => [...prevHistory, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // This is the function that calls the API
  const callGeminiAPI = async (history, retries = 3, delay = 1000) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    // Correctly formatted system instruction
    const systemInstruction = {
      role: "system",
      parts: [{
        text: `You are a helpful and professional AI assistant for Rahil Memdani. Your purpose is to answer questions about Rahil's skills, experience, and qualifications based ONLY on the following resume information. Do not invent information. If a question cannot be answered from the resume, politely state that the information is not available. Here is the resume:\n\n${resumeData}`
      }]
    };

    // The payload now includes the systemInstruction field
    const payload = {
      contents: history,
      systemInstruction: systemInstruction,
    };

    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
        const result = await response.json();

        if (result.candidates && result.candidates[0].content) {
          return result.candidates[0].content;
        } else {
          return { role: "model", parts: [{ text: "I received an unusual response. Could you rephrase?" }] };
        }
      } catch (error) {
        console.warn(`API call attempt ${i + 1} failed. Retrying in ${delay}ms...`);
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  // Function for the send button
  const handleSendClick = () => {
    handleSendMessage(userInput);
    setUserInput('');
  };

  // Function for handling Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [hasSentFirstMessage, setHasSentFirstMessage] = useState(false);


  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50 w-[90vw] max-w-md h-[85vh] max-h-[90vh] bg-slate-100 rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-300 sm:w-[400px] sm:h-[600px]">
          {/* Header */}
          <header className="bg-primary text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-semibold">Rahil's AI Assistant</h1>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-red-300 transition"
            >
              ✕
            </button>
          </header>

          {/* Chat area */}
          <main
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''
                  }`}
              >
                {message.role === 'model' && <BotIcon />}
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow ${message.role === 'user'
                      ? 'bg-primary-500 text-black rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none'
                    }`}
                >
                  <p className="whitespace-pre-wrap">{message.parts[0].text}</p>
                </div>
                {message.role === 'user' && <UserIcon />}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start gap-3">
                <BotIcon />
                <div className="p-3 bg-white rounded-2xl shadow text-gray-800">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-300"></span>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Suggestion Chips */}
          {!isLoading && !hasSentFirstMessage && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestionQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    className="px-3 py-1 bg-white border border-primary rounded-full text-sm text-primary hover:bg-primary hover:text-white transition">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="bg-white border-t border-slate-300 p-3">
            <div className="flex gap-2 items-center">
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Rahil's experience..."
                className="flex-1 p-2 border-2 border-slate-300 text-black rounded-full resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
                disabled={isLoading}
              />
              <button
                onClick={handleSendClick}
                disabled={isLoading || !userInput.trim()}
                className="p-3 bg-primary rounded-full disabled:bg-primary hover:bg-primary transition"
              >
                <SendIcon />
              </button>
            </div>
          </footer>
        </div>
      )}

      {!isVisible && (
        <button
          className="fixed bottom-4 right-4 z-50 bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary transition sm:bottom-6 sm:right-6"
          onClick={() => setIsVisible(true)}
        >
          <MessageCircle />
        </button>
      )}
    </>
  );

};

export default App;
