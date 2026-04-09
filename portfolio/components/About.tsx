"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const cards = [
  {
    icon: "🎓",
    title: "NUST — Informatics & Analytics",
    desc: "Industrial Attachment · 2025–2026 · Bulawayo, Zimbabwe",
  },
  {
    icon: "🏦",
    title: "Lynia Finance — Co-Founder",
    desc: "WhatsApp-first microloan & device financing for Zimbabwe's informal economy",
  },
  {
    icon: "📊",
    title: "Focus Areas",
    desc: "Machine Learning · Financial Modelling · Data Analytics · Cloud Infrastructure · API Integration",
  },
  {
    icon: "🌍",
    title: "Expansion Vision",
    desc: "Building scalable fintech infrastructure for informal economy workers across Southern Africa",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeIn>
        <SectionHeader eyebrow="// 01. About" title="Who I Am" />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Text column */}
        <FadeIn delay={0.1}>
          <div>
            <p style={{ color: "var(--text2)", marginBottom: "1.25rem", lineHeight: 1.85 }}>
              I&apos;m a final-year{" "}
              <strong style={{ color: "var(--text)" }}>Informatics &amp; Analytics</strong> student at the
              National University of Science and Technology (NUST), currently completing my industrial
              attachment at{" "}
              <strong style={{ color: "var(--text)" }}>Lynia Finance</strong> — a WhatsApp-first fintech
              startup serving Zimbabwe&apos;s underbanked informal economy.
            </p>
            <p style={{ color: "var(--text2)", marginBottom: "1.25rem", lineHeight: 1.85 }}>
              My work sits at the intersection of{" "}
              <strong style={{ color: "var(--text)" }}>
                data science, machine learning, and financial systems
              </strong>
              . I&apos;m drawn to problems where thoughtful analysis can unlock real value — especially in
              underserved markets where data infrastructure is still being built from scratch.
            </p>
            <p style={{ color: "var(--text2)", lineHeight: 1.85 }}>
              At Lynia Finance, I&apos;ve contributed across the full stack: from financial model development
              and API integration planning to cloud infrastructure and core banking system architecture.
            </p>

            <div
              style={{
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                borderLeft: "3px solid var(--teal)",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                marginTop: "1.5rem",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "var(--teal)",
                lineHeight: 1.6,
              }}
            >
              &gt; Currently building: microfinance product models for civil servants, ride-hailing drivers
              &amp; smartphone financing — all on Apache Fineract + AWS Lambda
            </div>
          </div>
        </FadeIn>

        {/* Cards column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.15 + i * 0.08}>
              <div
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.25rem 1.5rem",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,209,197,0.35)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                }
              >
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{card.icon}</div>
                <h4
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: "14px", color: "var(--text2)" }}>{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
