"use client";

import { useState } from "react";

import { MessageSquareWarning } from "lucide-react";

import { scanSQLi } from "@/lib";

import type { PredictionResult } from "@/types";

import FeedbackForm from "./feedback-form";
import FeedbackResult from "./feedback-result";
import { Reveal } from "@/components";
import { AnimatePresence, motion } from "framer-motion";

import { ShieldAlert, ShieldCheck, X } from "lucide-react";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<PredictionResult | null>(null);

  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [modalType, setModalType] = useState<"safe" | "danger" | null>(null);

  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await scanSQLi(feedback);

      setResult(data);

      if (data.is_sqli) {
        setModalType("danger");

        setModalMessage(
          "Potential SQL Injection payload detected. Feedback submission has been blocked by the security system.",
        );

        setModalOpen(true);

        return;
      }

      setModalType("safe");

      setModalMessage(
        "Your feedback has been analyzed and submitted successfully.",
      );

      setModalOpen(true);
    } catch {
      setError("Failed to analyze feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <section id="demo" className="relative z-10 px-6 md:px-10 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-xl">
              <MessageSquareWarning size={16} />
              Real Case Simulation
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
              Test SQL Injection In A
              <span className="text-purple-400"> Realistic Scenario</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Simulate user feedback submission and see how the AI model detects
              malicious SQL Injection input.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            <FeedbackForm
              name={name}
              email={email}
              feedback={feedback}
              loading={loading}
              setName={setName}
              setEmail={setEmail}
              setFeedback={setFeedback}
              onSubmit={handleSubmit}
            />

            <FeedbackResult result={result} error={error} />
          </div>
        </div>
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md px-6"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.85,
                  y: 20,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="relative w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#12091f] p-8 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
              >
                {/* CLOSE */}
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-5 right-5 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                >
                  <X size={18} />
                </button>

                {/* ICON */}
                <div
                  className={`w-fit rounded-3xl p-5 border ${
                    modalType === "danger"
                      ? "bg-red-500/10 border-red-500/20"
                      : "bg-green-500/10 border-green-500/20"
                  }`}
                >
                  {modalType === "danger" ? (
                    <ShieldAlert className="text-red-400" size={42} />
                  ) : (
                    <ShieldCheck className="text-green-400" size={42} />
                  )}
                </div>

                {/* TITLE */}
                <h3
                  className={`mt-8 text-3xl font-black ${
                    modalType === "danger" ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {modalType === "danger"
                    ? "Threat Detected"
                    : "Feedback Submitted"}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {modalMessage}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() => setModalOpen(false)}
                  className={`mt-8 w-full rounded-2xl py-4 font-semibold transition ${
                    modalType === "danger"
                      ? "bg-red-500 hover:bg-red-400"
                      : "bg-green-500 hover:bg-green-400"
                  }`}
                >
                  {modalType === "danger" ? "Close Warning" : "Continue"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Reveal>
  );
}
