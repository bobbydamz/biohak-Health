import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="BioHAK Wellness"
      width={931}
      height={350}
      priority
      className="w-[240px] sm:w-[300px] md:w-[340px] h-auto"
    />
  );
}
