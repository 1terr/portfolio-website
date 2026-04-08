"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";

const contactLinks = [
  {
    icon: "@",
    label: "Email",
    val: "tereraishe@lyniafinance.com",
    href: "mailto:tereraishe@lyniafinance.com",
    arrow: "→",
  },
  {
    icon: "GH",
    label: "GitHub",
    val: "github.com/tereraishe",
    href: "https://github.com",
    arrow: "→",
  },
  {
    icon: "in",
    label: "LinkedIn",
    val: "linkedin.com/in/tereraishe",
    href: "https://linkedin.com",
    arrow: "→",
  },
  {
    icon: "PDF",
    label: "Resume",
    val: "Download CV",
    href: "/cv.pdf",
    arrow: "↓",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire up to Resend / Formspree / EmailJS
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <FadeIn>
        <SectionHeader eyebrow="// 05. Contact" title="Get in Touch" />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left: links */}
        <FadeIn delay={0.1}>
          <p style={{ color: "var(--text2)", marginBottom: "0.5rem", lineHeight: 1.8 }}>
            Whether you&apos;re a recruiter, a potential collaborator, or curious about what we&apos;re
            building at Lynia Finance — I&apos;d love to connect. Currently based in Zimbabwe, open to
            remote opportunities.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                  textDecoration: "none",
                  color: "var(--text)",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(79,209,197,0.4)";
                  el.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(79,209,197,0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "13px",
                    color: "var(--teal)",
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text3)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {link.label}
                  </div>
                  <div style={{ fontSize: "15px" }}>{link.val}</div>
                </div>
                <span style={{ color: "var(--text3)", fontSize: "12px" }}>{link.arrow}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Right: form */}
        <FadeIn delay={0.2}>
          <div
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: "1.15rem",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Send a Message
            </h3>

            {sent ? (
              <div
                style={{
                  background: "rgba(79,209,197,0.1)",
                  border: "1px solid rgba(79,209,197,0.3)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  textAlign: "center",
                  color: "var(--teal)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "14px",
                }}
              >
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {(["name", "email"] as const).map((field) => (
                  <div key={field} style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "13px",
                        color: "var(--text2)",
                        marginBottom: "6px",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      required
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      placeholder={field === "name" ? "Your full name" : "your@email.com"}
                      style={{
                        width: "100%",
                        background: "var(--bg2)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        color: "var(--text)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        outline: "none",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) =>
                        ((e.target as HTMLInputElement).style.borderColor = "var(--teal)")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLInputElement).style.borderColor = "var(--border)")
                      }
                    />
                  </div>
                ))}

                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: "var(--text2)",
                      marginBottom: "6px",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What would you like to discuss?"
                    rows={4}
                    style={{
                      width: "100%",
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      color: "var(--text)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "15px",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLTextAreaElement).style.borderColor = "var(--teal)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    background: "var(--teal)",
                    color: "#0A0F1A",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    fontSize: "15px",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "background 0.2s, transform 0.15s",
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
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
