export const site = {
  name: "Lian Karlo Majerano",
  role: "Full-Stack Developer & QA Specialist",
  status: "available for work",
  email: "majeranolian@gmail.com",
  phone: "+63 976 088 3045",
  whoami: {
    name: "$ whoami",
    lines: [
      "a full-stack developer",
      "an SQA specialist",
      "built CommunityOS",
    ],
  },
  about: {
    headline: "I build products that live on the web and keep them reliable.",
    paragraph:
      "Full-Stack Developer and Software Quality Assurance Specialist with hands-on experience building production-ready web platforms and enforcing end-to-end software reliability. Skilled in modern JavaScript and TypeScript frameworks like Next.js, React, and Node.js, alongside RESTful API development, database systems, and payment gateway integrations. Proven track record of single-handedly building live SaaS platforms and conducting rigorous manual, functional, and regression testing in agile team environments.",
  },
  contact: {
    headline: "Got a problem to solve?",
  },
  footer: {
    note: "built with the void",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    title: "Software Quality Assurance Specialist",
    company: "Xurpas Inc.",
    period: "Apr 2026 - Present",
    points: [
      "Execute comprehensive functional, integration, and end-to-end regression testing across web and mobile application releases using structured manual test suites.",
      "Manage defect lifecycles in Jira by logging, prioritizing, and tracking software bugs while collaborating closely with engineering teams to shorten fix cycles.",
      "Author standardized test cases, test plans, and technical acceptance documentation to enforce strict quality gates prior to production deployments.",
    ],
  },
  {
    title: "Software Quality Assurance Intern",
    company: "Xurpas Inc.",
    period: "Sep 2025 - Dec 2025",
    points: [
      "Conducted rigorous web application testing for client platforms, including the MWSS website, validating system performance, cross-browser compatibility, and overall site reliability.",
      "Streamlined issue reporting workflows by managing Jira defect tickets, facilitating seamless communication between QA leads and developers.",
      "Produced clear technical documentation and structured manual test execution matrices for production-bound software builds.",
    ],
  },
] as const;

export const projects = [
  {
    name: "CommunityOS",
    role: "Sole Developer / Full-Stack SaaS",
    year: "2026",
    description:
      "A production SaaS management platform for Homeowners Associations, replacing fragmented spreadsheets and social channels.",
    highlights: [
      "Digitized complaint management, official announcements, and centralized vehicle/pet registries.",
      "Integrated the PayMongo API to facilitate secure online dues payments and digital financial transaction processing.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PayMongo"],
    href: "https://github.com/majeranoL/CommunityOS",
    demo: "https://community-os-red.vercel.app",
  },
  {
    name: "Animal911",
    role: "Full-Stack Developer",
    year: "2026",
    description:
      "A multi-role animal rescue and adoption web platform with distinct UI portals for rescuers, shelters, and adopters.",
    highlights: [
      "Integrated AI functionality to streamline incoming rescue reports, automate emergency case triage, and intelligently match adopters with pets.",
      "Built real-time notification alerts to dispatch immediate updates for urgent rescue operations.",
    ],
    stack: ["React", "Node.js", "AI Triage", "Real-time"],
    href: "https://github.com/majeranoL/admin",
    demo: "https://admin-kappa-silk.vercel.app",
  },
] as const;

export const stack = [
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    group: "Backend & API",
    items: ["Node.js", "Express.js", "PHP", "REST API Design & Integration"],
  },
  {
    group: "QA & Testing",
    items: [
      "Manual Testing",
      "Functional Testing",
      "Integration Testing",
      "Regression Testing",
      "Test Case Authoring",
      "Defect Tracking",
    ],
  },
  {
    group: "Tools & Workflow",
    items: ["Jira", "Postman", "Git", "GitHub"],
  },
  {
    group: "Specialized",
    items: ["PayMongo", "AI Triage Systems", "Multi-Role Architecture"],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "St. Dominic College of Asia",
    honors: "Dean's Lister (1st & 4th Year), Best in Capstone Project",
    certifications: [
      "Certiport IT Specialist - Java",
      "Certiport IT Specialist - Database",
    ],
  },
] as const;