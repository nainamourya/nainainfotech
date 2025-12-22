import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnsRef = useRef(null);

  const iconRef = useRef(null);
  const threeDRef = useRef(null);
  const typeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
      })
        .from(
          subtitleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          btnsRef.current.children,
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.4"
        );

      gsap.to(iconRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });

      gsap.to(threeDRef.current, {
        rotateY: 360,
        rotateX: 15,
        duration: 12,
        repeat: -1,
        ease: "none",
        transformOrigin: "center",
      });

      // ✅ GSAP Typewriter effect (moved here)
      const words = ["Web Design", "Advanced SEO", "Social Handler"];
      const typeTl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });

      words.forEach((word) => {
        typeTl
          .to(typeRef.current, {
            text: word,
            duration: 1.5,
            ease: "none",
          })
          .to({}, { duration: 1 })
          .to(typeRef.current, {
            text: "",
            duration: 0.8,
            ease: "none",
          });
      });
    }, containerRef);

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * -30;

      gsap.to(threeDRef.current, {
        rotateY: x,
        rotateX: y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0f19] text-white"
    >
      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />

      {/* SVG ICON */}
      <div
        ref={iconRef}
        className="absolute top-24 left-1/2 -translate-x-1/2 opacity-70"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          className="text-indigo-400"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zm0 20v-9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
        >
          Crafting{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Modern
          </span>{" "}
          Web Experiences
        </h1>

        {/* ✅ Typewriter line */}
        <p className="mt-4 text-xl md:text-2xl font-semibold text-indigo-400">
          <span ref={typeRef}></span>
          <span className="animate-pulse">|</span>
        </p>

        <p
          ref={subtitleRef}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Build fast, interactive, and beautiful interfaces with React, Tailwind
          CSS, and GSAP animations.
        </p>

        <div
          ref={btnsRef}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 transition font-semibold flex items-center gap-2">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition font-semibold">
            View Work
          </button>
        </div>
      </div>

      {/* 3D ELEMENT */}
      <div
        ref={threeDRef}
        className="absolute bottom-16 right-16 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      />
    </section>
  );
}
