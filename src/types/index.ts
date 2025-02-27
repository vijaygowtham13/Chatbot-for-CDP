
export type CDPPlatform = 'segment' | 'mparticle' | 'lytics' | 'zeotap' | 'all';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  platform?: CDPPlatform;
  isTyping?: boolean;
}

export interface CDPResponse {
  answer: string;
  documentationLinks?: {
    url: string;
    title: string;
  }[];
  platform: CDPPlatform;
}

export interface PlatformInfo {
  id: CDPPlatform;
  name: string;
  description: string;
  docsUrl: string;
  color: string;
}
