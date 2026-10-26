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
  resume: '/Aftab_Husain_Resume.pdf',
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
    stack: ['Node.js', 'NestJS', 'GraphQL', 'MySQL', 'Redis', 'AWS S3', 'AWS EC2', 'TypeORM'],
    bullets: [
      'Built and delivered the GoRally stadium/turf booking platform end-to-end from scratch, covering venue onboarding, time-slot management, pricing, and booking flows.',
      'Designed and implemented scalable GraphQL APIs using NestJS and TypeORM with MySQL, enabling efficient querying of venues, availability, and bookings with role-based access control.',
      'Developed a dynamic slot management engine to handle concurrent bookings, prevent double-booking, and manage real-time availability across multiple venues and courts.',
      'Integrated Redis for caching high-frequency queries (venue listings, availability) and optimized MySQL schemas with proper indexing to support smooth booking under concurrent traffic.',
      'Built admin dashboards for venue owners to manage slots, pricing, bookings, and revenue tracking, along with user flows for search, booking, and payment integration.',
      'Handled full release cycle including QA, deployment on AWS (EC2, S3), performance monitoring, and post-deployment fixes to ensure platform stability.',
    ],
  },
  {
    name: 'Talklin',
    type: 'Real-Time Chat Application',
    period: '2022',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Handlebars (hbs)'],
    bullets: [
      'Built a real-time chat application with one-to-one messaging using Socket.IO for instant bidirectional communication.',
      'Implemented user authentication, friend requests, and private conversations with MongoDB for persistent message storage.',
      'Designed a clean server-rendered UI using Express.js and Handlebars with responsive layouts.',
    ],
    link: 'https://github.com/ahkhan13/Talklin',
  },
  {
    name: 'Fable',
    type: 'Social Networking Platform',
    period: '2022',
    stack: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'],
    bullets: [
      'Developed a social media platform with post creation, likes, comments, friend requests, and real-time-style interactions.',
      'Built authentication, profile management, and friend-network features with a relational MySQL schema.',
      'Implemented friend chat functionality and news-feed logic to display relevant posts from connected users.',
    ],
    link: 'https://github.com/ahkhan13/Fable',
  },
  {
    name: 'Stallin',
    type: 'React Web Application',
    period: '2022',
    stack: ['React.js', 'JavaScript', 'CSS3', 'Create React App'],
    bullets: [
      'Built a responsive React.js application with component-based architecture and clean UI design.',
      'Deployed to GitHub Pages with optimized production build for fast load times.',
    ],
    link: 'https://github.com/ahkhan13/Stallin',
  },
  {
    name: 'Viscord',
    type: 'Discord Clone (Client-Only Demo)',
    period: '2025',
    stack: ['React.js', 'TypeScript', 'Vite', 'CSS Modules', 'Event-Driven Reducer'],
    bullets: [
      'Built a Discord-like web app from scratch as an independent implementation with mock in-memory data and no backend.',
      'Implemented server/guild rail, channel sidebar, real-time-style chat UI, member list, DM/Friends view, and client-side routing.',
      'Modeled Discord domain concepts (guilds, channels, messages) with an event-driven reducer architecture for state management.',
      'Designed with attention to Discord UX patterns including message grouping, day dividers, inline markdown, and collapsible categories.',
    ],
    link: 'https://github.com/ahkhan13/viscord',
  },
  {
    name: 'Letflix',
    type: 'Netflix Clone (React + TypeScript)',
    period: '2025',
    stack: ['React.js', 'TypeScript', 'Vite', 'CSS', 'Oxlint'],
    bullets: [
      'Built a Netflix-inspired streaming UI with React, TypeScript, and Vite for fast development and optimized builds.',
      'Implemented movie/show browsing interface with modern component architecture and responsive design.',
      'Focused on clean UI/UX patterns inspired by Netflix with efficient component composition.',
    ],
    link: 'https://github.com/ahkhan13/letflix',
  },
]

export const education = {
  school: 'Indian Institute of Information Technology',
  place: 'Kurnool, AP',
  degree: 'B.Tech in Electronics & Communication Engineering',
  period: '2019 – 2023',
}
