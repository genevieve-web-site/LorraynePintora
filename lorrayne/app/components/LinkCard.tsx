import Link from "next/link";
import Image from "next/image";

export default function LinkCard({
  href,
  bgImage,
}: {
  href: string;
  bgImage: string;
}) {
  return (
    <Link
      href={href}
      className="block w-full h-24 md:h-40 relative overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02]"
    >
      <Image
        src={bgImage}
        alt="Navegação"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 448px"
        priority
      />
    </Link>
  );
}
