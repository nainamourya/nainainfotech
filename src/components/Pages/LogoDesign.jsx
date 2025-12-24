import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Brush, Sparkles, PenTool, Shapes, ArrowRight } from "lucide-react";

export default function LogoDesign() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".logo-sub", {
        y: 40,
        opacity: 0,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        y: 80,
        // opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.to(".float-svg", {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Brush className="w-8 h-8 text-pink-500" />,
      title: "Creative Concepts",
      desc: "Unique logo ideas crafted for your brand identity.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-indigo-500" />,
      title: "Custom Design",
      desc: "Every logo is designed from scratch, no templates.",
    },
    {
      icon: <Shapes className="w-8 h-8 text-emerald-500" />,
      title: "Modern Style",
      desc: "Trendy, minimal & timeless visual aesthetics.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
      title: "Brand Impact",
      desc: "Logos that leave a powerful first impression.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white overflow-hidden"
    >
      {/* 🔮 Floating SVG Background */}
      <svg
        className="float-svg absolute top-10 left-10 w-72 h-72 opacity-30 blur-2xl"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#6366F1"
          d="M46.5,-63.1C59.7,-53.3,69.6,-39.6,73.4,-24.2C77.3,-8.9,75.2,8.1,69.5,23.5C63.9,38.8,54.7,52.5,41.8,61.7C28.8,70.9,12.1,75.6,-3.7,80.3C-19.4,85,-38.8,89.7,-53.7,82.3C-68.6,74.9,-79,55.4,-83.7,35.1C-88.3,14.9,-87.2,-6,-80.4,-23.6C-73.6,-41.2,-61.1,-55.5,-46.4,-64.4C-31.7,-73.2,-15.8,-76.6,0.6,-77.4C16.9,-78.1,33.8,-76.1,46.5,-63.1Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* ✨ Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="logo-title text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Logo Design That Speaks Your Brand
        </h1>

        <p className="logo-sub mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We craft bold, memorable, and modern logos that define your identity
          and elevate your business.
        </p>

        <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold shadow-lg">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>

        {/* 🧩 Icon Cards */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)]"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
