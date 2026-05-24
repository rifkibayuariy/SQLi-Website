"use client";

import { Shield } from "lucide-react";

import type { PredictionResult } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  result: PredictionResult | null;
  error: string;
}

export default function FeedbackResult({ result, error }: Props) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
      {/* HEADER */}
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
          <Shield className="text-purple-400" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-xl">Detection Result</h3>

          <p className="text-sm text-gray-400">AI model response preview</p>
        </div>
      </div>

      <div className="mt-8">
        {error && (
          <div className="rounded-[1.75rem] border border-red-500/20 bg-red-500/5 p-5">
            <p className="text-red-400 font-medium">{error}</p>
          </div>
        )}

        {!result && !error && (
          <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-8 text-center">
            <div className="w-fit mx-auto rounded-2xl border border-white/10 bg-white/3 p-4">
              <Shield className="text-purple-400" size={28} />
            </div>

            <h4 className="mt-5 text-xl font-bold">Waiting For Analysis</h4>

            <p className="mt-3 text-gray-400 leading-relaxed">
              Submit feedback to analyze whether the input contains potential
              SQL Injection payloads.
            </p>
          </div>
        )}
        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              className="space-y-6"
            >
              {/* STATUS */}
              <div
                className={`rounded-[1.75rem] border p-6 ${
                  result.is_sqli
                    ? "border-red-500/20 bg-red-500/5"
                    : "border-green-500/20 bg-green-500/5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Detection Status</p>

                    <h4
                      className={`mt-2 text-2xl font-bold ${
                        result.is_sqli ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {result.is_sqli
                        ? "SQL Injection Detected"
                        : "Safe Feedback"}
                    </h4>
                  </div>

                  <div
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold ${
                      result.is_sqli
                        ? "bg-red-500/10 text-red-300"
                        : "bg-green-500/10 text-green-300"
                    }`}
                  >
                    {result.is_sqli ? "THREAT" : "SAFE"}
                  </div>
                </div>
              </div>

              {/* ORIGINAL */}
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 overflow-hidden">
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="text-sm font-medium text-gray-300">
                    Original Feedback
                  </p>
                </div>

                <div className="p-5">
                  <p className="text-gray-300 leading-relaxed break-words">
                    {result.input}
                  </p>
                </div>
              </div>

              {/* CLEANED */}
              <div className="rounded-[1.75rem] border border-white/10 bg-black/20 overflow-hidden">
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="text-sm font-medium text-gray-300">
                    Processed Input
                  </p>
                </div>

                <div className="p-5">
                  <p className="font-mono text-sm text-purple-300 break-words">
                    {result.cleaned_input}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
