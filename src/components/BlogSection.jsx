import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
const blogs = [
  {
    title: "Modern Website Design That Converts Visitors",
    desc: "Discover how clean UI, UX psychology, and conversion-focused layouts help businesses turn traffic into paying customers.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    tag: "Web Design",
  },
  {
    title: "SEO & Performance Strategies for 2025",
    desc: "Learn how Core Web Vitals, on-page SEO, and fast-loading websites improve Google rankings and organic traffic.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200",
    tag: "SEO & Marketing",
  },
  {
    title: "Digital Marketing That Builds Strong Brands",
    desc: "From social media strategy to content marketing, explore proven techniques to grow brand authority and online sales.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200",
    tag: "Digital Marketing",
  },
];

export default function BlogSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".blog-card");

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          immediateRender: false, // ✅ key fix
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-indigo-50 via-white to-indigo-100 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
            <Sparkles size={16} /> Our Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Insights on Web Design & Digital Growth
          </h2>
          <p className="mt-4 text-gray-600">
            Actionable strategies, design thinking, and marketing insights to
            help businesses attract, engage, and convert customers online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="blog-card group relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-indigo-600 backdrop-blur">
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm">{blog.desc}</p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-indigo-600">
                    Read More
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition">
            Explore All Insights <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
