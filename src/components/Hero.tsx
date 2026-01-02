"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative min-height-[100vh] flex flex-col items-center justify-center pt-32 pb-64 px-4 text-center overflow-hidden">
      {/* Badge */}
      <div className="animate-in fade-in slide-in-from-top-4 duration-1000 flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
        <div className="w-5 h-5 flex items-center justify-center bg-brand-blue rounded-full">
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-sm font-semibold text-brand-blue">#1 iMessage Automation Tool</span>
      </div>

      {/* Heading */}
      <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 text-5xl md:text-7xl font-extrabold tracking-tight max-w-[900px] mb-8 leading-[1.1]">
        <span className="text-brand-blue">iMessage Automation</span> <br />
        <span className="text-brand-charcoal">for Teams and AI Workflows.</span>
      </h1>

      {/* Description */}
      <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400 text-lg md:text-xl text-brand-grey max-w-[650px] mb-12 leading-relaxed">
        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
      </p>

      {/* Buttons */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600 flex flex-col sm:flex-row items-center gap-4">
        <button className="bg-brand-blue text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-blue-200">
          Get Started
        </button>
        <button className="flex items-center gap-3 bg-white border border-gray-200 text-brand-charcoal font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-50 transition-all active:scale-95">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.057 10.767c.026 2.684 2.222 3.58 2.246 3.59-.021.066-.349 1.196-1.15 2.373-.69 1.018-1.408 2.031-2.544 2.051-1.115.02-1.474-.66-2.747-.66-1.272 0-1.668.64-2.727.68-1.096.04-1.921-.101-2.615-2.091-1.423-2.025-2.513-5.717-1.044-8.267.728-1.265 2.03-2.067 3.447-2.087 1.074-.02 2.087.723 2.747.723.659 0 1.9-.894 3.176-.763 1.334.053 2.336.536 2.89 1.336-.056.034-2.716 1.583-2.684 4.125zm-2.023-7.537c.563-.687.946-1.642.842-2.592-.816.033-1.803.541-2.389 1.226-.525.61-.986 1.587-.862 2.517.91.07 1.846-.464 2.409-1.151z" />
          </svg>
          Download the Mac app
        </button>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-grey/60">
        <span className="text-sm font-medium">Scroll to learn more</span>
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
