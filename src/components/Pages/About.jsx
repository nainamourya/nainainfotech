import { Sparkles, Target, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Naina Infotech
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            We craft premium digital experiences that help brands grow, convert,
            and stand out in the modern web.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100+", label: "Projects" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "24/7", label: "Support" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md"
            >
              <p className="text-3xl font-bold text-indigo-600">{item.value}</p>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At <span className="font-semibold">Naina Infotech</span>, we
              specialize in building high-performing websites, strong brand
              identities, and growth-focused digital strategies. Our goal is to
              help businesses attract high-paying clients with a professional
              online presence.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We blend creativity, technology, and strategy to deliver results —
              not just designs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
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
                className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Let’s Build Something Great Together
          </h2>
          <p className="mt-4 text-gray-600">
            Ready to elevate your brand with a premium website?
          </p>
          <a
            href="/get-started"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
