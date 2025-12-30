import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";

export default function BlogDetail() {
  const { slug } = useParams();
  const pageRef = useRef(null);

  useEffect(() => {
    gsap.from(pageRef.current, {
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={pageRef} className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* SEO H1 */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        {/* Content */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          This is a premium blog detail page designed for SEO and conversions.
          You can add long-form content, images, FAQs, CTAs, and schema here.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Add value-driven content that helps your website rank on Google and
          position your agency as an expert in Web Design & Digital Marketing.
        </p>
      </div>
    </section>
  );
}
