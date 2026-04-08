"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const work = [
  {
    date: "2025 – Present",
    title: "Co-Founder & Analytics Lead",
    org: "Lynia Finance · Harare, Zimbabwe",
    desc: "Building Zimbabwe's first WhatsApp-native microloan platform. Responsible for financial modelling, system architecture, API integration planning, and analytics infrastructure.",
  },
  {
    date: "2025 – Present",
    title: "Industrial Attachment — Informatics & Analytics",
    org: "National University of Science and Technology (NUST)",
    desc: "26-week supervised industrial placement at Lynia Finance, documenting technical contributions across financial modelling, cloud infrastructure, and data analytics.",
  },
];

const education = [
  {
    date: "2022 – Present",
    title: "BSc Informatics & Analytics",
    org: "NUST · Bulawayo, Zimbabwe",
    desc: "Specialisation in Machine Learning and Data Analysis. Core modules include statistical modelling, database systems, data visualisation, and information systems architecture.",
  },
  {
    date: "Ongoing",
    title: "Self-Directed Learning",
    org: "AWS, Apache Fineract, Next.js ecosystem",
    desc: "Continuous learning in cloud infrastructure, core banking systems, and modern full-stack development — applied directly to Lynia Finance's production platform.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeIn>
        <SectionHeader
          eyebrow="// 04. Experience"
          title="My Journey"
          sub="Academic and professional milestones that have shaped my technical foundation."
        />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
        }}
      >
        <FadeIn delay={0.1}>
          <TimelineColumn label="Work" items={work} />
        </FadeIn>
        <FadeIn delay={0.2}>
          <TimelineColumn label="Education" items={education} />
        </FadeIn>
      </div>
    </section>
  );
}

function TimelineColumn({
  label,
  items,
}: {
  label: string;
  items: { date: string; title: string; org: string; desc: string }[];
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: "var(--teal)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "1.5rem",
        }}
      >
        {label}
      </div>

      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "1px",
            background: "var(--border)",
          }}
        />

        {items.map((item, i) => (
          <div
            key={i}
            style={{
              paddingLeft: "2rem",
              marginBottom: "2.5rem",
              position: "relative",
            }}
          >
            {/* Dot */}
            <div
              style={{
                position: "absolute",
                left: "-4px",
                top: "6px",
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                background: "var(--teal)",
                border: "2px solid var(--bg)",
              }}
            />
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: "var(--teal)",
                marginBottom: "0.25rem",
              }}
            >
              {item.date}
            </div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "1.05rem",
                fontWeight: 600,
                marginBottom: "0.25rem",
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "var(--amber)",
                marginBottom: "0.5rem",
              }}
            >
              {item.org}
            </div>
            <p style={{ color: "var(--text2)", fontSize: "14px", lineHeight: 1.75 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
