"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BirdIcon = ({ className, speechBubble, flip }: { className?: string, speechBubble?: boolean, flip?: boolean }) => (
  <div className={`relative ${className} ${flip ? "scale-x-[-1]" : ""}`}>
    <svg width="40" height="24" viewBox="0 0 40 24" fill="currentColor">
      <path d="M20 12c-4-4 -9-6 -14-6s-10 2 -14 6c3 1 8 2 14 2s11 -1 14 -2z" />
      <path d="M40 12c-4-4 -9-6 -14-6s-10 2 -14 6c3 1 8 2 14 2s11 -1 14 -2z" />
    </svg>
    {speechBubble && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className={`absolute -top-6 -right-4 bg-brand-blue rounded-full px-2 py-1 flex items-center justify-center gap-1 ${flip ? "scale-x-[-1]" : ""}`}
      >
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-1/2 translate-y-1/2 translate-x-1/2 w-2 h-2 bg-brand-blue rotate-45"></div>
      </motion.div>
    )}
  </div>
);

const Cloud = ({ className }: { className?: string }) => (
  <div className={` rounded-full blur-[60px] ${className}`}></div>
);

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 min-h-[100vh] pointer-events-none overflow-hidden select-none">
      {/* 4 small static birds */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "24vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute top-2 left-[5%] right-[15%]"
      >
        <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[23%] left-[16%] w-12 h-6" />
      </motion.div>
      <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[31%] left-[26%] w-12 h-6" />
      <motion.div
        initial={{ y: "110vh" }}
        animate={{ y: "34vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute right-[5%] -top-8 -left-[65%]"
      >
        <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[28%] left-[84%] w-12 h-6" />
      </motion.div>
      <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[41%] left-[72%] w-12 h-6" />

      {/* 2 fly-out birds (top left and top right) */}
      <motion.div
        initial={{ x: "-60vw", y: "60vh" }}
        animate={{ x: "100vw", y: "-60vh" }}
        transition={{ duration: 10, ease: [0.45, 0, 0.55, 1], delay: 2 }}
        className="absolute top-[50%] left-[40%]"
      >
        <Image src="/background/mid-bottom-right.svg" alt="bird" width={100} height={60} className="" />
      </motion.div>
      <motion.div
        initial={{ x: "60vw", y: "60vh" }}
        animate={{ x: "-100vw", y: "-60vh" }}
        transition={{ duration: 10, ease: [0.45, 0, 0.55, 1], delay: 2 }}
        className="absolute top-[50%] right-[40%]"
      >
        <Image src="/background/birdie.svg" alt="bird" width={100} height={60} />
      </motion.div>

      {/* Cloud Base - Layered and soft */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col justify-end"
      >
        <div className="relative w-full h-[50vh] opacity-20 flex items-end justify-center overflow-visible">
          <Image src="/background/mask.svg" alt="bird" width={80} height={48} className="absolute left-0 bottom-[-30%] w-[100vw] h-[30vw] opacity-40 z-80" />
          <Image src="/background/upper-base.svg" alt="bird" width={80} height={48} className="absolute left-0 bottom-[-40%] w-[100vw] h-[35vw] opacity-30 z-50" />
          <Image src="/background/light-bg.svg" alt="bird" width={80} height={48} className="absolute right-0 bottom-[-30%] w-[100vw] h-[25vw] opacity-20" />
          {/* Main central cloud */}
          <Image src="/background/major-base.svg" alt="bird" width={80} height={48} className="absolute left-1/2 -translate-x-1/2 bottom-[-35%] w-[100vw] h-[35vw] opacity-30" />
        </div>
      </motion.div>

      {/* 4 Large birds scrolling into view WITH the clouds */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "83vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-[20%]"
      >
        <Image src="/background/base-left.svg" alt="bird" width={80} height={48} />
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "82vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="absolute left-[36%]"
      >
        <Image src="/background/upper-left.svg" alt="bird" width={80} height={48} />
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "86vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute right-[33%]"
      >
        <Image src="/background/mid-bottom-right.svg" alt="bird" width={80} height={48} />
      </motion.div>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: "84vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute right-[15%]"
      >
        <Image src="/background/bottom-right.svg" alt="bird" width={80} height={48} />
      </motion.div>
    </div>
  );
}
