
import { useState, useRef, useEffect } from "react";
import { Message, CDPPlatform } from "@/types";
import MessageBubble from "./MessageBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import { PlatformSelector } from "./PlatformSelector";
import { getMockResponse } from "@/utils/mockData";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi! I'm your CDP Assistant. Ask me how to do something in Segment, mParticle, Lytics, or Zeotap.",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<CDPPlatform>("all");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessageId = uuidv4();
    const userMessage: Message = {
      id: userMessageId,
      content: input,
      role: "user",
      timestamp: new Date(),
      platform: selectedPlatform,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Add temporary typing indicator
    const typingIndicatorId = uuidv4();
    setMessages((prev) => [
      ...prev,
      {
        id: typingIndicatorId,
        content: "",
        role: "assistant",
        timestamp: new Date(),
        isTyping: true,
      },
    ]);
    
    // Simulate API delay
    setTimeout(() => {
      // Get response for the question
      const response = getMockResponse(input, selectedPlatform);
      
      // Remove typing indicator and add actual response
      setMessages((prev) => 
        prev.filter((msg) => msg.id !== typingIndicatorId).concat({
          id: uuidv4(),
          content: response.answer,
          role: "assistant",
          timestamp: new Date(),
          platform: response.platform,
        })
      );
      
      setIsTyping(false);
      
      // If there are documentation links, add them as a separate message
      if (response.documentationLinks && response.documentationLinks.length > 0) {
        const linksContent = "Here are some helpful resources:\n" + 
          response.documentationLinks.map(link => 
            `- [${link.title}](${link.url})`
          ).join("\n");
        
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: uuidv4(),
              content: linksContent,
              role: "assistant",
              timestamp: new Date(),
              platform: response.platform,
            },
          ]);
        }, 500);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] max-w-4xl mx-auto">
      <div className="mb-4">
        <PlatformSelector 
          selectedPlatform={selectedPlatform} 
          onChange={setSelectedPlatform} 
        />
      </div>
      
      <div className="chat-container flex-1 flex flex-col overflow-hidden">
        <div className="messages-container flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className={cn(
            "flex items-center border-t transition-all duration-300",
            isTyping ? "opacity-70" : "opacity-100"
          )}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask how to do something in a CDP..."
            className="chat-input py-6"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            size="icon" 
            className="h-12 w-12 rounded-full m-2 bg-primary hover:bg-primary/90 transition-all duration-300"
            disabled={isTyping || !input.trim()}
          >
            <SendHorizontal className="h-5 w-5 text-white" />
          </Button>
        </form>
      </div>
    </div>
  );
}
