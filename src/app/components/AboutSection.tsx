"use client";

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ background: "rgba(255,255,255,0.92)" }}>
      <div style={{ maxWidth: 860 }}>
        <div className="section-badge">01 / About Me</div>
        <h2 className="section-title">
          Turning Data Into <span className="highlight">Decisions</span>
        </h2>
        <p className="section-subtitle">
          Passionate about making data work — and ensuring what it reveals actually drives real change.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
          {/* Left - Bio */}
          <div>
            <div className="card" style={{ marginBottom: "1.25rem" }}>
              <p style={{ color: "#475569", lineHeight: 1.9, fontSize: "0.95rem" }}>
                Hey! I&apos;m <strong style={{ color: "#0c1a2e" }}>Harsh Daharwal</strong>, a Data Analytics and Business Automation specialist based in{" "}
                <strong style={{ color: "#0ea5e9" }}>Bhopal, Madhya Pradesh</strong>. I transform raw data into strategic insights and build automation systems that eliminate manual work.
              </p>
            </div>
            <div className="card" style={{ marginBottom: "1.25rem" }}>
              <p style={{ color: "#475569", lineHeight: 1.9, fontSize: "0.95rem" }}>
                Currently at <strong style={{ color: "#0369a1" }}>E-marketing.io</strong> — designing end-to-end business automation with AppSheet, AppScript, WhatsApp API, and Web Apps. Previously interned at <strong style={{ color: "#0369a1" }}>Nanostack.io</strong> in Product Research Analytics.
              </p>
            </div>
            <div className="card">
              <p style={{ color: "#475569", lineHeight: 1.9, fontSize: "0.95rem" }}>
                Pursuing <strong style={{ color: "#0c1a2e" }}>PG MBA in Data Analytics & Visualization</strong> from LNCT University Bhopal (2023–2025). Certified by <strong style={{ color: "#0369a1" }}>Samatrix.io</strong> in Data Analytics, Business Analytics & Data Visualization.
              </p>
            </div>
          </div>

          {/* Right - What I do */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { e: "📊", t: "Data Analytics", d: "End-to-end analytics — EDA, dashboards, KPI tracking, Power BI reports for strategic decisions.", c: "#0ea5e9" },
              { e: "🤖", t: "Business Automation", d: "AppSheet, AppScript, WhatsApp Connections, Web Apps — eliminating manual workflows completely.", c: "#0369a1" },
              { e: "🧠", t: "Machine Learning", d: "HR Analytics, Risk & Fraud Detection, Supply Chain forecasting using Python & scikit-learn.", c: "#0284c7" },
              { e: "📈", t: "Business Intelligence", d: "Power BI, Advanced Excel, MySQL — executive-ready reports and data-driven strategy.", c: "#0ea5e9" },
            ].map((item) => (
              <div
                key={item.t}
                className="card"
                style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.25rem" }}
              >
                <span
                  style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: `${item.c}15`, border: `1px solid ${item.c}30`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                  }}
                >
                  {item.e}
                </span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0c1a2e", marginBottom: "0.2rem" }}>{item.t}</div>
                  <div style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
