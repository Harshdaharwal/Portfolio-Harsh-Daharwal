"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    cat: "Data & Analytics",
    color: "#0ea5e9",
    icon: "📊",
    skills: [
      { name: "Power BI", level: 92 },
      { name: "Advanced Excel", level: 95 },
      { name: "Data Analytics", level: 95 },
      { name: "MySQL", level: 88 },
      { name: "Data Visualization", level: 90 },
    ],
  },
  {
    cat: "Programming",
    color: "#0369a1",
    icon: "💻",
    skills: [
      { name: "Python", level: 85 },
      { name: "AppScript", level: 88 },
      { name: "SQL", level: 90 },
      { name: "Web Apps", level: 75 },
    ],
  },
  {
    cat: "Business & Automation",
    color: "#0284c7",
    icon: "🤖",
    skills: [
      { name: "Business Automation", level: 93 },
      { name: "AppSheet", level: 90 },
      { name: "WhatsApp API", level: 88 },
      { name: "Business Analysis", level: 92 },
    ],
  },
  {
    cat: "Machine Learning",
    color: "#0ea5e9",
    icon: "🧠",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "HR Analytics", level: 85 },
      { name: "Risk & Fraud Mgmt", level: 82 },
      { name: "Supply Chain Analysis", level: 83 },
    ],
  },
];

const allChips = [
  "Business Automations", "Data Analytics", "Python", "Power BI", "MySQL",
  "Advanced Excel", "Machine Learning", "Business Analysis", "Risk & Fraud Management",
  "HR Analytics", "Supply Chain Analysis", "AppSheet", "AppScript", "Web Apps",
  "WhatsApp Connections", "Data Visualization", "Business Intelligence",
  "Product Research", "Market Analysis", "KPI Dashboards",
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section" style={{ background: "rgba(255,255,255,0.95)" }}>
      <div style={{ maxWidth: 920 }}>
        <div className="section-badge">05 / Skills</div>
        <h2 className="section-title">
          Technical <span className="highlight">Arsenal</span>
        </h2>
        <p className="section-subtitle">
          From raw data to deployed automations — my toolkit across the full analytics & automation stack.
        </p>

        {/* Progress bars grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {skillGroups.map((grp) => (
            <div key={grp.cat} className="card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: `${grp.color}12`, border: `1px solid ${grp.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem",
                  }}
                >
                  {grp.icon}
                </span>
                <span style={{ fontWeight: 700, color: "#0c1a2e", fontSize: "0.9rem" }}>{grp.cat}</span>
              </div>
              {grp.skills.map((sk) => (
                <div key={sk.name} className="skill-row">
                  <div className="skill-label">
                    <span>{sk.name}</span>
                    <span style={{ color: grp.color }}>{sk.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: filled ? `${sk.level}%` : "0%",
                        background: `linear-gradient(90deg, ${grp.color}, ${grp.color}88)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* All chips */}
        <div>
          <h3 style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "1rem" }}>
            All Skills & Tools
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {allChips.map((chip) => (
              <span key={chip} className="skill-chip">{chip}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
