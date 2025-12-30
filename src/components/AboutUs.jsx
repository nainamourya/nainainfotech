import { useEffect, useState, useRef } from "react";
import { Sparkles, Target, Heart, Code2, Layers } from "lucide-react";
import { gsap } from "gsap";

const images = ["/img/abt5.png", "/img/abt2.png", "/img/abt6.png"];

export default function AboutUs() {
  const [index, setIndex] = useState(0);
  const floatRefs = useRef([]);

  // Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating icon animation
  useEffect(() => {
    floatRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        y: i % 2 === 0 ? -50 : 50,
        x: i % 3 === 0 ? 40 : -40,
        rotation: i % 2 === 0 ? 6 : -6,
        duration: 8 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="relative py-28 bg-gradient-to-b from-white to-indigo-50 overflow-hidden font-[Inter]">
        {/* FLOATING BACKGROUND ICONS */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Sparkles
            ref={(el) => (floatRefs.current[0] = el)}
            className="absolute top-24 left-20 w-16 h-16 text-indigo-500 opacity-20"
          />

          <Code2
            ref={(el) => (floatRefs.current[1] = el)}
            className="absolute top-1/3 right-24 w-20 h-20 text-indigo-600 opacity-25"
          />

          <Layers
            ref={(el) => (floatRefs.current[2] = el)}
            className="absolute bottom-32 left-32 w-16 h-16 text-indigo-500 opacity-20"
          />

          <Target
            ref={(el) => (floatRefs.current[3] = el)}
            className="absolute bottom-24 right-40 w-14 h-14 text-indigo-400 opacity-20"
          />

          {/* <Heart
            ref={(el) => (floatRefs.current[4] = el)}
            className="absolute top-1/2 left-1/2 w-12 h-12 text-indigo-400 opacity-15"
          /> */}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10">
          {/* IMAGE SLIDER */}
          <div className="relative flex justify-center">
            <div className="relative w-[300px] sm:w-[380px] md:w-[440px]">
              <img
                src={images[index]}
                alt="About illustration"
                className="w-full h-auto transition-all duration-700 ease-in-out drop-shadow-2xl"
              />
              <div className="absolute -inset-6 bg-indigo-400/30 blur-3xl rounded-full -z-10" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-600 font-semibold">
              About Us
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              We build modern digital
              <br /> experiences that convert.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              We help brands grow through clean design, powerful technology, and
              thoughtful user experiences.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-6">
              <Feature
                icon={<Sparkles />}
                title="Creative Design"
                text="Minimal, modern and conversion-focused UI."
              />
              <Feature
                icon={<Target />}
                title="Clear Strategy"
                text="Every decision supports business goals."
              />
              <Feature
                icon={<Heart />}
                title="Built with Care"
                text="Attention to detail in every project."
              />
            </div>

            {/* CTA */}
            <button className="mt-12 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CASE STUDY STRIP */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-indigo-600 mb-10">
            Selected Work
          </p>

          <div className="grid md:grid-cols-3 gap-14">
            {[
              {
                title: "Luxury Restaurant Brand",
                result: "+68% Online Orders",
              },
              {
                title: "Startup SaaS Platform",
                result: "3× Conversion Rate",
              },
              {
                title: "E-commerce Fashion Brand",
                result: "+42% Revenue Growth",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group hover:translate-y-[-6px] transition"
              >
                <div className="h-[2px] w-10 bg-indigo-600 mb-4 group-hover:w-16 transition-all" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* FEATURE ITEM */
const Feature = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 mt-1">{text}</p>
    </div>
  </div>
);
