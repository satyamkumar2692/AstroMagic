import React from "react";
import starBg from "../image/bg1.jpg"; // use your bg
import moon from "../image/kundli rishi.webp"; // use any mystical png

export default function Why({ reff }) {
  return (
    <div
      ref={reff}
      className="relative w-full px-6 lg:px-20 py-20 text-purple-100 overflow-hidden"
    >
      {/* BACKGROUND */}
      <img
        src={starBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.45] -z-10"
      />

      {/* MAGICAL GLOW */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[160px] rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl lg:text-6xl font-bold text-purple-300 tracking-wide drop-shadow-lg">
          Why Astrology?
        </h1>

        <p className="text-purple-200 mt-3 text-sm lg:text-lg">
          ✦ Mysteries written in the sky ✦
        </p>

        <div className="flex justify-center">
          <div className="w-40 h-[2px] bg-gradient-to-r from-pink-400 to-purple-600 mt-5 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* IMAGE AREA */}
        <div className="w-full lg:w-5/12 flex justify-center animate-slideUp">
          <img
            src={moon}
            alt="astrology"
            className="w-72 lg:w-96 drop-shadow-[0_0_35px_rgba(255,160,255,0.4)] animate-float"
          />
        </div>

        {/* TEXT AREA */}
        <div className="w-full lg:w-7/12 space-y-6 animate-fadeInSlow">
          <p className="text-base lg:text-lg leading-relaxed opacity-90">
            Astrology is not merely about planets and predictions — it is the
            **language of the universe**, a cosmic script that quietly shapes
            the rhythm of our lives. Long before clocks or calendars existed,
            civilizations looked up to the stars to understand destiny, purpose,
            and timing.
          </p>

          <p className="text-base lg:text-lg leading-relaxed opacity-90">
            Every individual is born with a unique celestial blueprint — a map
            of energies captured at the moment of birth. This map reveals:
          </p>

          <ul className="list-disc pl-6 text-purple-200 text-base lg:text-lg space-y-2 opacity-90">
            <li>Your hidden strengths & karmic lessons</li>
            <li>Your emotional wiring & behavioral patterns</li>
            <li>What attracts you — and what challenges you</li>
            <li>Your destiny cycles & timing of major events</li>
            <li>Your purpose and spiritual direction</li>
          </ul>

          <p className="text-base lg:text-lg leading-relaxed opacity-90">
            Astrology doesn’t control life. It **illuminates** it — helping you
            walk the path with clarity, not fear.
          </p>
        </div>
      </div>
    </div>
  );
}
