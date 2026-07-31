export const personalInfo = {
  name: "Takele Adugna",
  title: "Software Developer",
  tagline: "I build thoughtful digital experiences with clean code and modern tools.",
  email: "tekley2025@gmail.com",
  phone: "+251902002565",
  location: "Addis Ababa, Ethiopia",
  // set to a local path (e.g. "/profile.jpg") or external URL
  photo: "https://raw.githubusercontent.com/Takelecc/Resume/main/1720695154770.jfif",
  bio: "I'm a passionate developer who loves turning ideas into elegant, functional products. With a focus on user experience and performance, I craft web applications that make a difference.",
  social: {
    github: "https://github.com/takelecc",
    linkedin: "https://linkedin.com/in/takele-adugna",
    telegram: "https://t.me/takelecc",
    whatsapp: "https://whatsapp.com/dl/",
  },
  resumeUrl: "https://raw.githubusercontent.com/Takelecc/Resume/main/TAKELE%20Resume.pdf",
};

export const skills = [
  { name: "JavaScript", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Python", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "c++", category: "Languages" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "Sql", category: "Database" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "REST APIs", category: "Backend" },
  { name: "ASP.net", category: "Backend" },
];

export const projects = [
  {
    
    title: "Intelligent Applicant Tracking System (ATS)",
    description:
      "End-to-end recruitment platform with AI-powered resume parsing, semantic candidate scoring, real-time Kanban pipeline management, automated interview scheduling, and comprehensive hiring analytics.",
    tags: ["React", "Flask", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,

  },
  {
    
    title: "Community-Based Health Insurance (CBHI) Management Platform",
    description:
        "Digital platform for managing community health insurance schemes with sliding-scale premium enrollment, claims processing, member management, and real-time analytics to support universal health coverage in resource-limited settings.",
    tags: ["React", ".NET Core", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,

  },
  {
    title: "Scheduling app",
    description:
      "A comprehensive overtime (OT) scheduling application built with React on the frontend and Laravel on the backend. The system enables managers to assign, track, and optimize overtime shifts for personnel based on real-time location data, weather forecasts, and workload analytics. It features an interactive dashboard, role-based access control, shift conflict detection, automated notifications, and a 7-day planning outlook. The app ensures fair OT distribution, reduces manual errors, and improves workforce productivity.",
    tags: ["React","Laravel", "OT Management", "Workforce Planning", "Shift Scheduling", "Role-Based Access Control", "Real-Time Notifications"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "hospital-management-system",
    description:
      "A headless CMS for developers to manage portfolio content with a clean admin interface.",
    tags: ["React", "Laravel", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com/Takelecc/hospital-management-system",
    featured: false,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
