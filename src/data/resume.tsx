import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Angular } from "@/components/ui/svgs/angular";
import { Dotnet } from "@/components/ui/svgs/dotnet";
import { Mongodb } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { Git } from "@/components/ui/svgs/git";

export const DATA = {
  name: "Munishwar Kalra",
  initials: "MK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer building developer tools, AI products, and startups. Passionate about creating things people genuinely love to use.",
  summary:
    "I’m a **software engineer** who loves **building, experimenting, and learning by shipping**. From my early days of exploring web development to working professionally as a **full-stack engineer**, I’ve built applications, participated in **hackathons**, and explored ideas ranging from **real-time platforms** to **AI-powered products**. Today, I’m focused on **becoming a better engineer** while **building products that solve real problems**.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Angular", icon: Angular },
    { name: "Node.js", icon: Nodejs },
    { name: ".NET", icon: Dotnet },
    { name: "Postgres", icon: Postgresql },
    { name: "MongoDB", icon: Mongodb },
    { name: "Redis", icon: Redis },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: Git },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C#", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#chatgpt", icon: Icons.openai, label: "Ask ChatGPT about me" },
  ],
  contact: {
    email: "kalramunishwar@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Munishwar001",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/munishwar-kalra-751641232/",
        icon: Icons.linkedin,

        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/kalramunishwar/",
        icon: Icons.leetcode,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Wottacore Digital Solutions",
      href: "https://wottacore.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/wottacore.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Working as a full-stack developer, building web applications with React, Angular, Node.js and .NET. Started working with AI, integrating third-party APIs into products, and sharpened my debugging skills. Handle client communication directly, turning requirements into reliable, working features.",
    },
    {
      company: "CodeQuotient Pvt. Ltd.",
      href: "https://codequotient.com",
      badges: [],
      location: "Location",
      title: "Software Engineering Intern",
      logoUrl: "/codequotient.png",
      start: "Feb 2025",
      end: "Aug 2025",
      description: "Deepened my full-stack skills by building applications with React and Node.js. Learned system design fundamentals and worked with databases, designing data models and APIs and writing cleaner, more scalable code.",
    },
    {
      company: "CodeQuotient Pvt. Ltd.",
      href: "https://codequotient.com",
      badges: [],
      location: "Location",
      title: "Software Engineering Intern",
      logoUrl: "/codequotient.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description: "Introduced to professional web development. Learned the fundamentals of HTML, CSS and JavaScript and built my first backend services with Node.js, gaining hands-on experience building and shipping real features.",
    },
  ],
  education: [
    {
      school: "Kurukshetra University",
      href: "https://kuk.ac.in",
      degree: "BCA in Cloud Computing · 8.8 CGPA",
      logoUrl: "/kuk.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Govt. Model Sanskriti Senior Secondary School",
      href: "https://www.gmcampynr.in/",
      degree: "Secondary Education · 81.4%",
      logoUrl: "/gmsss.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "National Public School, Yamuna Nagar",
      href: "https://www.nationalschool.edu.in/",
      degree: "Primary Education · 74%",
      logoUrl: "/nps.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "YaarLang",
      href: "https://github.com/Munishwar001/yaarlang-the-future-of-code",
      dates: "July 2026",
      active: true,
      description:
        "A programming language with Hinglish keywords, like `maan_lo` instead of `let` and `agar` instead of `if`. Built from scratch with a real lexer, parser and code generator, published as an npm CLI with a VS Code extension, a docs site and an in-browser playground.",
      technologies: ["JavaScript", "TypeScript", "Node.js", "Compiler", "CLI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Munishwar001/yaarlang-the-future-of-code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yaarlang.png",
      video: "",
    },
    {
      title: "ComplainX",
      href: "https://github.com/Munishwar001/ComplainX",
      dates: "October 2026",
      active: true,
      description:
        "An AI-powered civic complaint platform built at HackOctober 2026. Citizens email a complaint, it is classified with keyword matching and Gemini, routed to the right government authority, and tracked from received to resolved.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini AI",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Munishwar001/ComplainX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/complainx.png",
      video: "",
    },
    {
      title: "Custom Redis",
      href: "https://github.com/Munishwar001/Custom-REDIS",
      dates: "July 2026",
      active: true,
      description:
        "A Redis server built from scratch in Node.js, with a hand-written RESP protocol parser and a command engine over raw TCP. Supports strings, lists and hashes, and works with the standard redis-cli.",
      technologies: ["Node.js", "JavaScript", "TCP", "RESP", "Redis"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Munishwar001/Custom-REDIS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/custom-redis.png",
      video: "",
    },
    {
      title: "Homizy",
      href: "https://github.com/Munishwar001/Homigo-prelaunch",
      dates: "June 2026",
      active: true,
      description:
        "An AI-powered, voice-based home services marketplace for Indian households. Book plumbing, electrical, cleaning and more just by speaking, with no searching or calling around.",
      technologies: ["Next.js", "TypeScript", "AI", "Voice"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Munishwar001/Homigo-prelaunch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/homizy.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackOctober 2026",
      dates: "October 2nd - 3rd, 2026",
      location: "Innovation Mission Punjab, Chandigarh",
      description:
        "Organized by Major League Hacking (MLH). Built Complanx, a platform that finds the email address of any authority and sends the complaint to them on the user's behalf.",
      image: "/mlh.png",
      mlh: "",
      links: [],
    },
    {
      title: "AI/ML Hackathon",
      dates: "January 10th, 2026",
      location: "IIT Ropar, Punjab",
      description:
        "Won 1st prize. Built an employee posture detection and correction system using Google Teachable Machine, which spots poor sitting positions and prompts the employee to correct them.",
      image: "/techgyan.png",
      mlh: "",
      links: [],
    },
    {
      title: "Tech Warriors",
      dates: "August 15th, 2025",
      location: "TIMT, Yamuna Nagar, Haryana",
      description:
        "Built a student learning platform during the hackathon.",
      image: "/techwarriors.png",
      mlh: "",
      links: [],
    },
    {
      title: "Skill Utsav",
      dates: "December 7th, 2022",
      location: "Yamuna Nagar, Haryana",
      description:
        "Won 3rd prize. Represented my school with technical and presentation skills by building a smart city model with tech integrations and IoT.",
      image: "/skillutsav.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
