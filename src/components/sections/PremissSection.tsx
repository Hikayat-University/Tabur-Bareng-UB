export default function PremissSection() {
  return (
    <section
      id="tentang"
      className="py-24 relative overflow-hidden"
      style={{ background: "#1a2e95" }}
    >
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          fontSize: "10rem",
          color: "rgba(57,255,20,0.04)",
          fontFamily: "serif",
          lineHeight: 1,
        }}
        aria-hidden
      >
        تدبر
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="section-label mb-6">Premiss</p>
            <h2
              className="font-heading text-white mb-6 leading-none uppercase"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              KEBANYAKAN ORANG
              <span style={{ color: "#39FF14" }}> MEMBACA</span>
              <br />QUR'AN.
              <br />
              <span className="text-white/50">TAPI BELUM TENTU</span>
              <br />MEMAHAMINYA.
            </h2>
            <p
              className="font-body text-white/60 mb-4"
              style={{ fontSize: "1rem", lineHeight: 1.85, fontWeight: 300, maxWidth: "48ch" }}
            >
              Wahyu adalah ruangan yang segalanya absolut. Lalu Allah ciptakan ruang yang lebih luas untuk manusia berpikir — bernama Tadabbur.
            </p>
            <p
              className="font-body text-white/60"
              style={{ fontSize: "1rem", lineHeight: 1.85, fontWeight: 300, maxWidth: "48ch" }}
            >
              Perlu kaidah dan daya pikir agar tadabbur bekerja dalam seluruh lini kehidupan kita.
            </p>
          </div>

          <div
            className="rounded-lg p-8"
            style={{
              background: "rgba(9,16,64,0.5)",
              borderLeft: "3px solid #39FF14",
            }}
          >
            <p
              className="text-right text-white mb-4 leading-loose"
              dir="rtl"
              style={{ fontSize: "1.75rem", fontFamily: "serif" }}
            >
              أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ
            </p>
            <p
              className="font-body text-white/50 italic mb-2"
              style={{ fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}
            >
              "Maka tidakkah mereka merenungkan Al-Qur'an?"
            </p>
            <span
              className="font-heading text-[0.7rem] tracking-[0.2em] uppercase"
              style={{ color: "#39FF14" }}
            >
              QS. Muhammad : 24
            </span>

            <div
              className="mt-6 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="font-heading text-white/40 text-xs tracking-widest uppercase mb-3">
                Tadabbur adalah
              </p>
              <p className="font-heading text-white text-lg leading-snug uppercase">
                Aktifitas menghidupkan pikir
                <br />
                <span style={{ color: "#39FF14" }}>untuk membuka hati.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-16">
          {[
            {
              step: "Mendengar",
              desc: "Bergabung dalam event kajian bersama Ustadz Budi Ashari, secara offline maupun online.",
            },
            {
              step: "Merenungkan",
              desc: "Mengakses seluruh rekaman, materi, dan platform pembelajaran digital yang terstruktur.",
            },
            {
              step: "Menaburkan",
              desc: "Menuliskan tadabbur dan berbagi kepada komunitas — menaburkan benih kebaikan.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg p-6"
              style={{
                background: "rgba(9,16,64,0.4)",
                borderTop: "3px solid #39FF14",
              }}
            >
              <span
                className="font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-3 block"
                style={{ color: "#39FF14" }}
              >
                0{i + 1}
              </span>
              <h3 className="font-heading text-white text-xl uppercase mb-3">
                {item.step}
              </h3>
              <p
                className="font-body text-white/50 text-sm leading-relaxed"
                style={{ fontWeight: 300 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
