interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

export default function SectionHeader({ eyebrow, title, sub }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: sub ? "3rem" : "2rem" }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: "var(--teal)",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          marginBottom: "0.75rem",
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: sub ? "1rem" : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            color: "var(--text2)",
            fontSize: "1rem",
            maxWidth: "560px",
            lineHeight: 1.75,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
