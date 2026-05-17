"use client";

const education = [
  {
    degree: "MBA — Data Analytics & Visualization",
    institution: "LNCT University, Bhopal",
    period: "2023 – 2025",
    status: "2023 – 2025",
    color: "#0ea5e9",
    icon: "🎓",
    details: [
      "Specialization in Business Intelligence, Machine Learning & Advanced Analytics",
      "Projects: Power BI dashboards, Python ML models, Supply Chain analytics",
      "Hands-on training in data visualization tools and statistical modeling techniques",
    ],
  },
  {
    degree: "Data Analytics Professional Program",
    institution: "Samatrix.io",
    period: "2023 – 2025",
    status: "2023 – 2025",
    color: "#0369a1",
    icon: "📊",
    details: [
      "Certified in Data Analytics, Business Analytics & Data Visualization",
      "Hands-on projects: EDA, dashboard creation, business case analysis",
      "Industry-aligned curriculum covering Python, Excel, Power BI & SQL",
    ],
  },
  {
    degree: "UG BSc — Computer Application",
    institution: "Raja Shankar University",
    period: "Completed",
    status: "Completed",
    color: "#0284c7",
    icon: "💻",
    details: [
      "Foundation in programming, databases, and computer science fundamentals",
      "Coursework: Data Structures, DBMS, Operating Systems, Web Technologies",
      "Developed strong analytical and problem-solving foundation",
    ],
  },
];

const certs = [
  { title: "Data Analytics Certificate", org: "Samatrix.io", year: "2023–25", color: "#0ea5e9", icon: "📊" },
  { title: "Business Analytics Certificate", org: "Samatrix.io", year: "2023–25", color: "#0369a1", icon: "📈" },
  { title: "Data Visualization Certificate", org: "Samatrix.io", year: "2023–25", color: "#0284c7", icon: "🎨" },
];

export default function EducationSection() {
  return (
    <section id="education" className="section" style={{ background: "rgba(255,255,255,0.95)" }}>
      <div style={{ maxWidth: 860 }}>
        <div className="section-badge">03 / Education</div>
        <h2 className="section-title">
          Academic <span className="highlight">Background</span>
        </h2>
        <p className="section-subtitle">
          Strong academic foundation paired with industry-recognized professional certifications.
        </p>

        {/* Degrees */}
        <div style={{ display: "grid", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {education.map((edu) => (
            <div key={edu.degree} className="card">
              <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                {/* Icon */}
                <span style={{
                  width: 56, height: 56, flexShrink: 0, borderRadius: 14,
                  background: `${edu.color}12`, border: `1px solid ${edu.color}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem",
                }}>
                  {edu.icon}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.35rem" }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0c1a2e" }}>
                      {edu.degree}
                    </h3>
                    <span style={{
                      padding: "0.2rem 0.75rem", borderRadius: 999,
                      background: "rgba(14,165,233,0.1)",
                      border: `1px solid ${edu.color}25`,
                      color: edu.color,
                      fontSize: "0.7rem", fontWeight: 600,
                    }}>
                      {edu.status}
                    </span>
                  </div>
                  <div style={{ fontWeight: 600, color: edu.color, fontSize: "0.875rem", marginBottom: "0.2rem" }}>
                    {edu.institution}
                  </div>
                  <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.72rem", color: "#94a3b8", marginBottom: "1rem" }}>
                    {edu.period}
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {edu.details.map((d, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.6rem", fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6 }}>
                        <span style={{ color: edu.color, flexShrink: 0, marginTop: "0.15rem" }}>▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: "0.72rem", fontWeight: 600, color: "#64748b",
          textTransform: "uppercase", letterSpacing: "0.12em",
          marginBottom: "1rem",
        }}>
          Professional Certifications — Samatrix.io
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {certs.map((c) => (
            <div key={c.title} className="cert-card">
              <span style={{
                width: 40, height: 40, flexShrink: 0, borderRadius: 10,
                background: `${c.color}12`, border: `1px solid ${c.color}25`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
              }}>
                {c.icon}
              </span>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "#0c1a2e", marginBottom: "0.15rem" }}>{c.title}</div>
                <div style={{ fontSize: "0.75rem", color: c.color, fontWeight: 600, marginBottom: "0.1rem" }}>{c.org}</div>
                <div style={{ fontSize: "0.7rem", color: "#94a3b8", fontFamily: "'Fira Code',monospace" }}>{c.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
