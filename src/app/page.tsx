"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactSalesView from "@/components/ContactSalesView";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#E6F0FF] overflow-hidden">
      <Navbar onContactClick={() => setShowContact(true)} />

      <AnimatePresence mode="wait">
        {!showContact ? (
          <motion.article
            key="hero"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full"
          >
            <AnimatedBackground />
            <Hero />
          </motion.article>
        ) : (
          <motion.article
            key="contact"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full"
          >
            <ContactSalesView onBack={() => setShowContact(false)} />
          </motion.article>
        )}
      </AnimatePresence>
    </main>
  );
}
