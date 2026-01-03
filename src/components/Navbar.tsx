"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Use Case", href: "#" },
  { label: "FAQ", href: "#" },
]

export default function Navbar({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <nav className="fixed top-8 lg:top-16 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 flex items-center justify-between z-50">
      <Image src="/coup.svg" alt="coup" width={107} height={34} />

      <ul className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium text-brand-grey">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-brand-charcoal transition-colors">{link.label}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={onContactClick}
        className="group relative bg-white hover:shadow-lg text-sm lg:text-base font-bold px-6 py-3 rounded-full overflow-hidden transition-all active:scale-95"
      >
        <span className="absolute inset-0 transition-transform duration-400 ease-in-out group-hover:-translate-x-full">
          <span className="absolute inset-0 bg-brand-blue" />
          <span className="absolute top-1/2 -translate-y-1/2 left-[calc(100%-1.5rem)] aspect-square bg-white rounded-full" />
        </span>
        <span className="relative z-10 text-white transition-colors duration-400 ease-in-out group-hover:text-brand-blue">
          Contact Sales
        </span>
      </button>
    </nav>
  );
}
