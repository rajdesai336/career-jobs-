// Comprehensive Placement Preparation Data: Aptitude, DSA Core, Technical CS, and HR
const prepData = {
  aptitude: {
    title: "Aptitude Preparation",
    description: "Master Quantitative Aptitude, Logical Reasoning, and Verbal Ability with formula cheatsheets, shortcuts, and interactive practice tests.",
    categories: [
      {
        id: "quant",
        name: "Quantitative Aptitude",
        topics: [
          {
            title: "Time, Speed & Distance",
            notes: `
### Key Concepts & Shortcuts
- **Basic Formula:** Speed = Distance / Time (S = D / T)
- **Unit Conversion:** 
  - To convert from km/h to m/s: multiply by **5 / 18**
  - To convert from m/s to km/h: multiply by **18 / 5**
- **Average Speed:**
  - When distance is constant for two speeds $x$ and $y$: 
    $$\\text{Average Speed} = \\frac{2xy}{x + y}$$
  - When time is constant for two speeds $x$ and $y$:
    $$\\text{Average Speed} = \\frac{x + y}{2}$$
- **Relative Speed:**
  - Moving in opposite directions: $S_{\\text{rel}} = S_1 + S_2$
  - Moving in same direction: $S_{\\text{rel}} = |S_1 - S_2|$
- **Trains Problems:**
  - Time taken to cross a pole or standing man = (Length of Train) / Speed
  - Time taken to cross a platform of length $P$ = (Length of Train + $P$) / Speed
            `,
            questions: [
              {
                id: "q_tsd_1",
                question: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
                options: ["65 seconds", "89 seconds", "100 seconds", "75 seconds"],
                correct: 1,
                explanation: "Speed of train = Length / Time = 240 / 24 = 10 m/s. Total distance to cross platform = 240 + 650 = 890 m. Time = 890 / 10 = 89 seconds."
              },
              {
                id: "q_tsd_2",
                question: "A man travels from A to B at 20 km/h and returns from B to A at 30 km/h. What is his average speed for the whole journey?",
                options: ["25 km/h", "24 km/h", "22.5 km/h", "26 km/h"],
                correct: 1,
                explanation: "When distance is identical, Average Speed = 2xy / (x + y) = 2 * 20 * 30 / (20 + 30) = 1200 / 50 = 24 km/h."
              }
            ]
          },
          {
            title: "Time & Work",
            notes: `
### Key Principles
- If A can do a piece of work in $n$ days, A's 1-day work = $1/n$.
- If A's 1-day work is $1/n$, A takes $n$ days to complete the entire work.
- **LCM Method (Fastest Shortcut):**
  - Assume total work = LCM of individual times.
  - Calculate efficiency (units of work per day) for each person: $\\text{Efficiency} = \\text{Total Work} / \\text{Days}$.
  - Combine efficiencies to find total days = $\\text{Total Work} / \\text{Sum of Efficiencies}$.
- **Pipes and Cisterns:**
  - Inlets add positive work (+).
  - Outlets (leaks) perform negative work (-).
            `,
            questions: [
              {
                id: "q_tw_1",
                question: "A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, what fraction of the work is left?",
                options: ["7/15", "8/15", "1/4", "11/15"],
                correct: 1,
                explanation: "Total work = LCM(15, 20) = 60 units. A's efficiency = 60/15 = 4 units/day. B's efficiency = 60/20 = 3 units/day. In 4 days, together they complete (4+3)*4 = 28 units. Remaining work = 60 - 28 = 32 units. Fraction left = 32/60 = 8/15."
              },
              {
                id: "q_tw_2",
                question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is:",
                options: ["50 min", "12 min", "15 min", "25 min"],
                correct: 1,
                explanation: "Part filled in 1 min = 1/20 + 1/30 = (3+2)/60 = 5/60 = 1/12. So the tank will be filled in 12 minutes."
              }
            ]
          },
          {
            title: "Profit, Loss & Percentages",
            notes: `
### Formulas Cheatsheet
- $\\text{Gain} = \\text{Selling Price (SP)} - \\text{Cost Price (CP)}$
- $\\text{Loss} = \\text{CP} - \\text{SP}$
- $\\text{Gain}\\% = \\left(\\frac{\\text{Gain}}{\\text{CP}}\\right) \\times 100$
- $\\text{Loss}\\% = \\left(\\frac{\\text{Loss}}{\\text{CP}}\\right) \\times 100$
- **Successive Percentage Change:** If a value increases by $a\\%$ and then $b\\%$, net change:
  $$\\text{Net}\\% = a + b + \\frac{ab}{100}$$
- **Discount:** Marked Price (MP) - Selling Price (SP). Discount $\\% = (\\text{Discount} / \\text{MP}) \\times 100$.
            `,
            questions: [
              {
                id: "q_pl_1",
                question: "An article is bought for ₹600 and sold for ₹750. What is the profit percentage?",
                options: ["20%", "25%", "30%", "15%"],
                correct: 1,
                explanation: "Profit = 750 - 600 = ₹150. Profit % = (150 / 600) * 100 = 25%."
              },
              {
                id: "q_pl_2",
                question: "Two successive discounts of 20% and 10% are equivalent to a single discount of:",
                options: ["30%", "28%", "25%", "26%"],
                correct: 1,
                explanation: "Net discount = -20 - 10 + (-20 * -10)/100 = -30 + 2 = -28%. Equivalent discount is 28%."
              }
            ]
          },
          {
            title: "Permutations, Combinations & Probability",
            notes: `
### Fundamentals
- **Permutations (Arrangement matters):** $^nP_r = \\frac{n!}{(n-r)!}$
- **Combinations (Selection only):** $^nC_r = \\frac{n!}{r!(n-r)!}$
- **Probability:** $P(E) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of outcomes}}$
- **Independent Events:** $P(A \\cap B) = P(A) \\times P(B)$
- **Cards Summary:** Total 52 cards: 4 suits (Spades, Hearts, Diamonds, Clubs), 13 of each. 26 Red, 26 Black. 12 Face cards (Kings, Queens, Jacks).
            `,
            questions: [
              {
                id: "q_prob_1",
                question: "Two dice are thrown simultaneously. What is the probability of getting two numbers whose sum is 7?",
                options: ["1/6", "1/12", "5/36", "7/36"],
                correct: 0,
                explanation: "Total outcomes = 6 * 6 = 36. Favorable outcomes for sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) -> 6 pairs. Probability = 6/36 = 1/6."
              }
            ]
          }
        ]
      },
      {
        id: "logical",
        name: "Logical Reasoning",
        topics: [
          {
            title: "Syllogisms & Deductive Logic",
            notes: `
### Venn Diagram Rules
1. **All A are B:** A is completely inside circle B.
2. **Some A are B:** Circles A and B overlap.
3. **No A is B:** Circles A and B are totally disjoint.
4. **Some A are not B:** A portion of A definitely lies outside B.
- *Golden Rule:* A conclusion is true ONLY if it holds in EVERY possible Venn diagram depiction.
            `,
            questions: [
              {
                id: "q_syl_1",
                question: "Statements: 1. All apples are fruits. 2. Some fruits are sweet.\\nConclusions: I. Some apples are sweet. II. Some fruits are apples.",
                options: ["Only I follows", "Only II follows", "Either I or II follows", "Both follow"],
                correct: 1,
                explanation: "Since all apples are fruits, the intersection of fruits and apples is non-empty, so 'Some fruits are apples' definitely follows. But sweet fruits may not overlap with apples, so I does not necessarily follow."
              }
            ]
          },
          {
            title: "Blood Relations",
            notes: `
### Generation Tree Mapping
- **+1 Generation:** Father, Mother, Uncle, Aunt
- **0 Generation:** Self, Brother, Sister, Spouse, Cousin
- **-1 Generation:** Son, Daughter, Nephew, Niece
- **Symbols:** Square/Plus (+) for Male, Circle/Minus (-) for Female. Double bond (=) for Married Couple, Single bond (-) for Siblings.
            `,
            questions: [
              {
                id: "q_br_1",
                question: "Pointing to a photograph, a woman says: 'He is the son of the only son of my grandfather.' How is the man in the photograph related to the woman?",
                options: ["Father", "Brother", "Cousin", "Uncle"],
                correct: 1,
                explanation: "The 'only son of my grandfather' is the woman's father. The son of her father is her brother."
              }
            ]
          },
          {
            title: "Coding-Decoding & Series",
            notes: `
### Quick Tips
- Remember alphabet positions: $A=1, B=2, \\dots, Z=26$.
- Use shortcut mnemonic **EJOTY**: $E=5, J=10, O=15, T=20, Y=25$.
- Reverse pairs mnemonic: AZ (Amazon), BY (Boy), CX (Crux), DW (Dew), EV (Evening), FU (Full), GT (GT Road), HS (High School), IR (Indian Railway), JQ (Jungle Queen), KP (Kurta Pyjama), LO (Love), MN (Moon).
            `,
            questions: [
              {
                id: "q_cd_1",
                question: "In a certain code, COMPUTER is written as RFUVQNPC. How is MEDICINE written in that code?",
                options: ["EOJDEJFM", "MFEJDJOE", "EOJDJEFM", "EOJDJEFN"],
                correct: 2,
                explanation: "First and last letters are swapped (M->E, E->M). All intermediate letters are moved +1 forward and reversed."
              }
            ]
          }
        ]
      },
      {
        id: "verbal",
        name: "Verbal Ability & English",
        topics: [
          {
            title: "Sentence Correction & Subject-Verb Agreement",
            notes: `
### Crucial Grammar Rules
1. **Singular subjects take singular verbs**, plural subjects take plural verbs.
2. Words connected by 'as well as', 'along with', 'together with' do not change the subject number. Look at the primary subject.
3. 'Either... or' and 'Neither... nor': The verb agrees with the subject closest to it.
4. 'Each', 'Every', 'Everyone', 'Neither of', 'Either of' are ALWAYS followed by singular verbs.
            `,
            questions: [
              {
                id: "q_va_1",
                question: "Neither the teacher nor the students ____ present in the laboratory.",
                options: ["was", "were", "is", "has been"],
                correct: 1,
                explanation: "In 'Neither... nor', the verb agrees with the nearer subject. 'Students' is plural, so 'were' is correct."
              }
            ]
          }
        ]
      }
    ]
  },

  dsaCore: {
    title: "DSA Core Foundation Notes",
    description: "Essential algorithms, Big-O complexities, data structure properties, and common coding paradigms asked in technical rounds.",
    topics: [
      {
        title: "Asymptotic Analysis & Big-O Cheatsheet",
        content: `
### Time Complexities Ranked (Fastest to Slowest)
1. **$O(1)$ - Constant Time:** Array indexing, Hash table lookup/insert (average), Stack push/pop.
2. **$O(\\log n)$ - Logarithmic Time:** Binary Search, Balanced BST lookup/insertion.
3. **$O(n)$ - Linear Time:** Traversing an array, linear search.
4. **$O(n \\log n)$ - Linearithmic Time:** Merge Sort, Quick Sort (average), Heap Sort.
5. **$O(n^2)$ - Quadratic Time:** Bubble Sort, Selection Sort, Nested loops of size $n$.
6. **$O(2^n)$ - Exponential Time:** Recursive Fibonacci, generating all subsets.
7. **$O(n!)$ - Factorial Time:** Generating all permutations (e.g. Traveling Salesperson brute force).

### Common Data Structure Operations Matrix
| Data Structure | Access | Search | Insertion | Deletion |
|---|---|---|---|---|
| **Array** | $O(1)$ | $O(n)$ | $O(n)$ | $O(n)$ |
| **Stack / Queue** | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ |
| **Singly Linked List** | $O(n)$ | $O(n)$ | $O(1)$ (at head) | $O(1)$ (with ref) |
| **Hash Table** | N/A | $O(1)$ avg / $O(n)$ worst | $O(1)$ avg | $O(1)$ avg |
| **Binary Search Tree** | $O(\\log n)$ | $O(\\log n)$ | $O(\\log n)$ | $O(\\log n)$ |
| **Heap (Min/Max)** | $O(1)$ (peek) | $O(n)$ | $O(\\log n)$ | $O(\\log n)$ |
        `
      },
      {
        title: "Top 7 Algorithmic Patterns to Crack Coding Interviews",
        content: `
### 1. Two Pointers
- **Use when:** Searching pairs in a sorted array, palindrome verification, reversing array in-place.
- **Example:** Two Sum II, 3Sum, Container With Most Water.

### 2. Sliding Window (Fixed & Dynamic Size)
- **Use when:** Subarrays or substrings meeting a sum, uniqueness, or maximum length constraint.
- **Example:** Longest Substring Without Repeating Characters, Minimum Window Substring.

### 3. Fast & Slow Pointers (Floyd's Tortoise & Hare)
- **Use when:** Linked list cycle detection, finding middle node, palindrome linked list.
- **Example:** Linked List Cycle, Middle of the Linked List.

### 4. Modified Binary Search
- **Use when:** Searching in rotated sorted array, peak elements, monotonic condition spaces (e.g., Koko eating bananas).
- **Example:** Search in Rotated Sorted Array.

### 5. Depth First Search (DFS) & Breadth First Search (BFS)
- **Use when:** Tree/Graph traversals, connected components, shortest path in unweighted graph (BFS).
- **Example:** Number of Islands, Clone Graph, Binary Tree Level Order Traversal.

### 6. Dynamic Programming (Tabulation & Memoization)
- **Use when:** Overlapping subproblems and optimal substructure.
- **Example:** Climbing Stairs, 0/1 Knapsack, Longest Common Subsequence (LCS).

### 7. Monotonic Stack
- **Use when:** Finding Next Greater Element, Next Smaller Element, Stock Span, Largest Rectangle in Histogram.
        `
      }
    ]
  },

  technical: {
    title: "Technical CS Fundamentals",
    description: "Comprehensive notes and top interview Q&A for Operating Systems, DBMS & SQL, Computer Networks, and Object-Oriented Programming (OOP).",
    subjects: [
      {
        id: "os",
        name: "Operating Systems (OS)",
        badge: "Core CS",
        summary: "Process scheduling, thread management, deadlocks, and virtual memory paging.",
        notes: `
### 1. Process vs Thread
- **Process:** An executing program with its own address space, memory (Stack, Heap, Data, Code), file handles, and registers. Context switching overhead is high.
- **Thread:** Lightweight unit of execution within a process. Shares the code segment, data segment, and OS resources with sibling threads, but maintains its own program counter and stack.

### 2. Deadlocks
- **4 Necessary Conditions (Coffman Conditions):**
  1. *Mutual Exclusion:* Resources are non-shareable.
  2. *Hold and Wait:* Process holds at least one resource while waiting for another.
  3. *No Preemption:* Resources cannot be forcibly taken from a process.
  4. *Circular Wait:* A circular chain of processes exists where each process waits for a resource held by the next.
- **Handling Deadlocks:** Banker's Algorithm (Deadlock Avoidance), Resource allocation graph cycle detection, or Ostrich algorithm (ignore).

### 3. Virtual Memory & Paging
- **Paging:** Memory management scheme dividing physical memory into fixed-size blocks (Frames) and logical memory into same-size blocks (Pages).
- **Page Fault:** Occurs when a program accesses a page that is mapped in address space but not loaded into physical RAM. The OS loads it from swap storage.
- **Thrashing:** When the system spends more time swapping pages in and out of disk than executing processes.
        `,
        qa: [
          {
            q: "What is the difference between Mutex and Semaphore?",
            a: "A Mutex (Mutual Exclusion Object) is a locking mechanism with ownership: only the thread that acquired the mutex can release it. A Semaphore is a signaling mechanism (integer counter): binary semaphore (0 or 1) or counting semaphore (N resources). Any thread can signal (increment) or wait (decrement)."
          },
          {
            q: "What causes a Page Fault and how does the OS handle it?",
            a: "A page fault occurs when a process accesses a page marked invalid in the Page Table. The MMU raises an interrupt, the OS halts the process, looks up the frame location on swap disk, allocates a free frame in physical RAM, copies the page into RAM, updates the Page Table valid bit, and resumes the process."
          }
        ]
      },
      {
        id: "dbms",
        name: "DBMS & SQL",
        badge: "Core CS",
        summary: "Relational database design, ACID properties, normalization, indexing, and SQL queries.",
        notes: `
### 1. ACID Properties
- **Atomicity:** All operations in a transaction succeed completely or roll back entirely ('all or nothing').
- **Consistency:** Transaction brings database from one valid state to another, maintaining all constraints.
- **Isolation:** Concurrent transactions execute without interfering with each other (Dirty reads, Non-repeatable reads, Phantom reads prevention).
- **Durability:** Once committed, transaction changes survive power outages and system crashes (via Write-Ahead Logging).

### 2. Database Normalization
- **1NF:** Eliminate duplicate columns; every column has atomic (indivisible) values.
- **2NF:** Must be in 1NF and have NO partial dependency (all non-key attributes fully dependent on candidate key).
- **3NF:** Must be in 2NF and have NO transitive dependency ($A \\to B$ and $B \\to C$).
- **BCNF:** Stricter version of 3NF: for every functional dependency $X \\to Y$, $X$ must be a super key.

### 3. Database Indexing
- Typically implemented using **B-Tree** or **B+ Tree**.
- B+ Tree has all data pointers stored in leaf nodes linked as a doubly linked list, enabling fast range scans ($O(\\log N)$ lookup and sequential traversal).
- **Clustered Index:** Defines physical order of rows on disk (only 1 per table, usually Primary Key).
- **Non-Clustered Index:** Separate structure pointing to actual physical records (multiple allowed).
        `,
        qa: [
          {
            q: "Explain difference between WHERE and HAVING clause in SQL.",
            a: "WHERE filters rows before grouping occurs and cannot be used with aggregate functions (like SUM, AVG). HAVING filters aggregated groups after the GROUP BY clause has been evaluated."
          },
          {
            q: "What are SQL Joins and their differences?",
            a: "INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from left table and matching rows from right. RIGHT JOIN returns all from right. FULL OUTER JOIN returns rows when there is a match in either table."
          }
        ]
      },
      {
        id: "cn",
        name: "Computer Networks (CN)",
        badge: "Core CS",
        summary: "OSI vs TCP/IP layers, TCP 3-way handshake, DNS, HTTP/HTTPS, and routing protocols.",
        notes: `
### 1. OSI 7 Layers vs TCP/IP 4 Layers
- **OSI:** Application (7), Presentation (6), Session (5), Transport (4), Network (3), Data Link (2), Physical (1).
- **TCP/IP:** Application, Transport, Internet, Network Access.

### 2. TCP vs UDP
- **TCP (Transmission Control Protocol):** Connection-oriented, reliable, guarantees packet order via sequence numbers, performs flow control (Sliding Window) and congestion control.
- **UDP (User Datagram Protocol):** Connectionless, lightweight, unreliable, no order guarantee, lowest latency (used for VoIP, live video streaming, DNS queries, gaming).

### 3. TCP 3-Way Handshake
1. Client sends **SYN** packet (synchronize sequence number).
2. Server responds with **SYN-ACK** (synchronize and acknowledge).
3. Client replies with **ACK** (acknowledge). Connection established!

### 4. What happens when you type google.com into your browser?
1. Browser checks cache (browser, OS, router, ISP).
2. DNS query resolves IP address through recursive resolvers, root servers, TLD servers, and authoritative nameservers.
3. TCP 3-way handshake established with server IP on port 443.
4. TLS/SSL handshake negotiates cipher suites and exchanges public/symmetric keys.
5. Browser issues HTTP GET request.
6. Server processes request and returns HTTP response (HTML, CSS, JS).
7. Browser engine parses DOM, constructs CSSOM, executes scripts, and renders pixels.
        `,
        qa: [
          {
            q: "Why is HTTPS more secure than HTTP?",
            a: "HTTP sends plaintext packets susceptible to eavesdropping and man-in-the-middle attacks. HTTPS encrypts communication using TLS/SSL using asymmetric public key cryptography for handshake and symmetric AES keys for data transfer, guaranteeing confidentiality, integrity, and authenticity."
          }
        ]
      },
      {
        id: "oops",
        name: "Object-Oriented Programming (OOP) & SOLID",
        badge: "Core CS",
        summary: "Pillars of OOP, design principles, polymorphism types, and SOLID design rules.",
        notes: `
### 4 Pillars of OOP
1. **Encapsulation:** Binding data and methods into a single unit (class) while restricting direct access using private access specifiers and public getters/setters.
2. **Abstraction:** Hiding complex background implementation details and exposing only essential interfaces (Abstract classes, Interfaces).
3. **Inheritance:** Mechanism where a child class acquires properties and behaviors of a parent class (code reusability).
4. **Polymorphism:**
   - *Compile-Time / Static:* Method Overloading (same name, different arguments).
   - *Runtime / Dynamic:* Method Overriding (subclass overrides parent virtual method, resolved via vtable).

### SOLID Principles
- **S - Single Responsibility:** A class should have only one reason to change.
- **O - Open/Closed Principle:** Software entities should be open for extension, but closed for modification.
- **L - Liskov Substitution Principle:** Derived classes must be substitutable for their base classes without altering program correctness.
- **I - Interface Segregation:** Clients should not be forced to depend on interfaces they do not use.
- **D - Dependency Inversion:** High-level modules should depend on abstractions, not on concrete low-level implementations.
        `,
        qa: [
          {
            q: "What is the difference between an Abstract Class and an Interface?",
            a: "An abstract class can contain concrete implemented methods, instance state (member variables), and constructors, and a class can inherit only one class. An interface traditionally contains only method contracts (no state), and a class can implement multiple interfaces."
          }
        ]
      }
    ]
  },

  hr: {
    title: "HR & Behavioral Interview Preparation",
    description: "Master behavioral and managerial interview rounds using the proven STAR method with curated answers for top questions.",
    starMethod: {
      title: "The STAR Framework for Behavioral Questions",
      steps: [
        { letter: "S", word: "Situation", desc: "Set the context by briefly describing the challenge, event, or project background. Keep it concise (15-20% of your answer)." },
        { letter: "T", word: "Task", desc: "Clearly define your exact responsibility and what goal needed to be achieved." },
        { letter: "A", word: "Action", desc: "Detail the specific technical and interpersonal actions YOU took. Use 'I' instead of 'We' to highlight your individual contribution (60% of your answer)." },
        { letter: "R", word: "Result", desc: "Quantify the outcome. Mention measurable impacts, performance gains, customer satisfaction, or key lessons learned (20% of answer)." }
      ]
    },
    questions: [
      {
        id: "hr_1",
        question: "Tell me about yourself.",
        whyAsked: "To evaluate your communication clarity, background relevance, and passion for software engineering.",
        formula: "Present -> Past -> Future formula (2 minutes maximum).",
        sampleAnswer: "I am a passionate software engineer with a strong foundation in computer science and full-stack development. Recently, I completed my degree in Computer Science where I developed projects using React, Node.js, and cloud architectures, including an e-commerce platform that handled over 500 concurrent sessions. Prior to this, I completed an internship where I optimized API endpoints, reducing latency by 35%. I love solving complex algorithmic challenges and have solved over 400 problems across LeetCode. What excites me about this role at your company is your work on distributed cloud infrastructure, where I can leverage my problem-solving skills to build scalable solutions.",
        dos: ["Highlight technical achievements with data", "Speak confidently and conversationally", "Tailor to the company's domain"],
        donts: ["Don't recite your entire resume chronologically", "Don't share overly personal childhood stories", "Don't speak for longer than 2.5 minutes"]
      },
      {
        id: "hr_2",
        question: "What is your greatest weakness?",
        whyAsked: "To test self-awareness, honesty, and whether you are proactively improving.",
        formula: "Real technical weakness + Root cause + Concrete steps already taken to improve + Positive progress.",
        sampleAnswer: "In the past, I sometimes struggled with perfectionism—spending excessive time refactoring code to be flawless rather than shipping a solid version on time. During a college hackathon, this delayed our submission. Realizing this, I began practicing strict timeboxing and adopting iterative development: delivering an MVP first, then scheduling dedicated refactoring cycles based on team feedback. This approach has helped me ship projects on time while maintaining code quality.",
        dos: ["Pick a genuine non-fatal weakness", "Focus heavily on the remedy and your progress"],
        donts: ["Don't give fake weaknesses like 'I work too hard'", "Don't mention core competencies like 'I hate coding'"]
      },
      {
        id: "hr_3",
        question: "Describe a time you had a conflict with a team member and how you resolved it.",
        whyAsked: "To assess emotional intelligence, collaborative attitude, and ability to handle disagreements professionally.",
        formula: "Situation + Diverse viewpoints + Data-driven objective discussion + Mutual compromise + Successful result.",
        sampleAnswer: "During our final year capstone project, my teammate and I disagreed on whether to use MongoDB or PostgreSQL for our database. He preferred MongoDB for fast schema iteration, while I advocated PostgreSQL for relational ACID guarantees. Rather than arguing, I proposed building a quick benchmark with dummy relational data simulating our intended queries. The test revealed that our order relations required heavy joins that PostgreSQL handled 4x faster. Seeing the empirical benchmark, we agreed on PostgreSQL for transactions while using Redis for fast session caching, resulting in an 'A' grade from our project review panel.",
        dos: ["Show respect for differing opinions", "Highlight data-driven compromise and zero personal animosity"],
        donts: ["Don't blame your teammate or play the victim", "Don't claim you've never had a conflict"]
      },
      {
        id: "hr_4",
        question: "Why do you want to join our company?",
        whyAsked: "To verify whether you researched the company and genuinely care about their mission and engineering challenges.",
        formula: "Specific product/tech innovation you admire + Company culture/scale + How your skills bridge the gap.",
        sampleAnswer: "I have been following your engineering blogs on how your team scaled microservices to handle millions of transactions during peak traffic with zero downtime. I find that problem space fascinating. Having built distributed projects in Node.js and AWS, I want to work alongside seasoned engineers where code quality, reliability, and high-velocity shipping are top priorities. Furthermore, your emphasis on ownership and continuous learning makes this the ideal environment for me to grow.",
        dos: ["Mention recent company achievements, tech stacks, or core values", "Be specific and authentic"],
        donts: ["Don't talk solely about perks, salary, or brand name", "Don't give a generic copy-pasted answer"]
      },
      {
        id: "hr_5",
        question: "Where do you see yourself in 5 years?",
        whyAsked: "To evaluate long-term ambition, loyalty, and commitment to technical excellence.",
        formula: "Year 1-2 mastery -> Year 3-4 feature ownership/mentorship -> Year 5 senior architectural contribution.",
        sampleAnswer: "Over the next 5 years, my goal is to develop deep domain expertise as a Senior Software Engineer. In the first couple of years, I aim to master your tech stack and take complete ownership of core modules. By year three to five, I aspire to lead complex feature architectures, mentor junior engineers, and contribute directly to technical roadmap decisions that drive business growth.",
        dos: ["Keep it aligned with an engineering trajectory", "Demonstrate willingness to learn and mentor"],
        donts: ["Don't say 'I want to be the CEO' or 'I plan to launch my own startup'"]
      }
    ]
  }
};
