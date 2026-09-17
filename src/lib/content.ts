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
    socials: [
      {
        label: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/lian-majerano/",
      },
      { label: "GitHub", icon: "github", url: "https://github.com/majeranoL" },
      {
        label: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/lianmajerano_/",
      },
      {
        label: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/zxcvb.4120",
      },
    ],
    form: {
      hint: "Opens a pre-filled draft in your mail app — just press send.",
    },
  },
  github: {
    user: "majeranoL",
    url: "https://github.com/majeranoL",
  },
  footer: {
    note: "~ fin",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "GitHub", href: "#github" },
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

export type StackItem = {
  name: string;
  url?: string;
  logo?: string;
};

export const stack: ReadonlyArray<{
  group: string;
  items: ReadonlyArray<StackItem>;
}> = [
  {
    group: "Languages",
    items: [
      {
        name: "JavaScript (ES6+)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        url: "https://www.python.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        url: "https://www.oracle.com/java/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C",
        url: "https://en.cppreference.com/w/c",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "C++",
        url: "https://en.cppreference.com/w/cpp",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "PHP",
        url: "https://www.php.net",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "HTML5",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    group: "Frontend",
    items: [
      {
        name: "React",
        url: "https://react.dev",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        url: "https://vuejs.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Angular",
        url: "https://angular.dev",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      },
      {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    group: "Backend & API",
    items: [
      {
        name: "Node.js",
        url: "https://nodejs.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        url: "https://expressjs.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "CodeIgniter",
        url: "https://codeigniter.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      },
      {
        name: "Frappe",
        url: "https://frappeframework.com",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons/icons/frappe.svg",
      },
      { name: "REST API Design & Integration" },
    ],
  },
  {
    group: "QA & Testing",
    items: [
      { name: "Manual Testing" },
      { name: "Functional Testing" },
      { name: "Integration Testing" },
      { name: "Regression Testing" },
      { name: "Test Case Authoring" },
      { name: "Defect Tracking" },
    ],
  },
  {
    group: "Tools & Workflow",
    items: [
      {
        name: "Jira",
        url: "https://www.atlassian.com/software/jira",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      {
        name: "Postman",
        url: "https://www.postman.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Git",
        url: "https://git-scm.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        url: "https://github.com",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
  {
    group: "Specialized",
    items: [
      {
        name: "PayMongo",
        url: "https://www.paymongo.com",
        logo: "/icons/paymongo.ico",
      },
      { name: "AI Integration" },
      { name: "Role-Based Portals" },
    ],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "St. Dominic College of Asia",
    institutionUrl: "https://stdominiccollege.edu.ph",
    honors: "Dean's Lister (1st & 4th Year), Best in Capstone Project",
  },
] as const;

export const certifications = [
  {
    name: "IT Specialist - Java",
    url: "https://www.credly.com/badges/71da8007-0000-4dd0-9368-57a133a001fd/public_url",
    image:
      "https://images.credly.com/images/2210b6fe-0eda-415a-8aba-6c1400566728/linkedin_thumb_ITS-Badges_Java_1200px.png",
  },
  {
    name: "IT Specialist - Database",
    url: "https://www.credly.com/badges/b51478ca-63e9-49fc-860b-8e757baae983/public_url",
    image:
      "https://images.credly.com/images/49a492cd-5f72-4c9d-aafa-06649e4853fb/linkedin_thumb_MicrosoftTeams-image__5_.png",
  },
] as const;