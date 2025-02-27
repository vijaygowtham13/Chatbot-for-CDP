
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-6 mt-2">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">CDP Support Assistant</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Ask me how to do something in Segment, mParticle, Lytics, or Zeotap
          </p>
        </header>
        
        <main>
          <ChatInterface />
        </main>
        
        <footer className="text-center text-gray-500 text-sm mt-8 mb-4">
          <p>CDP Support Assistant — Helping you navigate Customer Data Platforms</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
