"use client";

import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

interface Project {
  featured?: boolean;
  icon: string;
  context: string;
  title: string;
  desc: string;
  outcomes: string;
  stack: string[];
  links?: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    featured: true,
    icon: "🏦",
    context: "Industrial Attachment · Lynia Finance · 2025–2026",
    title: "Lynia Finance — WhatsApp Microfinance Platform",
    desc: "Co-founded and architected a full-stack microfinance platform serving Zimbabwe's underbanked informal economy. Built the complete technical infrastructure — from WhatsApp loan origination flows and Apache Fineract core banking integration to AWS serverless microservices and mobile money disbursement pipelines.",
    outcomes:
      "3 lending products modelled (Civil Servants, Ride-Hailing, Smartphones) · Mobile money integrations with EcoCash, InnBucks & O'mari · Admin panel audit & gap analysis · AWS RDS database migration",
    stack: [
      "Apache Fineract",
      "AWS Lambda",
      "PostgreSQL",
      "Next.js 14",
      "WhatsApp Cloud API",
      "Trustonic",
      "DIDIT KYC",
    ],
    links: [{ label: "lyniafinance.com", href: "https://lyniafinance.com" }],
  },
  {
    icon: "📊",
    context: "Financial Modelling · Excel",
    title: "Microfinance Product Financial Models",
    desc: "Built three detailed Excel financial models (Civil Servants, Ride-Hailing, Smartphones) with 7-sheet structure including Market Sizing, Unit Economics, Scenario P&L, and Monthly Cash Flow projections.",
    outcomes:
      "Investor-ready models used in Lynia Finance pitch deck · Cost of capital aligned to Zimbabwe Microfinance Fund wholesale rate (3%/mo)",
    stack: ["Excel", "Financial Modelling", "Unit Economics", "Scenario Analysis"],
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    icon: "💳",
    context: "API Integration Research · Fintech",
    title: "Mobile Money API Discovery & Integration Planning",
    desc: "Prepared comprehensive technical discovery materials for integration with EcoCash, InnBucks, and O'mari — covering API questionnaires, schema requirements, system architecture, and compliance considerations.",
    outcomes:
      "3 operator-specific integration packs · Disbursement & repayment schema design · Compliance framework",
    stack: ["REST APIs", "EcoCash", "InnBucks", "O'mari", "Systems Design"],
    links: [{ label: "Docs", href: "#" }],
  },
  {
    icon: "📑",
    context: "Investor Relations · Startup",
    title: "Lynia Finance Investor Data Room",
    desc: "Designed and built a complete investor data room including a 13-slide pitch deck (generated programmatically with pptxgenjs), multi-sheet financial model with cap table, and structured data room folder architecture.",
    outcomes:
      "13-slide pitch deck generated with pptxgenjs · Cap table design · Full data room folder structure in Lynia's teal brand palette",
    stack: ["pptxgenjs", "Excel", "Cap Table", "Data Room"],
    links: [{ label: "Deck", href: "#" }],
  },
];

const featuredMetrics = [
  { val: "3%", key: "Cost of Capital / mo" },
  { val: "660+", key: "Target Drivers" },
  { val: "$7.4M", key: "Smartphone TAM" },
];

const archTags = [
  "WhatsApp → Lambda",
  "Fineract Core Banking",
  "RDS PostgreSQL",
  "EcoCash Disbursement",
  "Device Lock (Trustonic)",
  "Next.js Admin Panel",
];

const lendingProducts = [
  { name: "Civil Servants", detail: "9–15% / mo · SSB payroll" },
  { name: "Ride-Hailing Drivers", detail: "Weekly rates · 660 drivers" },
  { name: "Smartphone Financing", detail: "7–9% / mo · Device lock" },
];

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeIn>
        <SectionHeader
          eyebrow="// 03. Projects"
          title="What I've Built"
          sub="Real-world projects built during my attachment at Lynia Finance and at NUST — from financial models to production cloud systems."
        />
      </FadeIn>

      {/* Featured project */}
      <FadeIn delay={0.1}>
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "1.5rem",
            position: "relative",
            overflow: "hidden",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor =
              "rgba(79,209,197,0.4)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
          }
        >
          {/* Top gradient bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(90deg, var(--teal), var(--amber))",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {/* Left */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(246,173,85,0.1)",
                  border: "1px solid rgba(246,173,85,0.25)",
                  color: "var(--amber)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                ★ Featured Project
              </div>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(79,209,197,0.12)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                }}
              >
                {featured.icon}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "var(--amber)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.75rem",
                }}
              >
                {featured.context}
              </div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {featured.title}
              </h3>
              <p
                style={{
                  color: "var(--text2)",
                  fontSize: "14px",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                {featured.desc}
              </p>
              <div
                style={{
                  background: "rgba(79,209,197,0.05)",
                  border: "1px solid rgba(79,209,197,0.12)",
                  borderRadius: "8px",
                  padding: "0.85rem 1rem",
                  marginBottom: "1.25rem",
                  fontSize: "13px",
                  color: "var(--text2)",
                }}
              >
                <span style={{ color: "var(--teal)", fontWeight: 500 }}>Key outcomes: </span>
                {featured.outcomes}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {featured.stack.map((t) => (
                  <StackTag key={t} label={t} />
                ))}
              </div>
            </div>

            {/* Right: metrics + arch */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                }}
              >
                {featuredMetrics.map((m) => (
                  <div
                    key={m.key}
                    style={{
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--teal)",
                        display: "block",
                      }}
                    >
                      {m.val}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--text3)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {m.key}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "var(--teal)",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  System Architecture
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {archTags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "var(--bg3)",
                        border: "1px solid var(--border)",
                        padding: "6px 14px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        color: "var(--text2)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "var(--teal)",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Lending Products Modelled
                </div>
                {lendingProducts.map((p) => (
                  <div
                    key={p.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span style={{ color: "var(--text2)" }}>{p.name}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--teal)",
                        fontSize: "12px",
                      }}
                    >
                      {p.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Other projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {rest.map((project, i) => (
          <FadeIn key={project.title} delay={0.1 + i * 0.08}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "1.75rem",
        transition: "border-color 0.25s, transform 0.2s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(79,209,197,0.4)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "10px",
            background: "rgba(79,209,197,0.12)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          {project.icon}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {project.links?.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "var(--text3)",
                textDecoration: "none",
                fontSize: "13px",
                fontFamily: "'JetBrains Mono', monospace",
                padding: "4px 10px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--teal)";
                el.style.borderColor = "rgba(79,209,197,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text3)";
                el.style.borderColor = "var(--border)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "var(--amber)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "0.75rem",
        }}
      >
        {project.context}
      </div>

      <h3
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "1.1rem",
          fontWeight: 600,
          marginBottom: "0.5rem",
          lineHeight: 1.3,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          color: "var(--text2)",
          fontSize: "14px",
          lineHeight: 1.75,
          marginBottom: "1.25rem",
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      <div
        style={{
          background: "rgba(79,209,197,0.05)",
          border: "1px solid rgba(79,209,197,0.12)",
          borderRadius: "8px",
          padding: "0.85rem 1rem",
          marginBottom: "1.25rem",
          fontSize: "13px",
          color: "var(--text2)",
        }}
      >
        <span style={{ color: "var(--teal)", fontWeight: 500 }}>Impact: </span>
        {project.outcomes}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.stack.map((t) => (
          <StackTag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

function StackTag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        color: "var(--text3)",
        background: "var(--bg2)",
        padding: "3px 9px",
        borderRadius: "4px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {label}
    </span>
  );
}
