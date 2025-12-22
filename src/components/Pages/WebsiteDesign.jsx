import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Monitor,
  Zap,
  Layout,
  Smartphone,
  Code2,
  Paintbrush,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WebsiteDesign() {
  const wrapperRef = useRef(null);
  const iconRef = useRef(null);
  const imgRef = useRef(null);
  const rightImgRef = useRef(null);
  useEffect(() => {
    if (!wrapperRef.current || !iconRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=200%", // 3 sections → 2 extra screens
          scrub: 1.2,
          pin: true, // ✅ pin whole section
          anticipatePin: 1,
          // markers: true, // 👈 enable to debug
        },
      });

      tl.fromTo(
        iconRef.current,
        { x: "-40vw", scale: 0.7, opacity: 0 },
        { x: "40vw", scale: 1, opacity: 1, ease: "none", duration: 1 }
      )
        .to(iconRef.current, { opacity: 0, scale: 0.5, duration: 0.5 })
        .fromTo(
          imgRef.current,
          { opacity: 0, y: 80, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1 },
          "<"
        );
    }, wrapperRef);
    gsap.fromTo(
      rightImgRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightImgRef.current,
          start: "top 80%",
        },
      }
    );
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative h-[300vh] w-full overflow-hidden bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white"
    >
      {/* FLOATING ICON */}
      <div
        ref={iconRef}
        className="pointer-events-none absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20">
          <Monitor size={64} className="text-indigo-400" />
        </div>
      </div>

      <div className="relative">
        {/* SECTION 1 */}
        <div className="h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Website Design
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                Crafting stunning, fast, and conversion-focused websites that
                grow your digital presence.
              </p>

              <div className="mt-10 flex gap-8">
                <div>
                  <p className="text-4xl font-bold text-indigo-400">120+</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-indigo-400">98%</p>
                  <p className="text-gray-400 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE WITH FADE */}
            <div className="flex justify-center md:justify-end">
              <img
                ref={rightImgRef}
                src="/img/abt5.png" // 👈 change to your image
                alt="Website Preview"
                className="w-72 md:w-96 rounded-3xl shadow-2xl opacity-0"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <div className="relative order-2 md:order-1">
              <img
                ref={imgRef}
                src="/img/abt2.png"
                alt="Website Mockup"
                className="w-full rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-3xl" />
            </div>

            {/* CONTENT */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Designed for Performance 🚀
              </h2>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                We combine strategy, design, and engineering to deliver websites
                that look amazing and perform even better.
              </p>

              <div className="mt-10 grid gap-5">
                <div className="flex items-center gap-4">
                  <Zap className="text-indigo-400" />
                  <span>Lightning-fast load speed</span>
                </div>
                <div className="flex items-center gap-4">
                  <Layout className="text-indigo-400" />
                  <span>Modern UI/UX systems</span>
                </div>
                <div className="flex items-center gap-4">
                  <Smartphone className="text-indigo-400" />
                  <span>Pixel-perfect responsive design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our Creative Process ✨
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <Paintbrush
                  className="mx-auto text-indigo-400 mb-4"
                  size={40}
                />
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-400 text-sm">
                  Wireframes, UI systems, and brand visuals.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <Code2 className="mx-auto text-indigo-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Develop</h3>
                <p className="text-gray-400 text-sm">
                  Clean, scalable modern code.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <Rocket className="mx-auto text-indigo-400 mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">Launch</h3>
                <p className="text-gray-400 text-sm">
                  Deploy, optimize, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
