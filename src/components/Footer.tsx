"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* MOBILE LAYOUT */}
        <div className="block md:hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-zinc-100 flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Let&apos;s connect
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Passionate about creating thoughtful digital experiences.
              Let&apos;s build something great together!
            </p>
          </div>

          {/* Social Links - Prominent on mobile */}
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:richiethie.dev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-6 h-6 mb-1" />
              <span className="text-xs">Email</span>
            </a>
            <a
              href="https://github.com/richiethie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-6 h-6 mb-1" />
              <span className="text-xs">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/richiethie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin className="w-6 h-6 mb-1" />
              <span className="text-xs">LinkedIn</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Link href="/about" className="text-center py-3 px-4 bg-zinc-800 rounded-lg text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700 transition-all">
              About
            </Link>
            <Link href="/blog" className="text-center py-3 px-4 bg-zinc-800 rounded-lg text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700 transition-all">
              Blog
            </Link>
            <Link href="/projects" className="text-center py-3 px-4 bg-zinc-800 rounded-lg text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700 transition-all">
              Projects
            </Link>
            <Link href="/contact" className="text-center py-3 px-4 bg-zinc-800 rounded-lg text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700 transition-all">
              Contact
            </Link>
          </div>

          {/* Blog CTA */}
          <div className="text-center mb-6">
            <Link href="/blog">
              <span className="inline-block bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 font-medium py-2 px-4 rounded-lg border border-emerald-500/30 transition-all">
                Check out the blog →
              </span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-zinc-500 text-sm text-center pt-4 border-t border-zinc-800">
            © {year} Richie Thiesfeldt. <a href="https://richiethie.netlify.app/" className="text-emerald-600 hover:underline">Portfolio v1 →</a>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex md:justify-between gap-12">
          
          {/* LEFT SIDE */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Let&apos;s build something great together
            </h2>
            <p className="text-zinc-400 max-w-lg">
              I'm passionate about creating thoughtful, high-impact digital experiences.
              Whether you have a project, a startup idea, or just want to connect over tech — feel free to reach out!
            </p>
            <Link href="/blog">
              <span className="inline-block text-emerald-400 hover:text-emerald-300 font-medium">
                Check out the blog →
              </span>
            </Link>
            <div className="text-zinc-500 text-md pt-6">
              © {year} Richie Thiesfeldt. <a href="https://richiethie.netlify.app/" className="text-emerald-600 hover:underline">Portfolio v1 →</a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col md:items-end space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2 relative inline-block pb-1">
                More Links
                <span className="absolute left-0 bottom-0 w-full h-px bg-emerald-500/50"></span>
              </h3>
              <div className="flex flex-col space-y-3 md:text-end">
                <Link href="/about" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  About
                </Link>
                <Link href="/blog" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
                <Link href="/projects" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 justify-start md:justify-end">
              <a
                href="mailto:richiethie.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/richiethie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/richiethie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}