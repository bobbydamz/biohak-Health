import Logo from "@/components/Logo";
import LeafVein from "@/components/LeafVein";
import Countdown from "@/components/Countdown";
import EmailSignup from "@/components/EmailSignup";

const INSTAGRAM_HANDLE = "@biohakwellness"; // STUB: update if different
const INSTAGRAM_URL = "https://instagram.com/biohakwellness"; // STUB: update if different

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper flex flex-col">
      {/* Signature animated leaf-vein backdrop */}
      <div className="absolute inset-0 flex items-start justify-center pt-20 sm:pt-10">
        <div className="relative w-full max-w-3xl h-[500px]">
          <LeafVein />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-6 sm:px-10 pt-8 sm:pt-10">
        <Logo />
      </header>

      {/* Hero content */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20">
        <p className="fade-up [animation-delay:0.1s] text-xs sm:text-sm uppercase tracking-[0.2em] text-botanical-dark font-medium mb-5">
          Launching Soon
        </p>

        <h1 className="fade-up [animation-delay:0.2s] font-display font-semibold text-ink leading-[1.02] tracking-tightest text-[2.75rem] sm:text-6xl md:text-7xl max-w-4xl">
          Wellness,
          <br />
          simplified.
        </h1>

        <p className="fade-up [animation-delay:0.35s] mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-sage max-w-[640px] leading-relaxed">
          Science-backed nutrition designed for modern living. BioHAK is
          almost here.
        </p>

        <div className="fade-up [animation-delay:0.5s] mt-10 sm:mt-12 w-full flex justify-center">
          <EmailSignup />
        </div>

        <p className="fade-up [animation-delay:0.6s] mt-4 text-sm text-sage/80 max-w-[440px]">
          Join the list to be first to hear about launch, product drops and
          early offers.
        </p>

        <div className="fade-up [animation-delay:0.75s] mt-14 sm:mt-16">
          <Countdown />
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up [animation-delay:0.9s] mt-12 sm:mt-14 inline-flex items-center gap-2 text-ink hover:text-botanical-dark transition-colors text-sm sm:text-base font-medium"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
          </svg>
          {INSTAGRAM_HANDLE}
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 py-8 text-center">
        <p className="text-xs sm:text-sm text-sage/70 tracking-wide">
          Made with science. Inspired by wellbeing.
        </p>
      </footer>
    </main>
  );
}
