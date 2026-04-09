import {
  Bot,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck2,
  FileCheck2,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
  NotebookTabs,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: number;
  suffix?: string;
  label: string;
  note: string;
};

export type ToolItem = {
  name: string;
  summary: string;
  useCase: string;
  accent: string;
};

export type CurriculumItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  monthly: string;
  yearly: string;
  audience: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type CourseItem = {
  slug: string;
  category: string;
  level: string;
  title: string;
  duration: string;
  excerpt: string;
  outcomes: string[];
  modules: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: typeof Users;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type ProposalMilestone = {
  week: string;
  title: string;
  detail: string;
};

export const brand = {
  name: "FacultyOS AI Academy",
  shortName: "FacultyOS",
  tagline: "Practical AI capability building for modern schools."
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "For Schools", href: "/for-schools" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const schoolLogos = [
  "Northfield International",
  "Vedanta Learning Schools",
  "Springboard K-12",
  "The Horizon Academy",
  "Aster Public School",
  "Westbridge Group"
];

export const metrics: Metric[] = [
  {
    value: 10000,
    suffix: "+",
    label: "teacher learning hours projected",
    note: "Built around live workshops and self-paced practice."
  },
  {
    value: 50,
    suffix: "+",
    label: "practical AI workflows",
    note: "Lesson planning, assessment, communication, and more."
  },
  {
    value: 20,
    suffix: "+",
    label: "classroom-ready tool guides",
    note: "Clear tool selection without hype or overwhelm."
  },
  {
    value: 90,
    suffix: "%",
    label: "faster content preparation",
    note: "Positioned as directional marketing copy for everyday workflows."
  }
];

export const featureTools: ToolItem[] = [
  {
    name: "ChatGPT",
    useCase: "Lesson ideation, differentiated explanations, activity generation.",
    summary: "Teachers learn repeatable prompt patterns for plans, worksheets, rubrics, and parent-facing drafts.",
    accent: "from-[#fdfefe] via-[#edf3fb] to-[#ffffff]"
  },
  {
    name: "Gemini",
    useCase: "Research support, structured summaries, and multimodal exploration.",
    summary: "Used for synthesizing topics, comparing sources, and building concise student-friendly content.",
    accent: "from-[#f7f9ff] via-[#f2f6fd] to-[#ffffff]"
  },
  {
    name: "Canva AI",
    useCase: "Presentations, classroom visuals, and creative teaching materials.",
    summary: "Teachers practice turning raw lesson ideas into polished slides, posters, and visual explainers.",
    accent: "from-[#ffffff] via-[#f4f7fb] to-[#eef2f9]"
  },
  {
    name: "Microsoft Copilot",
    useCase: "Workflow productivity in Word, PowerPoint, Outlook, and Teams.",
    summary: "A school-friendly path for drafting communication, summarizing meetings, and reworking curriculum notes.",
    accent: "from-[#fafbfd] via-[#eef2f6] to-[#ffffff]"
  },
  {
    name: "NotebookLM",
    useCase: "Source-grounded synthesis and topic review.",
    summary: "Great for turning curriculum documents and notes into structured study material or briefing packs.",
    accent: "from-[#fefefe] via-[#eef0f5] to-[#ffffff]"
  },
  {
    name: "Perplexity",
    useCase: "Fast research, citation-aware exploration, and comparison tasks.",
    summary: "Teachers learn how to verify information quickly and build higher-confidence drafts for classes.",
    accent: "from-[#fbfcff] via-[#eef4f7] to-[#ffffff]"
  },
  {
    name: "Gamma",
    useCase: "Presentation generation and content storyboarding.",
    summary: "Ideal for teachers who need faster slide creation while preserving clarity and instructional quality.",
    accent: "from-[#fefefd] via-[#f3f4f8] to-[#ffffff]"
  },
  {
    name: "Quiz & Worksheet AI",
    useCase: "Practice sheets, formative assessment, and revision packs.",
    summary: "Teachers see how to generate, review, and refine outputs before classroom use.",
    accent: "from-[#ffffff] via-[#eef3f5] to-[#ffffff]"
  }
];

export const curriculum: CurriculumItem[] = [
  {
    title: "AI basics for educators",
    description: "Understand the current AI landscape, tool categories, and where each tool is genuinely useful in school settings."
  },
  {
    title: "Prompting for teachers",
    description: "Learn role, context, rubric, and iteration techniques that improve output quality without technical complexity."
  },
  {
    title: "Lesson planning with AI",
    description: "Build weekly plans, differentiated activities, and classroom resources aligned with curriculum objectives."
  },
  {
    title: "Assessments, rubrics, and feedback",
    description: "Create quizzes, exit tickets, rubric drafts, model answers, and feedback structures faster."
  },
  {
    title: "Presentations and classroom content",
    description: "Turn raw notes into polished slides, visuals, handouts, and student-friendly concept explainers."
  },
  {
    title: "Parent communication and admin drafts",
    description: "Draft emails, updates, meeting summaries, and event communication with more consistency and speed."
  },
  {
    title: "Responsible AI, privacy, and ethics",
    description: "Teach safe usage norms, human review practices, and policy-aware adoption across staff teams."
  },
  {
    title: "School AI readiness",
    description: "Support leaders with onboarding frameworks, implementation playbooks, and policy-aligned usage standards."
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Assess school needs",
    description: "Map current teacher readiness, subject-specific use cases, and policy concerns before rollout."
  },
  {
    title: "Train with live and self-paced learning",
    description: "Blend expert-led sessions with structured modules teachers can revisit when needed."
  },
  {
    title: "Practice guided workflows",
    description: "Use classroom-relevant prompts, templates, and examples instead of abstract AI theory."
  },
  {
    title: "Track outcomes in the LMS",
    description: "Review completion, workshop participation, certificates, and adoption momentum across teams."
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Individual Teacher",
    monthly: "Rs. 999",
    yearly: "Rs. 9,590",
    audience: "For independent educators building core AI fluency",
    description: "A focused starting plan for teachers who want practical AI habits they can use every week.",
    features: [
      "Access to core AI tool courses",
      "Prompt library and lesson templates",
      "Monthly live implementation session",
      "Certificate of completion",
      "Educator workflow playbooks"
    ],
    cta: "Start Learning"
  },
  {
    name: "Pro Teacher",
    monthly: "Rs. 2,499",
    yearly: "Rs. 23,990",
    audience: "For power users building advanced classroom systems",
    description: "The premium plan for teachers who want deeper workflow mastery and priority support.",
    features: [
      "Everything in Individual",
      "Advanced classroom workflow labs",
      "AI productivity toolkit",
      "Premium prompt packs",
      "Priority live workshops",
      "Downloadable implementation templates"
    ],
    cta: "Upgrade to Pro",
    featured: true
  },
  {
    name: "School Plan",
    monthly: "Rs. 24,999",
    yearly: "Rs. 239,990",
    audience: "For schools onboarding up to 25 teachers together",
    description: "A school-wide offering that combines teacher capability building with admin visibility.",
    features: [
      "Up to 25 teachers",
      "Admin dashboard and progress tracking",
      "School onboarding session",
      "Custom learning paths",
      "Completion certificates and reports",
      "Leadership implementation review"
    ],
    cta: "Book School Demo"
  },
  {
    name: "Institution / Enterprise",
    monthly: "Custom",
    yearly: "Custom",
    audience: "For multi-campus groups and large institutional rollouts",
    description: "Structured consulting, custom training, and adoption planning for larger organizations.",
    features: [
      "Unlimited or large multi-campus onboarding",
      "Dedicated training consultant",
      "AI adoption roadmap",
      "Custom workshops",
      "Custom policy support",
      "LMS customization"
    ],
    cta: "Talk to Sales"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Is this suitable for all teachers?",
    answer: "Yes. The program is designed for teachers across subjects and experience levels, with practical examples rather than technical jargon."
  },
  {
    question: "Do teachers need prior AI experience?",
    answer: "No prior experience is required. We start with foundations and quickly move into guided workflows teachers can use immediately."
  },
  {
    question: "Is this safe for schools?",
    answer: "The curriculum emphasizes responsible use, human review, privacy awareness, and school-friendly implementation practices."
  },
  {
    question: "Do you offer certificates?",
    answer: "Yes. Teachers receive completion certificates, and school administrators can review progress and participation records."
  },
  {
    question: "Can schools request custom workshops?",
    answer: "Yes. School and enterprise plans can include custom workshops, policy support, and tailored learning pathways."
  },
  {
    question: "Is there an LMS dashboard for administrators?",
    answer: "Yes. The frontend includes a dashboard preview showing how leaders can track enrollment, completion, and workshop activity."
  }
];

export const courses: CourseItem[] = [
  {
    slug: "ai-foundations-for-educators",
    category: "Getting Started with AI",
    level: "Beginner",
    title: "AI Foundations for Educators",
    duration: "3 weeks",
    excerpt: "A confident, school-friendly introduction to modern AI tools and where they fit in daily teaching practice.",
    outcomes: [
      "Understand tool categories and teaching use cases",
      "Develop safe AI habits for drafting and review",
      "Build a repeatable workflow for weekly planning"
    ],
    modules: [
      "The AI landscape for schools",
      "Evaluating outputs with professional judgment",
      "Choosing the right tool for the right task",
      "Teacher workflow starter pack"
    ]
  },
  {
    slug: "prompting-for-educators",
    category: "Prompting for Educators",
    level: "Beginner",
    title: "Prompting for Educators",
    duration: "2 weeks",
    excerpt: "Prompt patterns teachers can actually use for lessons, activities, explanations, and communication.",
    outcomes: [
      "Write stronger prompts using role, context, and constraints",
      "Iterate outputs faster with less trial and error",
      "Save time across planning and communication tasks"
    ],
    modules: [
      "Prompt anatomy for teachers",
      "Subject-specific prompting patterns",
      "Improving quality through iteration",
      "Reusable prompt library building"
    ]
  },
  {
    slug: "lesson-planning-with-ai",
    category: "AI for Lesson Planning",
    level: "Intermediate",
    title: "Lesson Planning with AI",
    duration: "4 weeks",
    excerpt: "Turn curriculum goals into faster, sharper lesson plans with differentiated activities and teaching aids.",
    outcomes: [
      "Draft lesson sequences faster",
      "Generate differentiated support materials",
      "Improve clarity and consistency in weekly preparation"
    ],
    modules: [
      "Planning frameworks and curriculum mapping",
      "Differentiation with AI support",
      "Worksheet and activity generation",
      "Teacher review checklist"
    ]
  },
  {
    slug: "assessment-and-feedback-with-ai",
    category: "AI for Assessment",
    level: "Intermediate",
    title: "Assessment and Feedback with AI",
    duration: "3 weeks",
    excerpt: "Build quizzes, rubrics, model answers, and structured feedback drafts without losing professional judgment.",
    outcomes: [
      "Create stronger formative assessment packs",
      "Draft rubrics and feedback frameworks faster",
      "Reduce repetitive marking prep work"
    ],
    modules: [
      "Assessment design principles",
      "Quiz and rubric generation",
      "Constructive feedback drafting",
      "Quality review and moderation"
    ]
  },
  {
    slug: "presentations-and-visuals-with-ai",
    category: "AI for Presentations",
    level: "Intermediate",
    title: "Presentations and Visuals with AI",
    duration: "2 weeks",
    excerpt: "Use Canva AI, Gamma, and companion tools to create polished teaching visuals and classroom presentations.",
    outcomes: [
      "Convert lesson ideas into stronger slide narratives",
      "Create visual explainers more efficiently",
      "Maintain quality and clarity across materials"
    ],
    modules: [
      "Storyboarding lesson visuals",
      "Presentation generation workflows",
      "Visual consistency and editing",
      "Export-ready classroom assets"
    ]
  },
  {
    slug: "responsible-ai-for-schools",
    category: "Responsible AI for Schools",
    level: "All levels",
    title: "Responsible AI for Schools",
    duration: "2 weeks",
    excerpt: "A school-wide readiness course covering safety, ethics, privacy, and policy-aware implementation.",
    outcomes: [
      "Build a stronger institutional AI stance",
      "Understand common safety and governance risks",
      "Establish practical usage principles for staff"
    ],
    modules: [
      "Risk areas in school adoption",
      "Privacy-aware teacher workflows",
      "Review, approval, and documentation habits",
      "Policy readiness for leadership teams"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "The program translated AI from something abstract into something our teachers could use on Monday morning. That shift mattered.",
    name: "Ananya Mehta",
    role: "Principal, Horizon Academy"
  },
  {
    quote: "We were looking for structured adoption, not hype. The school-facing framing, templates, and policy awareness made this immediately credible.",
    name: "Rohit Deshpande",
    role: "Academic Coordinator, Springboard K-12"
  },
  {
    quote: "The workflows for lesson planning, rubric drafting, and parent communication saved real preparation time while keeping me in control.",
    name: "Neha Kapoor",
    role: "Senior English Teacher"
  }
];

export const schoolBenefits: Benefit[] = [
  {
    title: "Leadership visibility",
    description: "Track teacher participation, completion, workshop attendance, and implementation progress from one dashboard.",
    icon: LayoutDashboard
  },
  {
    title: "Safer adoption",
    description: "Introduce AI with review protocols, privacy-aware habits, and policy-aligned training for educators.",
    icon: ShieldCheck
  },
  {
    title: "Teacher confidence",
    description: "Reduce hesitation by grounding training in everyday workflows teachers already understand.",
    icon: GraduationCap
  },
  {
    title: "Operational efficiency",
    description: "Help staff save time on repetitive planning, worksheet generation, and communication tasks.",
    icon: BarChart3
  },
  {
    title: "Consistent classroom quality",
    description: "Provide shared templates, prompt libraries, and standards that keep outputs usable and school-appropriate.",
    icon: FileCheck2
  },
  {
    title: "Future-ready positioning",
    description: "Signal innovation to parents, educators, and school stakeholders without compromising trust.",
    icon: Sparkles
  }
];

export const aboutValues = [
  {
    title: "Practicality",
    description: "We focus on workflows teachers can actually use in the next school week."
  },
  {
    title: "Safety",
    description: "Every program is grounded in human review, privacy awareness, and responsible implementation."
  },
  {
    title: "Teacher-first design",
    description: "Training respects real classroom constraints, workload, and institutional context."
  },
  {
    title: "Responsible AI adoption",
    description: "We help schools move forward with clarity, not confusion."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Ira Malhotra",
    role: "Founder & Learning Strategist",
    bio: "Former educator and learning designer focused on practical digital capability building for K-12 institutions."
  },
  {
    name: "Karan Sethi",
    role: "Head of Product Experience",
    bio: "Designs premium teacher workflows and LMS experiences that feel modern, calm, and usable."
  },
  {
    name: "Dr. Meera Shah",
    role: "Academic Programs Lead",
    bio: "Shapes curriculum, workshop facilitation, and school implementation models grounded in classroom reality."
  }
];

export const dashboardHighlights = [
  {
    title: "Teacher Progress",
    value: "78%",
    detail: "Average completion across the current cohort"
  },
  {
    title: "Upcoming Live Sessions",
    value: "06",
    detail: "Workshop and clinic sessions scheduled this month"
  },
  {
    title: "Certificates Issued",
    value: "182",
    detail: "Across onboarding, prompting, and assessment tracks"
  },
  {
    title: "Admin Readiness Score",
    value: "84",
    detail: "Composite signal across engagement and completion"
  }
];

export const adminInsights = [
  {
    label: "Lesson Planning with AI",
    progress: 82
  },
  {
    label: "Prompting for Educators",
    progress: 91
  },
  {
    label: "Responsible AI for Schools",
    progress: 68
  },
  {
    label: "Assessment and Feedback with AI",
    progress: 74
  }
];

export const proposalMilestones: ProposalMilestone[] = [
  {
    week: "Week 1",
    title: "Readiness and stakeholder alignment",
    detail: "School leadership kickoff, teacher segmentation, and workflow discovery."
  },
  {
    week: "Weeks 2-3",
    title: "Core teacher capability building",
    detail: "Live foundational training paired with self-paced modules and guided prompts."
  },
  {
    week: "Weeks 4-5",
    title: "Workflow practice and applied implementation",
    detail: "Lesson planning, assessment, presentation, and communication use cases tailored to the school context."
  },
  {
    week: "Week 6",
    title: "Review, reporting, and pilot recommendations",
    detail: "Progress summary, leadership review, and roadmap for wider rollout or policy adoption."
  }
];

export const solutionPillars = [
  {
    title: "Institutional onboarding",
    description: "Start with leadership alignment, role-specific teacher cohorts, and the right implementation sequence.",
    icon: BriefcaseBusiness
  },
  {
    title: "Live workshops + LMS",
    description: "Blend energy and accountability from live sessions with flexible self-paced reinforcement.",
    icon: CalendarCheck2
  },
  {
    title: "Prompt and policy systems",
    description: "Support schools with template libraries, quality review habits, and implementation standards.",
    icon: NotebookTabs
  },
  {
    title: "Communication confidence",
    description: "Help teachers and leaders use AI-generated drafts responsibly across parent and internal communication.",
    icon: MessagesSquare
  },
  {
    title: "Everyday teacher productivity",
    description: "Reduce repetitive workload so teachers can spend more time on instruction and engagement.",
    icon: Bot
  }
];
