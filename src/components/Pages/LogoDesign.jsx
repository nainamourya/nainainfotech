import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Brush, Sparkles, PenTool, Shapes, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
      {/* SEO */}
      <Helmet>
        <title>Logo Design Services | Naina Infotech</title>
        <meta
          name="description"
          content="Professional logo design services by Naina Infotech. We create bold, modern, and memorable logos that build trust and brand recognition."
        />
        <link
          rel="canonical"
          href="https://www.nainainfotech.com/services/logo-design"
        />
      </Helmet>

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

        <Link to="/contact">
          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold shadow-lg">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </Link>

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
      {/* 📄 SEO CONTENT */}
      <div className="mt-42 max-w-4xl mx-auto text-left text-gray-300 leading-relaxed space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Professional Logo Design Services in India
        </h2>

        <p>
          At Naina Infotech, we provide professional logo design services for
          startups, small businesses, and growing brands. A logo is more than a
          symbol — it is the visual foundation of your brand identity. It
          represents your values, personality, and promise to your customers.
        </p>

        <p>
          Our logo design process focuses on clarity, meaning, and long-term
          relevance. We do not rely on templates or trends that fade quickly.
          Every logo is crafted from scratch with strategy, research, and visual
          precision to ensure it works across websites, social media, packaging,
          and marketing materials.
        </p>

        <h3 className="text-2xl font-semibold text-white">
          Why a Strategic Logo Matters
        </h3>

        <p>
          A strong logo builds trust, recognition, and credibility. It helps
          customers remember your brand and creates emotional connection.
          Businesses with a clear visual identity are more likely to attract
          high-quality clients and stand out in competitive markets.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Custom logo concepts aligned with your brand goals</li>
          <li>Scalable designs for web, print, and social media</li>
          <li>Timeless visual systems that grow with your business</li>
          <li>Professional typography and color strategy</li>
          <li>Brand-ready files for all platforms</li>
        </ul>

        <h3 className="text-2xl font-semibold text-white">
          Logo Design for Startups & Businesses
        </h3>

        <p>
          Whether you are launching a new startup, rebranding an existing
          business, or refining your visual identity, our logo design services
          are built to support long-term growth. We help brands look confident,
          professional, and memorable from day one.
        </p>

        <p>
          If you want a logo that communicates value, builds trust, and
          positions your business as premium, Naina Infotech is your creative
          partner.
        </p>
      </div>
      {/* 🎯 FINAL CTA */}
      <div className="mt-40 relative overflow-hidden">
        {/* glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to build a
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                powerful brand identity?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Your logo is the first impression of your business. Let’s craft a
              professional, memorable identity that earns trust and recognition
              from day one.
            </p>

            <Link to="/contact">
              <button className="mt-10 inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition text-white font-semibold shadow-xl">
                Start Your Brand <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/52/aa/81/52aa81993331855f2485d5f43120de05.jpg"
              alt="Brand identity and logo design"
              className="rounded-3xl shadow-2xl border border-white/10 w-full"
            />
            {/* <img
              src="img/footer-logo.png"
              alt="Logo design preview"
              className="rounded-3xl shadow-2xl border border-white/10"
            /> */}
            <div className="absolute -inset-6 bg-purple-500/20 blur-3xl -z-10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
