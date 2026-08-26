export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  content: string;
  localCta: string;
  faqs: SolutionFAQ[];
}

export const solutionsData: Record<string, SolutionData> = {
  'iot-companies-kerala': {
    slug: 'iot-companies-kerala',
    title: 'IoT Companies in Kerala | Ecocee | Custom IoT Solutions',
    description: 'Looking for IoT companies in Kerala? Ecocee builds custom IoT solutions, embedded systems, and edge computing for businesses. Free consultation. Serving Ernakulam, Thrissur, Kochi.',
    h1: 'IoT Companies in Kerala: Enterprise IoT Solutions & Embedded Systems',
    keywords: ['iot companies in kerala', 'iot solutions kerala', 'iot companies ernakulam', 'embedded systems kochi'],
    content: `
      <p class="mb-4 text-lg text-muted-foreground leading-relaxed">
        If you're searching for <strong>IoT companies in Kerala</strong>, Ecocee specializes in building custom IoT solutions, 
        embedded systems, and edge computing infrastructure for businesses across Ernakulam, Thrissur, Kochi, and Kerala.
      </p>
      
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Why Choose an IoT Company?</h2>
      <p class="mb-4 text-muted-foreground">IoT (Internet of Things) enables businesses to:</p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li>Monitor operations in real-time across locations</li>
        <li>Reduce operational costs through automation</li>
        <li>Make data-driven decisions faster</li>
        <li>Scale without adding manual headcount</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Ecocee's IoT Solutions</h2>
      <p class="mb-4 text-muted-foreground">We build end-to-end IoT systems combining:</p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>Custom Sensors & Hardware:</strong> ESP32, Arduino, STM32-based devices</li>
        <li><strong>Embedded Firmware:</strong> C/C++ firmware for responsive edge processing</li>
        <li><strong>Edge Intelligence:</strong> Process data locally for fast decisions</li>
        <li><strong>Cloud/Private Integration:</strong> Secure data sync to your infrastructure</li>
        <li><strong>AI Analytics:</strong> Machine learning on IoT data for insights</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Industries We Serve</h2>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li>Manufacturing & Logistics</li>
        <li>Retail & Hospitality</li>
        <li>Agriculture & Agritech</li>
        <li>Smart Buildings & Facilities</li>
        <li>Automotive & Motorsports</li>
      </ul>
    `,
    localCta: 'Serving IoT companies in Ernakulam, Kochi, Thrissur, and across Kerala.',
    faqs: [
      {
        question: 'How much does an IoT solution cost?',
        answer: 'IoT project costs vary depending on hardware complexity, data processing needs, and scale. We provide custom quotes after a technical discovery phase.'
      },
      {
        question: 'Can IoT systems run on-premise?',
        answer: 'Yes. Ecocee specializes in private, on-premise IoT infrastructure. All data stays within your network with no cloud dependency if required.'
      }
    ]
  },
  
  'ai-automation-business': {
    slug: 'ai-automation-business',
    title: 'AI Business Automation in Kerala | Custom AI Agents | Ecocee',
    description: 'Automate business workflows with custom AI agents. Reduce manual work, improve accuracy, scale faster. AI automation for Kerala businesses. Free consultation.',
    h1: 'AI Business Automation: Custom AI Agents for Kerala Enterprises',
    keywords: ['ai automation kerala', 'business automation ai', 'custom ai agents', 'workflow automation'],
    content: `
      <p class="mb-4 text-lg text-muted-foreground leading-relaxed">
        <strong>AI business automation</strong> transforms how companies operate by delegating repetitive, data-heavy, or complex tasks to intelligent software systems. At Ecocee, we build custom AI agents designed specifically for your workflows.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">What Are Custom AI Agents?</h2>
      <p class="mb-4 text-muted-foreground">
        Unlike generic chatbots, custom AI agents are intelligent programs that can take actions, read your databases, send emails, and make decisions based on your business rules.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Key Benefits for Kerala Businesses</h2>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>24/7 Operations:</strong> Agents never sleep, ensuring continuous workflow execution.</li>
        <li><strong>Error Reduction:</strong> Eliminate human error in data entry and processing.</li>
        <li><strong>Scalability:</strong> Handle 10x the workload without increasing headcount.</li>
        <li><strong>Cost Efficiency:</strong> Significantly reduce operational overhead.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Use Cases We Engineer</h2>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li>Customer Support & Ticket Resolution</li>
        <li>Lead Qualification & CRM Updates</li>
        <li>Document Extraction (Invoices, Receipts)</li>
        <li>Inventory & Supply Chain Monitoring</li>
      </ul>
    `,
    localCta: 'Providing AI Automation to businesses in Kochi, Trivandrum, Thrissur, and Kerala.',
    faqs: [
      {
        question: 'Is my business data safe with AI?',
        answer: 'Yes. We build AI agents that can run on private, secure infrastructure. Your proprietary data is never used to train public models.'
      },
      {
        question: 'Will AI replace my employees?',
        answer: 'AI is designed to augment your team, handling the repetitive work so your employees can focus on high-value, strategic tasks.'
      }
    ]
  },
  
  'private-ai-infrastructure': {
    slug: 'private-ai-infrastructure',
    title: 'Private AI Infrastructure in India | On-Premise AI Deployment | Ecocee',
    description: 'Deploy AI privately and securely. On-premise AI infrastructure for confidential business operations. No vendor lock-in. India-based. Free consultation.',
    h1: 'Private AI Infrastructure: On-Premise AI Deployment for Enterprise',
    keywords: ['private ai infrastructure', 'on-premise ai', 'secure ai deployment', 'private ai server'],
    content: `
      <p class="mb-4 text-lg text-muted-foreground leading-relaxed">
        For businesses handling sensitive data—such as healthcare, finance, or proprietary manufacturing—public cloud AI APIs are often a security risk. Ecocee engineers <strong>Private AI Infrastructure</strong> allowing you to run powerful intelligence entirely on-premise.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Why Choose On-Premise AI?</h2>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>Absolute Data Privacy:</strong> Data never leaves your local network or private cloud.</li>
        <li><strong>Compliance:</strong> Meet strict regulatory requirements for data sovereignty.</li>
        <li><strong>No Vendor Lock-in:</strong> You own the infrastructure and the deployed models.</li>
        <li><strong>Predictable Costs:</strong> Avoid unpredictable API token billing.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Our Deployment Architecture</h2>
      <p class="mb-4 text-muted-foreground">We engineer the full stack required for private AI:</p>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li>Open-source LLM selection & fine-tuning (Llama 3, Mistral, etc.)</li>
        <li>Local vector databases for Retrieval-Augmented Generation (RAG)</li>
        <li>Hardware sizing and server provisioning</li>
        <li>Secure API gateway setup for your internal tools</li>
      </ul>
    `,
    localCta: 'Deploying secure Private AI Infrastructure for enterprises across India.',
    faqs: [
      {
        question: 'Do I need a massive server to run private AI?',
        answer: 'Not necessarily. Depending on the model size and use case, we can optimize models to run efficiently on surprisingly modest hardware.'
      },
      {
        question: 'Can private models match ChatGPT?',
        answer: 'For specific business tasks (like document analysis, coding, or support), highly optimized open-source models can perform just as well as, or better than, generalized public models.'
      }
    ]
  },
  
  'embedded-systems-kerala': {
    slug: 'embedded-systems-kerala',
    title: 'Embedded Systems Companies in Kerala | Custom Firmware | Ecocee',
    description: 'Custom embedded systems, firmware development, IoT hardware integration. Serving Kochi, Ernakulam, Kerala. Microcontroller expertise. Free consultation.',
    h1: 'Embedded Systems & Custom Firmware Development in Kerala',
    keywords: ['embedded systems kochi', 'embedded systems companies kerala', 'firmware development', 'embedded systems thrissur'],
    content: `
      <p class="mb-4 text-lg text-muted-foreground leading-relaxed">
        Ecocee is a leading <strong>embedded systems company in Kerala</strong>, engineering the critical hardware and firmware that bridges the gap between software and the physical world.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Core Embedded Expertise</h2>
      <p class="mb-4 text-muted-foreground">We bring deep technical expertise to electronic product development:</p>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>Microcontrollers:</strong> ARM Cortex-M, STM32, ESP32, PIC, AVR</li>
        <li><strong>Firmware Development:</strong> Bare-metal C/C++ and RTOS (FreeRTOS)</li>
        <li><strong>Communication Protocols:</strong> I2C, SPI, UART, CAN, Modbus</li>
        <li><strong>Wireless Technologies:</strong> Wi-Fi, BLE, LoRaWAN, Cellular (4G/LTE)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Our Engineering Process</h2>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li><strong>Requirement Analysis:</strong> Defining constraints (power, space, cost).</li>
        <li><strong>Prototyping:</strong> Rapid proof-of-concept development.</li>
        <li><strong>Firmware Engineering:</strong> Writing robust, MISRA-compliant code.</li>
        <li><strong>Testing & Validation:</strong> Rigorous edge-case and environmental testing.</li>
      </ul>
    `,
    localCta: 'Engineering robust embedded systems for businesses in Kochi, Thrissur, and Kerala.',
    faqs: [
      {
        question: 'Can you update firmware after deployment?',
        answer: 'Yes, we implement Over-The-Air (OTA) update mechanisms in our embedded systems, allowing secure remote updates.'
      },
      {
        question: 'Do you design custom PCBs?',
        answer: 'Yes, we handle end-to-end hardware development including custom PCB design, prototyping, and preparing for manufacturing.'
      }
    ]
  },
  
  'edge-computing-solutions': {
    slug: 'edge-computing-solutions',
    title: 'Edge Computing Solutions in Kerala | Real-Time AI Processing | Ecocee',
    description: 'Edge computing brings AI processing to IoT devices for real-time decisions. Lower latency, better privacy. Serving Kerala businesses.',
    h1: 'Edge Computing Solutions: Real-Time AI Processing at the Edge',
    keywords: ['edge computing', 'edge ai', 'edge processing', 'local ai processing'],
    content: `
      <p class="mb-4 text-lg text-muted-foreground leading-relaxed">
        <strong>Edge Computing</strong> pushes data processing away from centralized cloud servers and closer to where the data is actually generated (the "edge"). Ecocee engineers edge AI systems for immediate, real-world intelligence.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Why Edge Computing Matters</h2>
      <ul class="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
        <li><strong>Ultra-Low Latency:</strong> Immediate decisions for robotics, vehicles, or high-speed manufacturing.</li>
        <li><strong>Bandwidth Savings:</strong> Only send relevant insights to the cloud, not raw video or sensor streams.</li>
        <li><strong>Offline Reliability:</strong> Systems continue functioning even if internet connectivity drops.</li>
        <li><strong>Enhanced Privacy:</strong> Sensitive data (like camera feeds) never leaves the local device.</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Edge AI Applications</h2>
      <p class="mb-4 text-muted-foreground">We deploy intelligence directly onto embedded hardware for:</p>
      <ul class="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
        <li>Computer Vision for quality control on assembly lines</li>
        <li>Predictive maintenance using vibration and audio analysis</li>
        <li>Smart agriculture sensors making localized irrigation decisions</li>
        <li>Automated security and anomaly detection</li>
      </ul>
    `,
    localCta: 'Deploying Edge AI and computing solutions for modern infrastructure in Kerala.',
    faqs: [
      {
        question: 'What hardware do you use for Edge AI?',
        answer: 'We utilize platforms like NVIDIA Jetson, Google Coral, Raspberry Pi, and specialized microcontrollers with neural processing units (NPUs).'
      },
      {
        question: 'What is the difference between Edge Computing and Cloud Computing?',
        answer: 'Edge computing processes data on local devices for instant decisions. Cloud processes centrally (higher latency). Ecocee builds hybrid systems combining both.'
      }
    ]
  }
};
