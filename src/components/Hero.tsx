"use client";

import { FaArrowDownLong, FaApple } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative min-height-[100vh] flex flex-col items-center justify-center pt-32 lg:pt-48 pb-4 lg:pb-120 px-4 text-center overflow-hidden">
      <article className="animate-in fade-in slide-in-from-top-4 duration-1000 flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
        <article className="w-8 h-4 flex p-1 items-center justify-between bg-brand-blue rounded-full">
          {
            [1,2,3].map((item) => (
              <span key={item} className="w-1 h-1 rounded-full bg-white" />
            ))
          }
        </article>
        <span className="text-sm lg:text-base font-semibold text-brand-blue">#1 iMessage Automation Tool</span>
      </article>

      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 text-3xl md:text-7xl font-extrabold tracking-tight max-w-[900px] mb-8 leading-[1.1]">
        <span className="text-brand-blue">iMessage</span> Automation <br />
        <span className="text-brand-charcoal">for Teams and AI Workflows.</span>
      </h1>

      <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 text-lg md:text-xl text-brand-charcoal max-w-[650px] mb-12 leading-relaxed">
        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
      </p>

      <article className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600 flex flex-col sm:flex-row items-center gap-4">
        <button className="bg-brand-blue cursor-pointer text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-200">
          Get Started
        </button>
        <button className="flex justify-center cursor-pointer items-center gap-3 bg-white border border-gray-200 text-brand-charcoal font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-50 transition-all active:scale-95">
          <FaApple className="w-8 h-8 border-r border-gray-200 pr-3 block" />
          <span className="block">Download the Mac app</span>
        </button>
      </article>

      <article className="absolute hidden lg:block -bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-grey/60">
        <span className="text-sm xl:text-lg font-medium text-brand-charcoal">Scroll to learn more</span>
        <FaArrowDownLong className="w-5 h-5 animate-bounce" />
      </article>
    </section>
  );
}
