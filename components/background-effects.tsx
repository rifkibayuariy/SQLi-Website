export default function BackgroundEffects() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-125 h-125 bg-purple-700/30 rounded-full blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[10%] w-125 h-125 bg-fuchsia-500/20 rounded-full blur-[140px]" />

        <div className="absolute top-[30%] right-[20%] w-100 h-100 bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </>
  );
}
