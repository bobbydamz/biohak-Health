/**
 * Placeholder wordmark. To use the real BioHAK logo image instead:
 * 1. Add the logo file to /public (e.g. /public/logo.svg or logo.png)
 * 2. Import next/image at the top: import Image from "next/image";
 * 3. Replace the contents of this component with:
 *
 *    <Image
 *      src="/logo.svg"
 *      alt="BioHAK Wellness"
 *      width={900}
 *      height={220}
 *      priority
 *      className="w-[220px] sm:w-[320px] md:w-[480px] lg:w-[640px] h-auto"
 *    />
 */
export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        className="w-9 h-9 sm:w-11 sm:h-11"
        aria-hidden="true"
      >
        <path
          d="M22 4C22 4 8 12 8 24C8 32.8366 14.268 40 22 40C29.732 40 36 32.8366 36 24C36 12 22 4 22 4Z"
          stroke="#7CB518"
          strokeWidth="2.5"
        />
        <path
          d="M22 10V36"
          stroke="#7CB518"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 18C18 18 15 20 13 23"
          stroke="#7CB518"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22 26C26 26 29 28 31 31"
          stroke="#7CB518"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display font-semibold tracking-tightest text-2xl sm:text-3xl md:text-4xl text-ink">
        BioHAK
      </span>
    </div>
  );
}
