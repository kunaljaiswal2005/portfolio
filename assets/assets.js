import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
  user_image, code_icon, code_icon_dark, edu_icon, edu_icon_dark,
  project_icon, project_icon_dark, vscode, firebase, figma, git, mongodb,
  right_arrow_white, logo, logo_dark, mail_icon, mail_icon_dark, profile_img,
  download_icon, hand_icon, header_bg_color, moon_icon, sun_icon, arrow_icon,
  arrow_icon_dark, menu_black, menu_white, close_black, close_white, web_icon,
  mobile_icon, ui_icon, graphics_icon, right_arrow, send_icon,
  right_arrow_bold, right_arrow_bold_dark,
};

// ═══════════════════════════════════════════════════════════════════
//  PROJECT DATA  —  yahan apne projects add karo
// ═══════════════════════════════════════════════════════════════════
//
//  REQUIRED FIELDS:
//  slug          — URL mein yahi use hoga  e.g. "bytevibe-blog"  → /projects/bytevibe-blog
//  title         — project ka naam
//  description   — short one-liner (Work section card mein dikhega)
//  bgImage       — /public/ folder ki image  e.g. "/work-1.png"
//  tags          — tech stack badges array
//  type          — filter category: "Full Stack" | "Frontend" | "Backend"
//
//  OPTIONAL FIELDS (detail page pe dikhayi denge):
//  liveUrl       — deployed link
//  githubUrl     — github repo
//  longDescription — 2-3 paragraph detail (string ya array of strings)
//  features      — ["Feature 1", "Feature 2", ...]   (bullet list)
//  challenges    — ["Challenge 1", ...]               (bullet list)
//  learnings     — ["Learning 1", ...]                (bullet list)
//  screenshots   — ["/img1.png", "/img2.png"]         (extra images)
//  duration      — "2 months"
//  status        — "Completed" | "In Progress" | "Open Source"
//
// ────────────── TEMPLATE ──────────────
//  {
//    slug: "my-project",
//    title: "My Project",
//    description: "Short description",
//    bgImage: "/work-5.png",
//    tags: ["React", "Node.js"],
//    type: "Full Stack",
//    liveUrl: "",
//    githubUrl: "",
//    longDescription: [
//      "First paragraph about the project...",
//      "Second paragraph..."
//    ],
//    features: ["Feature A", "Feature B"],
//    challenges: ["Challenge I faced"],
//    learnings: ["What I learned"],
//    duration: "1 month",
//    status: "Completed",
//    screenshots: ["/work-5-screen1.png"],
//  },
// ══════════════════════════════════════

