// Comprehensive Job Portal Data
const initialJobs = [
  {
    id: "job-1",
    title: "Software Engineer - Early Career (SDE 1)",
    company: "Google",
    logo: "https://www.google.com/favicon.ico",
    badge: "FAANG",
    location: "Bengaluru / Hyderabad (Hybrid)",
    type: "Full-Time",
    experience: "0 - 2 Years",
    salary: "₹24,00,000 - ₹38,00,000 / year",
    category: "Software Development",
    postedDate: "2 days ago",
    featured: true,
    skills: ["C++", "Java", "Python", "Data Structures", "System Design Basics"],
    description: "Join Google's Core Engineering team to build massive-scale distributed platforms serving billions of users worldwide. You will write high-performance code, collaborate with global teams, and develop innovative solutions.",
    requirements: [
      "Bachelor's or Master's degree in Computer Science, related technical field, or equivalent practical experience.",
      "Proficiency in one or more general-purpose programming languages: C, C++, Java, or Python.",
      "Solid understanding of algorithms, data structures, and computer science fundamentals.",
      "Knowledge of database concepts, operating systems, and network protocols."
    ],
    responsibilities: [
      "Write maintainable, robust, well-tested code for critical cloud and web applications.",
      "Collaborate with product managers and UX teams to define new feature specs.",
      "Participate in design reviews and code reviews to enforce best engineering practices."
    ],
    rounds: [
      "Round 1: Online Assessment (2 Algorithmic DSA problems, 90 mins)",
      "Round 2: Technical Interview 1 (DSA & Problem Solving)",
      "Round 3: Technical Interview 2 (System Architecture & Coding)",
      "Round 4: Googleyness & Leadership (Cultural Fit)"
    ]
  },
  {
    id: "job-2",
    title: "Graduate Software Development Engineer (SDE I)",
    company: "Amazon",
    logo: "https://www.amazon.com/favicon.ico",
    badge: "FAANG",
    location: "Bengaluru / Pune / Chennai",
    type: "Full-Time",
    experience: "Fresher (0 - 1 Year)",
    salary: "₹28,00,000 - ₹44,00,000 / year",
    category: "Software Development",
    postedDate: "1 day ago",
    featured: true,
    skills: ["Java", "Distributed Systems", "AWS", "DSA", "OOP"],
    description: "Amazon is hiring graduating engineers for SDE-1 roles in AWS and Consumer Retail divisions. Solve challenging problems in scale, low-latency transaction processing, and machine learning infrastructure.",
    requirements: [
      "Graduation year 2024, 2025 or 2026 with B.Tech/B.E/M.Tech in CSE, IT, ECE, or related.",
      "Strong foundation in OOP, Design Patterns, and Algorithm design.",
      "Demonstrated ability to write clean, modular, and optimized code."
    ],
    responsibilities: [
      "Design and deploy scalable microservices using AWS tools (Lambda, SQS, DynamoDB).",
      "Monitor operational health and automate system recovery pipelines.",
      "Optimize customer-facing latency on e-commerce transaction workflows."
    ],
    rounds: [
      "Round 1: Online Assessment (Coding + Work Style Assessment + Debugging)",
      "Round 2: Technical Interview (Trees, Graphs, Dynamic Programming)",
      "Round 3: Technical Interview (OOP, Low-Level Design & Code Quality)",
      "Round 4: Bar Raiser Interview (Amazon Leadership Principles & Deep Dive)"
    ]
  },
  {
    id: "job-3",
    title: "Software Engineer - Azure Cloud Core",
    company: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico",
    badge: "Big Tech",
    location: "Hyderabad / Noida (Hybrid)",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹22,00,000 - ₹35,00,000 / year",
    category: "Cloud & DevOps",
    postedDate: "3 days ago",
    featured: true,
    skills: ["C#", ".NET Core", "C++", "Distributed Systems", "Kubernetes"],
    description: "Build the next frontier of hyper-scale computing with Microsoft Azure. You will engineer reliable, self-healing cloud microservices that power Fortune 500 enterprises.",
    requirements: [
      "1+ years of experience building and shipping cloud services.",
      "Deep understanding of concurrent programming and multithreading.",
      "Comfort with asynchronous event-driven design and container orchestration."
    ],
    responsibilities: [
      "Develop high-throughput telemetry and routing microservices for Azure fabrics.",
      "Collaborate with security researchers to harden distributed infrastructure.",
      "Participate in live site on-call escalations with automated telemetry diagnostics."
    ],
    rounds: [
      "Round 1: Codility Online Assessment (3 Coding Questions, 75 mins)",
      "Round 2: Technical Screen (Data Structures, Strings, Arrays, HashMaps)",
      "Round 3: Low-Level Design & Concurrency Interview",
      "Round 4: Hiring Manager / AA Round (System Design & Behavioral)"
    ]
  },
  {
    id: "job-4",
    title: "Full Stack Developer (Next.js & Node.js)",
    company: "Razorpay",
    logo: "https://razorpay.com/favicon.ico",
    badge: "Fintech Unicorn",
    location: "Bengaluru (On-site)",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹18,00,000 - ₹28,00,000 / year",
    category: "Full Stack",
    postedDate: "Just now",
    featured: true,
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis"],
    description: "Power the checkout flows of millions of online merchants across India. Work on ultra-responsive UI dashboards, real-time transaction reconciliation, and high-availability payment APIs.",
    requirements: [
      "Strong proficiency in TypeScript, React, state management, and modern CSS.",
      "Experience developing RESTful & GraphQL backend APIs in Node.js/Go.",
      "Knowledge of database indexing, query optimization, and Redis caching."
    ],
    responsibilities: [
      "Deliver pixel-perfect, accessible, lightning-fast payment checkout experiences.",
      "Integrate banking partner webhooks with zero packet loss guarantees.",
      "Build real-time merchant analytics dashboards with sub-second response times."
    ],
    rounds: [
      "Round 1: Machine Coding Round (Build a live mini-feature within 90 minutes)",
      "Round 2: Technical DSA & JavaScript internals interview",
      "Round 3: System Design & Backend Architecture",
      "Round 4: Cultural Alignment & Founder/Director Round"
    ]
  },
  {
    id: "job-5",
    title: "Systems Engineer (Digital & Prime Cadre)",
    company: "Tata Consultancy Services (TCS)",
    logo: "https://www.tcs.com/favicon.ico",
    badge: "Top MNC",
    location: "Pan India (Multiple Locations)",
    type: "Full-Time",
    experience: "Fresher (2024 / 2025 Batch)",
    salary: "₹7,00,000 - ₹11,50,000 / year (Digital/Prime)",
    category: "Software Development",
    postedDate: "4 days ago",
    featured: false,
    skills: ["Java / Python", "SQL", "Cloud Basics", "Data Structures", "Aptitude"],
    description: "TCS National Qualifier Test (NQT) hiring for high-performing graduates into TCS Digital and Prime cadres. Work on next-gen enterprise modernization, AI platforms, and cloud migrations.",
    requirements: [
      "B.E/B.Tech/M.E/M.Tech/MCA/M.Sc with minimum 60% aggregate across 10th, 12th, and Degree.",
      "No active backlogs at the time of appearing for the recruitment process.",
      "Maximum gap of up to 2 years permitted with legitimate documentation."
    ],
    responsibilities: [
      "Develop enterprise-level microservices and API gateways for global banks and airlines.",
      "Support continuous delivery pipelines through CI/CD automation tools.",
      "Engage in customer agile sprints delivering reliable bug-free code."
    ],
    rounds: [
      "Round 1: TCS NQT Cognitive + Advanced Coding (2 problems: 1 medium, 1 hard)",
      "Round 2: Technical Interview (Core CS: DBMS, OS, OOPs, Projects)",
      "Round 3: Managerial & HR Interview (Communication & Willingness to relocate)"
    ]
  },
  {
    id: "job-6",
    title: "Specialist Programmer (Power Programmer)",
    company: "Infosys",
    logo: "https://www.infosys.com/favicon.ico",
    badge: "Top MNC",
    location: "Bengaluru / Pune / Hyderabad",
    type: "Full-Time",
    experience: "Fresher to 1 Year",
    salary: "₹9,50,000 - ₹13,00,000 / year",
    category: "Software Development",
    postedDate: "5 days ago",
    featured: false,
    skills: ["Algorithms", "Competitive Programming", "Java/Python/C++", "System Architecture"],
    description: "Infosys is hiring elite coders through the InfyTQ / HackWithInfy / SP Track. Tackle complex algorithmic problems, AI modeling, and enterprise digital transformations.",
    requirements: [
      "B.E./B.Tech graduates with outstanding problem-solving skills in competitive programming.",
      "Expertise in Dynamic Programming, Graph algorithms, and Tree traversals.",
      "Clear communication and passion for cutting-edge software architecture."
    ],
    responsibilities: [
      "Lead high-value algorithmic implementations on client transformation blueprints.",
      "Mentor junior team members and prototype proof-of-concept AI solutions.",
      "Drive code performance profiling and automated test coverage."
    ],
    rounds: [
      "Round 1: HackWithInfy / SP Online Coding Assessment (3 Advanced DSA questions)",
      "Round 2: Deep Technical Interview (DSA proofs, code dry-run, DB schemas)",
      "Round 3: HR & Leadership Interview"
    ]
  },
  {
    id: "job-7",
    title: "Backend Engineer - Payments & Ledger",
    company: "Swiggy",
    logo: "https://www.swiggy.com/favicon.ico",
    badge: "Unicorn",
    location: "Bengaluru (Hybrid)",
    type: "Full-Time",
    experience: "2 - 4 Years",
    salary: "₹26,00,000 - ₹38,00,000 / year",
    category: "Backend Development",
    postedDate: "2 days ago",
    featured: true,
    skills: ["Golang", "Java", "Kafka", "PostgreSQL", "Distributed Systems"],
    description: "Architect and maintain Swiggy's high-frequency financial ledger and checkout pipelines. Process millions of food and grocery orders seamlessly with zero downtime.",
    requirements: [
      "Solid experience in Go or Java writing asynchronous, high-throughput microservices.",
      "Deep understanding of distributed consensus, message queues (Kafka/RabbitMQ), and idempotency.",
      "Hands-on experience with SQL query optimization and transaction isolation."
    ],
    responsibilities: [
      "Build fault-tolerant payment reconciliation services handling peak order spikes.",
      "Design database partitions and caching strategies to maintain sub-50ms latency.",
      "Participate in high-scale architectural design reviews."
    ],
    rounds: [
      "Round 1: Machine Coding (Implement a concurrent in-memory caching system or ledger)",
      "Round 2: DSA & Problem Solving (Trees, Graphs, DP)",
      "Round 3: High-Level System Design (Design Swiggy's Delivery Dispatch or Cart)",
      "Round 4: Engineering Manager & Cultural Fit"
    ]
  },
  {
    id: "job-8",
    title: "Frontend Engineer (React & TypeScript)",
    company: "Flipkart",
    logo: "https://www.flipkart.com/favicon.ico",
    badge: "Big Tech",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹20,00,000 - ₹32,00,000 / year",
    category: "Frontend Development",
    postedDate: "3 days ago",
    featured: true,
    skills: ["React.js", "TypeScript", "Web Performance", "State Management", "Tailwind CSS"],
    description: "Craft web experiences for over 400 million registered Flipkart customers. Focus on Core Web Vitals, ultra-low bundle sizes, and progressive web application standards.",
    requirements: [
      "Proficient in JavaScript (ES6+), React, CSS architecture, and browser internals.",
      "Proven track record of optimizing page load speeds and rendering lifecycles.",
      "Deep empathy for end-user accessibility and device compatibility."
    ],
    responsibilities: [
      "Engineer dynamic interactive UI components for Flipkart Big Billion Days flash sales.",
      "Build reusable component libraries with comprehensive unit and visual regression tests.",
      "Instrument synthetic and real-user monitoring metrics for client performance."
    ],
    rounds: [
      "Round 1: Frontend Machine Coding (Build an Infinite Scroll Search & Filter UI)",
      "Round 2: JavaScript Deep Dive & Web Performance Interview",
      "Round 3: DSA and Logic Building",
      "Round 4: Hiring Manager / Culture Round"
    ]
  },
  {
    id: "job-9",
    title: "Associate Software Engineer",
    company: "Accenture",
    logo: "https://www.accenture.com/favicon.ico",
    badge: "Consulting Giant",
    location: "Pan India (Bangalore, Pune, Hyderabad, Gurgaon)",
    type: "Full-Time",
    experience: "Fresher (0 - 1 Year)",
    salary: "₹4,50,000 - ₹6,50,000 / year",
    category: "Software Development",
    postedDate: "1 week ago",
    featured: false,
    skills: ["Python", "Java", "Cloud Fundamentals", "Problem Solving", "SQL"],
    description: "Kickstart your career at Accenture. Build cross-industry enterprise solutions, collaborate on cloud migrations, and leverage automation tools to drive client innovation.",
    requirements: [
      "All branches of B.E/B.Tech/M.E/M.Tech and MCA with minimum 65% or 6.5 CGPA.",
      "No active backlogs allowed during recruitment or onboarding.",
      "Flexible to work across various technology streams and client locations."
    ],
    responsibilities: [
      "Analyze, design, code, and test software applications in modern agile teams.",
      "Deploy solutions across AWS, Azure, and Google Cloud environments.",
      "Participate in client demos and sprint retrospectives."
    ],
    rounds: [
      "Round 1: Cognitive Assessment (English, Critical Reasoning, Abstract Reasoning)",
      "Round 2: Technical Assessment (Common App & MS Office, Pseudocode, Networking & Cloud)",
      "Round 3: Coding Assessment (2 Coding problems)",
      "Round 4: Communication Assessment (Automated AI voice assessment)",
      "Round 5: Virtual Interview (Technical + HR questions)"
    ]
  },
  {
    id: "job-10",
    title: "Software Engineer (SDE 1) - Core Platform",
    company: "Atlassian",
    logo: "https://www.atlassian.com/favicon.ico",
    badge: "Product Giant",
    location: "Remote (Work from Anywhere in India)",
    type: "Remote",
    experience: "1 - 3 Years",
    salary: "₹28,00,000 - ₹45,00,000 / year",
    category: "Software Development",
    postedDate: "2 days ago",
    featured: true,
    skills: ["Java", "Kotlin", "React", "Microservices", "Docker", "AWS"],
    description: "Join the team powering collaboration tools used by millions of engineers across Jira, Confluence, and Trello. Work 100% remotely with a high-trust, async culture.",
    requirements: [
      "Hands-on experience in Java or Kotlin with modern distributed architecture.",
      "Familiarity with event-driven pipelines, relational databases, and REST APIs.",
      "Exceptional asynchronous communication and documentation skills."
    ],
    responsibilities: [
      "Implement resilient backend microservices for Jira issue tracking pipelines.",
      "Ensure 99.99% availability for critical enterprise customer instances.",
      "Contribute to open-source developer tooling and internal libraries."
    ],
    rounds: [
      "Round 1: HackerRank Coding Challenge (90 minutes, 2 DSA questions)",
      "Round 2: Data Structures & Algorithms pairing session",
      "Round 3: System Design & Code Craftsmanship",
      "Round 4: Values & Cultural Interview (Open company, no BS)"
    ]
  },
  {
    id: "job-11",
    title: "Data Scientist / ML Engineer - Associate",
    company: "Goldman Sachs",
    logo: "https://www.goldmansachs.com/favicon.ico",
    badge: "Top Investment Bank",
    location: "Bengaluru (On-site)",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹24,00,000 - ₹36,00,000 / year",
    category: "AI & Data Science",
    postedDate: "4 days ago",
    featured: true,
    skills: ["Python", "PyTorch", "SQL", "Statistics", "Machine Learning", "FastAPI"],
    description: "Develop quantitative models, natural language financial parsing engines, and algorithmic risk calculation systems within Goldman Sachs Global Markets team.",
    requirements: [
      "Degree in Math, Statistics, Computer Science, or Quantitative Finance.",
      "Strong command over linear algebra, probability, and hypothesis testing.",
      "Practical experience deploying ML pipelines with scikit-learn, PyTorch or TensorFlow."
    ],
    responsibilities: [
      "Formulate predictive models for credit risk, market volatility, and fraud alerts.",
      "Collaborate with quant traders to validate backtesting outcomes.",
      "Productionize model inference endpoints with microsecond SLAs."
    ],
    rounds: [
      "Round 1: Aptitude + Math/Stats + 2 Coding questions (HackerRank)",
      "Round 2: Technical Interview (Machine Learning algorithms & Probabilities)",
      "Round 3: Coding & Data Manipulation Interview (Python, Pandas, SQL)",
      "Round 4: Managing Director Interview"
    ]
  },
  {
    id: "job-12",
    title: "DevOps & Cloud Infrastructure Engineer",
    company: "Zomato",
    logo: "https://www.zomato.com/favicon.ico",
    badge: "Unicorn",
    location: "Gurugram (Hybrid)",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹16,00,000 - ₹25,00,000 / year",
    category: "Cloud & DevOps",
    postedDate: "6 days ago",
    featured: false,
    skills: ["Kubernetes", "Terraform", "AWS", "Prometheus", "CI/CD", "Linux"],
    description: "Keep Zomato's infrastructure humming smoothly through torrential rainstorms and New Year Eve spikes. Automate multi-region deployments and enforce zero-trust security.",
    requirements: [
      "Strong Linux fundamentals and shell scripting abilities.",
      "Experience writing Infrastructure as Code using Terraform or CloudFormation.",
      "Understanding of service meshes, Kubernetes ingress, and Grafana alerting."
    ],
    responsibilities: [
      "Maintain Kubernetes clusters running thousands of container pods.",
      "Create zero-downtime canary deployment pipelines for engineering teams.",
      "Conduct regular chaos engineering drills to test cluster resilience."
    ],
    rounds: [
      "Round 1: Practical Linux and Scripting Assessment",
      "Round 2: Cloud Architecture & Kubernetes Troubleshooting Interview",
      "Round 3: CI/CD & Security Architecture",
      "Round 4: Culture & Team Fit"
    ]
  }
];

// Helper to get all jobs combining initial + user posted
function getAllJobs() {
  const custom = JSON.parse(localStorage.getItem('careerpro_custom_jobs') || '[]');
  return [...custom, ...initialJobs];
}
