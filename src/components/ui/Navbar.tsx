"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Event", href: "#event" },
  { label: "Tentang", href: "#tentang" },
  { label: "Membership", href: "#membership" },
  { label: "Galeri", href: "#galeri" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(9, 16, 64, 0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(57,255,20,0.18)"
          : "1px solid rgba(57,255,20,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl leading-tight" style={{ color: "#39FF14" }}>
            Tabur
          </span>
          <span className="font-heading text-white text-sm tracking-widest uppercase leading-tight">
            Bareng UB
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-heading text-xs tracking-[0.18em] uppercase text-white/60 hover:text-lime-DEFAULT transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#39FF14")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#event"
          className="hidden md:inline-block font-heading text-xs tracking-[0.12em] uppercase px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: "#39FF14", color: "#0D1B6E" }}
        >
          Daftar Sekarang
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className="block h-0.5" style={{ background: "#39FF14", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none", transition: "all 0.3s" }} />
            <span className="block h-0.5 bg-white" style={{ opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <span className="block h-0.5 bg-white" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none", transition: "all 0.3s" }} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(9,16,64,0.97)" }}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-sm tracking-widest uppercase py-2 border-b"
              style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.1)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#event"
            className="font-heading text-sm tracking-widest uppercase text-center py-3 rounded-lg mt-2"
            style={{ background: "#39FF14", color: "#0D1B6E" }}
          >
            Daftar Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}
