"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-700/50 z-50">
        <div className="mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
                <Image
                    src="/portfolio-logo.png"
                    alt="Richie Thiesfeldt logo"
                    width={48}
                    height={48}
                    priority
                />
            </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-zinc-400 hover:text-zinc-100 transition-colors">About</a>
            <a href="/blog" className="text-zinc-400 hover:text-zinc-100 transition-colors">Blog</a>
            <a href="/projects" className="text-zinc-400 hover:text-zinc-100 transition-colors">Projects</a>
            <a href="/contact" className="text-zinc-400 hover:text-zinc-100 transition-colors">Contact</a>
            <a
              href="/Resume-July-25.pdf"
              download
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu with Background Blur */}
      {menuOpen && (
        <>
          {/* Backdrop with blur effect */}
          <div 
            className="fixed inset-0 bg-zinc-900/80 backdrop-blur-md z-40"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="fixed inset-0 flex flex-col items-center justify-center space-y-8 z-50 pointer-events-none">
            <div className="pointer-events-auto flex flex-col items-center space-y-8">
              <a 
                href="/about" 
                className="text-2xl text-zinc-300 hover:text-emerald-400 transition-colors" 
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="/blog" 
                className="text-2xl text-zinc-300 hover:text-emerald-400 transition-colors" 
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="/projects" 
                className="text-2xl text-zinc-300 hover:text-emerald-400 transition-colors" 
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="/contact" 
                className="text-2xl text-zinc-300 hover:text-emerald-400 transition-colors" 
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/Resume-July-25.pdf"
                download
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}