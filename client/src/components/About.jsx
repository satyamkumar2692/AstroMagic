import React, { useRef, useEffect, useState } from "react";

/**
 * Local globe image path (the file you uploaded).
 * Keep this path as-is if the file is available at that location in your dev environment.
 */
const EARTH_IMG = "/mnt/data/60efeb2a--4ef-8b62-e95d700d6d02.png";

export default function AboutEnhanced() {
  const globeRef = useRef(null);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const rafRef = useRef(null);
  const angleRef = useRef({ x: -10, y: 0 }); // start tilt and rotation
  const [score] = useState(88); // example metric for design

  // simple inertia animation after drag release
  const animateInertia = () => {
    cancelAnimationFrame(rafRef.current);
    const step = () => {
      // friction
      velocity.current *= 0.94;
      angleRef.current.y += velocity.current;
      applyTransform();
      if (Math.abs(velocity.current) > 0.001) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  const applyTransform = () => {
    const el = globeRef.current;
    if (!el) return;
    const { x, y } = angleRef.current;
    el.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  };

  useEffect(() => {
    applyTransform();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // pointer handlers
  useEffect(() => {
    const el = globeRef.current;
    if (!el) return;

    const onDown = (e) => {
      dragging.current = true;
      lastX.current = e.clientX ?? e.touches?.[0]?.clientX;
      velocity.current = 0;
      cancelAnimationFrame(rafRef.current);
      el.classList.add("active-drag");
    };
    const onMove = (e) => {
      if (!dragging.current) return;
      const curX = e.clientX ?? e.touches?.[0]?.clientX;
      const dx = curX - lastX.current;
      lastX.current = curX;
      // tweak sensitivity:
      const sens = 0.35;
      angleRef.current.y += dx * sens;
      // track velocity for inertia
      velocity.current = dx * sens;
      applyTransform();
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      animateInertia();
      el.classList.remove("active-drag");
    };

    // mouse
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    // touch
    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);

    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen text-purple-100 bg-gradient-to-b from-[#070011] via-[#110022] to-black overflow-hidden">
      {/* Background soft stars */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Header */}
        <header className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-purple-200 leading-tight">
              AstroGPT — your personal cosmic studio
            </h1>
            <p className="mt-4 text-lg text-purple-300/90 max-w-xl">
              We blend traditional Vedic wisdom with modern AI. Ask a question,
              generate a Kundli, compare matches, or get a daily horoscope — all
              powered by intelligent, contextual astrology.
            </p>

            {/* KPIs / quick actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold shadow">
                Try AI Horoscope
              </button>
              <button className="px-4 py-2 border border-purple-600 rounded-2xl">
                Generate Kundli
              </button>
              <div className="ml-2 px-4 py-2 bg-[#1b002f]/60 rounded-2xl flex items-center gap-3">
                <div className="text-sm text-pink-300 font-bold">{score}%</div>
                <div className="text-sm text-purple-300">Avg trust score</div>
              </div>
            </div>
          </div>

          {/* Globe + orbiting icons */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* orbit ring */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full h-full rounded-full border border-purple-700/20 animate-ringSlow"></div>
              </div>

              {/* interactive globe */}
              <div
                ref={globeRef}
                className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl cursor-grab transition-transform"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(-10deg) rotateY(0deg)",
                  backgroundImage: `url(${EARTH_IMG})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label="Interactive Earth — drag to rotate"
              />

              {/* small orbiting badges (features) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="px-3 py-1 bg-[#2a003f]/70 border border-purple-600 rounded-full text-xs">
                  AI Horoscope
                </div>
              </div>
              <div className="absolute right-2 top-1/2 translate-y-[-50%]">
                <div className="px-3 py-1 bg-[#2a003f]/70 border border-purple-600 rounded-full text-xs">
                  Kundli
                </div>
              </div>
              <div className="absolute left-2 bottom-6">
                <div className="px-3 py-1 bg-[#2a003f]/70 border border-purple-600 rounded-full text-xs">
                  Matchmaking
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Features grid */}
        <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Chat",
              desc: "Ask personalized questions and get context-aware answers from our Astro GPT chatbot.",
              accent: "💬",
            },
            {
              title: "Daily Horoscope",
              desc: "Daily cosmic guidance tailored to your sign — short, practical and positive.",
              accent: "☀️",
            },
            {
              title: "Kundli & Charts",
              desc: "Generate a traditional birth chart with house-wise planets, strengths & remedies.",
              accent: "🕉️",
            },
            {
              title: "Match Making",
              desc: "AI-assisted compatibility reports with highlights, remedies and PDF export.",
              accent: "❤️",
            },
            {
              title: "Real-time Chat",
              desc: "Live chats and saved history so every session is contextual and private.",
              accent: "⚡",
            },
            {
              title: "Privacy & Security",
              desc: "Profiles stored securely — you control what to keep or discard.",
              accent: "🔒",
            },
          ].map((f, i) => (
            <article
              key={i}
              className="bg-[#12001f]/60 border border-purple-700/30 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{f.accent}</div>
                <div>
                  <h4 className="font-semibold text-purple-100">{f.title}</h4>
                  <p className="text-purple-300 text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Story / Philosophy */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-purple-200">
              Why we built AstroGPT
            </h3>
            <p className="mt-3 text-purple-300 leading-relaxed">
              Astrology is a language — ancient, symbolic and remarkably human.
              We built AstroGPT to translate that language into clear, modern
              advice while preserving traditional techniques. Use it for
              curiosity, guidance, or deep practice — the tools adapt to your
              intent.
            </p>

            <ul className="mt-4 space-y-2 text-purple-300">
              <li>• Blend of Vedic methods and AI summarization</li>
              <li>• Lightweight, privacy-first profile storage</li>
              <li>• Exportable reports (PDF) and shareable insights</li>
            </ul>
          </div>

          <div className="bg-[#14001e]/50 p-6 rounded-2xl border border-purple-700/30">
            <h4 className="text-lg text-purple-200 font-semibold">
              How it works
            </h4>
            <ol className="mt-3 list-decimal list-inside text-purple-300 space-y-2">
              <li>
                Save a profile (DOB, time, place) — we prefill forms when
                possible.
              </li>
              <li>
                Generate Kundli or ask the AI for a horoscope — we use charts
                and historical context.
              </li>
              <li>
                Export a PDF or save reports to your account when you like.
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 items-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-semibold shadow">
            Start with your Kundli
          </button>
          <button className="px-6 py-3 border border-purple-600 rounded-2xl">
            Try daily horoscope
          </button>
        </div>

        {/* footer micro-note */}
        <div className="mt-12 text-sm text-purple-400/80">
          Note: All readings are generated to be positive & helpful. For
          medical, legal, or financial advice consult licensed professionals.
        </div>
      </div>

      {/* small CSS - keyframes and helper */}
      <style jsx>{`
        /* simple ring spin */
        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-ringSlow {
          animation: ringRotate 18s linear infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 450ms ease;
        }
        @keyframes scaleIn {
          from {
            transform: translateY(10px) scale(0.98);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-fadeUp {
          animation: fadeUp 520ms ease;
        }
        @keyframes fadeUp {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* globe subtle grab effect */
        .active-drag {
          cursor: grabbing !important;
          filter: brightness(1.02) saturate(1.05);
        }

        /* responsiveness tweaks */
        @media (max-width: 768px) {
          .animate-ringSlow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
