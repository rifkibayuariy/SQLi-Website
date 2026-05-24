"use client";

import Link from "next/link";
import { Reveal } from "@/components";

import { ShieldCheck, ExternalLink, Code2, ArrowUpRight } from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Reveal>
      <footer className="relative z-10 px-6 md:px-10 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
            {/* TOP */}
            <div className="grid gap-12 px-8 py-10 md:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-40" />

                    <div className="relative rounded-2xl border border-purple-400/20 bg-purple-500/10 p-3">
                      <ShieldCheck className="text-purple-400" size={26} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">SQLi Detection</h3>

                    <p className="text-sm text-gray-400">
                      AI Security Detection Platform
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400">
                  Machine learning powered platform for detecting SQL Injection
                  attacks through real-time analysis, preprocessing, and AI
                  inference.
                </p>

                {/* TECH STACK */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Next.js", "Tailwind CSS", "FastAPI", "Hugging Face"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-10">
                {/* NAVIGATION */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                    Navigation
                  </h4>

                  <div className="mt-5 space-y-4 text-sm">
                    <Link
                      href="#features"
                      className="block text-gray-400 hover:text-purple-300 transition"
                    >
                      Features
                    </Link>

                    <Link
                      href="#demo"
                      className="block text-gray-400 hover:text-purple-300 transition"
                    >
                      Demo Simulation
                    </Link>

                    <Link
                      href="#playground"
                      className="block text-gray-400 hover:text-purple-300 transition"
                    >
                      API Playground
                    </Link>

                    <Link
                      href="#api-usage"
                      className="block text-gray-400 hover:text-purple-300 transition"
                    >
                      How to Use the API
                    </Link>

                    <a
                      href="https://rifkibayuariyan-sqli-detection-api.hf.space/docs"
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition"
                    >
                      API Docs
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* RESOURCES */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                    Resources
                  </h4>

                  <div className="mt-5 space-y-4 text-sm">
                    <a
                      href="https://github.com/rifkibayuariy/SQLi-Website"
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition"
                    >
                      <FaGithub size={16} />
                      GitHub
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href="https://rifkibayuariyan-sqli-detection-api.hf.space/docs"
                      target="_blank"
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition"
                    >
                      <Code2 size={16} />
                      API Documentation
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="border-t border-white/10 px-8 py-5">
              <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-gray-500">
                  © 2026 Rifki Bayu Ariyanto. All rights reserved.
                </p>

                <p className="text-sm text-gray-500">
                  Built using Next.js, FastAPI, and AI Inference
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Reveal>
  );
}
