"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent! ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await response.json();
        setStatus(result.error || "Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 px-6 sm:px-12 py-28">
      <div className="max-w-3xl mx-auto space-y-16">

        {/* Heading */}
        <section className="text-start">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg max-w-2xl text-zinc-400">
            Want to work together, have a project idea, or just want to say hello?
            Fill out the form below or connect with me on LinkedIn or GitHub.
          </p>
        </section>

        {/* Why Reach Out */}
        <section className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <h2 className="text-2xl font-semibold mb-2 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-emerald-400" />
            Why reach out?
          </h2>
          <p className="text-zinc-400 mb-2">
            I love collaborating on fresh ideas, helping teams solve tricky problems,
            or just chatting about the latest in tech, design, or startup culture.
          </p>
          <p className="text-zinc-400 italic">
            Fun fact: BitDrop was born from a random coffee-fueled brainstorming session ☕💡
          </p>
        </section>

        {/* Contact Form */}
        <section>
          <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-800 rounded-xl p-6 border border-zinc-700">
            <div>
              <label htmlFor="name" className="block mb-1 text-zinc-300">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-zinc-300">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-zinc-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-zinc-900 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-200 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Send className="w-5 h-5 mr-2" />
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-sm mt-2">{status}</p>}
          </form>
        </section>

        {/* Alternative Contact Options */}
        <section className="text-center space-y-4">
          <p className="text-zinc-400">Prefer to reach me directly?</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:richiethie.dev@gmail.com" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://github.com/richiethie" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/richiethie" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
