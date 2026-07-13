"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const tools = [
  { name: "Power BI", color: "#f2c811" },
  { name: "Python", color: "#3776ab" },
  { name: "MySQL", color: "#00758f" },
  { name: "AppSheet", color: "#0f9d58" },
  { name: "AppScript", color: "#4285f4" },
  { name: "Excel", color: "#217346" },
  { name: "Node.js", color: "#339933" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#0f172a" },
  { name: "Flask", color: "#000" },
  { name: "WhatsApp API", color: "#25d366" },
];

const experience = [
  { title: "Business Automation Analyst", company: "e-marketing.io", period: "2024 – 2025", type: "Full-Time", accent: "#38bdf8" },
  { title: "Product Analytics Intern", company: "Nanostack.io", period: "2024 · 3 Months", type: "Internship", accent: "#22d3ee" },
  { title: "Data Analyst", company: "Digital Solutions", period: "2024 – 2025", type: "Project", accent: "#818cf8" },
];

export default function LeftSidebar({ open = false, onClose }: { open?: boolean; onClose?: () => void }) {
  const [activeModal, setActiveModal] = useState<"experience" | "education" | "skills" | null>(null);
  const [mounted, setMounted] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio_profile_img");
    if (saved) setProfileImage(saved);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProfileImage(base64);
        localStorage.setItem("portfolio_profile_img", base64);
        window.dispatchEvent(new Event("profileUpdate"));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <aside className={`lp-sidebar${open ? " open" : ""}`} style={{
      width: 260, minWidth: 260,
      position: "fixed", top: 0, left: 0, bottom: 0,
      background: "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)",
      backdropFilter: "blur(20px)",
      borderRight: "1px solid rgba(14,165,233,0.35)",
      boxShadow: "4px 0 32px rgba(0,0,0,0.45)",
      overflowY: "auto",
      zIndex: 100,
      display: "flex",
      flexDirection: "column",
      padding: "1.5rem 1.25rem",
      gap: "0",
    }}>
      {/* ── Mobile close button (hidden on desktop) ── */}
      <button className="lp-sidebar-close" aria-label="Close menu" onClick={onClose}>✕</button>

      {/* ── Avatar & Name ── */}
      <div style={{ textAlign: "center", paddingBottom: "1.25rem", borderBottom: "1px solid rgba(148,163,184,0.18)" }}>
        {/* HD Avatar */}
        <label style={{ cursor: "pointer", position: "relative", display: "block" }}>
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
          <div style={{
            width: 108, height: 108, borderRadius: "50%",
            background: "linear-gradient(135deg,#0ea5e9,#0369a1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 0.9rem",
            boxShadow: "0 10px 28px rgba(14,165,233,0.4), 0 0 0 4px rgba(56,189,248,0.18)",
            border: "3px solid #f1f5f9",
            position: "relative",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => (e.currentTarget.querySelector('.avatar-overlay') as HTMLElement).style.opacity = '1'}
          onMouseLeave={(e) => (e.currentTarget.querySelector('.avatar-overlay') as HTMLElement).style.opacity = '0'}>
            <span style={{ position: "absolute", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "2.1rem", color: "white" }}>HD</span>
            <img src={profileImage || "/profile.jpg"} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            {/* Camera Overlay */}
            <div className="avatar-overlay" style={{
              position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0, transition: "opacity 0.2s", zIndex: 2
            }}>
              <span style={{ fontSize: "1.2rem" }}>📸</span>
            </div>
          </div>
        </label>

        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#f1f5f9", marginBottom: "0.2rem" }}>
          Harsh Daharwal
        </div>
        <div style={{ fontSize: "0.72rem", color: "#38bdf8", fontFamily: "'Fira Code',monospace", fontWeight: 600, marginBottom: "0.75rem" }}>
          Data Analytics &amp; Business Automation
        </div>

        {/* Status */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.35rem",
          background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)",
          borderRadius: 999, padding: "0.2rem 0.6rem", fontSize: "0.62rem", color: "#34d399", fontWeight: 600,
          marginBottom: "0.5rem",
        }}>
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
          Available for Opportunities
        </div>

        {/* Location */}
        <div style={{ fontSize: "0.68rem", color: "#94a3b8", marginBottom: "0.3rem" }}>📍 Bhopal, MP · India</div>
        {/* Phone */}
        <a href="tel:+919516896449"
          style={{ fontSize: "0.68rem", color: "#cbd5e1", textDecoration: "none", display: "block", marginBottom: "0.3rem" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#38bdf8")}
          onMouseLeave={e => (e.currentTarget.style.color = "#cbd5e1")}>
          📞 +91 9516896449
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/harsh-daharwal-1ab488291/" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: "0.65rem", color: "#38bdf8", textDecoration: "none", display: "block", marginBottom: "1rem" }}>
          linkedin.com/in/harsh-daharwal
        </a>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onClose?.(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              flex: 1, textAlign: "center", padding: "0.45rem 0",
              background: "linear-gradient(135deg,#0ea5e9,#0369a1)",
              color: "white", borderRadius: 8, fontSize: "0.72rem", fontWeight: 700,
              textDecoration: "none", display: "block",
            }}>
            Hire Me
          </a>
          <a href="mailto:harshdaharwal20@gmail.com"
            style={{
              flex: 1, textAlign: "center", padding: "0.45rem 0",
              background: "#1e293b",
              border: "1px solid rgba(148,163,184,0.3)", borderRadius: 8,
              fontSize: "0.72rem", fontWeight: 600, color: "#e2e8f0",
              textDecoration: "none", display: "block",
            }}>
            📧 Email
          </a>
        </div>
      </div>

      {/* ── Stats (highlighted, no boxes) ── */}
      <div style={{ padding: "1rem 0", borderBottom: "1px solid rgba(148,163,184,0.18)" }}>
        {([
          { label: "Projects Delivered", value: "30+", action: () => { onClose?.(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); } },
          { label: "Years Experience", value: "2+", action: () => setActiveModal("experience") },
          { label: "Tools Mastered", value: "15+", action: () => setActiveModal("skills") },
        ] as const).map(s => (
          <div key={s.label} onClick={s.action}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "0.45rem 0",
              cursor: "pointer", transition: "transform 0.18s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = "translateX(2px)";
              (el.querySelector('.stat-val') as HTMLElement).style.filter = "drop-shadow(0 0 6px rgba(125,211,252,0.5))";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = "";
              (el.querySelector('.stat-val') as HTMLElement).style.filter = "none";
            }}>
            <span style={{ fontSize: "0.72rem", color: "#cbd5e1", fontWeight: 600 }}>{s.label}</span>
            <span className="stat-val stat-shimmer" style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "1.1rem",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              transition: "filter 0.18s ease",
              textShadow: "0 0 12px rgba(125,211,252,0.55), 0 0 22px rgba(56,189,248,0.35)",
            }}>{s.value}</span>
          </div>
        ))}
      </div>

      {/* ── About (moved up) ── */}
      <div style={{ padding: "1rem 0", borderBottom: "1px solid rgba(148,163,184,0.18)" }}>
        <SectionLabel label="About Me" />
        <p style={{ fontSize: "0.68rem", color: "#cbd5e1", lineHeight: 1.65, margin: 0 }}>
          I turn raw data into clear decisions and repetitive work into intelligent automation —
          2+ years of hands-on delivery across analytics, automation, and machine learning.
        </p>
      </div>

      {/* ── On The Web ── */}
      <div style={{ padding: "1rem 0", borderBottom: "1px solid rgba(148,163,184,0.18)" }}>
        <SectionLabel label="On The Web" />
        {[
          { name: "LinkedIn", url: "https://linkedin.com/in/harsh-daharwal-1ab488291", icon: "💼" },
          { name: "GitHub", url: "https://github.com", icon: "🐙" },
          { name: "Email", url: "mailto:harshdaharwal20@gmail.com", icon: "📧" },
        ].map(l => (
          <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0", fontSize: "0.72rem", color: "#cbd5e1", textDecoration: "none" }}>
            <span>{l.icon}</span>
            <span style={{ color: "#38bdf8" }}>{l.name}</span>
          </a>
        ))}
      </div>

      {/* ── Work Experience ── */}
      <div style={{ padding: "1rem 0", borderBottom: "1px solid rgba(148,163,184,0.18)", cursor: "pointer" }} onClick={() => setActiveModal("experience")}>
        <SectionLabel label="Work Experience" action="View All" />
        <div className="lp-timeline">
          {experience.map(e => (
            <div key={e.company} className="lp-tl-item" style={{ ["--tl" as string]: e.accent }}>
              <span className="lp-tl-dot" />
              <div className="lp-tl-card">
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3 }}>{e.title}</div>
                <div style={{ fontSize: "0.64rem", color: e.accent, fontWeight: 600, marginTop: 2 }}>{e.company}</div>
                <div className="lp-tl-period">{e.period} · {e.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education (NEW) ── */}
      <div style={{ padding: "1rem 0", borderBottom: "1px solid rgba(148,163,184,0.18)", cursor: "pointer" }} onClick={() => setActiveModal("education")}>
        <SectionLabel label="Education" action="Details" />
        <div className="lp-timeline">
          {[
            { icon: "🎓", title: "MBA — Data Analytics & Visualization", school: "LNCT University, Bhopal", period: "2023 – 2025 · Graduated", accent: "#34d399" },
            { icon: "💻", title: "B.Sc. in Computer Applications", school: "Raja Shankar Shah University", period: "2020 – 2023", accent: "#f59e0b" },
          ].map(ed => (
            <div key={ed.title} className="lp-tl-item" style={{ ["--tl" as string]: ed.accent }}>
              <span className="lp-tl-dot" />
              <div className="lp-tl-card">
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.3 }}>{ed.icon} {ed.title}</div>
                <div style={{ fontSize: "0.64rem", color: ed.accent, fontWeight: 600, marginTop: 2 }}>{ed.school}</div>
                <div className="lp-tl-period">{ed.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tools ── */}
      <div style={{ padding: "1rem 0", borderBottom: "1px solid rgba(148,163,184,0.18)", cursor: "pointer" }} onClick={() => setActiveModal("skills")}>
        <SectionLabel label="Tools & Tech" action="View All" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
          {tools.map(t => (
            <span key={t.name} style={{
              fontSize: "0.6rem", padding: "0.18rem 0.5rem", borderRadius: 999,
              background: `${t.color}14`, border: `1px solid ${t.color}30`, color: t.color,
              fontWeight: 600,
            }}>{t.name}</span>
          ))}
        </div>
      </div>

      {/* ════════════ MODALS ════════════ */}
      {mounted && activeModal && createPortal(
        <div onClick={() => setActiveModal(null)} style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 1000,
          background: "rgba(10,22,40,0.55)",
          backdropFilter: "blur(6px)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          animation: "fadeIn 0.2s ease",
          padding: "2rem 1rem 4rem"
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 760, margin: "2rem auto 0", background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", borderRadius: 16, display: "flex", flexDirection: "column", boxShadow: "0 20px 60px rgba(14,165,233,0.25), 0 0 0 1px rgba(14,165,233,0.1)", animation: "slideDown 0.3s ease" }}>
            {/* Header */}
            <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: `3px solid #0ea5e9`, padding: "1.1rem clamp(1rem, 4vw, 2rem)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: `#f0f9ff`, border: `1px solid #bae6fd`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                  {activeModal === "experience" ? "💼" : activeModal === "education" ? "🎓" : "🛠️"}
                </span>
                <div>
                  <div style={{ fontSize: "0.6rem", color: "#0ea5e9", fontFamily: "'Fira Code',monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Harsh Daharwal</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0a1628" }}>
                    {activeModal === "experience" ? "Professional Experience" : activeModal === "education" ? "Education & Certifications" : "Skills & Tech Stack"}
                  </div>
                </div>
              </div>
              <button onClick={() => setActiveModal(null)} style={{ width: 38, height: 38, borderRadius: 10, background: "#f1f5f9", border: "1px solid #e2e8f0", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fee2e2"; (e.currentTarget as HTMLElement).style.color = "#ef4444"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f1f5f9"; (e.currentTarget as HTMLElement).style.color = "#64748b"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "clamp(1rem, 4vw, 2rem)", display: "flex", flexDirection: "column", gap: "1.25rem", flex: 1 }}>
              
              {activeModal === "experience" && (
                <>
                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>Business Automation Analyst</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>e-marketing.io</div>
                      </div>
                      <div style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2024 - 2025</div>
                    </div>
                    <ul style={{ margin: "1rem 0 0 0", paddingLeft: "1.2rem", color: "#475569", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      <li>Engineered highly efficient automated workflows using <strong>Google AppScript</strong>, reducing manual effort by 70%.</li>
                      <li>Built complex, custom-coded web apps integrating <strong>Google Sheets, Gmail API, and WhatsApp API</strong>.</li>
                      <li>Designed full-scale <strong>AppSheet applications</strong> serving as internal ERP and Field Management Systems (FMS).</li>
                      <li>Optimized database structures for high scalability without traditional server costs.</li>
                    </ul>
                  </div>

                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>Product Analytics Intern</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>Nanostack.io · Internship</div>
                      </div>
                      <div style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2024 · 3 Months</div>
                    </div>
                    <ul style={{ margin: "1rem 0 0 0", paddingLeft: "1.2rem", color: "#475569", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      <li>Analyzed product usage data and funnel metrics to identify drop-off points and feature adoption gaps.</li>
                      <li>Built lightweight analytics dashboards to track key product KPIs and surface actionable insights for the founding team.</li>
                      <li>Assisted in designing functional prototypes and logic flows for low-code internal tools.</li>
                      <li>Collaborated with stakeholders to define and refine requirements for SaaS dashboard products.</li>
                    </ul>
                  </div>

                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>Data Analyst</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.85rem" }}>Digital Solutions</div>
                      </div>
                      <div style={{ background: "#e0f2fe", color: "#0369a1", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2024 – 2025</div>
                    </div>
                    <ul style={{ margin: "1rem 0 0 0", paddingLeft: "1.2rem", color: "#475569", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      <li>Designed comprehensive <strong>Power BI dashboards</strong> connecting multiple data sources via Power Query.</li>
                      <li>Developed complex <strong>DAX measures</strong> to visualize KPIs, revenue tracking, and cohort analysis.</li>
                      <li>Wrote advanced <strong>Python scripts</strong> for ETL pipelines and data cleaning automation.</li>
                      <li>Utilized <strong>Machine Learning (XGBoost)</strong> for customer churn prediction models.</li>
                    </ul>
                  </div>
                </>
              )}

              {activeModal === "education" && (
                <>
                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>MBA in Data Analytics &amp; Visualization</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>LNCT University, Bhopal</div>
                      </div>
                      <div style={{ background: "#dcfce7", color: "#166534", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2023 - 2025</div>
                    </div>
                    <p style={{ margin: "1rem 0 0 0", color: "#475569", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      Specialized in transforming raw business data into strategic decisions. Deep focus on predictive modeling, advanced statistics, and business intelligence.
                    </p>
                  </div>

                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>Data Analytics Certification</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>Samatrix.io, Bhopal</div>
                      </div>
                      <div style={{ background: "#dcfce7", color: "#166534", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2023 - 2025</div>
                    </div>
                  </div>

                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>B.Sc. in Computer Applications</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>Raja Shankar Shah University</div>
                      </div>
                      <div style={{ background: "#dcfce7", color: "#166534", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2020 - 2023</div>
                    </div>
                  </div>

                  <div style={{ padding: "clamp(1rem, 3.5vw, 1.5rem)", borderRadius: 14, border: "1px solid #e2e8f0", background: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontSize: "1.2rem", color: "#0f172a", margin: "0 0 0.25rem 0" }}>DCA — Diploma in Computer Applications</h3>
                        <div style={{ color: "#0ea5e9", fontWeight: 600, fontSize: "0.9rem" }}>Makhanlal Chaturvedi University (MCU), Bhopal</div>
                      </div>
                      <div style={{ background: "#dcfce7", color: "#166534", padding: "0.3rem 0.8rem", borderRadius: 999, fontSize: "0.75rem", fontWeight: 600 }}>2021 - 2022</div>
                    </div>
                  </div>
                </>
              )}

              {activeModal === "skills" && (
                <>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>📊 Data &amp; Analytics</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["Power BI", "DAX", "SQL / MySQL", "Python (Pandas/NumPy)", "Excel (Advanced)"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#e0f2fe", color: "#0369a1", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#059669", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>⚙️ Automation &amp; No-Code</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["Google AppScript", "AppSheet", "WhatsApp API", "Make.com / Zapier", "Webhooks"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#dcfce7", color: "#166534", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>🤖 Machine Learning &amp; AI</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["Scikit-Learn", "XGBoost", "Isolation Forest (Anomaly)", "Prophet / ARIMA", "Flask API"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#ede9fe", color: "#5b21b6", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>📑 Google Sheets &amp; Excel Projects</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["Google Sheets (Advanced)", "Excel Dashboards", "Pivot Tables", "VLOOKUP / XLOOKUP", "Power Query", "ARRAYFORMULA", "QUERY()", "Macros / VBA"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#dcfce7", color: "#15803d", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#ea580c", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>📈 Business Analytics</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["KPI Reporting", "Sales & HR Analytics", "Revenue Tracking", "Cohort Analysis", "Funnel Analysis", "Forecasting", "Market Research", "Strategic Insights"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#ffedd5", color: "#9a3412", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#db2777", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>💬 AI Chatbots &amp; Voice Agents</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["WhatsApp AI Chatbot", "Telegram Bot", "OpenAI / GPT API", "LangChain", "RAG Pipelines", "ElevenLabs Voice", "Twilio Voice Agent", "Vapi / Retell AI", "Conversational Flows"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#fce7f3", color: "#9d174d", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: "1.2rem", borderRadius: 12, border: "1px solid #e2e8f0", background: "#f8fafc", gridColumn: "1 / -1" }}>
                      <h4 style={{ fontSize: "0.85rem", color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 1rem 0" }}>🌐 Web App Development</h4>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {["Node.js", "Express.js", "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "REST APIs", "HTML5 / CSS3", "Tailwind CSS", "MongoDB", "MySQL", "Git / GitHub", "Vercel Deploy", "Responsive UI"].map(t => (
                          <span key={t} style={{ fontSize: "0.75rem", padding: "0.3rem 0.6rem", background: "#dbeafe", color: "#1e40af", borderRadius: 6, fontWeight: 500 }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>, document.body
      )}
    </aside>
  );
}

function SectionLabel({ label, action }: { label: string; action?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.7rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
        <span style={{
          width: 4, height: 16, borderRadius: 3,
          background: "linear-gradient(180deg,#7dd3fc,#0369a1)",
          boxShadow: "0 0 10px rgba(56,189,248,0.55)",
          flexShrink: 0,
        }} />
        <span style={{
          fontSize: "0.72rem",
          fontWeight: 800,
          background: "linear-gradient(135deg,#f1f5f9 0%,#7dd3fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          fontFamily: "'Space Grotesk',sans-serif",
        }}>{label}</span>
      </div>
      {action && (
        <span style={{
          fontSize: "0.6rem",
          color: "#38bdf8",
          fontWeight: 700,
          background: "rgba(56,189,248,0.12)",
          border: "1px solid rgba(56,189,248,0.3)",
          padding: "0.18rem 0.5rem",
          borderRadius: 999,
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}>{action} →</span>
      )}
    </div>
  );
}
