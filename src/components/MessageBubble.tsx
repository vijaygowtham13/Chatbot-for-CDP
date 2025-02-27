
import { Message } from "@/types";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { platforms } from "@/utils/mockData";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const platformColor = message.platform 
    ? platforms.find(p => p.id === message.platform)?.color 
    : platforms.find(p => p.id === "all")?.color;

  if (message.isTyping) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "message-bubble bot-message",
          "flex items-end rounded-2xl p-4"
        )}
      >
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    );
  }

  const bubbleStyle = isUser
    ? { backgroundColor: platformColor || "#2A85FF" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "message-bubble",
        isUser ? "user-message" : "bot-message"
      )}
      style={bubbleStyle}
    >
      <ReactMarkdown
        className={cn(
          "prose max-w-none",
          isUser ? "text-white prose-invert" : "prose-gray"
        )}
        components={{
          a: ({ node, ...props }) => (
            <a 
              {...props} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline font-medium hover:text-opacity-80 transition-colors"
            />
          ),
          code: ({ node, ...props }) => (
            <code 
              {...props} 
              className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono"
            />
          ),
          pre: ({ node, ...props }) => (
            <pre 
              {...props} 
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto text-sm my-2"
            />
          ),
        }}
      >
        {message.content}
      </ReactMarkdown>
    </motion.div>
  );
}
