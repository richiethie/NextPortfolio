"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code, Palette, Zap, Users, Calendar, MapPin } from 'lucide-react';
import { featuredProjects, skills, stats } from '@/lib';
import CountUp from 'react-countup';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100" style={{backgroundColor: 'rgb(24 24 27)'}}>

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-start lg:text-left">
                <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-3 md:mb-6">
                  <Zap className="w-3 h-3 md:w-4 md:h-4 text-emerald-400 mr-2" />
                  <span className="text-xs md:text-sm font-medium text-emerald-300">Available for new opportunities</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl text-start lg:text-7xl font-bold mb-3 md:mb-6">
                  <span className="block">Hi, I'm</span>
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                    Richie Thiesfeldt
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-start text-zinc-400 mb-8 max-w-2xl">
                  Software Engineer & Full-Stack Developer crafting exceptional digital experiences with modern technologies
                </p>
                
                <div className="flex flex-row gap-4 mb-8">
                  <a
                    href="/projects"
                    className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm text-nowrap md:text-lg font-medium hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    View My Work
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-zinc-600 text-zinc-300 px-3 md:px-8 py-3 md:py-4 rounded-xl text-sm text-nowrap md:text-lg font-medium hover:border-emerald-500 hover:text-emerald-400 transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </div>
                
                <div className="flex items-center gap-6">
                  <a href="https://github.com/richiethie" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/richiethie" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:richiethie.dev@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              {/* <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-500 to-emerald-600 p-1">
                    <div className="w-full h-full rounded-xl bg-zinc-800 flex items-center justify-center">
                      <Image
                        src="/Profile.jpg"
                        alt="Richie Thiesfeldt"
                        width={72}
                        height={72}
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl">
                    👋
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" py-8 md:py-16 px-2 md:px-6 bg-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-4xl font-bold text-zinc-100 mb-2">
                  <CountUp
                    end={stat.number}
                    duration={2} // seconds to count up
                    separator=","
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-zinc-400 text-xs text-wrap md:text-md font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Building the future, one 
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> line of code </span>
                at a time
              </h2>
              <p className="text-sm md:text-lg text-zinc-400 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 4+ years of experience creating scalable web applications. 
                My expertise spans modern JavaScript frameworks, backend development with Go and Node.js, and cloud infrastructure.
              </p>
              <p className="text-sm md:text-lg text-zinc-400 mb-8 leading-relaxed">
                I love turning complex problems into simple, beautiful solutions. When I'm not coding, 
                you'll find me exploring new technologies, contributing to open source, or mentoring fellow developers.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-zinc-500 md:mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Wisconsin, USA
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Available for work
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
                  <h3 className="font-semibold text-zinc-100 mb-4 flex items-center">
                    {skillGroup.category === 'Frontend' && <Palette className="w-5 h-5 mr-2 text-emerald-400" />}
                    {skillGroup.category === 'Backend' && <Code className="w-5 h-5 mr-2 text-cyan-400" />}
                    {skillGroup.category === 'Tools' && <Zap className="w-5 h-5 mr-2 text-emerald-500" />}
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 sm:px-12 bg-gradient-to-br from-zinc-800/50 to-emerald-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-start mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Featured 
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Projects</span>
            </h2>
            <p className="md:text-xl text-zinc-400 max-w-3xl">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              modern frameworks, and user-centered design.
            </p>
            <a
              href="/projects"
            //   className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
                <span className="inline-block text-emerald-400 hover:text-emerald-300 font-medium mt-4">
                    See more projects →
                </span>
            </a>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-800 rounded-2xl p-6 border border-zinc-700 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-zinc-700 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.link === "not-live" ? (
                    <span className="flex items-center text-zinc-500 italic text-sm">
                      Not live
                    </span>
                  ) : project.link === null ? (
                    <span className="flex items-center text-zinc-500 italic text-sm">
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      className="flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                      target="_blank"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}

                  {project.github === "private" ? (
                    <span className="flex items-center text-zinc-500 italic text-sm">
                      Private Repo
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      className="flex items-center text-zinc-400 hover:text-zinc-300 font-medium transition-colors"
                      target="_blank"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-start">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's 
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> work together</span>
          </h2>
          <p className="md:text-xl text-zinc-400 mb-6 md:mb-12 max-w-3xl">
            I'm always interested in new opportunities and exciting projects. 
            Whether you're looking to build something amazing or just want to chat about tech, I'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 text-center gap-6 mb-12">
            <a
              href="/contact"
              className="group bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-emerald-500 transition-colors"
            >
              <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">Email</h3>
              <p className="text-zinc-400">Send me a message</p>
            </a>
            
            <a
              href="https://linkedin.com/in/richiethie"
              target="_blank"
              className="group bg-zinc-800 p-6 rounded-2xl border border-zinc-700 hover:border-emerald-500 transition-colors"
            >
              <Linkedin className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition-colors">LinkedIn</h3>
              <p className="text-zinc-400">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/richiethie"
              target="_blank"
              className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <Github className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">GitHub</h3>
              <p className="text-slate-600 dark:text-slate-400">Check out my code</p>
            </a>
          </div>
          
          <a
            href="/Resume-July-25.pdf"
            download
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
          >
            Download Resume
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}