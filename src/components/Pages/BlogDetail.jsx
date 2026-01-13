import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";

export const BLOGS = {
  "modern-website-design-trends-2025": {
    title: "Modern Website Design Trends for 2025",
    description:
      "Discover the latest website design trends for 2025 including AI-powered UI, micro-interactions, and performance-first layouts.",
    content: `
In 2025, modern website design is driven by speed, clarity, and intelligence.

AI-powered interfaces, Tailwind-based design systems, and conversion-first layouts
are shaping how brands communicate online. Users expect instant loading, clean
typography, and meaningful motion.

Websites are no longer static. They adapt, respond, and guide users in real time.

Key trends shaping 2025 include:

• AI-powered personalization  
• Micro-interactions and subtle animations  
• Dark mode & accessibility-first UI  
• Performance-first layouts  
• Mobile-first design systems  
• Headless CMS & component-based architecture  

Businesses that adopt these trends build trust faster, convert more users, and
rank higher in search engines.

A modern website is not just visual — it is a growth engine.
`,
  },

  "digital-marketing-boosts-sales": {
    title: "How Digital Marketing Boosts Sales",
    description:
      "Learn how digital marketing funnels turn website traffic into loyal customers and measurable business growth.",
    content: `
Digital marketing is no longer optional. It is the primary growth engine for
modern businesses.

From SEO and content marketing to paid ads and email funnels, every digital
touchpoint influences buying decisions.

The brands that win are those that build systems — not campaigns.

A high-performing website combined with clear messaging and smart funnels can:

• Capture qualified leads  
• Nurture prospects automatically  
• Build long-term brand authority  
• Reduce dependency on paid ads  
• Create predictable revenue  

Businesses that treat digital marketing as a long-term system experience
compounding growth over time.

Marketing is not about noise — it’s about trust.
`,
  },

  "modern-website-design-conversion": {
    title: "Modern Website Design That Converts Visitors into Customers",
    description:
      "Learn how modern website design improves conversions using UX, performance, and visual hierarchy.",
    content: `
Modern website design focuses on user experience, speed, and clarity.

A high-converting website guides visitors toward action using:

• Visual hierarchy  
• Clear calls-to-action  
• Mobile-first layouts  
• Fast loading speed  
• Trust-building design  

Conversion-focused design removes friction and builds confidence.

Every section, color, and interaction exists for a reason — to help users
understand, trust, and act.

Your website should not just look good.  
It should sell silently, 24/7.
`,
  },

  "seo-and-performance-strategies-2025": {
    title: "SEO & Website Performance Strategies for Higher Google Rankings",
    description:
      "Learn how Core Web Vitals, technical SEO, and performance optimization drive rankings in 2025.",
    content: `
SEO in 2025 is driven by experience, performance, and authority.

Google now ranks websites based on:

• Core Web Vitals  
• Mobile usability  
• Content quality  
• Page speed  
• Technical structure  

Faster websites rank higher and convert better.

Performance optimization is no longer optional — it is SEO.

Modern SEO combines:

• Technical optimization  
• Content strategy  
• UX design  
• Link authority  
• Structured data  

Search engines reward clarity and speed.

If your site feels good to users, it ranks better.
`,
  },

  "digital-marketing-brand-growth": {
    title: "Digital Marketing Strategies to Build Strong Online Brands",
    description:
      "Explore digital marketing strategies that build authority, trust, and long-term brand growth.",
    content: `
Digital marketing builds authority through consistency, clarity, and value.

Strong brands are not built by ads alone. They are built through:

• Educational content  
• Search visibility  
• Social proof  
• Trust signals  
• Community building  

Every blog, page, and post is a brand touchpoint.

The goal is not traffic — it is trust.

Brands that invest in content and experience win long-term.

Marketing is storytelling at scale.
`,
  },
};
export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);
  const blog = BLOGS[slug];

  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  if (!blog) {
    return (
      <section className="pt-28 pb-20 min-h-screen bg-white text-center">
        <h1 className="text-3xl font-bold">Blog not found</h1>
        <Link to="/blog" className="text-indigo-600 mt-6 inline-block">
          Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Naina Infotech</title>
        <meta name="description" content={blog.description} />
        <link
          rel="canonical"
          href={`https://www.nainainfotech.com/blog/${slug}`}
        />
      </Helmet>

      <section ref={pageRef} className="pt-28 pb-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {blog.title}
          </h1>

          <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">
            {blog.content}
          </div>
        </div>
      </section>
    </>
  );
}
