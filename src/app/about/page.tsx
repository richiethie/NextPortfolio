"use client";

import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function AboutPage() {
  const workExperience = [
    {
      role: "Software Engineer",
      company: "Roydan Enterprises",
      period: "Sep 2024 – Present",
      description: [
        "Built and maintained SaaS products using React, Go, and .NET, serving hundreds of end-users.",
        "Led AI integrations to automate business workflows and improve product intelligence.",
        "Collaborated with cross-functional teams on architecture decisions and feature planning.",
        "Enhanced legacy codebases, improving maintainability, test coverage, and performance."
      ],
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      period: "2022 – Present",
      description: [
        "Designed and launched client projects, including membership systems, waitlist PWAs, and social apps.",
        "Worked directly with clients to gather requirements, deliver custom solutions, and provide ongoing support.",
        "Helped one client reach a projected $10k+ MRR through a custom membership platform.",
        "Built mobile-first responsive UIs with React, Tailwind CSS, and React Native.",
        "Managed deployments on Vercel and AWS, including CI/CD pipelines and performance optimizations."
      ],
    },
    {
      role: "Software Programmer",
      company: "Accurate Controls",
      period: "Apr 2024 – Sep 2024",
      description: [
        "Engineered and enhanced custom security software applications, ensuring seamless integration with client systems.",
        "Led software testing efforts, including test review, analysis, and certification, improving software reliability and security compliance.",
        "Optimized SQL-based database queries to enhance data retrieval efficiency and system performance across multiple environments.",
        "Automated repetitive user data entry processes with Python scripts, reducing manual workload and cutting development time by 10%."
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 sm:px-12 py-28">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Heading */}
        <section>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Hey! I’m Richie Thiesfeldt, a passionate software engineer and full-stack developer based in Wisconsin, USA.
            I specialize in crafting scalable digital products, from idea to launch. Whether it’s a SaaS platform, mobile app, or PWA,
            I love turning complex challenges into elegant solutions.
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-zinc-500">
            <MapPin className="w-4 h-4" />
            Wisconsin, USA
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-2 text-emerald-400" />
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-emerald-500 transition-colors">
                <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
                <p className="text-zinc-400">{job.company} · {job.period}</p>
                <ul className="list-disc list-inside mt-2 text-zinc-300 space-y-1">
                  {job.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-emerald-400" />
            Education
          </h2>
          <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-emerald-500 transition-colors">
            <h3 className="text-xl font-bold text-zinc-100">Full Stack Software Development Certificate</h3>
            <p className="text-zinc-400">University of Wisconsin, Graduated 2023</p>
            <p className="text-zinc-300 mt-2">
              Focused on software engineering, web development, and algorithms.
              Active in coding clubs and project building.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
