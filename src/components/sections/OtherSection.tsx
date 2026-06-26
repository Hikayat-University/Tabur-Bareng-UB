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
      <div className="max-w-[1280px] mx-auto px-6
