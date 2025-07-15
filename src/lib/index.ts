// src/lib/index.ts

export const featuredProjects = [
  {
    title: "FilmShare Community Platform",
    description:
      "A web platform for filmmakers to share, rank, and discover short films, with private and public groups, built using React, Node.js, and MongoDB.",
    tech: ["React", "AWS S3", "MongoDB", "Express"],
    link: "https://filmshare.vercel.app/",
    github: "https://github.com/richiethie/FilmProject",
    image: "/projects/FilmShareFeed.png",
  },
  {
    title: "Barbershop Membership Platform",
    description:
      "A subscription platform for barbershops, integrating Stripe payments, Acuity Scheduling, and real-time customer management.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe", "Acuity"],
    link: "https://www.armonempire.com/",
    github: "https://github.com/richiethie/ArmonEmpire",
    image: "/projects/ArmonEmpire.png",
  },
  {
    title: "Member Waitlist PWA",
    description:
      "A progressive web app that manages real-time barbershop waitlists using WebSockets, with live barber controls and AI-estimated wait times.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets"],
    link: "not-live", // explicitly mark not live
    github: "https://github.com/richiethie/MemberWaitlist",
    image: "/projects/Waitlist.png",
  },
];

export const projects = [
  {
    title: "FilmShare Community Platform",
    description:
      "A web platform for filmmakers to share, rank, and discover short films, with private and public groups, built using React, Node.js, and MongoDB.",
    tech: ["React", "AWS S3", "MongoDB", "Express"],
    link: "https://filmshare.vercel.app/",
    github: "https://github.com/richiethie/FilmProject",
    image: "/projects/FilmShareFeed.png",
  },
  {
    title: "Barbershop Membership Platform",
    description:
      "A subscription platform for barbershops, integrating Stripe payments, Acuity Scheduling, and real-time customer management.",
    tech: ["Node.js", "Express", "MongoDB", "Stripe", "Acuity"],
    link: "https://www.armonempire.com/",
    github: "https://github.com/richiethie/ArmonEmpire",
    image: "/projects/ArmonEmpire.png",
  },
  {
    title: "Member Waitlist PWA",
    description:
      "A progressive web app that manages real-time barbershop waitlists using WebSockets, with live barber controls and AI-estimated wait times.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets"],
    link: "not-live", // explicitly mark not live
    github: "https://github.com/richiethie/MemberWaitlist",
    image: "/projects/Waitlist.png",
  },
    {
    title: "Fade2Black Barbershop Website",
    description:
      "A stylish promotional website for Fade2Black barbershop, designed with modern UI and showcasing services, booking, and gallery.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://fade2blackbarbershop.com/", // if you have a live link; otherwise use "not-live"
    github: "https://github.com/richiethie/Fade2Black",
    image: "/projects/Fade2Black.png",
  },
  {
  title: "BitDrop Social Platform",
  description:
    "A mobile app for sharing and ranking memes in public and private groups, built with React Native, Golang, and Supabase.",
  tech: ["React Native", "Golang", "Supabase", "PostgreSQL"],
  link: null, // coming soon
  github: "private", // private repo
  image: "/projects/BitDrop.png",
  },  
  {
    title: "3D Portfolio",
    description:
      "An interactive 3D developer portfolio showcasing projects and skills, built with Three.js and React Three Fiber.",
    tech: ["React", "Three.js", "React Three Fiber"],
    link: "https://3d-portfolio.vercel.app/", // if you have a live link; otherwise use "not-live"
    github: "https://github.com/richiethie/3d-portfolio",
    image: "/projects/portfolio-v1.png",
  },
  {
    title: "Cash Register Project",
    description:
      "A frontend project simulating a cash register system, handling user inputs, calculating totals, and providing change breakdowns.",
    tech: ["React", "TypeScript", "Vite"],
    link: "https://cash-register-project-three.vercel.app/", // if you have a live link; otherwise use "not-live"
    github: "https://github.com/richiethie/cash-register-project",
    image: "/projects/cash-register.png",
  },
  {
    title: "YouTube Homepage Clone",
    description:
      "A responsive clone of the YouTube homepage, demonstrating modern UI techniques, video thumbnails, and layout replication.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://youtube-clone-mauve-kappa.vercel.app/", // adjust if live link is different
    github: "https://github.com/richiethie/YoutubeClone",
    image: "/projects/youtube-clone.png",
  },
  {
    title: "Record Entertainment Website",
    description:
      "A promotional website for Record Entertainment, a wedding DJ company, highlighting services, event packages, testimonials, and contact information.",
    tech: ["React", "Tailwind CSS", "Next.js"],
    link: "not-live",
    github: "https://github.com/Pharos19/record-site",
    image: "/projects/record-site.png",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Golang", "Node.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Docker", "AWS", "GitHub Actions", "Vercel", "Supabase"],
  },
];

export const stats = [
  { number: 4, suffix: "+", label: "Years Experience" },
  { number: 30, suffix: "+", label: "Projects Built" },
  { number: 20, suffix: "+", label: "Technologies" },
  { number: 100, suffix: "%", label: "Client Satisfaction" },
];



  // {
  //   title: "BitDrop Social Platform",
  //   description:
  //     "A mobile app for sharing and ranking memes in public and private groups, built with React Native, Golang, and Supabase.",
  //   tech: ["React Native", "Golang", "Supabase", "PostgreSQL"],
  //   link: null, // coming soon
  //   github: "private", // mark as private
  // },