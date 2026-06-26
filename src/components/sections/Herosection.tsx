export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-[72px] flex items-center relative overflow-hidden"
      style={{ background: "#0D1B6E" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(57,255,20,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full py-16 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT */}
        <div>
          <p className="section-label mb-8">Platform Tadabbur Al-Qur'an</p>

          <div className="mb-6">
            <span
              className="font-display block leading-none mb-1"
              style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", color: "#39FF14" }}
            >
              Tabur
            </span>
            <span
              className="font-heading block leading-none text-white"
              style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)", letterSpacing: "-0.01em" }}
            >
              BARENG
            </span>
            <span
              className="font-heading block leading-none text-white"
              style={{ fontSize: "clamp(4rem, 10vw, 7.5rem)", letterSpacing: "-0.01em" }}
            >
              UB
            </span>
          </div>

          <p
            className="font-body text-white/60 mb-8 max-w-[38ch]"
            style={{ fontSize: "1.05rem", lineHeight: 1.8, fontWeight: 300 }}
          >
            Belajar Tadabbur bersama. Bertahap, bermakna, dan konsisten — bersama Ustadz Budi Ashari.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#event"
              className="font-heading text-sm tracking-[0.1em] uppercase px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
              style={{ background: "#39FF14", color: "#0D1B6E" }}
            >
              Lihat Event →
            </a>
            <a
              href="#membership"
              className="font-heading text-sm tracking-[0.1em] uppercase px-7 py-3.5 rounded-lg transition-all"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
            >
              Join Membership
            </a>
          </div>

          <div className="flex gap-4 flex-wrap">
            {[
              { num: "2.4K+", label: "Peserta" },
              { num: "38", label: "Event" },
              { num: "900+", label: "Tadabbur" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg px-5 py-3 text-center"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="font-heading block text-2xl leading-none" style={{ color: "#39FF14" }}>
                  {s.num}
                </span>
                <span className="font-heading text-[0.65rem] tracking-widest uppercase text-white/40 mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <div
            className="rounded-lg w-full flex items-center justify-center flex-col gap-2"
            style={{
              height: "320px",
              background: "rgba(36,56,184,0.3)",
              border: "2px dashed rgba(57,255,20,0.2)",
            }}
          >
            <span className="text-4xl opacity-30">🌱</span>
            <p className="font-heading text-xs tracking-widest uppercase text-white/30">
              Ilustrasi Animasi
            </p>
            <p className="font-body text-[0.7rem] text-white/20 text-center px-8">
              Tangan menaburkan benih → tumbuh saat scroll
            </p>
          </div>

          <div
            className="rounded-lg p-6"
            style={{
              background: "rgba(36,56,184,0.25)",
              border: "1px solid rgba(57,255,20,0.12)",
              borderLeft: "3px solid #39FF14",
            }}
          >
            <p
              className="text-right text-white mb-3 leading-loose"
              dir="rtl"
              style={{ fontSize: "1.4rem", fontFamily: "serif" }}
            >
              كِتَٰب أَنزَلۡنَهُ إِلَيۡكَ مُبَٰرَك لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ
            </p>
            <p
              className="font-body text-white/50 italic mb-3"
              style={{ fontSize: "0.85rem", lineHeight: 1.7, fontWeight: 300 }}
            >
              "Kitab yang Kami turunkan kepadamu penuh berkah, supaya mereka merenungkan ayat-ayat-Nya."
            </p>
            <span
              className="font-heading text-[0.68rem] tracking-[0.2em] uppercase"
              style={{ color: "#39FF14" }}
            >
              QS. Shad : 29
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
