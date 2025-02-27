
import { platforms } from "@/utils/mockData";
import { CDPPlatform } from "@/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PlatformSelectorProps {
  selectedPlatform: CDPPlatform;
  onChange: (platform: CDPPlatform) => void;
}

export function PlatformSelector({ selectedPlatform, onChange }: PlatformSelectorProps) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-4">
      <h2 className="text-lg font-medium mb-3 text-center">Select CDP Platform</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {platforms.map((platform) => (
          <motion.button
            key={platform.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "platform-chip relative overflow-hidden",
              selectedPlatform === platform.id ? "selected" : ""
            )}
            style={{
              backgroundColor: selectedPlatform === platform.id ? platform.color : "",
            }}
            onClick={() => onChange(platform.id)}
            aria-label={`Select ${platform.name}`}
          >
            {platform.name}
            {selectedPlatform === platform.id && (
              <motion.div
                className="absolute inset-0 bg-white opacity-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
