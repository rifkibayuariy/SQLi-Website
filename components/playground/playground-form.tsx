import { CodeXml } from "lucide-react";

interface Props {
  payload: string;
  loading: boolean;

  setPayload: (value: string) => void;

  onSubmit: () => void;
}

export default function PlaygroundForm({
  payload,
  loading,
  setPayload,
  onSubmit,
}: Props) {
  return (
    <div className="rounded-4xl border border-white/10 bg-white/3 backdrop-blur-2xl p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-purple-500/10 p-4 border border-purple-400/20">
          <CodeXml className="text-purple-400" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-xl">SQLi Detection Request</h3>

          <p className="text-sm text-gray-400">
            Send payload directly to the API
          </p>
        </div>
      </div>

      <div className="mt-8">
        <label className="block mb-3 text-sm text-gray-400">
          Input Payload
        </label>

        <textarea
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          rows={8}
          placeholder="' OR 1=1 --"
          className="w-full rounded-3xl border border-white/10 bg-black/20 px-5 py-5 font-mono outline-none resize-none focus:border-purple-500 transition"
        />
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={() => setPayload("' OR 1=1 --")}
          className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2 text-sm text-red-300 hover:bg-red-500/10 transition"
        >
          SQLi Example
        </button>

        <button
          onClick={() => setPayload("Website ini sangat membantu")}
          className="rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-2 text-sm text-green-300 hover:bg-green-500/10 transition"
        >
          Safe Example
        </button>
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="mt-6 w-full rounded-2xl bg-purple-500 hover:bg-purple-400 transition py-4 font-semibold shadow-[0_0_35px_rgba(168,85,247,0.3)]"
      >
        {loading ? "Analyzing..." : "Analyze Payload"}
      </button>
    </div>
  );
}
