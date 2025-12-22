import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      // 🌊 Wave floating animation
      gsap.to(waveRef.current, {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-900 to-black text-gray-300 pt-32"
    >
      {/* 🌊 SVG WAVE */}
      <div
        ref={waveRef}
        className="absolute top-0 left-0 w-full -translate-y-full"
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-32 fill-indigo-900"
          preserveAspectRatio="none"
        >
          <path d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,85.3C840,96,960,96,1080,85.3C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        </svg>
      </div>

      {/* ✨ Glow blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="footer-item space-y-4">
          <div className="flex items-center gap-2 text-white text-2xl font-bold">
            <Sparkles className="text-indigo-400" />
            MindCraft
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Crafting calm, clarity, and conscious growth through modern therapy
            experiences.
          </p>
        </div>

        {/* Links */}
        <div className="footer-item">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About</li>
            <li className="hover:text-white transition">Services</li>
            <li className="hover:text-white transition">Blog</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-item">
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Terms of Service</li>
            <li className="hover:text-white transition">FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-item space-y-4">
          <h4 className="text-white font-semibold">Contact</h4>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-indigo-400" />
            support@mindcraft.com
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-indigo-400" />
            +91 98765 43210
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-indigo-400" />
            India
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MindCraft. All rights reserved.
      </div>
    </footer>
  );
}
