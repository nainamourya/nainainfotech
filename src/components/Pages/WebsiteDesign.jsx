import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Layers,
  Sparkles,
  Code2,
  Smartphone,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDesign() {
  const sectionRef = useRef(null);
  const floatRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🌊 Floating SVG icons
      floatRefs.current.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -30 : 30,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // ✨ Fade-in sections
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white"
    >
      {/* 🔮 Floating SVG Icons */}
      <Globe
        ref={(el) => (floatRefs.current[0] = el)}
        className="absolute top-20 left-10 text-indigo-500/40"
        size={80}
      />
      <Sparkles
        ref={(el) => (floatRefs.current[1] = el)}
        className="absolute top-40 right-16 text-purple-400/40"
        size={70}
      />
      <Layers
        ref={(el) => (floatRefs.current[2] = el)}
        className="absolute bottom-40 left-16 text-indigo-400/40"
        size={90}
      />

      {/* 🌟 HERO */}
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="reveal max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Website Design That Converts
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            We craft immersive, fast, and user-focused websites that elevate
            your brand and drive results.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:scale-105 transition font-semibold">
            Get Started 🚀
          </button>
        </div>
      </div>

      {/* 💎 FEATURES */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Smartphone size={40} />,
              title: "Responsive Design",
              desc: "Perfect experience across all devices.",
            },
            {
              icon: <Code2 size={40} />,
              title: "Clean Code",
              desc: "Scalable, maintainable modern codebase.",
            },
            {
              icon: <Rocket size={40} />,
              title: "High Performance",
              desc: "Optimized for speed and conversions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="reveal relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="mb-6 text-indigo-400">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>

              {/* glow */}
              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-3xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stunning Visual Experiences
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              From landing pages to full-scale platforms, we design interfaces
              that captivate users and guide them to take action.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li>✨ Modern layouts & micro-interactions</li>
              <li>⚡ Optimized assets for speed</li>
              <li>📱 Mobile-first approach</li>
              <li>🎯 Conversion-focused UI</li>
            </ul>
          </div>

          <div className="reveal relative">
            <img
              src="/img/website1.png"
              alt="Website Design Preview"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            <img
              src="/img/website3.png"
              alt="Website UI"
              className="absolute -bottom-10 -right-10 w-2/3 rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute -inset-6 bg-purple-500/20 blur-3xl -z-10 rounded-3xl" />
          </div>
        </div>
      </div>
      {/* 🔁 PROCESS */}
      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="reveal text-4xl md:text-5xl font-bold mb-16">
            Our Proven Process 🛠️
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "Understand your goals & users.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Create stunning UI/UX systems.",
              },
              {
                step: "03",
                title: "Develop",
                desc: "Build with clean modern code.",
              },
              { step: "04", title: "Launch", desc: "Deploy, test & scale." },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="text-5xl font-extrabold text-indigo-400 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 📊 STATS */}
      <div className="py-24 px-6 bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { num: "120+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "2x", label: "Faster Load Time" },
            { num: "5⭐", label: "Average Rating" },
          ].map((item, i) => (
            <div key={i} className="reveal">
              <p className="text-4xl md:text-5xl font-extrabold text-indigo-400">
                {item.num}
              </p>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 🎯 CTA */}
      <div className="py-32 text-center px-6">
        <div className="reveal max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Amazing ✨
          </h2>
          <p className="text-gray-300 mb-10">
            Turn your idea into a high-impact digital experience.
          </p>
          <button className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-xl hover:scale-105 transition font-semibold">
            Contact Us
          </button>
        </div>
      </div>
      {/*  */}
    </section>
  );
}