export const workData = [
  {
    slug: "bytevibe-blogging-platform",
    title: "ByteVibe Blogging Platform",
    description: "Full-featured blog platform with rich text editor, auth & comments",
    bgImage: "/bytevibe1.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    type: "Full Stack",
    liveUrl: "https://blog-frontend-pi-seven.vercel.app/",
    githubUrl: "https://github.com/kunaljaiswal2005/blog-backend",
    longDescription: [
      "ByteVibe is a full-stack blogging platform built with the MERN stack. It allows users to create, edit, and publish blog posts with a rich text editor, manage their profile, and interact through comments.",
      "The platform features JWT-based authentication with protected routes, a clean reading experience, and a responsive design that works seamlessly across devices.",
    ],
    features: [
      "Rich text editor with image upload support",
      "JWT authentication with protected routes",
      "Comment system with nested replies",
      "User profile management",
      "Responsive design for all screen sizes",
      "Search and filter posts by category",
    ],
    challenges: [
      "Implementing a secure file upload system for images",
      "Handling real-time comment updates efficiently",
      "Optimizing MongoDB queries for paginated blog feeds",
    ],
    learnings: [
      "Deep understanding of JWT refresh token rotation",
      "Efficient MongoDB aggregation pipelines",
      "Building reusable React components with proper state management",
    ],
    duration: "2 months",
    status: "Completed",
    screenshots: ["/bytevibe1.png"],
    highlight: "A full-stack blogging platform featuring secure authentication, rich-text publishing, and community engagement"
  },
  {
    slug: "travel-buddy",
    title: "Travel Buddy",
    description: "Travel planning app with destination search & itinerary builder",
    bgImage: "/travel1.png",
    tags: ["React.js", "Tailwind CSS", "REST API"],
    type: "Frontend",
    liveUrl: "https://travel-buddy2.netlify.app/",
    githubUrl: "https://github.com/kunaljaiswal2005/travell-buddy2",
    longDescription: [
      "Travel Buddy is a frontend travel planning application that helps users discover destinations, build itineraries, and organize their trips visually.",
      "It integrates with third-party REST APIs to fetch real destination data, weather info, and local attractions.",
    ],
    features: [
      "Destination search with autocomplete",
      "Drag-and-drop itinerary builder",
      "Weather forecast integration",
      "Save and share trip plans",
      "Responsive UI with smooth transitions",
    ],
    challenges: [
      "Implementing smooth drag-and-drop without external libraries",
      "Managing complex state for multi-day itineraries",
    ],
    learnings: [
      "Advanced React hooks patterns (useReducer, useContext)",
      "Working with multiple REST APIs and handling rate limits",
      "CSS Grid for complex responsive layouts",
    ],
    duration: "6 weeks",
    status: "Completed",
    screenshots: ["/travel1.png","/travel2.png"],
    highlight: "Developed a responsive travel planning app featuring destination search, interactive itinerary building, and real-time weather integration."
  },
  {
    slug: "mern-authentication-system",
    title: "MERN Authentication System",
    description: "Secure JWT-based auth system with refresh tokens & email verify",
    bgImage: "/auth1.png",
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    type: "Backend",
    liveUrl: "https://mern-auth-kit.vercel.app/",
    githubUrl: "https://github.com/kunaljaiswal2005/Mern-AuthKit",
    longDescription: [
      "A production-ready authentication system built with Node.js and Express, implementing industry best practices for security.",
      "Features include access/refresh token rotation, email verification, password reset via OTP, and role-based access control.",
    ],
    features: [
      "Access token + refresh token rotation",
      "Email verification on signup",
      "Password reset via OTP (email)",
      "Role-based access control (Admin / User)",
      "Rate limiting to prevent brute force attacks",
      "Secure HTTP-only cookie storage",
    ],
    challenges: [
      "Implementing secure token rotation without breaking UX",
      "Setting up email service with proper error handling",
      "Preventing timing attacks on token comparison",
    ],
    learnings: [
      "Deep dive into JWT security best practices",
      "Node.js crypto module for secure OTP generation",
      "Middleware composition patterns in Express",
    ],
    duration: "3 weeks",
    status: "Completed",
    screenshots: ["/auth2.png"],
    highlight: "Implemented a reusable authentication system with JWT refresh token rotation, email verification, OTP-based password recovery, and role-based access control."
  },
  
  {
    slug: "interview-ai",
    title: "Interview AI",
    description: "AI-powered mock interview tool with real-time feedback via Gemini",
    bgImage: "/interview.png",
    tags: ["Next.js", "Gemini AI", "Tailwind CSS"],
    type: "Full Stack",
    liveUrl: "https://interview-ai-frontend-seven.vercel.app/",
    githubUrl: "https://github.com/kunaljaiswal2005/interviewAI",
    longDescription: [
      "Interview AI is a Next.js application that simulates technical mock interviews using Google's Gemini AI. Users can select a topic, answer questions verbally or via text, and receive instant AI-generated feedback.",
      "The app tracks performance over sessions and provides a detailed report on strengths and areas to improve.",
    ],
    features: [
      "AI-generated interview questions by topic & difficulty",
      "Real-time answer evaluation with feedback",
      "Session history and performance tracking",
      "Support for DSA, System Design, and HR rounds",
      "Clean, distraction-free interview UI",
    ],
    challenges: [
      "Managing Gemini API response streaming for real-time feedback",
      "Designing prompts that produce consistent, structured evaluations",
      "Handling API rate limits gracefully in the UI",
    ],
    learnings: [
      "Prompt engineering for structured AI responses",
      "Next.js App Router with server and client component boundaries",
      "Streaming API responses to the frontend",
    ],
    duration: "5 weeks",
    status: "Completed",
    screenshots: [],
    highlight: "Built an AI-powered mock interview platform using Gemini AI to generate questions, evaluate answers, and deliver personalized performance feedback."
  },
  {
    slug: "tripnest",
    title: "TripNest",
    description: "A full-stack travel planning platform for creating trips, managing itineraries, discovering destinations, and collaborating with travel groups.",
    bgImage: "/tripnest1.png",
    tags: ["React","JavaScript","Tailwind CSS","Spring Boot","Java","PostgreSQL","Supabase","JWT","OAuth2"],
    type: "Full Stack",
    liveUrl: "",
    githubUrl: "https://github.com/kunaljaiswal2005/tripnest-backend",
    longDescription: [
       "TripNest is a full-stack travel planning and trip management platform designed to help users organize their complete travel experience from a single application. Users can create and manage trips, plan day-wise itineraries, explore destinations, manage budgets, and keep important travel information organized.",

    "The frontend is built with React, Vite, and Tailwind CSS, while the backend is powered by Spring Boot and Java. PostgreSQL is used for persistent data storage through Supabase. The application implements JWT-based authentication along with Google OAuth2 login and provides REST APIs for managing trips, itineraries, destinations, and user-related data.",

    "TripNest focuses on making travel planning structured and convenient by combining trip management, destination discovery, budget tracking, group collaboration, document management, and smart notifications into one platform.",
    ],
    features: [
      "User registration and login with JWT authentication",
    "Google OAuth2 authentication",
    "Create, update, and delete trips",
    "Day-wise trip itinerary planning",
    "Destination discovery and exploration",
    "Trip budget management",
    "Group trip collaboration",
    "Travel document storage and management",
    "Smart trip notifications",
    "RESTful APIs using Spring Boot",
    "PostgreSQL database with Supabase",
    "Responsive React and Tailwind CSS interface",
    ],
    challenges: [
       "Designing a clean architecture between the React frontend and Spring Boot REST API",
    "Implementing secure JWT authentication and protected API routes",
    "Integrating Google OAuth2 authentication with the existing security flow",
    "Configuring CORS correctly between the Vite frontend and Spring Boot backend",
    "Connecting the Spring Boot application with Supabase PostgreSQL",
    "Managing relational data for trips, itineraries, users, and destinations",
    "Handling API errors and authentication states consistently on the frontend",
    ],
    learnings: [
      "Built a full-stack application using React and Spring Boot",
    "Learned how to design and consume RESTful APIs",
    "Implemented JWT-based authentication and authorization",
    "Worked with Google OAuth2 authentication",
    "Gained practical experience with PostgreSQL and Supabase",
    "Learned frontend-backend integration and CORS configuration",
    "Improved understanding of Spring Security",
    "Learned how to structure and manage a scalable full-stack project",
    ],
    duration: "2-3 months",
    status: "Ongoing",
    screenshots: [""],
    highlight: "Developed a full-stack travel management platform with Spring Boot, PostgreSQL, JWT authentication, Google OAuth2, and collaborative trip planning."
  },
  {
  slug: "shakti-dental-clinic",
  title: "Shakti Dental Clinic",
  description:
    "A modern and responsive dental clinic website designed to showcase dental services, doctors, clinic information, and appointment details.",
  bgImage: "/clinic1.png",
  tags: [
    "React",
    "JavaScript",
    "CSS",
    "Responsive Design"
  ],
  type: "Frontend",

  liveUrl: "https://sakthi-dental-clinic-seven.vercel.app/",
  githubUrl: "https://github.com/kunaljaiswal2005/sakthi-dental-clinic",

  longDescription: [
    "Shakti Dental Clinic is a modern responsive website developed to provide patients with an easy way to explore dental services, learn about the clinic, and find important contact and appointment information.",

    "The website focuses on a clean and professional user interface with responsive layouts that work across desktop, tablet, and mobile devices. Different sections are organized to present the clinic, dental treatments, doctors, testimonials, contact information, and other important details clearly.",

    "The project helped me improve my frontend development skills, particularly in responsive design, reusable React components, page structure, UI consistency, and creating a user-friendly healthcare website."
  ],

  features: [
    "Responsive dental clinic website",
    "Modern and professional landing page",
    "Dental services and treatment sections",
    "Doctor and clinic information",
    "About clinic section",
    "Patient testimonials section",
    "Contact and appointment information",
    "Responsive navigation",
    "Mobile-friendly design",
    "Reusable React components",
    "Optimized layout for different screen sizes"
  ],

  challenges: [
    "Designing a professional healthcare-focused user interface",
    "Creating a responsive layout for desktop, tablet, and mobile devices",
    "Maintaining consistent spacing, typography, and visual hierarchy",
    "Structuring the website into reusable React components",
    "Making important clinic and appointment information easy to find",
    "Ensuring the website provides a smooth experience across different screen sizes"
  ],

  learnings: [
    "Improved React component-based development",
    "Learned how to create responsive layouts",
    "Improved CSS and frontend UI development skills",
    "Learned how to structure a professional business website",
    "Improved understanding of reusable components",
    "Learned how to design interfaces around user needs",
    "Improved mobile-first and responsive development practices"
  ],

  duration: "3-4 weeks",
  status: "Completed",

  screenshots: [
    "/clinic2.png","/clinic3.png","/clinic4.png"
  ],
  highlight: "Designed and deployed a responsive dental clinic website featuring service showcases, doctor information, patient testimonials, and appointment details."
}
  
  
  // ── ADD YOUR NEXT PROJECT BELOW ────────────────────────────────
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full Stack Development",
    description: "Build scalable full-stack web applications using React, Next.js, Node.js, Express.js, and MongoDB.",
    link: "#",
  },
  {
    icon: assets.mobile_icon,
    title: "Frontend Development",
    description: "Create responsive, fast, and modern user interfaces with React, Next.js, Tailwind CSS, HTML, CSS, and JavaScript.",
    link: "#",
  },
  {
    icon: assets.ui_icon,
    title: "Backend Development",
    description: "Develop secure REST APIs, authentication systems, and server-side applications using Node.js and Express.js.",
    link: "#",
  },
  {
    icon: assets.graphics_icon,
    title: "Database & API Integration",
    description: "Design MongoDB databases, integrate third-party APIs, and optimize application performance.",
    link: "#",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Skills",
    description: "React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Tailwind CSS, Git",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech CSE (AI) | Dr. Ambedkar Institute of Technology for Divyangjan",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description: "Built 5+ real-world MERN stack projects with responsive UI and REST APIs",
  },
];

export const toolsData = [
  assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git,
];
