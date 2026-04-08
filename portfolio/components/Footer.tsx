export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "12px",
        color: "var(--text3)",
      }}
    >
      <p>
        Built by{" "}
        <span style={{ color: "var(--teal)" }}>Tereraishe Mwanabantu</span>
        {" · "}Informatics &amp; Analytics · NUST ·{" "}
        <span style={{ color: "var(--teal)" }}>Lynia Finance</span>
      </p>
      <p style={{ marginTop: "0.5rem", color: "var(--text3)" }}>
        © {new Date().getFullYear()} · Zimbabwe · Built with Next.js 14 + Tailwind CSS + Framer Motion
      </p>
    </footer>
  );
}
