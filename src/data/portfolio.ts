export const profile = {
  name: "David Ihomba Kibandi",
  title: "Software Engineer",
  email: "davidihomba@gmail.com",
  phone: "+254 700 804 593",
  location: "Nairobi, Kenya",
  github: "https://github.com/ihomba92",
  linkedin: "https://www.linkedin.com/in/david-kibandi-7a4157255/",
  resumeFile: "David_Ihomba_Kibandi_Resume.pdf",
}

export const coreTech = [
  { label: "Python & Flask", icon: "PY" as const },
  { label: "React.js", icon: "react" as const },
  { label: "PostgreSQL", icon: "SQL" as const },
  { label: "JWT & RBAC", icon: "shield" as const },
  { label: "Git & GitHub", icon: "github" as const },
]

export const projects = [
  {
    tag: "Capstone / Full-Stack",
    badge: "Live Site",
    live: true,
    title: "Deliveroo",
    description:
      "Full-stack parcel delivery platform with JWT auth and role-based access for customers, couriers, and admins. Features real-time Google Maps courier tracking over WebSocket, Flask REST APIs for the full order lifecycle, mock M-Pesa payment logic, and a React + Redux Toolkit frontend.",
    linkLabel: "Visit Live Website",
    href: "https://deliveroo-capstone-project.vercel.app/",
  },
  {
    tag: "Group / Full-Stack",
    badge: "React & Flask",
    live: false,
    title: "The Terrace",
    description:
      "A workout-and-sports platform combining articles, match predictions, and progress tracking with real-time updates. JWT auth with admin/moderator/user roles, a Flask-RESTful backend on PostgreSQL, and a React 19 + Vite frontend styled with Tailwind CSS v4.",
    linkLabel: "View Source on GitHub",
    href: "https://github.com/ihomba92/The-Terrace-Group-project",
  },
  {
    tag: "Frontend / React",
    badge: "React & Tailwind",
    live: false,
    title: "Leo Art Gallery",
    description:
      "A persistent digital art gallery blending a curated featured collection with a community submission system. Uses lazy state initialization to sync React state with localStorage, plus a live search component that filters the gallery as you type.",
    linkLabel: "View Source on GitHub",
    href: "https://github.com/ihomba92/Art-Gallery-Portfolio-Using-React",
  },
  {
    tag: "Frontend / React",
    badge: "React Router",
    live: false,
    title: "LocalHostSips",
    description:
      "A café management portal with a bespoke dark-espresso-and-amber UI. Customers browse branch-specific menus with dynamic location-based pricing, while an admin dashboard posts new items to a JSON Server-backed API without page reloads, routed with React Router.",
    linkLabel: "View Source on GitHub",
    href: "https://github.com/ihomba92/Building-a-React-Based-Personal-Project-Showcase-App-Coffee-Shop",
  },
  {
    tag: "Group / Frontend",
    badge: "Live Site",
    live: true,
    title: "Culture Thrifts",
    description:
      "A streetwear and thrift-inspired ecommerce UI built collaboratively with React, Vite, and Tailwind CSS. Includes a shopping cart sidebar, searchable navbar, category browsing, and product cards across a fully responsive layout.",
    linkLabel: "Visit Live Website",
    href: "https://culture-thrifts.vercel.app",
  },
  {
    tag: "Lab / Vanilla JS",
    badge: "HTML/CSS/JS",
    live: false,
    title: "Wordly Dictionary",
    description:
      "A single-page dictionary application built with vanilla HTML, CSS, and JavaScript. Users search a word and get live pronunciation, definitions, and example usage fetched from a public API, with dynamic DOM updates and graceful error handling for failed lookups.",
    linkLabel: "View Source on GitHub",
    href: "https://github.com/ihomba92/Single-Page-Application-Wordly-Dictionary",
  },
]

export const experience = [
  {
    period: "2026",
    accent: true,
    role: "Software Engineer",
    org: "Independent / Capstone Group Project",
    description:
      "Designed and shipped Deliveroo, a full-stack parcel delivery platform: relational schema (ERD) for three user roles, JWT/RBAC-secured RESTful Flask APIs, WebSocket-driven Google Maps tracking, and a React + Redux Toolkit frontend built from Figma wireframes.",
    tags: ["Python/Flask", "PostgreSQL", "React & Redux Toolkit", "Google Maps API"],
  },
  {
    period: "Apr 2017 — Present",
    accent: false,
    role: "Media Technician / ICT Facilitator",
    org: "Pillarframe Media House",
    description:
      "Managed end-to-end digital media projects from client consultation through delivery, processing 100+ video and photo projects. Designed streamlined workflows for media asset management and online publishing, increasing project delivery efficiency by 15%.",
    tags: ["Workflow Optimization", "ICT Facilitation", "Client Communication"],
  },
  {
    period: "Jan 2016 — Sep 2018",
    accent: false,
    role: "News Gathering & Studio Technician",
    org: "Kenya Broadcasting Corporation (KBC)",
    description:
      "Operated and maintained studio broadcasting equipment for live prime-time news, achieving 99.9% operational uptime. Produced complete news packages under strict deadlines while collaborating with journalists and producers to execute editorial requirements.",
    tags: ["Live Broadcast Systems", "Multimedia Production", "Deadline-Driven Delivery"],
  },
]

export const education = [
  {
    period: "2026",
    accent: true,
    title: "Certificate in Software Engineering (Full-Stack Development)",
    org: "Moringa School",
    description:
      "Intensive practical curriculum covering Python/Flask backend engineering, PostgreSQL & SQLAlchemy, RESTful API design, React.js, and Agile team-based development, capped by the Deliveroo capstone project.",
    tags: ["Full-Stack Development", "ERD & DB Design", "Agile Team Development"],
  },
  {
    period: "Aug 2013 — May 2019",
    accent: false,
    title: "B.Sc. Information Science",
    org: "Karatina University",
    description:
      "Foundational study in knowledge and information management, records management, library and digital-library systems, and information management solutions — grounding for structured, systems-level thinking in software.",
    tags: ["Information Management", "Digital Libraries"],
  },
  {
    period: "Jan 2015 — Nov 2016",
    accent: false,
    title: "Diploma in Journalism and Mass Communication",
    org: "Mount Kenya University",
    description:
      "Training in strategic communications, media production, and public relations — the foundation for the clear cross-functional communication and stakeholder-facing work carried into software delivery today.",
    tags: ["Strategic Communications", "Media Production"],
  },
]

export const skills = [
  {
    icon: "</>" as const,
    title: "Backend & APIs",
    description:
      "Python, Flask, RESTful API design, JWT-based authentication and role-based access control, WebSocket connections for real-time features.",
  },
  {
    icon: "DB" as const,
    title: "Databases & ORM",
    description:
      "PostgreSQL, SQLAlchemy, Marshmallow serialization, ERD and relational database design, and database security practices.",
  },
  {
    icon: "UI" as const,
    title: "Frontend & UX",
    description:
      "React.js, Redux Toolkit & Context, Tailwind CSS, and mobile-friendly wireframing in Figma before implementation.",
  },
  {
    icon: "git" as const,
    title: "Tools & Practices",
    description:
      "Git & GitHub workflows, Agile/team-based development, Google Maps API and Resend email integrations, cross-functional project coordination.",
  },
]
