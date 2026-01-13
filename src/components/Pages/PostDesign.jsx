import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Image,
  Layers,
  Share2,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function PostDesign() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".post-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".post-sub", {
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
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.to(iconsRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const posts = [
    {
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
      title: "Instagram Creatives",
      desc: "Scroll-stopping visuals crafted for engagement.",
    },
    {
      img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800",
      title: "Brand Promotions",
      desc: "Promotional posts that convert viewers into clients.",
    },
    {
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
      title: "Campaign Banners",
      desc: "High-impact designs for launches & offers.",
    },
  ];

  const features = [
    {
      icon: <Image className="w-7 h-7 text-pink-400" />,
      title: "Eye-catching",
    },
    {
      icon: <Layers className="w-7 h-7 text-indigo-400" />,
      title: "Layered Style",
    },
    {
      icon: <Share2 className="w-7 h-7 text-emerald-400" />,
      title: "Share Ready",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-yellow-400" />,
      title: "Growth Focused",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Post Design Services | Naina Infotech</title>
        <meta
          name="description"
          content="Creative social media post designs by Naina Infotech. Boost engagement and grow your brand with stunning visuals."
        />
        <link
          rel="canonical"
          href="https://www.nainainfotech.com/services/post-design"
        />
      </Helmet>

      <section
        ref={sectionRef}
        className="relative py-28 bg-gradient-to-br from-black via-fuchsia-950 to-indigo-950 text-white overflow-hidden"
      >
        {/* 🔮 Moving SVG Blob */}
        <svg
          ref={(el) => (iconsRef.current[0] = el)}
          className="absolute top-16 right-10 w-80 h-80 opacity-30 blur-2xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#EC4899"
            d="M39.5,-61.1C52.8,-52.7,66.7,-44.8,73.2,-32.7C79.7,-20.7,78.8,-4.5,73.6,9.6C68.3,23.7,58.7,35.7,46.6,46.5C34.5,57.4,20,67.2,3.7,71.9C-12.6,76.7,-30.7,76.3,-45.4,69C-60.2,61.7,-71.7,47.4,-75.8,31.4C-79.9,15.5,-76.6,-2.1,-69.6,-17.4C-62.7,-32.8,-52.2,-45.9,-39.2,-54.8C-26.3,-63.6,-13.1,-68.3,0.5,-69.1C14.1,-69.8,28.2,-66.9,39.5,-61.1Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* ✨ Floating Icons */}
        <Sparkles
          ref={(el) => (iconsRef.current[1] = el)}
          className="absolute left-16 top-40 w-10 h-10 text-pink-400 opacity-70"
        />
        <Share2
          ref={(el) => (iconsRef.current[2] = el)}
          className="absolute right-24 bottom-40 w-10 h-10 text-indigo-400 opacity-70"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* 📝 Header */}
          <div className="text-center">
            <h2 className="post-title text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Post Designs That Get Noticed
            </h2>
            <p className="post-sub mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Modern social media creatives that boost engagement and grow your
              brand across platforms.
            </p>
          </div>

          {/* 🖼️ Image Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-3 transition-all duration-500"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-300">{post.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 🧩 Unique Feature Cards */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[posts.length + i] = el)}
                className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:scale-105 transition duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                  {f.icon}
                </div>
                <h4 className="font-semibold text-lg">{f.title}</h4>
              </div>
            ))}
          </div>
          {/*  */}
          <div className="mt-42 max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Social Media Post Design That Drives Engagement
            </h2>

            <p>
              Naina Infotech provides professional social media post design
              services for brands that want to stand out online. From Instagram
              creatives to campaign banners and promotional graphics, we design
              visuals that capture attention and inspire action.
            </p>

            <p>
              Our post designs are crafted with strategy, brand consistency, and
              platform trends in mind. Every creative is optimized for
              scroll-stopping impact while maintaining your brand identity
              across platforms.
            </p>

            <h3 className="text-2xl font-semibold text-white">
              Why Professional Post Design Matters
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Higher engagement and reach on social platforms</li>
              <li>Consistent brand presence across all posts</li>
              <li>Better conversion from viewers to customers</li>
              <li>Designs tailored for Instagram, Facebook & campaigns</li>
            </ul>

            <p>
              Whether you’re launching a product, running ads, or building a
              brand presence, our creatives help you communicate clearly and
              grow faster.
            </p>
          </div>

          {/* 🚀 CTA */}
          <div className="mt-24 text-center">
            <Link to="/contact">
              <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 transition text-white font-semibold shadow-xl">
                Create My Posts <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
