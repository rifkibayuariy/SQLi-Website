"use client";

import { Sparkles } from "lucide-react";

import type { PredictionResult } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  result: PredictionResult | null;
  error: string;
}

export default function PlaygroundResult({ result, error }: Props) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
          <Sparkles className="text-purple-400" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-xl">Prediction Result</h3>

          <p className="text-sm text-gray-400">AI inference output</p>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6">
        {error && <p className="text-red-400">{error}</p>}

        {!result && !error && (
          <p className="text-gray-400">No prediction yet.</p>
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
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Detection Result</span>

                <span
                  className={`font-bold ${
                    result.is_sqli ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {result.is_sqli ? "SQL Injection Detected" : "Safe Input"}
                </span>
              </div>

              {/* ORIGINAL */}
              <div>
                <p className="text-sm text-gray-400 mb-2">Original Input</p>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm break-all text-gray-300">
                  {result.input}
                </div>
              </div>

              {/* CLEANED */}
              <div>
                <p className="text-sm text-gray-400 mb-2">Cleaned Input</p>

                <div className="rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm break-all text-purple-300">
                  {result.cleaned_input}
                </div>
              </div>

              {/* STATUS BOX */}
              <div
                className={`rounded-2xl p-4 border ${
                  result.is_sqli
                    ? "border-red-500/20 bg-red-500/5"
                    : "border-green-500/20 bg-green-500/5"
                }`}
              >
                <p
                  className={`font-semibold ${
                    result.is_sqli ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {result.is_sqli
                    ? "Potential SQL Injection attack detected."
                    : "Input appears safe."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
