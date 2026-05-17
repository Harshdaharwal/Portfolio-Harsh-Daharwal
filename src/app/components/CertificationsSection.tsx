"use client";

const certs = [
  { title: "Data Analytics Certificate", org: "Samatrix.io", year: "2024", icon: "📊", color: "#0ea5e9", desc: "Professional certification in data analytics methodologies & real-world application." },
  { title: "Business Analytics Certificate", org: "Samatrix.io", year: "2024", icon: "📈", color: "#0369a1", desc: "Business analytics frameworks, KPI design & data-driven strategic decision making." },
  { title: "Data Visualization Certificate", org: "Samatrix.io", year: "2024", icon: "🎨", color: "#0284c7", desc: "Advanced visualization techniques, Power BI dashboards & storytelling with data." },
  { title: "PG MBA — Data Analytics", org: "LNCT University, Bhopal", year: "2023–25", icon: "🎓", color: "#0ea5e9", desc: "Post-graduate degree in Data Analytics & Visualization — hands-on industry projects." },
  { title: "BSc Computer Application", org: "Raja Shankar University", year: "Completed", icon: "💻", color: "#0369a1", desc: "Undergraduate degree in computer science — programming, databases & software dev." },
  { title: "Business Automation Expert", org: "E-marketing.io", year: "2024", icon: "🤖", color: "#0284c7", desc: "Practical expertise in AppSheet, AppScript, WhatsApp API & end-to-end automation." },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section" style={{ background: "rgba(240,249,255,0.97)" }}>
      <div style={{ maxWidth: 920 }}>
        <div className="section-badge">06 / Certifications</div>
        <h2 className="section-title">
          Credentials & <span className="highlight">Achievements</span>
        </h2>
        <p className="section-subtitle">
          Professional certifications and academic credentials validating my expertise across data & automation.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {certs.map((c) => (
            <div key={c.title} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span
                  style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `${c.color}12`, border: `1px solid ${c.color}25`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
                  }}
                >
                  {c.icon}
                </span>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.68rem", color: c.color,
                    background: `${c.color}10`, border: `1px solid ${c.color}20`,
                    padding: "0.2rem 0.6rem", borderRadius: 999,
                  }}
                >
                  {c.year}
                </span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0c1a2e", marginBottom: "0.3rem", lineHeight: 1.4 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: c.color, marginBottom: "0.5rem" }}>
                {c.org}
              </p>
              <p style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
