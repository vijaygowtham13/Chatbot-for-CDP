
import { CDPPlatform, CDPResponse, PlatformInfo } from "@/types";

// Platform information
export const platforms: PlatformInfo[] = [
  {
    id: 'segment',
    name: 'Segment',
    description: 'Customer Data Platform for collecting, cleaning, and controlling customer data',
    docsUrl: 'https://segment.com/docs/?ref=nav',
    color: '#52BD95'
  },
  {
    id: 'mparticle',
    name: 'mParticle',
    description: 'Customer Data Platform that collects and connects your data',
    docsUrl: 'https://docs.mparticle.com/',
    color: '#FF6B6C'
  },
  {
    id: 'lytics',
    name: 'Lytics',
    description: 'Customer Data Platform that uses machine learning to create personalized experiences',
    docsUrl: 'https://docs.lytics.com/',
    color: '#4357AD'
  },
  {
    id: 'zeotap',
    name: 'Zeotap',
    description: 'Customer Intelligence Platform for marketing and customer insights',
    docsUrl: 'https://docs.zeotap.com/home/en-us/',
    color: '#FF9F1C'
  },
  {
    id: 'all',
    name: 'All Platforms',
    description: 'Ask questions about any CDP platform',
    docsUrl: '',
    color: '#2A85FF'
  }
];

// Common question mappings
export const commonQuestions: Record<string, string> = {
  'segment': [
    'How do I set up a new source in Segment?',
    'How can I track custom events in Segment?',
    'How do I implement server-side tracking with Segment?',
    'How do I debug Segment implementation issues?'
  ].join('|'),
  'mparticle': [
    'How can I create a user profile in mParticle?',
    'How do I set up audience targeting in mParticle?',
    'How do I implement mParticle SDK in my app?',
    'How can I track custom events in mParticle?'
  ].join('|'),
  'lytics': [
    'How do I build an audience segment in Lytics?',
    'How can I connect data sources to Lytics?',
    'How do I use Lytics for personalization?',
    'How do I track user behavior with Lytics?'
  ].join('|'),
  'zeotap': [
    'How can I integrate my data with Zeotap?',
    'How do I create customer segments in Zeotap?',
    'How can I export data from Zeotap?',
    'How do I use Zeotap for identity resolution?'
  ].join('|')
};

