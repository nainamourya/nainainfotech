import { useState } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const services = [
    { name: "Website Design", path: "/services/website-design" },
    { name: "Advanced SEO", path: "/services/advanced-seo" },
    { name: "Logo Design", path: "/services/logo-design" },
    { name: "Post Design", path: "/services/post-design" },
  ];
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
          >
            {/* <Sparkles className="text-indigo-600 w-6 h-6 md:w-7 md:h-7" /> */}

            <img
              src="/img/logo2-naina.png"
              alt="Naina Infotech Logo"
              className="
      h-8 md:h-10 w-auto
      object-contain
      transition-transform duration-300
      hover:scale-105
    "
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="group-hover:text-indigo-600 transition"
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}

            {/* SERVICES DROPDOWN */}
            <li className="relative group cursor-pointer flex items-center gap-1">
              <span className="group-hover:text-indigo-600 transition">
                Services
              </span>
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180"
              />

              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-4 w-64 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/40 p-5 grid gap-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center justify-between text-gray-700 hover:text-indigo-600 transition font-medium"
                  >
                    {item.name}
                    <span className="text-xs opacity-50">→</span>
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/get-started"
              className="relative px-6 py-2.5 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-indigo-500/40 transition-all"
            >
              Get Started
              <span className="absolute inset-0 rounded-full blur-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-40 -z-10"></span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-800"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl md:hidden">
          <div className="p-6 flex justify-between items-center border-b">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              MindCraft
            </Link>
            <button onClick={() => setOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <ul className="flex flex-col p-8 gap-6 text-lg text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-indigo-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Mobile Services */}
            <li className="mt-2">
              <span className="font-semibold text-gray-900">Services</span>
              <div className="mt-3 ml-3 flex flex-col gap-3 text-gray-600">
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="hover:text-indigo-600 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>

            <Link
              to="/get-started"
              onClick={() => setOpen(false)}
              className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg text-center"
            >
              Get Started
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
