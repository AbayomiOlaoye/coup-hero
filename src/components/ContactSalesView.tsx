"use client";

import { motion } from "framer-motion";

export default function ContactSalesView({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-8">
      <h1 className="text-4xl font-extrabold text-brand-charcoal mb-4">Contact Our Sales Team</h1>
      <p className="text-brand-grey text-lg mb-8 max-w-md text-center">
        We'll help you find the right plan for your team and workflow automation needs.
      </p>

      <button
        onClick={onBack}
        className="bg-brand-charcoal text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-all"
      >
        Go Back
      </button>
    </div>
  );
}
