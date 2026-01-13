import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      gsap.from(".blog-hero", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray(".float-icon").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -20 : 20,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

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
    <>
      <Helmet>
        <title>Blog – Web Design, AI & Digital Growth | Naina Infotech</title>
        <meta
          name="description"
          content="Explore insights on web design, AI-powered websites, Tailwind CSS, SEO, and digital marketing strategies to grow your business online."
        />
        <link rel="canonical" href="https://www.nainainfotech.com/blog" />
      </Helmet>

      <section
        ref={sectionRef}
        className="relative bg-gradient-to-b from-white to-indigo-50 pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden"
      >
        <Sparkles className="float-icon absolute top-16 left-6 sm:left-10 text-indigo-400 opacity-30 w-12 sm:w-16 h-12 sm:h-16" />
        <PenTool className="float-icon absolute top-32 right-8 sm:right-16 text-purple-400 opacity-30 w-12 sm:w-16 h-12 sm:h-16" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <header className="blog-hero text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Web Design, AI & Digital Growth Insights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Premium insights on modern web design, AI-powered websites,
              Tailwind CSS, SEO, and growth strategies.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {blogs.map((blog, i) => (
              <article
                key={blog.slug}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-5 sm:mb-6 group-hover:scale-110 transition">
                  {blog.icon}
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {blog.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                  {blog.desc}
                </p>

                <button
                  onClick={() => handleRedirect(blog.slug)}
                  className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none"></div>
              </article>
            ))}
          </div>

          {/* SEO CONTENT */}
          <section className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              AI, Tailwind & Modern Web Development
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Modern websites are no longer static. With AI-powered interfaces,
              Tailwind CSS frameworks, and performance-first design systems,
              brands can build faster, smarter, and more engaging digital
              experiences.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Naina Infotech, we explore how artificial intelligence is
              changing web development — from AI chat interfaces and content
              automation to predictive UX and personalization.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our blog helps founders, developers, and business owners
              understand how to combine design, AI, and marketing into a single
              growth system that ranks, converts, and scales.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
