import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { Mail, Phone, MapPin, Sparkles, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const form = useRef();
  const pageRef = useRef(null);
  const floatRefs = useRef([]);

  useEffect(() => {
    gsap.from(pageRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    floatRefs.current.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? -18 : 18,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfcky1d",
        "template_vdai7cl",
        form.current,
        "DE2wkyJVM6bC5p1AH"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section
      ref={pageRef}
      className="relative min-h-screen pt-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden"
    >
      {/* Floating Icons */}
      <Sparkles
        ref={(el) => (floatRefs.current[0] = el)}
        className="absolute top-24 left-16 w-16 h-16 text-white/30"
      />
      <MessageCircle
        ref={(el) => (floatRefs.current[1] = el)}
        className="absolute bottom-24 right-20 w-20 h-20 text-white/20"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT – YOUR INFO */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let’s Work Together
          </h1>

          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Have a project in mind or need help with web design & digital
            marketing? Reach out and I’ll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <span className="text-lg">nainam6025@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+91 7977342732</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">India · Serving Clients Worldwide</span>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Contact Form
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
