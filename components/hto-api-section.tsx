"use client";

import { Braces, TerminalSquare, Globe, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components";

export default function HowToUseApiSection() {
  return (
    <Reveal>
      <section id="api-usage" className="relative z-10 px-6 md:px-10 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-xl">
              <Braces size={16} />
              Developer Integration
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight">
              How To Use The
              <span className="text-purple-400"> API</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Integrate the SQL Injection detection API into your own
              applications using simple HTTP requests.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-8 mt-16">
            {/* LEFT */}
            <div className="space-y-6">
              {/* ENDPOINT */}
              <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
                    <Globe className="text-purple-400" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">API Endpoint</h3>

                    <p className="text-sm text-gray-400">
                      HuggingFace deployment URL
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5 overflow-auto">
                  <code className="text-sm text-purple-300 break-all">
                    https://rifkibayuariyan-sqli-detection-api.hf.space/api/scan
                  </code>
                </div>
              </div>

              {/* REQUEST BODY */}
              <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
                    <TerminalSquare className="text-purple-400" size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">Request Body</h3>

                    <p className="text-sm text-gray-400">JSON payload format</p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5 overflow-auto">
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                    {`{
  "query_text": "' OR 1=1 --"
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
                  <Braces className="text-purple-400" size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Example Fetch Request</h3>

                  <p className="text-sm text-gray-400">
                    JavaScript integration example
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5 overflow-auto">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {`const response = await fetch(
  "https://rifkibayuariyan-sqli-detection-api.hf.space/api/scan",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query_text: "' OR 1=1 --",
    }),
  }
);

const data = await response.json();

console.log(data);`}
                </pre>
              </div>

              {/* RESPONSE */}
              <div className="mt-6 rounded-3xl border border-green-500/20 bg-green-500/5 p-5">
                <p className="text-sm text-green-300 font-semibold">
                  Example Response
                </p>

                <pre className="mt-4 text-sm text-gray-300 whitespace-pre-wrap">
                  {`{
  "input": "' OR 1=1 --",
  "cleaned_input": "' or 1 = 1 --",
  "is_sqli": true
}`}
                </pre>
              </div>

              {/* BUTTON */}
              <a
                href="https://rifkibayuariyan-sqli-detection-api.hf.space/docs"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-purple-500 hover:bg-purple-400 transition px-6 py-4 font-medium shadow-[0_0_35px_rgba(168,85,247,0.3)]"
              >
                Open API Documentation
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
