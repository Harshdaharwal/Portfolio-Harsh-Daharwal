"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Data Analytics Expert",
  "Business Automation Specialist",
  "Power BI Developer",
  "Python & ML Engineer",
  "AppSheet Developer",
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const cur = roles[roleIdx];
    if (typing) {
      if (text.length < cur.length) {
        t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 55);
      } else {
        t = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setRoleIdx((p) => (p + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [text, typing, roleIdx]);

  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}
    >
      {/* ── Dashboard background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(90deg, rgba(180,215,242,0.97) 0%, rgba(165,205,235,0.94) 38%, rgba(145,192,228,0.68) 62%, rgba(125,178,220,0.22) 84%, rgba(110,165,215,0.04) 100%)"
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 2,
          background: "linear-gradient(180deg, rgba(180,215,242,0.5) 0%, transparent 12%, transparent 88%, rgba(180,215,242,0.5) 100%)"
        }} />
        <Image src="/images/hero_dashboard.png" alt="Analytics Dashboard" fill
          style={{ objectFit: "cover", objectPosition: "right center", opacity: 0.78 }} priority />
      </div>

      {/* ── Content — centered in full width ── */}
      <div style={{
        position: "relative", zIndex: 3,
        width: "100%", maxWidth: 1100,
        margin: "0 auto",
        padding: "6rem 4rem 4rem",
      }}>
        {/* Badge */}
        <div className="section-badge" style={{ marginBottom: "1.5rem" }}>
          🟢 &nbsp;Available for opportunities · Bhopal, MP
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
          fontWeight: 800, color: "#0a1628",
          letterSpacing: "-1px", lineHeight: 1.05, marginBottom: "1rem",
        }}>
          Hey, I&apos;m{" "}
          <span style={{
            background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Harsh Daharwal
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
          color: "#0f2744", marginBottom: "1.5rem", minHeight: "2rem",
          display: "flex", alignItems: "center",
        }}>
          <span style={{ color: "#0ea5e9", marginRight: "0.5rem" }}>&gt;</span>
          {text}
          <span className="cursor-blink" />
        </div>

        {/* Description */}
        <p style={{
          fontSize: "1.05rem", color: "#334155", lineHeight: 1.8,
          maxWidth: 560, marginBottom: "2.5rem",
        }}>
          I turn raw data into decisions and automate businesses with intelligence.
          Specializing in{" "}
          <strong style={{ color: "#0ea5e9" }}>Data Analytics</strong>,{" "}
          <strong style={{ color: "#0369a1" }}>Business Automation</strong>, and{" "}
          <strong style={{ color: "#0284c7" }}>Machine Learning</strong> —{" "}
          with <strong style={{ color: "#0a1628" }}>30+ projects</strong> and 2+ years of real-world impact.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }} className="btn btn-blue">
            View Projects →
          </a>
          <a href="https://www.linkedin.com/in/harsh-daharwal-1ab488291/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn btn-outline">
            Hire Me
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", maxWidth: 400 }}>
          {[
            { n: "2+", l: "Years Exp." },
            { n: "30+", l: "Projects" },
            { n: "MBA", l: "Data Analytics & Visualization" },
          ].map((s) => (
            <div key={s.l} className="stat-mini">
              <div className="stat-mini-num">{s.n}</div>
              <div className="stat-mini-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
