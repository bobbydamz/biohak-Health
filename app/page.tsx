import Logo from "@/components/Logo";
import Countdown from "@/components/Countdown";
import EmailSignup from "@/components/EmailSignup";

const INSTAGRAM_HANDLE = "@biohakwellness"; // STUB: update if different
const INSTAGRAM_URL = "https://instagram.com/biohakwellness"; // STUB: update if different

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center px-6">
      {/* Soft radial glow behind the logo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] max-w-[200vw] rounded-full opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 65%)",
        }}
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative z-10 fade-up pt-16 sm:pt-20">
        <Logo />
      </div>

      {/* Headline block */}
      <div className="relative z-10 text-center mt-24 sm:mt-28 md:mt-32">
        <h1 className="fade-up [animation-delay:0.15s] font-display font-bold text-ink leading-[1.05] text-[2.25rem] sm:text-5xl md:text-6xl max-w-3xl">
          Wellness, Simplified.
        </h1>

        <p className="fade-up [animation-delay:0.3s] mt-4 sm:mt-5 text-base sm:text-xl text-ink/80 max-w-xl mx-auto leading-relaxed">
          Science-backed nutrition and wellness products.
          <br />
          Designed for modern living.
        </p>
      </div>

      {/* Email signup */}
      <div className="relative z-10 fade-up [animation-delay:0.45s] mt-10 sm:mt-12 w-full flex justify-center">
        <EmailSignup />
      </div>

      {/* Countdown */}
      <div className="relative z-10 fade-up [animation-delay:0.6s] mt-16 sm:mt-20 flex flex-col items-center">
        <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-ink/70 font-medium mb-5">
          Launching In
        </p>
        <Countdown />
      </div>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 fade-up [animation-delay:0.75s] mt-16 sm:mt-20 inline-flex items-center gap-2 text-ink hover:text-botanical-dark transition-colors text-base sm:text-lg font-medium"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
        </svg>
        {INSTAGRAM_HANDLE}
      </a>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 pt-16 sm:pt-20 pb-10 text-center">
        <p className="text-xs sm:text-sm text-ink/60 tracking-wide">
          Made with science. Inspired by wellbeing.
        </p>
      </footer>
    </main>
  );
}
