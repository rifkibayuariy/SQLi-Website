import { Reveal } from "@/components";

export default function StatsSection() {
  return (
    <Reveal>
      <section className="relative z-10 px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-5">
              <p className="text-3xl font-black text-purple-400">98%</p>

              <p className="mt-2 text-sm text-gray-400">Detection Accuracy</p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-5">
              <p className="text-3xl font-black text-purple-400">120ms</p>

              <p className="mt-2 text-sm text-gray-400">Average Response</p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-5">
              <p className="text-3xl font-black text-purple-400">10K+</p>

              <p className="mt-2 text-sm text-gray-400">Payloads Tested</p>
            </div>

            {/* CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-2xl p-5">
              <p className="text-3xl font-black text-purple-400">24/7</p>

              <p className="mt-2 text-sm text-gray-400">AI Monitoring</p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
