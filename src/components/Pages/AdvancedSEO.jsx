import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  TrendingUp,
  Globe,
  BarChart3,
  Rocket,
  FileSearch,
  Settings,
  PenTool,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AdvancedSEO() {
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  const cardsRef = useRef([]);
  const imgRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔹 Hero animations
      gsap.from(".seo-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: heroRef.current, start: "top 80%" },
      });

      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: { trigger: heroRef.current, start: "top 70%" },
      });

      gsap.fromTo(
        imgRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          scrollTrigger: { trigger: imgRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        svgRef.current,
        { strokeDasharray: 1000, strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          scrollTrigger: { trigger: heroRef.current, start: "top 75%" },
        }
      );

      // 🔹 Process
      gsap.from(processRef.current.querySelectorAll(".seo-step"), {
        y: 60,
        // opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 90%", // 👈 looser trigger
          once: true,
          //   scrub: true,
        },
      });

      // 🔹 Stats
      gsap.from(".seo-stat", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
      });

      // 🔹 CTA
      gsap.from(ctaRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ctaRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Search className="w-7 h-7" />,
      title: "Keyword Intelligence",
      desc: "Deep keyword research to target high-intent users.",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Rank Growth",
      desc: "Data-driven strategies that push rankings higher.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Reach",
      desc: "Optimize for audiences across regions & languages.",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Analytics & Reports",
      desc: "Transparent performance tracking with insights.",
    },
  ];

  const steps = [
    {
      icon: <FileSearch />,
      title: "Audit",
      desc: "Deep technical & content audit.",
    },
    {
      icon: <Settings />,
      title: "Optimize",
      desc: "On-page & technical SEO improvements.",
    },
    {
      icon: <PenTool />,
      title: "Content",
      desc: "High-quality content that converts.",
    },
    {
      icon: <Rocket />,
      title: "Scale",
      desc: "Link building & authority growth.",
    },
  ];

  const stats = [
    { value: "300%", label: "Traffic Growth" },
    { value: "120+", label: "Top 3 Rankings" },
    { value: "5x", label: "ROI Increase" },
    { value: "90%", label: "Lead Conversion" },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className="relative py-28 bg-gradient-to-b from-zinc-950 to-zinc-900 overflow-hidden"
      >
        <Rocket className="absolute top-20 left-10 w-10 h-10 text-indigo-500/30 animate-bounce" />
        <Search className="absolute bottom-24 right-16 w-10 h-10 text-purple-500/30 animate-pulse" />

        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-40"
          fill="none"
          viewBox="0 0 900 400"
        >
          <path
            ref={svgRef}
            d="M50 300 C200 50, 700 50, 850 300"
            stroke="url(#grad)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="seo-title text-5xl md:text-6xl font-extrabold text-white">
              Advanced <span className="text-indigo-400">SEO</span> That Drives
              Growth
            </h2>
            <p className="mt-6 text-lg text-zinc-400 max-w-xl">
              Intelligent SEO strategies to boost visibility, traffic, and
              conversions.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-indigo-500/40 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400">
                      {item.icon}
                    </div>
                    <h4 className="text-white font-semibold text-lg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <img
              ref={imgRef}
              src="/img/seo.png"
              alt="SEO Dashboard"
              className="w-full max-w-md rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute inset-0 -z-10 bg-indigo-500/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section ref={processRef} className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-14">
            Our <span className="text-indigo-400">SEO Process</span>
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="seo-step bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur hover:border-indigo-500/40 transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                  {s.icon}
                </div>
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="text-zinc-400 text-sm mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section
        ref={statsRef}
        className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={i} className="seo-stat">
              <p className="text-5xl font-extrabold">{s.value}</p>
              <p className="mt-2 text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-28 bg-zinc-950 text-white text-center">
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto px-6 bg-white/5 border border-white/10 rounded-3xl p-16 backdrop-blur"
        >
          <h3 className="text-4xl font-bold">
            Ready to <span className="text-indigo-400">Dominate Search</span>?
          </h3>
          <p className="mt-4 text-zinc-400">
            Let’s build an SEO strategy that brings long-term growth for your
            business.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-xl font-semibold">
            Get Free SEO Audit <ArrowRight />
          </button>
        </div>
      </section>
    </>
  );
}
