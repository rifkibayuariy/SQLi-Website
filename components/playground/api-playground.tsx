"use client";

import { useState } from "react";

import { DatabaseZap } from "lucide-react";

import { scanSQLi } from "@/lib";

import type { PredictionResult } from "@/types";

import PlaygroundForm from "./playground-form";
import PlaygroundResult from "./playground-result";
import { Reveal } from "@/components";

export default function ApiPlayground() {
  const [payload, setPayload] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<PredictionResult | null>(null);

  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await scanSQLi(payload);

      setResult(data);
    } catch {
      setError("Failed to analyze payload");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <section id="playground" className="relative z-10 px-6 md:px-10 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-xl">
              <DatabaseZap size={16} />
              API Playground
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
              Directly Access The
              <span className="text-purple-400"> Detection API</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Test payloads directly through the integrated SQL Injection
              detection API interface.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mt-16">
            <PlaygroundForm
              payload={payload}
              loading={loading}
              setPayload={setPayload}
              onSubmit={handleAnalyze}
            />

            <PlaygroundResult result={result} error={error} />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
