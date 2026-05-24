import { Send } from "lucide-react";

interface Props {
  name: string;
  email: string;
  feedback: string;
  loading: boolean;

  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setFeedback: (value: string) => void;

  onSubmit: () => void;
}

export default function FeedbackForm({
  name,
  email,
  feedback,
  loading,
  setName,
  setEmail,
  setFeedback,
  onSubmit,
}: Props) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
          <Send className="text-purple-400" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-xl">Kritik & Saran</h3>

          <p className="text-sm text-gray-400">
            Example real-world feedback form
          </p>
        </div>
      </div>

      <div className="space-y-5 mt-8">
        <div>
          <label className="block mb-2 text-sm text-gray-400">Full Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full rounded-2xl border border-white/10 bg-white/4 px-5 py-4 outline-none focus:border-purple-500 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Email Address
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full rounded-2xl border border-white/10 bg-white/4 px-5 py-4 outline-none focus:border-purple-500 transition"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">Feedback</label>

          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={5}
            placeholder="Write your feedback here..."
            className="w-full rounded-2xl border border-white/10 bg-white/4 px-5 py-4 outline-none resize-none focus:border-purple-500 transition"
          />
        </div>

        <button
          onClick={onSubmit}
          disabled={loading}
          className="w-full rounded-2xl bg-purple-500 hover:bg-purple-400 transition py-4 font-semibold shadow-[0_0_35px_rgba(168,85,247,0.3)]"
        >
          {loading ? "Analyzing..." : "Submit Feedback"}
        </button>
      </div>
    </div>
  );
}
