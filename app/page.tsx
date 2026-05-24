import {
  Navbar,
  HeroSection,
  StatsSection,
  FeaturesSection,
  BackgroundEffects,
  Footer,
  FeedbackSection,
  ApiPlayground,
  HowToUseApiSection,
} from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white before:absolute before:inset-0 before:bg-[url('https://www.transparenttextures.com/patterns/noise.png')] before:opacity-[0.03] before:pointer-events-none">
      {/* BACKGROUND */}
      <BackgroundEffects />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSection />

      {/* STATS SECTION */}
      <StatsSection />

      {/* FEATURES SECTION */}
      <FeaturesSection />

      {/* DEMO SIMULATION */}
      <FeedbackSection />

      {/* API PLAYGROUND */}
      <ApiPlayground />

      {/* HOW TO USE API */}
      <HowToUseApiSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
