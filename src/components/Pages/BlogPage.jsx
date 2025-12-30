import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useNavigate } from "react-router-dom";
import {
  PenTool,
  TrendingUp,
  Layout,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.from(".blog-hero", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Floating SVG icons
      gsap.utils.toArray(".float-icon").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -20 : 20,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // Blog cards scroll animation
      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 👉 BLOG DATA WITH SEO SLUGS
  const blogs = [
    {
      title: "Modern Website Design Trends for 2025",
      desc: "Explore the latest UI/UX trends that help brands stand out and convert visitors.",
      slug: "modern-website-design-trends-2025",
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "SEO Strategies That Actually Rank",
      desc: "Proven SEO techniques to increase organic traffic and dominate search results.",
      slug: "seo-strategies-that-rank",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "How Digital Marketing Boosts Sales",
      desc: "Learn how smart marketing funnels turn clicks into loyal customers.",
      slug: "digital-marketing-boosts-sales",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  // 👉 GSAP PAGE TRANSITION BEFORE ROUTE CHANGE
  const handleRedirect = (slug) => {
    gsap.to(sectionRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => navigate(`/blog/${slug}`),
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-indigo-50 py-28 overflow-hidden"
    >
      {/* Floating SVG Icons */}
      <Sparkles className="float-icon absolute top-20 left-10 text-indigo-400 opacity-30 w-16 h-16" />
      <PenTool className="float-icon absolute top-40 right-16 text-purple-400 opacity-30 w-16 h-16" />

      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <header className="blog-hero text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Web Design & Digital Marketing Insights
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Premium insights, trends, and strategies to grow your brand online.
          </p>
        </header>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <article
              key={blog.slug}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6 group-hover:scale-110 transition">
                {blog.icon}
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">{blog.desc}</p>

              {/* ✅ SEO LINK + GSAP TRANSITION */}
              <button
                onClick={() => handleRedirect(blog.slug)}
                className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition"
                aria-label={`Read more about ${blog.title}`}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </button>

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
