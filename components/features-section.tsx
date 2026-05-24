"use client";

import { Reveal } from "@/components";
import { Brain, Shield, TerminalSquare, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <Reveal>
      <section id="features" className="relative z-10 px-6 md:px-10 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* SECTION HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-xl">
              <Shield size={16} />
              Core Features
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
              Built For Modern
              <span className="text-purple-400"> Security Testing</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              AI-powered detection system designed for secure input validation
              and SQL Injection analysis.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {/* CARD 1 */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-7 hover:border-purple-400/20 transition duration-300"
            >
              <div className="w-fit rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4">
                <Brain className="text-purple-400" size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">AI Detection Engine</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Machine learning model trained to analyze and classify
                suspicious SQL Injection payloads.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-7 hover:border-purple-400/20 transition duration-300"
            >
              <div className="w-fit rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4">
                <Activity className="text-purple-400" size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">Real-Time Analysis</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Analyze user input instantly with fast response times powered by
                Hugging Face inference API.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-7 hover:border-purple-400/20 transition duration-300"
            >
              <div className="w-fit rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4">
                <TerminalSquare className="text-purple-400" size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">API Playground</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Test SQL Injection payloads directly using the integrated API
                playground interface.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-7 hover:border-purple-400/20 transition duration-300"
            >
              <div className="w-fit rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4">
                <Shield className="text-purple-400" size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Secure Form Validation
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Simulate real-world secure web form validation against SQL
                Injection attacks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
