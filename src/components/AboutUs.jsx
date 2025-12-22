import { useEffect, useState } from "react";
import { Sparkles, Target, Heart } from "lucide-react";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const images = [
  "/img/abt5.png", // 👈 add your vector PNG paths
  "/img/abt2.png",
  "/img/abt6.png",
];

export default function AboutUs() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // ⏱ 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* 🖼 IMAGE SLIDER */}
        <div className="relative flex justify-center">
          <div className="relative w-[280px] sm:w-[360px] md:w-[420px]">
            <img
              src={images[index]}
              alt="About illustration"
              className="w-full h-auto transition-all duration-700 ease-in-out drop-shadow-2xl"
            />

            {/* Glow */}
            <div className="absolute -inset-6 bg-indigo-400/20 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>

        {/* 📄 CONTENT */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            About <span className="text-indigo-600">Us</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            We are passionate creators crafting modern web experiences that
            blend beautiful design with powerful technology. Our goal is to help
            brands grow, connect, and stand out in the digital world.
          </p>

          {/* 🌟 FEATURES */}
          <div className="mt-10 space-y-6">
            <Feature
              icon={<Sparkles />}
              title="Creative Design"
              text="Clean, modern, and user-focused UI that feels premium."
            />
            <Feature
              icon={<Target />}
              title="Our Mission"
              text="Deliver impactful digital products that drive results."
            />
            <Feature
              icon={<Heart />}
              title="Built with Passion"
              text="We love what we do and it reflects in every project."
            />
          </div>

          {/* 🔘 CTA */}
          <button className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-lg">
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Feature Item */
const Feature = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 mt-1">{text}</p>
    </div>
  </div>
);
