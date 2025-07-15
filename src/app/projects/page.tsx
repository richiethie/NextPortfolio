"use client";

import Image from "next/image";
import { ExternalLink, Github, Code, Lock } from "lucide-react";
import { projects } from "@/lib";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 sm:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-start">
          My{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* Mobile: Stack in column */}
        <div className="flex flex-col gap-8 lg:hidden">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden shadow-md hover:shadow-emerald-500/10 transition hover:-translate-y-1"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top w-full h-full"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-zinc-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {/* Handle Live Link */}
                  {project.link === "not-live" ? (
                    <span className="flex items-center text-zinc-500 italic text-sm">
                      Not Live
                    </span>
                  ) : project.link === null ? (
                    <span className="flex items-center text-zinc-500 italic text-sm">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-emerald-400 hover:text-emerald-300 transition"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live
                    </a>
                  )}

                  {/* Handle GitHub Link */}
                  {project.github === "private" ? (
                    <span className="flex items-center text-zinc-500 italic text-sm">
                      <Lock className="w-4 h-4 mr-1" />
                      Private Repo
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-zinc-400 hover:text-zinc-300 transition"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Featured + Grid layout */}
        <div className="hidden lg:block">
          {projects.length > 0 && (
            <>
              {/* Featured Project - First project gets spotlight */}
              <div className="mb-16">
                <div className="bg-zinc-800 rounded-3xl border border-zinc-700 overflow-hidden shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-2 group">
                  <div className="lg:flex">
                    <div className="lg:w-3/5 relative">
                      <div className="relative h-96 w-full">
                        <Image
                          src={projects[0].image}
                          alt={projects[0].title}
                          fill
                          className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-800/60" />
                      </div>
                    </div>
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-3">
                        <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                          Featured Project
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">{projects[0].title}</h2>
                      <p className="text-zinc-300 mb-6 text-lg leading-relaxed">{projects[0].description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[0].tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {/* Handle Live Link */}
                        {projects[0].link === "not-live" ? (
                          <span className="flex items-center text-zinc-500 italic text-sm">
                            Not Live
                          </span>
                        ) : projects[0].link === null ? (
                          <span className="flex items-center text-zinc-500 italic text-sm">
                            Coming Soon
                          </span>
                        ) : (
                          <a
                            href={projects[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition font-medium"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            View Live
                          </a>
                        )}

                        {/* Handle GitHub Link */}
                        {projects[0].github === "private" ? (
                          <span className="flex items-center text-zinc-500 italic text-sm">
                            <Lock className="w-4 h-4 mr-1" />
                            Private Repo
                          </span>
                        ) : (
                          <a
                            href={projects[0].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center border border-zinc-600 text-zinc-300 px-6 py-3 rounded-lg hover:bg-zinc-700 transition font-medium"
                          >
                            <Github className="w-5 h-5 mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Projects - Clean grid */}
              {projects.length > 1 && (
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-8">
                  {projects.slice(1).map((project, index) => (
                    <div
                      key={index + 1}
                      className="bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden shadow-md hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top w-full h-full"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-zinc-400 mb-4 text-sm line-clamp-3">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-zinc-500 text-xs px-2 py-1">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="flex gap-3">
                          {/* Handle Live Link */}
                          {project.link === "not-live" ? (
                            <span className="flex items-center text-zinc-500 italic text-xs">
                              Not Live
                            </span>
                          ) : project.link === null ? (
                            <span className="flex items-center text-zinc-500 italic text-xs">
                              Coming Soon
                            </span>
                          ) : (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-emerald-400 hover:text-emerald-300 transition"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Live
                            </a>
                          )}

                          {/* Handle GitHub Link */}
                          {project.github === "private" ? (
                            <span className="flex items-center text-zinc-500 italic text-xs">
                              <Lock className="w-3 h-3 mr-1" />
                              Private
                            </span>
                          ) : (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-zinc-400 hover:text-zinc-300 transition"
                            >
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}