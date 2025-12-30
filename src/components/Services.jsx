import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    desc: "High-converting, responsive websites built with modern UI/UX, fast performance, and scalable code.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    title: "SEO & Website Optimization",
    desc: "Improve Google rankings with on-page SEO, Core Web Vitals optimization, and search-focused content strategy.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800",
  },
  {
    title: "Brand Identity & Logo Design",
    desc: "Build a strong brand presence with memorable logos, consistent visuals, and premium brand identity systems.",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800",
  },
  {
    title: "Social Media Design & Marketing",
    desc: "Scroll-stopping creatives and content strategies designed to grow reach, engagement, and brand authority.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
  },
];

export default function Services() {
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = [...services, ...services]; // 🔁 duplicate

  const slideWidth = () => {
    if (!sliderRef.current) return 0;
    if (window.innerWidth >= 1280) return sliderRef.current.clientWidth / 3;
    if (window.innerWidth >= 768) return sliderRef.current.clientWidth / 2;
    return sliderRef.current.clientWidth;
  };

  const moveTo = (i) => {
    const width = slideWidth();
    const total = services.length;

    gsap.killTweensOf(sliderRef.current);

    // 🔁 silent reset when crossing half
    if (i >= total) {
      gsap.set(sliderRef.current, { x: 0 });
      i = 0;
      setIndex(0);
    }

    if (i < 0) {
      const resetX = -total * width;
      gsap.set(sliderRef.current, { x: resetX });
      i = total - 1;
      setIndex(i);
    }

    gsap.to(sliderRef.current, {
      x: -i * width,
      duration: 0.8,
      ease: "power3.out",
    });

    setIndex(i);
  };

  const next = () => moveTo(index + 1);
  const prev = () => moveTo(index - 1);

  // 🔁 autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 3500);
    return () => clearInterval(autoplayRef.current);
  }, [index]);

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Services That Grow Your Digital Presence
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We help businesses attract, engage, and convert customers through
            high-performance websites and result-driven digital marketing
            solutions.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {/* arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-indigo-600 hover:text-white transition"
          >
            <ChevronRight />
          </button>

          {/* track */}
          <div className="overflow-hidden">
            <div ref={sliderRef} className="flex gap-6 will-change-transform">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[50%] xl:min-w-[33.33%] bg-white rounded-2xl shadow-xl overflow-hidden group"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{s.desc}</p>
                    <button className="mt-4 text-indigo-600 font-semibold hover:underline">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
