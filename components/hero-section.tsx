"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <section className="relative z-10 px-6 md:px-10 pt-10 md:pt-0 pb-20">
        <div className="max-w-6xl mx-auto min-h-auto md:min-h-[78vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 lg:gap-10 items-center w-full">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-xs md:text-sm text-purple-300 backdrop-blur-xl"
              >
                <Code2 size={15} />
                AI Powered Security Detection
              </motion.div>

              {/* TITLE */}
              <h1 className="mt-8 text-[2.9rem] leading-[1] sm:text-5xl md:text-6xl font-black leading-[1] tracking-[-0.04em]">
                Detect &<span className="text-purple-400"> Prevent</span>
                <br />
                SQL Injection
                <br />
                Attacks
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 max-w-sm mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Machine learning powered detection system designed to analyze
                suspicious SQL Injection payloads in real-time through AI
                inference.
              </p>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-fit justify-center lg:justify-start">
                <Link
                  href="#demo"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-purple-500 hover:bg-purple-400 transition w-full sm:w-auto px-6 py-3.5 font-medium shadow-[0_0_40px_rgba(168,85,247,0.35)]"
                >
                  Launch Demo
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </Link>

                <Link
                  href="#playground"
                  className="rounded-2xl border border-white/10 bg-white/3 hover:bg-white/6 transition w-full sm:w-auto px-6 py-3.5 backdrop-blur-xl"
                >
                  API Playground
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                },
                x: {
                  duration: 0.8,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="relative flex justify-center mt-14 lg:mt-0 lg:justify-end lg:translate-y-4"
            >
              {/* SUBTLE GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-105 h-105 bg-purple-500/10 md:bg-purple-500/20 blur-[100px]"
              />

              {/* CARD */}
              <div className="relative w-full max-w-72.5 sm:max-w-md lg:max-w-xl rounded-3xl border border-white/10 bg-[#12091f]/50 backdrop-blur-2xl p-5 md:p-7 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                {/* TOP */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                {/* TERMINAL */}
                <div className="space-y-4 font-mono text-xs md:text-sm">
                  <div className="text-purple-300">
                    {">"} analyzing payload...
                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-black/30 p-4">
                    <p className="text-red-400 text-xs uppercase tracking-widest">
                      Threat Detected
                    </p>

                    <TypeAnimation
                      sequence={[
                        "' OR 1=1 --",
                        2000,
                        "' UNION SELECT password FROM users --",
                        2000,
                        "'; DROP TABLE users; --",
                        2000,
                      ]}
                      wrapper="p"
                      repeat={Infinity}
                      className="mt-3 break-all text-gray-300"
                    />
                  </div>

                  <div className="rounded-2xl border border-white/10 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Confidence</span>

                      <span className="font-bold text-purple-400">98.2%</span>
                    </div>

                    {/* BAR */}
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[98%] rounded-full bg-linear-to-r from-purple-500 to-fuchsia-400" />
                    </div>
                  </div>

                  <div className="text-green-400">
                    ✓ request blocked successfully
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
