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
    context: "Industrial Attachment · Fintech Startup · 2025–2026",
    title: "WhatsApp-First Fintech Platform",
    desc: "Contributed to the development of a full-stack fintech platform serving Zimbabwe's informal economy. Work spanned financial product modelling, cloud infrastructure setup, API integration planning, core banking system configuration, and analytics dashboard development.",
    outcomes:
      "Delivered financial models across multiple lending products · Produced API integration documentation · Contributed to cloud infrastructure and admin dashboard development",
    stack: [
      "Next.js",
      "AWS Lambda",
      "PostgreSQL",
      "WhatsApp Cloud API",
      "Apache Fineract",
      "Python",
    ],
  },
  {
    icon: "📊",
    context: "Financial Modelling · Excel",
    title: "Microfinance Product Financial Models",
    desc: "Built detailed Excel financial models for multiple lending products, covering market sizing, unit economics, scenario P&L analysis, and monthly cash flow projections.",
    outcomes:
      "Investor-ready models covering multiple lending segments · Scenario analysis across optimistic, base, and stress cases",
    stack: ["Excel", "Financial Modelling", "Unit Economics", "Scenario Analysis"],
  },
  {
    icon: "💳",
    context: "API Integration Research · Fintech",
    title: "Mobile Money API Integration Planning",
    desc: "Prepared technical discovery materials for mobile money integrations — covering API questionnaires, schema requirements, system architecture considerations, and compliance documentation.",
    outcomes:
      "Multiple operator integration packs · Disbursement and repayment schema design · Compliance framework documentation",
    stack: ["REST APIs", "Systems Design", "Technical Documentation"],
  },
  {
    icon: "🤖",
    context: "Machine Learning · Python",
    title: "Data Analytics & ML Projects",
    desc: "Academic and personal projects applying machine learning and data analytics — including data cleaning pipelines, exploratory data analysis, predictive modelling, and data visualisation.",
    outcomes:
      "Applied scikit-learn, pandas, and Matplotlib across multiple datasets · Built end-to-end ML pipelines from raw data to insights",
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Jupyter"],
  },
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
          sub="Projects built during my industrial attachment and at NUST — spanning financial modelling, cloud systems, and data analytics."
        />
      </FadeIn>

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
            ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,209,197,0.4)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
          }
        >
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
              maxWidth: "700px",
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
              maxWidth: "700px",
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
      </FadeIn>

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
        {project.icon}
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
