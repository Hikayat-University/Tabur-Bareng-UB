"use client";
import { useState } from "react";

export function StatsSection() {
  const stats = [
    { num: "2,400+", label: "Total Peserta" },
    { num: "38",     label: "Event Digelar" },
    { num: "912",    label: "Tulisan Tadabbur" },
    { num: "480",    label: "Member Aktif" },
  ];
  return (
    <section style={{ background: "#39FF14" }} className="py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center py-4 px-4"
              style={{ borderRight: i < 3 ? "1px solid rgba(0,0,0,0.12)" : "none" }}
            >
              <span
                className="font-heading block leading-none mb-1"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#0D1B6E" }}
              >
                {s.num}
              </span>
              <span
                className="font-heading text-[0.72rem] tracking-widest uppercase"
                style={{ color: "rgba(0,50,0,0.6)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const events = [
  {
    day: "12", month: "Jul 2025", type: "Hybrid",
    name: "Tadabbur Surah Al-Baqarah #14",
    venue: "Masjid Istiqlal, Jakarta", time: "08.00 – 12.00 WIB",
  },
  {
    day: "26", month: "Jul 2025", type: "Online",
    name: "Tadabbur Surah Al-Imran #07",
    venue: "Via Zoom", time: "19.30 – 21.00 WIB",
  },
  {
    day: "09", month: "Agt 2025", type: "Offline",
    name: "Khataman Tadabbur Juz 1",
    venue: "Gedung UB, Jakarta Pusat", time: "07.00 – 17.00 WIB",
  },
];

export function EventSection() {
  return (
    <section id="event" className="py-24" style={{ background: "#0D1B6E" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="section-label mb-3">Event</p>
            <h2 className="font-heading text-white leading-none uppercase" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Mendatang
            </h2>
          </div>
          <a href="#" className="font-heading text-xs tracking-widest uppercase flex items-center gap-2" style={{ color: "#39FF14" }}>
            Semua Event <span>→</span>
          </a>
        </div>
        <div className="flex flex-col gap-1">
          {events.map((ev, i) => (
            <div
              key={i}
              className="rounded-lg flex flex-col md:flex-row items-stretch"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderLeft: "3px solid #39FF14",
              }}
            >
              <div className="px-6 py-5 flex flex-col justify-center items-center min-w-[100px]" style={{ borderRight: "1px solid rgba(255,255,255,0.07)" }}>
                <span className="font-heading leading-none" style={{ fontSize: "2rem", color: "#39FF14" }}>{ev.day}</span>
                <span className="font-heading text-[0.65rem] tracking-widest uppercase text-white/40 mt-1">{ev.month}</span>
              </div>
              <div className="flex-1 px-6 py-5">
                <span className="font-heading text-[0.65rem] tracking-[0.2em] uppercase mb-1 block" style={{ color: "#39FF14" }}>{ev.type}</span>
                <h3 className="font-heading text-white text-lg uppercase mb-1">{ev.name}</h3>
                <div className="flex flex-wrap gap-4 text-white/40 text-xs">
                  <span>📍 {ev.venue}</span>
                  <span>🕐 {ev.time}</span>
                  <span>👤 Ust. Budi Ashari</span>
                </div>
              </div>
              <div className="px-6 py-5 flex items-center" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
                <a href="#" className="font-heading text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg" style={{ background: "#39FF14", color: "#0D1B6E" }}>
                  Daftar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const items = [
    "Tadabbur Al-Fatihah — Jan 2025",
    "Peserta Offline — Feb 2025",
    "Sesi Tanya Jawab — Mar 2025",
    "Khataman Juz Amma — Apr 2025",
    "Komunitas Member — Mei 2025",
  ];
  return (
    <section id="galeri" className="py-24" style={{ background: "#1a2e95" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="section-label mb-3">Galeri</p>
            <h2 className="font-heading text-white leading-none uppercase" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Momen</h2>
          </div>
          <a href="#" className="font-heading text-xs tracking-widest uppercase flex items-center gap-2" style={{ color: "#39FF14" }}>Lihat Semua <span>→</span></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${i === 0 ? "md:row-span-2" : ""}`}
              style={{ background: "#2438B8", aspectRatio: i === 0 ? "3/4" : "4/3", minHeight: "160px" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-3xl opacity-20">📸</span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(to top, rgba(9,16,64,0.9), transparent)" }}
              >
                <span className="font-heading text-[0.65rem] tracking-widest uppercase" style={{ color: "#39FF14" }}>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Peserta", price: "Gratis", period: "Akses dasar", featured: false,
    features: [
      { text: "Daftar Event Offline", active: true },
      { text: "Kirim Tulisan Tadabbur", active: true },
      { text: "Dashboard Sederhana", active: true },
      { text: "Akses Rekaman Event", active: false },
      { text: "Learning Platform Penuh", active: false },
      { text: "Sertifikat Digital", active: false },
      { text: "Komunitas Diskusi", active: false },
    ],
  },
  {
    name: "Member", price: "Rp 99K", period: "per bulan · atau Rp 899K/tahun", featured: true,
    features: [
      { text: "Semua hak Peserta", active: true },
      { text: "Seluruh Rekaman Event", active: true },
      { text: "Learning Platform Penuh", active: true },
      { text: "Sertifikat Digital", active: true },
      { text: "Komunitas Diskusi", active: true },
      { text: "Tracking Progress Belajar", active: true },
      { text: "Prioritas Pendaftaran Event", active: true },
    ],
  },
];

export function MembershipSection() {
  return (
    <section id="membership" className="py-24" style={{ background: "#0D1B6E" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <p className="section-label mb-4">Membership</p>
        <h2 className="font-heading text-white leading-none uppercase mb-12" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>Bergabung</h2>
        <div className="grid md:grid-cols-2 gap-1">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-lg p-8 relative"
              style={{
                background: plan.featured ? "rgba(57,255,20,0.06)" : "rgba(255,255,255,0.03)",
                border: plan.featured ? "1px solid rgba(57,255,20,0.25)" : "1px solid rgba(255,255,255,0.07)",
                borderTop: plan.featured ? "3px solid #39FF14" : "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 font-heading text-[0.65rem] tracking-widest uppercase px-3 py-1 rounded" style={{ background: "#39FF14", color: "#0D1B6E" }}>
                  Direkomendasikan
                </span>
              )}
              <h3 className="font-heading text-white text-2xl uppercase mb-1">{plan.name}</h3>
              <p className="font-heading leading-none mb-1" style={{ fontSize: "2.5rem", color: "#39FF14" }}>{plan.price}</p>
              <p className="font-heading text-[0.72rem] tracking-widest uppercase text-white/30 mb-6">{plan.period}</p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm py-2" style={{ color: f.active ? "rgba(240,240,255,0.8)" : "rgba(240,240,255,0.25)", borderBottom: "1px solid rgba(255,255,255,0.05)", fontWeight: 300 }}>
                    <span style={{ color: f.active ? "#39FF14" : "rgba(255,255,255,0.2)" }}>{f.active ? "✓" : "—"}</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block w-full text-center font-heading text-sm tracking-widest uppercase py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
                style={plan.featured ? { background: "#39FF14", color: "#0D1B6E" } : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {plan.featured ? "Mulai Membership
