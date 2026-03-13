import { useState, useEffect } from "react";

/* =========================
   Scroll Reveal Hook
========================= */
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

/* =========================
   Navigation
========================= */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <img
            src="/limo.jpeg"
            alt="Limo Kiplagat Duke"
            className="w-10 h-10 rounded-xl object-cover border-2 border-emerald-500/50 group-hover:scale-110 transition-transform"
          />
          <span className="font-semibold text-zinc-100 hidden sm:block">
            Limo Kiplagat Duke 
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/Limo_Resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-emerald-400 rounded-lg text-sm"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-semibold rounded-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center gap-1.5"
        >
          <span className="w-6 h-0.5 bg-zinc-300" />
          <span className="w-6 h-0.5 bg-zinc-300" />
          <span className="w-6 h-0.5 bg-zinc-300" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-emerald-400 text-lg"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

/* =========================
   Hero
========================= */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-5xl text-center px-6">

        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-emerald-400">
            Limo Kiplagat Duke
          </span>
        </h1>

        <p className="text-xl text-zinc-400 mb-6">
          Full-Stack Developer & AI Solutions Architect
        </p>

        <p className="text-zinc-500 mb-10">
          Founder of <span className="text-emerald-400">DKL EMPIRE TECH</span>.
          I build scalable web systems, AI platforms and enterprise solutions.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://calendly.com/dukelimo2001/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-500 text-zinc-900 rounded-xl font-bold"
          >
            Schedule Call
          </a>

          <a
            href="#projects"
            className="px-8 py-4 border border-zinc-700 text-zinc-300 rounded-xl"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Contact
========================= */
const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

      <p className="text-zinc-400 mb-10">
        Let's discuss your next project.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">

        {/* FIXED EMAIL */}
        <a
          href="mailto:dukelimo2001@gmail.com"
          className="px-8 py-4 border border-zinc-700 rounded-xl text-zinc-300 hover:text-emerald-400"
        >
          dukelimo2001@gmail.com
        </a>

        <a
          href="https://wa.me/254799406453"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-zinc-700 rounded-xl text-zinc-300 hover:text-green-400"
        >
          WhatsApp
        </a>

      </div>
    </section>
  );
};

/* =========================
   Footer
========================= */
const Footer = () => (
  <footer className="py-8 border-t border-zinc-800 text-center text-zinc-500">
    © {new Date().getFullYear()} DKL EMPIRE TECH
  </footer>
);

/* =========================
   App
========================= */
export default function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navigation />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}
