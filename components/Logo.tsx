import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="BioHAK Wellness"
      width={273}
      height={90}
      priority
      className="w-[220px] sm:w-[280px] md:w-[340px] h-auto"
    />
  );
}
