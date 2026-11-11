// Comprehensive Hiring Process, Exam Patterns, Eligibility & Syllabus for Top Companies
const companiesData = [
  {
    id: "comp-tcs",
    name: "Tata Consultancy Services (TCS)",
    logo: "https://www.tcs.com/favicon.ico",
    category: "Service Based MNC",
    tier: "Top Mass Recruiter & Digital Cadre",
    packages: [
      { role: "TCS Ninja", ctc: "₹3.36 - ₹3.60 LPA" },
      { role: "TCS Digital", ctc: "₹7.00 - ₹7.50 LPA" },
      { role: "TCS Prime", ctc: "₹9.00 - ₹11.50 LPA" }
    ],
    eligibility: {
      degree: "B.E / B.Tech / M.E / M.Tech / MCA / M.Sc (Maths, Stats, CS, IT)",
      percentage: "Minimum 60% or 6.0 CGPA throughout (10th, 12th, Diploma, and Graduation)",
      backlogs: "Strictly NO active backlogs at the time of appearing for the process",
      gapYears: "Overall academic gap of up to 2 years allowed with valid verification",
      ageLimit: "18 to 28 years"
    },
    selectionProcess: [
      {
        round: "Round 1: TCS NQT (National Qualifier Test)",
        type: "Online Assessment (TCS iON)",
        details: "Automated cognitive and advanced programming test split into Foundation and Advanced sections."
      },
      {
        round: "Round 2: Technical Interview",
        type: "In-Person or Virtual",
        details: "Project deep dive, Core CS subjects (DBMS, SQL, OOP, OS), coding live on compiler, and resume walkthrough."
      },
      {
        round: "Round 3: Managerial & HR Interview",
        type: "Virtual / F2F",
        details: "Situational questions, adaptability, readiness for 24/7 shifts and pan-India relocation."
      }
    ],
    examPattern: {
      platform: "TCS iON Hub",
      totalDuration: "165 Minutes",
      negativeMarking: "No negative marking",
      sections: [
        { section: "Numerical Ability", questions: 20, time: "25 mins" },
        { section: "Verbal Ability", questions: 25, time: "25 mins" },
        { section: "Reasoning Ability", questions: 20, time: "25 mins" },
        { section: "Advanced Quantitative & Reasoning (Digital/Prime)", questions: 15, time: "25 mins" },
        { section: "Advanced Coding (2 Problems)", questions: 2, time: "65 mins" }
      ]
    },
    syllabus: {
      aptitude: "Number systems, Time & Work, Speed & Distance, Profit/Loss, Data Interpretation, Blood Relations, Syllogisms, Para Jumbles, Error Spotting.",
      coding: "Arrays, Strings, HashMaps, Matrices, Recursion, Sorting, Searching, Bit Manipulation (C, C++, Java, or Python permitted)."
    },
    prepStrategy: "Focus on speed for Foundation Section. To upgrade to TCS Digital or Prime, solving both coding questions with optimal time and space complexity is mandatory."
  },
  {
    id: "comp-infosys",
    name: "Infosys",
    logo: "https://www.infosys.com/favicon.ico",
    category: "Service Based MNC",
    tier: "Global IT Leader",
    packages: [
      { role: "Systems Engineer (SE)", ctc: "₹3.60 - ₹4.00 LPA" },
      { role: "Digital Specialist Engineer (DSE)", ctc: "₹6.25 - ₹6.50 LPA" },
      { role: "Specialist Programmer (SP)", ctc: "₹9.50 - ₹13.00 LPA" }
    ],
    eligibility: {
      degree: "B.E / B.Tech / M.E / M.Tech / MCA / M.Sc in all engineering branches",
      percentage: "60% or 6.0 CGPA minimum across 10th, 12th, and ongoing degree",
      backlogs: "Zero active backlogs allowed",
      gapYears: "Up to 2 years academic gap accepted with legitimate explanation"
    },
    selectionProcess: [
      {
        round: "Round 1: Infosys Online Assessment / HackWithInfy",
        type: "Proctored Online Test",
        details: "Reasoning ability, mathematical ability, verbal ability, pseudocode, and puzzle-solving."
      },
      {
        round: "Round 2: Technical Interview",
        type: "Virtual",
        details: "Focus on OOP concepts, chosen coding language, DBMS (Write SQL queries), and academic final year project."
      },
      {
        round: "Round 3: HR Interview",
        type: "Virtual",
        details: "Communication skills, relocation flexibility, and willingness to learn new technologies."
      }
    ],
    examPattern: {
      platform: "Infosys Assessment Platform (InfyTQ / Talview)",
      totalDuration: "100 Minutes",
      negativeMarking: "No negative marking (Sectional cutoffs exist)",
      sections: [
        { section: "Reasoning Ability", questions: 15, time: "25 mins" },
        { section: "Mathematical Ability", questions: 10, time: "35 mins" },
        { section: "Verbal Ability", questions: 20, time: "20 mins" },
        { section: "Pseudocode & Debugging", questions: 5, time: "10 mins" },
        { section: "Puzzle Solving", questions: 4, time: "10 mins" }
      ]
    },
    syllabus: {
      aptitude: "Cryptography puzzles, Venn Diagrams, Seating Arrangements, Permutation & Probability, Cryptarithmetic, Reading Comprehension.",
      coding: "For DSE/SP: Dynamic Programming, Greedy Algorithms, Graph Traversals (DFS/BFS), Backtracking."
    },
    prepStrategy: "Infosys mathematical ability and cryptarithmetic puzzles are known to be tricky. Practice time-management strictly to clear the sectional cutoffs."
  },
  {
    id: "comp-amazon",
    name: "Amazon",
    logo: "https://www.amazon.com/favicon.ico",
    category: "Product / FAANG",
    tier: "Tier 1 Big Tech",
    packages: [
      { role: "Software Development Engineer (SDE 1)", ctc: "₹30.00 - ₹45.00 LPA (Base + Stocks + Sign-on)" },
      { role: "Software Development Engineer (SDE 2)", ctc: "₹50.00 - ₹75.00 LPA" }
    ],
    eligibility: {
      degree: "B.Tech / B.E / M.Tech in CS / IT / ECE or equivalent practical background",
      percentage: "Usually 65%+ or 6.5+ CGPA (flexible for strong GitHub / competitive profiles)",
      backlogs: "No active backlogs at time of joining",
      gapYears: "Gaps acceptable if justified by skills and career development"
    },
    selectionProcess: [
      {
        round: "Round 1: Online Assessment (OA 1 + OA 2)",
        type: "HackerRank Proctored",
        details: "2 Algorithmic DSA problems (90 mins) + Amazon Work Style Simulation (Behavioral LP assessment, 20 mins)."
      },
      {
        round: "Round 2: Technical Interview 1",
        type: "Amazon Chime Live Coding",
        details: "Focus on Trees, Graphs, DP, or HashMaps with step-by-step space & time complexity derivation."
      },
      {
        round: "Round 3: Technical Interview 2",
        type: "Live Coding & OOP",
        details: "Object-oriented design (e.g. Design Parking Lot or Chess game) + DSA problem."
      },
      {
        round: "Round 4: Bar Raiser Round",
        type: "Amazon Leadership Principles Deep-Dive",
        details: "Independent senior interviewer checking Amazon 16 Leadership Principles (Customer Obsession, Ownership, Bias for Action)."
      }
    ],
    examPattern: {
      platform: "HackerRank",
      totalDuration: "110 Minutes",
      negativeMarking: "Not applicable",
      sections: [
        { section: "Coding Problem 1 (Medium - Arrays / Trees / Strings)", questions: 1, time: "40 mins" },
        { section: "Coding Problem 2 (Medium/Hard - Graphs / DP / Greedy)", questions: 1, time: "40 mins" },
        { section: "Work Style Assessment (Amazon 16 Leadership Principles)", questions: 35, time: "20 mins" },
        { section: "Code Explanation & Complexity Writeup", questions: 2, time: "10 mins" }
      ]
    },
    syllabus: {
      aptitude: "No explicit aptitude round. Thorough understanding of Leadership Principles is crucial.",
      coding: "Binary Trees, Binary Search Trees, BFS/DFS, Top K Frequent, Sliding Window, DP (Knapsack, Subsequences), Priority Queues."
    },
    prepStrategy: "Every Amazon technical round allocates 15-20 minutes to behavioral questions formatted in the STAR method around Amazon's 16 Leadership Principles. Never ignore LPs!"
  },
  {
    id: "comp-google",
    name: "Google",
    logo: "https://www.google.com/favicon.ico",
    category: "Product / FAANG",
    tier: "Tier 1 Big Tech",
    packages: [
      { role: "Software Engineer (L3 - Fresher / Early Career)", ctc: "₹35.00 - ₹55.00 LPA (Base + Stocks + Bonus)" },
      { role: "Software Engineer (L4)", ctc: "₹65.00 - ₹95.00 LPA" }
    ],
    eligibility: {
      degree: "Bachelor's, Master's or PhD in CS, Math, or relevant technical field",
      percentage: "No rigid percentage cutoff; candidates evaluated primarily on coding prowess",
      backlogs: "Allowed if cleared before graduation",
      gapYears: "No restrictions"
    },
    selectionProcess: [
      {
        round: "Round 1: Google Online Challenge (GOC)",
        type: "Google Internal Platform",
        details: "2 complex algorithmic problems testing advanced dynamic programming, graph algorithms, or math (90 mins)."
      },
      {
        round: "Round 2-4: Technical Onsite Interviews (3 to 4 rounds)",
        type: "Google Meet + Google Docs",
        details: "45 minutes each. Clean, bug-free code without IDE autocomplete. Candidates must communicate thought process clearly."
      },
      {
        round: "Round 5: Googleyness & Leadership Round",
        type: "Virtual",
        details: "Navigating ambiguity, constructive collaboration, doing the right thing, and intellectual humility."
      }
    ],
    examPattern: {
      platform: "Google Online Challenge",
      totalDuration: "90 Minutes",
      negativeMarking: "No negative marking",
      sections: [
        { section: "Algorithmic Problem 1 (Hard)", questions: 1, time: "45 mins" },
        { section: "Algorithmic Problem 2 (Hard)", questions: 1, time: "45 mins" }
      ]
    },
    syllabus: {
      aptitude: "Not applicable. Deep CS theory and mathematical thinking required.",
      coding: "Segment Trees, Fenwick Trees, Disjoint Set Union (DSU), Shortest Paths (Dijkstra, Bellman-Ford), Trie, DP with Bitmasking."
    },
    prepStrategy: "Write syntactically clean code on plain text editors (Google Docs) without relying on syntax highlighting. Talk out loud throughout the entire problem-solving cycle."
  },
  {
    id: "comp-microsoft",
    name: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico",
    category: "Product / Big Tech",
    tier: "Tier 1 Big Tech",
    packages: [
      { role: "Software Engineer (L59/L60 - SDE 1)", ctc: "₹24.00 - ₹42.00 LPA" },
      { role: "Software Engineer (L61/L62 - SDE 2)", ctc: "₹45.00 - ₹65.00 LPA" }
    ],
    eligibility: {
      degree: "B.Tech / M.Tech / MCA / Dual Degree in Computer Science, IT, or allied fields",
      percentage: "70% or 7.0 CGPA and above in current degree",
      backlogs: "Zero active backlogs at time of recruitment",
      gapYears: "Gaps up to 1 year tolerated with justification"
    },
    selectionProcess: [
      {
        round: "Round 1: Codility / Mettle Online Test",
        type: "Online Proctored",
        details: "3 algorithmic coding questions (75 mins)."
      },
      {
        round: "Round 2: Technical Interview 1",
        type: "Microsoft Teams",
        details: "Focus on Strings, Linked Lists, Matrix manipulations, and Recursion."
      },
      {
        round: "Round 3: Technical Interview 2",
        type: "Microsoft Teams",
        details: "Trees, Graphs, System internals, Multithreading, Memory management."
      },
      {
        round: "Round 4: As Appropriate (AA) / Partner Round",
        type: "Leadership Interview",
        details: "High-level design, culture fit, growth mindset, and project architectural defense."
      }
    ],
    examPattern: {
      platform: "Codility",
      totalDuration: "75 Minutes",
      negativeMarking: "No negative marking",
      sections: [
        { section: "Problem 1 (Easy / Medium - Array / String)", questions: 1, time: "25 mins" },
        { section: "Problem 2 (Medium - Trees / Greedy)", questions: 1, time: "25 mins" },
        { section: "Problem 3 (Medium/Hard - DP / Graph)", questions: 1, time: "25 mins" }
      ]
    },
    syllabus: {
      aptitude: "No explicit aptitude test for core tech roles.",
      coding: "Trees, Binary Search, Linked Lists, Bit Manipulation, String algorithms, Low-Level Design (LLD)."
    },
    prepStrategy: "Microsoft places high value on clean coding style, modular function decomposition, comprehensive test cases, and edge-case handling."
  },
  {
    id: "comp-accenture",
    name: "Accenture",
    logo: "https://www.accenture.com/favicon.ico",
    category: "Consulting & IT Services",
    tier: "Global Giant",
    packages: [
      { role: "Associate Software Engineer (ASE)", ctc: "₹4.50 LPA" },
      { role: "Advanced Associate Software Engineer (AASE)", ctc: "₹6.50 LPA" }
    ],
    eligibility: {
      degree: "B.E / B.Tech / M.E / M.Tech / MCA (All branches eligible)",
      percentage: "Minimum 65% or 6.5 CGPA throughout 10th, 12th, and Degree",
      backlogs: "Zero active backlogs allowed",
      gapYears: "Maximum 1 year allowed"
    },
    selectionProcess: [
      {
        round: "Round 1: Cognitive & Technical Assessment",
        type: "Proctored Online (CoCubes)",
        details: "Cognitive (English, Critical Reasoning, Abstract) + Technical (Pseudocode, Common Apps, Cloud & Network fundamentals)."
      },
      {
        round: "Round 2: Coding Assessment",
        type: "Online (Immediate after clearing Round 1)",
        details: "2 coding questions (45 minutes) in C, C++, Java, or Python."
      },
      {
        round: "Round 3: Communication Assessment",
        type: "AI Voice Proctored (Pearson / Mettl)",
        details: "Reading, listening, repeating sentences, vocabulary, and impromptu storytelling."
      },
      {
        round: "Round 4: Technical & HR Interview",
        type: "Virtual",
        details: "Discussion of resume projects, technology interests, and situational behavior."
      }
    ],
    examPattern: {
      platform: "Wheebox / CoCubes",
      totalDuration: "90 Minutes + 45 Minutes",
      negativeMarking: "No negative marking",
      sections: [
        { section: "English Ability", questions: 17, time: "Integrated" },
        { section: "Critical Thinking & Reasoning", questions: 18, time: "Integrated" },
        { section: "Abstract Reasoning", questions: 15, time: "Integrated" },
        { section: "Common Applications & MS Office", questions: 12, time: "Integrated" },
        { section: "Pseudocode Analysis", questions: 18, time: "Integrated" },
        { section: "Networking, Security & Cloud Basics", questions: 10, time: "Integrated" },
        { section: "Hands-on Coding Assessment", questions: 2, time: "45 mins" }
      ]
    },
    syllabus: {
      aptitude: "Blood Relations, Syllogisms, Number series, Error spotting, Reading comprehension.",
      coding: "Array transformations, String manipulations, basic Math & Prime number checks, Matrices."
    },
    prepStrategy: "The Pseudocode section carries significant weight and determines whether you advance to the Advanced ASE track. Practice tracing loop variables carefully."
  },
  {
    id: "comp-wipro",
    name: "Wipro",
    logo: "https://www.wipro.com/favicon.ico",
    category: "Service Based MNC",
    tier: "Global IT Services",
    packages: [
      { role: "Elite National Talent Hunt (Project Engineer)", ctc: "₹3.50 - ₹4.00 LPA" },
      { role: "Turbo Cadre", ctc: "₹6.50 - ₹7.00 LPA" }
    ],
    eligibility: {
      degree: "B.E / B.Tech / M.Tech / 5-Year Integrated-M.Tech in all branches",
      percentage: "60% or 6.0 CGPA in 10th, 12th, and ongoing graduation",
      backlogs: "Maximum 1 active backlog permitted at assessment time",
      gapYears: "Up to 3 years gap permitted in education"
    },
    selectionProcess: [
      {
        round: "Round 1: National Talent Hunt Assessment (NLTH)",
        type: "AMCAT Proctored",
        details: "Aptitude + Written Communication (Essay writing) + 2 Coding questions."
      },
      {
        round: "Round 2: Technical Interview",
        type: "Virtual",
        details: "Core subjects (DBMS, OOPs, Data Structures), coding questions, and project explanation."
      },
      {
        round: "Round 3: HR Interview",
        type: "Virtual",
        details: "Verification of documents, service agreement, and shift willingness."
      }
    ],
    examPattern: {
      platform: "AMCAT / Aspiring Minds",
      totalDuration: "128 Minutes",
      negativeMarking: "Adaptive test; no explicit penalty but wrong answers drop question difficulty",
      sections: [
        { section: "Logical Reasoning", questions: 14, time: "14 mins" },
        { section: "Quantitative Ability", questions: 16, time: "16 mins" },
        { section: "English (Verbal Ability)", questions: 18, time: "18 mins" },
        { section: "Written Communication (Essay)", questions: 1, time: "20 mins" },
        { section: "Coding Assessment", questions: 2, time: "60 mins" }
      ]
    },
    syllabus: {
      aptitude: "Speed, Time & Distance, Profit and Loss, Venn Diagrams, Coding-Decoding, Sentence Correction.",
      coding: "Strings, Arrays, Number systems, Matrix operations, Two Pointers."
    },
    prepStrategy: "Since AMCAT is computer-adaptive, the first 5 to 7 questions of every section determine your scoring bracket. Answer them with high precision."
  },
  {
    id: "comp-cognizant",
    name: "Cognizant",
    logo: "https://www.cognizant.com/favicon.ico",
    category: "Service Based MNC",
    tier: "Global IT Leader",
    packages: [
      { role: "GenC", ctc: "₹4.00 - ₹4.25 LPA" },
      { role: "GenC Elevate", ctc: "₹4.50 - ₹5.00 LPA" },
      { role: "GenC Next", ctc: "₹6.75 - ₹7.00 LPA" }
    ],
    eligibility: {
      degree: "B.E / B.Tech / M.E / M.Tech / MCA / M.Sc in CS, IT, ECE, EEE and allied disciplines",
      percentage: "60% or 6.0 CGPA minimum with no current backlogs",
      backlogs: "Zero active backlogs allowed",
      gapYears: "Up to 1 year gap allowed"
    },
    selectionProcess: [
      {
        round: "Round 1: Cognizant Communication & Aptitude / Skill Assessment",
        type: "Superset / HackerEarth",
        details: "Aptitude, Domain/Code debugging, and Advanced programming test based on category."
      },
      {
        round: "Round 2: Technical Interview",
        type: "Virtual",
        details: "Project discussion, scenario-based coding, SQL queries, and technology trends."
      },
      {
        round: "Round 3: HR Interview",
        type: "Virtual",
        details: "Communication evaluation, document validation, and location preferences."
      }
    ],
    examPattern: {
      platform: "HackerEarth / Mettl",
      totalDuration: "120 Minutes",
      negativeMarking: "No negative marking",
      sections: [
        { section: "Quantitative Aptitude", questions: 25, time: "35 mins" },
        { section: "Logical Reasoning", questions: 25, time: "35 mins" },
        { section: "Code Debugging & Automata", questions: 7, time: "20 mins" },
        { section: "Coding Challenge (for GenC Next)", questions: 2, time: "45 mins" }
      ]
    },
    syllabus: {
      aptitude: "Percentages, Ratios, Averages, Clocks & Calendars, Statements & Assumptions.",
      coding: "Bitwise operators, String algorithms, Recursion, Dynamic Programming (for GenC Next)."
    },
    prepStrategy: "GenC Next candidates must focus on advanced data structures (Trees and Graphs). Code debugging tests your ability to spot syntax and logical errors under time pressure."
  }
];
