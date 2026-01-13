import { Sparkles, Target, Users, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Naina Infotech – Web Design & Digital Growth Agency</title>
        <meta
          name="description"
          content="Learn about Naina Infotech, a web design and digital solutions company helping businesses grow with high-performance websites, SEO, and modern digital strategies."
        />
        <link rel="canonical" href="https://www.nainainfotech.com/about" />
      </Helmet>

      <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Naina Infotech
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              We craft premium digital experiences that help brands grow,
              convert, and stand out in the modern web.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: "100+", label: "Projects" },
              { value: "50+", label: "Happy Clients" },
              { value: "5+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur rounded-2xl p-4 sm:p-6 shadow-md"
              >
                <p className="text-2xl sm:text-3xl font-bold text-indigo-600">
                  {item.value}
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Mission / Vision */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At <span className="font-semibold">Naina Infotech</span>, we
                specialize in building high-performing websites, strong brand
                identities, and growth-focused digital strategies.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We blend creativity, technology, and strategy to deliver results
                — not just designs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: <Target className="text-indigo-600" />,
                  title: "Our Mission",
                  desc: "Empower brands with impactful digital solutions.",
                },
                {
                  icon: <Rocket className="text-indigo-600" />,
                  title: "Our Vision",
                  desc: "Become a trusted partner for premium web services.",
                },
                {
                  icon: <Users className="text-indigo-600" />,
                  title: "Our Team",
                  desc: "Creative designers & skilled developers.",
                },
                {
                  icon: <Sparkles className="text-indigo-600" />,
                  title: "Our Values",
                  desc: "Quality, trust, and innovation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO CONTENT */}
          <section className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Naina Infotech
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Naina Infotech is a modern web design and digital solutions
              company helping businesses build high-performance websites,
              SEO-ready platforms, and strong online identities.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our services include website design, UI/UX, front-end development,
              SEO optimization, and digital strategy.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Whether you are launching a new business or upgrading an existing
              website, Naina Infotech provides modern solutions that help brands
              grow online with confidence.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Let’s Build Something Great Together
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Ready to elevate your brand with a premium website?
            </p>
            <a
              href="/get-started"
              className="inline-block mt-4 sm:mt-6 px-7 sm:px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
