"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "26", label: "Weeks Attached" },
  { num: "3", label: "Products Built" },
  { num: "AWS", label: "Cloud Platform" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-6 md:px-16"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "3rem", alignItems: "center", width: "100%" }}
      >
        {/* Photo — shows on mobile above text */}
        <motion.div
          className="flex md:hidden justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/avatar.jpg"
            alt="Tereraishe Mahupa"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              border: "2px solid var(--border)",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </motion.div>

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(79,209,197,0.1)",
              border: "1px solid var(--border)",
              color: "var(--teal)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              padding: "6px 14px",
              borderRadius: "20px",
              marginBottom: "1.5rem",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "6px",
                height: "6px",
                background: "var(--teal)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            Tereraishe
            <br />
            <span style={{ color: "var(--teal)" }}>Mahupa</span>
          </h1>

          {/* Role */}
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1rem",
              color: "var(--amber)",
              marginBottom: "1.5rem",
            }}
          >
            $ Informatics &amp; Analytics · ML &amp; Data
          </div>

          {/* Description */}
          <p
            style={{
              color: "var(--text2)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            I build intelligent systems and turn raw data into decisions.
            Currently completing my industrial attachment at{" "}
            <strong style={{ color: "var(--text)" }}>Lynia Finance</strong> —
            designing microfinance infrastructure for Zimbabwe&apos;s informal economy.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "var(--teal)",
                color: "#0A0F1A",
                border: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--teal2)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--teal)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border)",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: "15px",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--teal)";
                (e.currentTarget as HTMLElement).style.color = "var(--teal)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              marginTop: "3rem",
              paddingTop: "3rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "var(--teal)",
                    display: "block",
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--text3)",
                    fontFamily: "'JetBrains Mono', monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Avatar — desktop only */}
        <motion.div
          className="hidden md:flex"
          style={{ justifyContent: "center", alignItems: "center" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div style={{ position: "relative", width: "280px", height: "280px" }}>
            <div
              className="spin-slow"
              style={{
                position: "absolute",
                inset: "-16px",
                borderRadius: "50%",
                border: "1.5px solid rgba(79,209,197,0.25)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-4px",
                  left: "50%",
                  width: "8px",
                  height: "8px",
                  background: "var(--teal)",
                  borderRadius: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div
              className="spin-slow-reverse"
              style={{
                position: "absolute",
                inset: "-32px",
                borderRadius: "50%",
                border: "1px solid rgba(79,209,197,0.1)",
              }}
            />
            <img
              src="/avatar.jpg"
              alt="Tereraishe Mahupa"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "2px solid var(--border)",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
