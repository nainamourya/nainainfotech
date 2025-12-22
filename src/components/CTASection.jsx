import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CTASection() {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 🔁 Floating SVG animation
      gsap.to(iconRef.current, {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden"
    >
      {/* ✨ Glow blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
        {/* 🔔 Animated SVG Icon */}
        <div
          ref={iconRef}
          className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-white/20"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-10 h-10 text-white"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Transform Your Mind?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Take the first step toward clarity, confidence, and emotional freedom.
          Our experts are here to guide your journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-semibold hover:scale-105 transition shadow-lg">
            Book a Free Session
          </button>
          <button className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
