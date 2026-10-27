// Single source of truth: content comes from the resume. Edit here only.
export const profile = {
  name: 'Aftab Husain',
  title: 'Software Engineer',
  tagline: 'Generative AI & Agentic AI | Node.js | NestJS | TypeScript | AWS',
  location: 'Pune, India',
  relocation: 'Open to Relocation',
  email: 'aftab.husain3355@gmail.com',
  phone: '+91 95697 21196',
  phoneHref: 'tel:+919569721196',
  linkedin: 'https://www.linkedin.com/in/aftab-husain-6a077b221/',
  github: 'https://github.com/ahkhan13',
  resume: import.meta.env.BASE_URL + 'Aftab_Resume.pdf',
  summary:
    'Software Engineer with 4.5 years of professional experience building production backend systems and Generative AI features using Node.js, NestJS, TypeScript, and AWS. Built and enhanced an AI document verification agent with Amazon Bedrock (Claude) and AWS Textract, using confidence-based auto-approval with human review. Strong backend foundation in REST and GraphQL API design, microservices, database optimization (MySQL, PostgreSQL, MongoDB), and Redis caching. Experienced with Docker, GitHub Actions CI/CD, feature-flag releases, and New Relic observability in Agile teams.',
}

export const stats = [
  { value: '4.5', label: 'Years of experience' },
  { value: '33%', label: 'Lower API latency' },
  { value: '60%', label: 'Lower database load' },
  { value: '25%', label: 'Lower infrastructure cost' },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Generative AI & Agentic AI', items: ['Amazon Bedrock (Claude)', 'LLM Integration', 'AI Agents', 'Agentic AI', 'RAG', 'Prompt Engineering', 'Multimodal AI', 'AI Document Verification (Human-in-the-Loop)'] },
  { group: 'AI Frameworks & Services', items: ['LangChain', 'LangGraph', 'AWS Textract (OCR)'] },
  { group: 'Languages', items: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'GraphQL', 'HTML5', 'CSS3'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'GraphQL APIs', 'Microservices', 'Serverless', 'Event-Driven Architecture'] },
  { group: 'Databases & Caching', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Redis', 'DynamoDB'] },
  { group: 'ORM, Auth & API Docs', items: ['TypeORM', 'Prisma', 'Mongoose', 'JWT', 'Swagger/OpenAPI'] },
  { group: 'Cloud & DevOps', items: ['AWS Lambda', 'API Gateway', 'EC2', 'ECS', 'ECR', 'S3', 'SQS', 'SNS', 'CloudWatch', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'] },
  { group: 'Frontend', items: ['React.js', 'Redux', 'React Native'] },
  { group: 'Observability & Release Safety', items: ['New Relic', 'Distributed Tracing', 'Alerting', 'Statsig Feature Flags', 'Structured Logging', 'Audit Trails'] },
  { group: 'Testing, Tools & Practices', items: ['Jest', 'Postman', 'Git', 'Jira', 'Agile', 'Code Reviews', 'Root Cause Analysis', 'Performance Tuning'] },
]

export const experience = [
  {
    role: 'Software Engineer',
    note: 'Promoted from Junior Software Engineer',
    company: 'Eternalight Infotech Pvt. Ltd.',
    place: 'Pune, MH',
    period: 'Apr 2024 – Present',
    bullets: [
      'Engineered and optimized high-traffic REST APIs in Node.js, NestJS, and Express.js, reducing average API latency from 450ms to 300ms (33%) through query tuning, compound indexing, and request-level caching.',
      'Restructured MySQL and MongoDB schemas using denormalization and compound indexing for microservice endpoints, increasing throughput by 40% and eliminating recurring slow-query alerts in production.',
      'Designed a Redis-based distributed caching layer for read-heavy services, reducing database load by 60% and absorbing traffic spikes without additional horizontal scaling.',
      'Replaced always-on processes with event-driven AWS Lambda workflows, cutting infrastructure costs by 25% while keeping workloads responsive.',
      'Built CI/CD pipelines with GitHub Actions and automated rollback, reducing deployment time from 30 minutes to 8 minutes and lowering release risk.',
      'Implemented observability with New Relic dashboards, distributed tracing, and alerting across microservices, reducing mean time to detect (MTTD) and accelerating root cause analysis (RCA).',
      'Integrated Generative AI into production services using Amazon Bedrock (Claude) and AWS Textract, building an AI document verification agent with confidence-based auto-approval and human-in-the-loop review for the Switch platform.',
      'Owned backend delivery for the Navan and Switch platforms, including feature-flag rollouts and compliance controls, working within an Agile team with regular code reviews.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    note: '',
    company: 'Eternalight Infotech Pvt. Ltd.',
    place: 'Pune, MH',
    period: 'May 2022 – Mar 2024',
    bullets: [
      'Built scalable Node.js microservices using a modular architecture, and redesigned MongoDB schemas and MySQL queries to achieve consistent sub-100ms data access under production load.',
      'Integrated Redis caching for high-frequency endpoints, eliminating redundant database calls and improving response consistency.',
      'Introduced Jest unit tests and peer code reviews, reducing production defect rates.',
      'Delivered the GoRally booking platform backend across the full release cycle, including QA validation and post-release performance monitoring.',
    ],
  },
]

// Add a `link` (repo or live URL) to any project to show a button on its card.
export const projects: { name: string; type: string; period: string; stack: string[]; bullets: string[]; link?: string }[] = [
  {
    name: 'Switch',
    type: 'Healthcare Staffing',
    period: 'Jan 2026 – Present',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS Lambda', 'AWS SQS', 'AWS S3', 'Amazon Bedrock', 'AWS Textract'],
    bullets: [
      'Enhanced an AI document verification agent using Amazon Bedrock (Claude) and AWS Textract OCR, enabling confidence-based auto-approval with human review for lower-confidence documents.',
      'Built a rules-based clinician eligibility engine with live data migration, Redis projections, and database drift checks, keeping shift eligibility accurate as source data changed.',
      'Developed skill assessments and training modules with scoring, retakes, certificates, and expiry tracking; blocked shift access for clinicians with pending requirements.',
      'Implemented Statsig feature flags, compliance permissions, audit trails, and structured logging to improve release safety and speed up production debugging.',
    ],
  },
  {
    name: 'Navan',
    type: 'Trip Management System',
    period: 'Jan 2024 – Dec 2025',
    stack: ['NestJS', 'Redis', 'API Gateway', 'AWS Lambda', 'ECS', 'ECR', 'S3', 'CloudWatch'],
    bullets: [
      'Architected a config-driven Navitaire LCC integration framework in NestJS, onboarding IndiGo, SpiceJet, Akasa Air, and Air India Express and reducing new-carrier integration time from months to under one week.',
      'Standardized booking workflows (availability, pricing, PNR, ancillaries) into shared Node.js modules, reducing engineering effort by 70% and platform incidents by 40% while expanding coverage to major domestic routes.',
      'Built a GST SEZ compliance engine with automated validation, achieving full tax-compliance coverage; optimized high-traffic APIs with Redis caching, cutting latency by 40%.',
      'Improved release safety through New Relic distributed tracing, custom alerts, and feature-flag rollouts, contributing to a 25% increase in monthly bookings.',
    ],
  },
  {
    name: 'GoRally',
    type: 'Stadium & Turf Booking Platform',
    period: 'Jan 2023 – Dec 2023',
    stack: ['React.js', 'Node.js', 'NestJS', 'GraphQL', 'MySQL', 'TypeORM', 'Redis', 'AWS S3', 'AWS EC2'],
    bullets: [
      'Built the booking platform from scratch, covering venue onboarding, time-slot management, pricing, and booking flows.',
      'Designed GraphQL APIs in NestJS with TypeORM and MySQL for venues, availability, and bookings, with role-based access control.',
      'Developed a slot management engine that handles concurrent bookings and prevents double-booking across venues and courts.',
      'Cached high-frequency queries in Redis and tuned MySQL indexes; ran QA, AWS deployment, and post-release monitoring.',
    ],
  },
  {
    name: 'Xetlink AI',
    type: 'Client Project · Multilingual Video Conferencing',
    period: 'Oct 2022 – Dec 2022',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Puppeteer', 'React.js'],
    bullets: [
      'Built bots that join Google Meet, Zoom, and Webex to record meetings and chats.',
      'Delivered real-time transcriptions from recorded sessions and optimized recording workflows for reliability and low latency.',
      'Integrated AI-based transcription and translation to support speech-to-text and multilingual meetings.',
      'Added analytics and reporting that summarize meeting insights and track participation.',
    ],
  },
  {
    name: 'LumenStocks',
    type: 'Client Project · Stock Price Analytics',
    period: 'May 2022 – Sep 2022',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'React.js'],
    bullets: [
      'Built a web application for analyzing stock prices of multinational companies, with real-time price views.',
      'Added company profile pages with the basic insights needed for investment decisions.',
      'Implemented a subscription model: limited access for free users and exclusive features for premium subscribers.',
    ],
  },
  {
    name: 'Talklin',
    type: 'Personal Project · Real-Time Chat App',
    period: '2022',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Handlebars'],
    bullets: [
      'Built instant one-to-one messaging with Socket.IO.',
      'Implemented authentication, friend requests, and private conversations, storing messages in MongoDB.',
      'Built a responsive server-rendered UI with Express.js and Handlebars.',
    ],
    link: 'https://github.com/ahkhan13/Talklin',
  },
  {
    name: 'Fable',
    type: 'Personal Project · Social Networking Platform',
    period: '2022',
    stack: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'],
    bullets: [
      'Built a social platform with posts, likes, comments, and friend requests on a relational MySQL schema.',
      'Implemented authentication, profile management, friend chat, and a news feed of posts from connected users.',
    ],
    link: 'https://github.com/ahkhan13/Fable',
  },
  {
    name: 'Stallin',
    type: 'Personal Project · React Web App',
    period: '2022',
    stack: ['React.js', 'JavaScript', 'CSS3'],
    bullets: [
      'Built a responsive React.js app with a component-based architecture, deployed on GitHub Pages.',
    ],
    link: 'https://github.com/ahkhan13/Stallin',
  },
]

export const education = {
  school: 'Indian Institute of Information Technology',
  place: 'Kurnool, AP',
  degree: 'B.Tech in Electronics & Communication Engineering',
  period: '2019 – 2023',
}