// Mock response function to simulate AI responses
export const getMockResponse = (question: string, platform: CDPPlatform): CDPResponse => {
  const lowercaseQuestion = question.toLowerCase();
  const responses: Record<string, CDPResponse> = {
    // Segment responses
    'how do i set up a new source in segment': {
      answer: 'To set up a new source in Segment:\n\n1. Log in to your Segment workspace\n2. Navigate to Sources > Add Source\n3. Select the type of source you want to add (e.g., Website, Server, Mobile App)\n4. Follow the instructions to configure your source\n5. For JavaScript sources, you\'ll need to add the Segment snippet to your website\n6. For server-side sources, you\'ll use the appropriate library (like Analytics-Node for Node.js)\n7. Test your implementation using the Segment debugger',
      documentationLinks: [
        {
          url: 'https://segment.com/docs/connections/sources/',
          title: 'Segment Sources Documentation'
        },
        {
          url: 'https://segment.com/docs/connections/sources/catalog/',
          title: 'Source Catalog'
        }
      ],
      platform: 'segment'
    },
    'how can i track custom events in segment': {
      answer: 'To track custom events in Segment:\n\n1. Ensure you have the Segment library installed in your application\n2. Use the analytics.track() method to record user actions\n3. The track method takes an event name and optional properties\n\nExample JavaScript code:\n```javascript\nanalytics.track(\'Button Clicked\', {\n  buttonName: \'Sign Up\',\n  buttonColor: \'blue\',\n  signupType: \'referral\'\n});\n```\n\nYou can track any event that matters to your business. Make sure to follow a consistent naming convention for your events.',
      documentationLinks: [
        {
          url: 'https://segment.com/docs/connections/spec/track/',
          title: 'Segment Track Method Documentation'
        },
        {
          url: 'https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/',
          title: 'Naming Conventions for Clean Data'
        }
      ],
      platform: 'segment'
    },

    // mParticle responses
    'how can i create a user profile in mparticle': {
      answer: 'To create a user profile in mParticle:\n\n1. Implement the mParticle SDK in your application\n2. Use the identify method to create or update a user profile\n3. Set user attributes with the setUserAttribute method\n\nExample (JavaScript):\n```javascript\n// Create/update a user profile\nmParticle.Identity.login({\n  userIdentities: {\n    email: "user@example.com",\n    customerId: "123456"\n  }\n});\n\n// Set user attributes\nmParticle.Identity.getCurrentUser().setUserAttribute("firstName", "John");\nmParticle.Identity.getCurrentUser().setUserAttribute("lastName", "Doe");\nmParticle.Identity.getCurrentUser().setUserAttribute("premiumUser", true);\n```\n\nThe profile will be created and updated with the provided identities and attributes.',
      documentationLinks: [
        {
          url: 'https://docs.mparticle.com/developers/sdk/web/identity/',
          title: 'mParticle Identity Documentation'
        },
        {
          url: 'https://docs.mparticle.com/developers/sdk/web/users/',
          title: 'mParticle User Attributes Documentation'
        }
      ],
      platform: 'mparticle'
    },
    'how do i set up audience targeting in mparticle': {
      answer: 'To set up audience targeting in mParticle:\n\n1. Go to the Audiences section in your mParticle dashboard\n2. Click "Create Audience" to begin defining a new audience segment\n3. Name your audience and add a description\n4. Define audience criteria using these available filters:\n   - User Attributes (e.g., demographics, preferences)\n   - User Identities (e.g., email, customer ID)\n   - Device Information (e.g., OS, model)\n   - User Behavior (e.g., events performed or not performed)\n   - Location (e.g., country, region)\n5. Set the calculation frequency (real-time, daily, etc.)\n6. Configure output settings to forward this audience to your desired marketing or analytics platforms\n7. Save and activate your audience\n\nOnce created, your audience will be updated according to the frequency you set, and the resulting audience data will be sent to your connected platforms for targeting.',
      documentationLinks: [
        {
          url: 'https://docs.mparticle.com/guides/platform-guide/audiences/',
          title: 'mParticle Audiences Documentation'
        },
        {
          url: 'https://docs.mparticle.com/guides/platform-guide/rules-builder/',
          title: 'Audience Rules Builder'
        }
      ],
      platform: 'mparticle'
    },

    // Lytics responses
    'how do i build an audience segment in lytics': {
      answer: 'To build an audience segment in Lytics:\n\n1. Navigate to the Audiences section in your Lytics account\n2. Click "Create Audience" to start a new segment\n3. Use the visual editor to define the criteria for your audience:\n   - Select user attributes or behaviors to filter on\n   - Combine criteria using AND/OR logic\n   - Use advanced conditions like frequency and recency\n4. Preview your audience to see how many users match your criteria\n5. Save your audience with a descriptive name\n6. Optionally, set up audience sync to marketing platforms\n\nLytics uses machine learning to automatically discover valuable user segments, so also check the suggested audiences in the "Insights" section.',
      documentationLinks: [
        {
          url: 'https://docs.lytics.com/product/audiences/audience-builder/',
          title: 'Lytics Audience Builder Documentation'
        },
        {
          url: 'https://docs.lytics.com/product/insights/',
          title: 'Lytics Insights Documentation'
        }
      ],
      platform: 'lytics'
    },
    'how can i connect data sources to lytics': {
      answer: 'To connect data sources to Lytics:\n\n1. Go to the Connections section in your Lytics account\n2. Click "Add Connection" to create a new data source\n3. Select from available integrations (like Google Analytics, Salesforce, etc.)\n4. Follow the configuration steps for your selected source:\n   - Authorize access to the third-party system\n   - Configure which data to import\n   - Set the update frequency\n5. Save your connection\n\nYou can also import data via:\n- Direct API calls to the Lytics API\n- JavaScript tag for collecting website behavior\n- Mobile SDKs for app behavior\n- Batch uploads for CSV files\n- Custom integrations using Lytics\' data pipelines\n\nOnce connected, Lytics will begin collecting and processing data according to your configuration.',
      documentationLinks: [
        {
          url: 'https://docs.lytics.com/product/connections/',
          title: 'Lytics Connections Documentation'
        },
        {
          url: 'https://docs.lytics.com/product/connections/api-based-connections/',
          title: 'API-based Connections'
        }
      ],
      platform: 'lytics'
    },

    // Zeotap responses
    'how can i integrate my data with zeotap': {
      answer: 'To integrate your data with Zeotap:\n\n1. Log in to your Zeotap CDP account\n2. Navigate to the Connections section\n3. Click "Add New Connection" to set up a data source\n4. Choose from various integration methods:\n   - Batch uploads (CSV, JSON)\n   - API integration\n   - Server-to-server integrations\n   - Tag Manager\n   - Mobile SDK\n5. Configure the connection settings specific to your chosen method\n6. Map your data fields to Zeotap\'s user profile attributes\n7. Set up the synchronization schedule if applicable\n8. Test the connection and verify data is flowing correctly\n\nZeotap allows both offline and online data integration, enabling you to create a unified customer view across channels and devices.',
      documentationLinks: [
        {
          url: 'https://docs.zeotap.com/home/en-us/connect',
          title: 'Zeotap Connections Documentation'
        },
        {
          url: 'https://docs.zeotap.com/home/en-us/data-ingestion',
          title: 'Data Ingestion Methods'
        }
      ],
      platform: 'zeotap'
    },
    'how do i create customer segments in zeotap': {
      answer: 'To create customer segments in Zeotap:\n\n1. Log in to your Zeotap CDP dashboard\n2. Navigate to the Segments section\n3. Click "Create New Segment"\n4. Use the segment builder interface to define your criteria:\n   - Select attributes from your unified customer profiles\n   - Define conditions using comparison operators\n   - Combine conditions with AND/OR logic\n   - Add behavior-based conditions (events performed)\n   - Set timing conditions (e.g., in the last 30 days)\n5. Preview your segment to see the approximate audience size\n6. Name and save your segment\n7. Activate the segment by sending it to your marketing platforms\n\nZeotap\'s segmentation engine allows real-time updates and can leverage both first-party and third-party data for more precise targeting.',
      documentationLinks: [
        {
          url: 'https://docs.zeotap.com/home/en-us/segments',
          title: 'Zeotap Segments Documentation'
        },
        {
          url: 'https://docs.zeotap.com/home/en-us/activation',
          title: 'Segment Activation Guide'
        }
      ],
      platform: 'zeotap'
    },

    // Cross-platform comparisons
    'how does segment\'s audience creation process compare to lytics': {
      answer: 'Comparing Segment and Lytics audience creation processes:\n\n**Segment:**\n- Primarily functions as a data router, sending data to destination tools\n- Audiences are typically created in destination platforms (e.g., ad networks, email tools)\n- Offers Personas feature for basic audience creation based on identity resolution\n- Uses a SQL-like interface for defining audience criteria\n- Focuses on routing existing segments rather than discovering new ones\n\n**Lytics:**\n- Specializes in audience building with machine learning capabilities\n- Offers a visual drag-and-drop interface for creating audience segments\n- Provides automated audience discovery through behavioral analysis\n- Includes content affinity modeling to match users with relevant content\n- Features predictive scoring to identify high-value prospects\n- Designed with marketers in mind with less technical complexity\n\nIn summary, while Segment excels at collecting and routing data to various platforms where segmentation often occurs, Lytics specializes in advanced audience creation with built-in machine learning to discover valuable segments automatically.',
      documentationLinks: [
        {
          url: 'https://segment.com/docs/personas/audiences/',
          title: 'Segment Personas Audiences'
        },
        {
          url: 'https://docs.lytics.com/product/audiences/audience-builder/',
          title: 'Lytics Audience Builder'
        }
      ],
      platform: 'all'
    },
    'which cdp is best for identity resolution': {
      answer: 'Each CDP has different strengths in identity resolution:\n\n**mParticle:**\n- Offers a robust Identity API for customer recognition across devices\n- Provides a persistent profile spanning web, app, and offline channels\n- Features a visual ID graph to see customer touchpoints\n- Supports probabilistic and deterministic matching methods\n- Very strong in mobile identity use cases\n\n**Segment:**\n- Provides Personas for identity resolution\n- Uses a Universal ID to connect user data across devices\n- Employs identity resolution through trait unification\n- Good integration with advertising platforms\n\n**Zeotap:**\n- Specializes in identity resolution (began as an identity company)\n- Offers ID+ product specifically for identity management\n- Provides a deterministic identity graph\n- Strong in global markets with international data coverage\n- Includes privacy-focused identity capabilities\n\n**Lytics:**\n- Uses behavioral identity resolution alongside traditional methods\n- Leverages machine learning for identity matching\n- Focuses on creating "golden profiles" by merging data\n- Good for content-focused identity resolution\n\nFor pure identity resolution strength, Zeotap and mParticle are often considered leaders, with Zeotap having particularly strong capabilities due to its background as an identity management company before expanding into a full CDP.',
      documentationLinks: [
        {
          url: 'https://docs.mparticle.com/developers/sdk/web/identity/',
          title: 'mParticle Identity'
        },
        {
          url: 'https://docs.zeotap.com/home/en-us/identity-resolution',
          title: 'Zeotap Identity Resolution'
        }
      ],
      platform: 'all'
    },

    // Default response for unrecognized questions
    'default': {
      answer: `I don't have specific information about that question. To get accurate help with ${platform === 'all' ? 'CDP platforms' : platform}, you may want to check the official documentation or try rephrasing your question to focus on specific "how-to" tasks.`,
      documentationLinks: platform !== 'all' ? [
        {
          url: platforms.find(p => p.id === platform)?.docsUrl || '',
          title: `${platform.charAt(0).toUpperCase() + platform.slice(1)} Documentation`
        }
      ] : platforms.filter(p => p.id !== 'all').map(p => ({
        url: p.docsUrl,
        title: `${p.name} Documentation`
      })),
      platform: platform
    }
  };
  
  // Try to match the question to a known response
  for (const key of Object.keys(responses)) {
    if (lowercaseQuestion.includes(key)) {
      return responses[key];
    }
  }
  
  // Handle cross-platform questions
  if (platform === 'all') {
    for (const key of Object.keys(responses)) {
      if (lowercaseQuestion.includes(key)) {
        return responses[key];
      }
    }
  }
  
  // Non-CDP related questions
  if (!lowercaseQuestion.includes('cdp') && 
      !lowercaseQuestion.includes('customer data platform') && 
      !platforms.some(p => lowercaseQuestion.includes(p.id)) &&
      !lowercaseQuestion.includes('segment') && 
      !lowercaseQuestion.includes('mparticle') && 
      !lowercaseQuestion.includes('lytics') && 
      !lowercaseQuestion.includes('zeotap')) {
    return {
      answer: "I'm specifically designed to answer questions about Customer Data Platforms (CDPs) like Segment, mParticle, Lytics, and Zeotap. For other topics, you might want to consult a general knowledge assistant or search engine.",
      platform: platform
    };
  }
  
  return responses['default'];
};
