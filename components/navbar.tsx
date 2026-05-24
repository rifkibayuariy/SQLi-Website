"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu, X, ShieldCheck } from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-6 md:px-10 pt-14">
      <nav className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl px-4 py-3 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
          {/* LEFT */}
          <Link href="/" className="flex items-center gap-4">
            {/* LOGO */}
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-40 rounded-full" />

              <div className="relative p-2.5 rounded-xl border border-purple-400/20 bg-purple-500/10">
                <ShieldCheck className="text-purple-400" size={24} />
              </div>
            </div>

            {/* BRAND */}
            <div>
              <h1 className="text-base md:text-lg font-bold tracking-wide">
                SQLi Detection
              </h1>

              <p className="text-xs text-gray-400">AI Security Platform</p>
            </div>
          </Link>

          {/* CENTER MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link href="#features" className="hover:text-purple-300 transition">
              Features
            </Link>

            <Link href="#demo" className="hover:text-purple-300 transition">
              Demo
            </Link>

            <Link
              href="#playground"
              className="hover:text-purple-300 transition"
            >
              Playground
            </Link>

            <Link
              href="#api-usage"
              className="hover:text-purple-300 transition"
            >
              How to Use
            </Link>

            <a
              href="https://rifkibayuariyan-sqli-detection-api.hf.space/docs"
              target="_blank"
              className="hover:text-purple-300 transition"
            >
              Documentation
            </a>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              className="hidden md:flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 transition px-5 py-2 rounded-2xl text-sm backdrop-blur-xl"
            >
              <FaGithub size={15} />
              Github
            </a>

            <Link
              href="#playground"
              className="bg-purple-500 hover:bg-purple-400 transition text-white px-5 py-2 rounded-2xl text-sm font-medium shadow-[0_0_30px_rgba(168,85,247,0.35)]"
            >
              Launch Demo
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl px-4 py-2 text-sm"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {mobileMenuOpen && (
          <div className="absolute right-0 top-16 w-80 rounded-3xl border border-white/10 bg-[#140a24]/40 backdrop-blur-2xl p-4 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 hover:bg-white/5 transition"
              >
                Features
              </Link>

              <Link
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 hover:bg-white/5 transition"
              >
                Demo
              </Link>

              <Link
                href="#playground"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 hover:bg-white/5 transition"
              >
                Playground
              </Link>

              <Link
                href="#api-usage"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 hover:bg-white/5 transition"
              >
                How to Use
              </Link>

              <a
                href="https://rifkibayuariyan-sqli-detection-api.hf.space/docs"
                target="_blank"
                className="rounded-2xl px-4 py-3 hover:bg-white/5 transition"
              >
                Documentation
              </a>

              {/* DIVIDER */}
              <div className="my-2 border-t border-white/10" />

              {/* GITHUB */}
              <a
                href="https://github.com/"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
              >
                <FaGithub size={16} />
                Github
              </a>

              {/* DEMO */}
              <Link
                href="#playground"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-2xl bg-purple-500 hover:bg-purple-400 transition px-4 py-3 font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              >
                Launch Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
