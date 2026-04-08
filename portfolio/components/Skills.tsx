"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    title: "Languages",
    tags: ["Python", "SQL", "JavaScript", "TypeScript", "Bash"],
  },
  {
    title: "ML & Data Science",
    tags: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Cloud & Infrastructure",
    tags: ["AWS Lambda", "AWS RDS", "PostgreSQL", "Apache Fineract", "IAM"],
  },
  {
    title: "Web & APIs",
    tags: ["Next.js 14", "REST APIs", "WhatsApp Cloud API", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Financial Modelling",
    tags: ["Excel / VBA", "Unit Economics", "Cash Flow Models", "P&L Scenarios", "Market Sizing"],
  },
  {
    title: "Tools & Platforms",
    tags: ["GitHub", "Figma", "Vercel", "EcoCash API", "Trustonic", "DIDIT KYC"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeIn>
        <SectionHeader
          eyebrow="// 02. Skills"
          title="Technical Stack"
          sub="Tools and technologies I've worked with hands-on during my studies and at Lynia Finance."
        />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skillGroups.map((group, i) => (
          <FadeIn key={group.title} delay={0.05 * i}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                height: "100%",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(79,209,197,0.35)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)")
              }
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "var(--teal)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                }}
              >
                {group.title}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {group.tags.map((tag) => (
                  <SkillTag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function SkillTag({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "rgba(79,209,197,0.08)",
        border: "1px solid rgba(79,209,197,0.2)",
        color: "var(--text)",
        fontSize: "13px",
        padding: "5px 12px",
        borderRadius: "6px",
        fontFamily: "'JetBrains Mono', monospace",
        cursor: "default",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(79,209,197,0.15)";
        el.style.borderColor = "var(--teal)";
        el.style.color = "var(--teal)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(79,209,197,0.08)";
        el.style.borderColor = "rgba(79,209,197,0.2)";
        el.style.color = "var(--text)";
      }}
    >
      {label}
    </span>
  );
}
