"use client";

import Link from "next/link";

export default function Navbar({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 flex items-center justify-between z-50">
      <div className="flex items-center gap-2 text-brand-charcoal">
        <div className="w-6 h-6 bg-brand-charcoal rounded-sm"></div>
        <span className="text-xl font-bold tracking-tight">coup.</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-grey">
        <Link href="#" className="hover:text-brand-charcoal transition-colors">How It Works</Link>
        <Link href="#" className="hover:text-brand-charcoal transition-colors">Pricing</Link>
        <Link href="#" className="hover:text-brand-charcoal transition-colors">Use Case</Link>
        <Link href="#" className="hover:text-brand-charcoal transition-colors">FAQ</Link>
      </div>

      <button
        onClick={onContactClick}
        className="bg-brand-blue text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-blue-600 transition-all active:scale-95"
      >
        Contact Sales
      </button>
    </nav>
  );
}
