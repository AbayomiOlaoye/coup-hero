"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedBackground() {
  return (
    <section className="absolute inset-0 min-h-[100vh] pointer-events-none overflow-hidden select-none">
      {/* 4 small birds */}
      <motion.article
        initial={{ y: "100vh" }}
        animate={{ y: "24vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute top-2 left-[5%] right-[15%]"
      >
        <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[23%] left-[16%] w-12 h-6" />
      </motion.article>
      <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="hidden lg:block absolute top-[31%] left-[26%] w-12 h-6" />
      <motion.article
        initial={{ y: "110vh" }}
        animate={{ y: "34vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="hidden lg:block absolute right-[5%] -top-8 -left-[65%]"
      >
        <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[28%] left-[84%] w-12 h-6" />
      </motion.article>
      <Image src="/background/birdie.svg" alt="bird" width={60} height={36} className="absolute top-[41%] left-[72%] w-12 h-6" />

      {/* 2 fly-out birds (top left and top right) */}
      <motion.article
        initial={{ x: "-60vw", y: "60vh" }}
        animate={{ x: "100vw", y: "-60vh" }}
        transition={{ duration: 10, ease: [0.45, 0, 0.55, 1], delay: 2 }}
        className="absolute hidden lg:block top-[50%] left-[40%]"
      >
        <Image src="/background/mid-bottom-right.svg" alt="bird" width={100} height={60} className="" />
      </motion.article>
      <motion.article
        initial={{ x: "60vw", y: "60vh" }}
        animate={{ x: "-100vw", y: "-60vh" }}
        transition={{ duration: 10, ease: [0.45, 0, 0.55, 1], delay: 2 }}
        className="absolute top-[50%] right-[40%]"
      >
        <Image src="/background/birdie.svg" alt="bird" width={100} height={60} />
      </motion.article>

      {/* Cloud Base - Layered and soft */}
      <motion.article
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute hidden lg:block inset-0 flex flex-col justify-end"
      >
        <div className="relative w-full lg:flex h-[50vh] opacity-20 items-end justify-center overflow-visible">
          <Image src="/background/mask.svg" alt="bird" width={80} height={48} className="absolute left-0 bottom-[-30%] w-[100vw] h-[30vw] opacity-40 z-80" />
          <Image src="/background/upper-base.svg" alt="bird" width={80} height={48} className="absolute left-0 bottom-[-40%] w-[100vw] h-[35vw] opacity-30 z-50" />
          <Image src="/background/light-bg.svg" alt="bird" width={80} height={48} className="absolute right-0 bottom-[-30%] w-[100vw] h-[25vw] opacity-20" />
          <Image src="/background/major-base.svg" alt="bird" width={80} height={48} className="absolute left-1/2 -translate-x-1/2 bottom-[-35%] w-[100vw] h-[35vw] opacity-30" />
        </div>
      </motion.article>

      <motion.article
        initial={{ y: "100vh" }}
        animate={{ y: "83vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute hidden lg:block lg:left-[20%]"
      >
        <Image src="/background/base-left.svg" alt="bird" width={80} height={48} />
      </motion.article>
      <motion.article
        initial={{ y: "100vh" }}
        animate={{ y: "82vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="absolute hidden lg:block left-[36%]"
      >
        <Image src="/background/upper-left.svg" alt="bird" width={80} height={48} />
      </motion.article>
      <motion.article
        initial={{ y: "100vh" }}
        animate={{ y: "86vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute hidden lg:block right-[33%]"
      >
        <Image src="/background/mid-bottom-right.svg" alt="bird" width={80} height={48} />
      </motion.article>
      <motion.article
        initial={{ y: "100vh" }}
        animate={{ y: "84vh" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="absolute hidden lg:block right-[15%]"
      >
        <Image src="/background/bottom-right.svg" alt="bird" width={80} height={48} />
      </motion.article>
    </section>
  );
}
