"use client";

const experiences = [
  {
    role: "Business Automation Specialist",
    company: "E-marketing.io",
    period: "2025 – Present · 1 Year",
    type: "Full-time",
    color: "#0ea5e9",
    icon: "🏢",
    points: [
      "Designed end-to-end business automation workflows using AppSheet, AppScript & WhatsApp Connections",
      "Built custom Web Apps & dashboards automating lead tracking, task management, and reporting pipelines",
      "Reduced manual effort by 60%+ for clients through intelligent automation of repetitive processes",
      "Integrated WhatsApp Business API for automated follow-ups, notifications & customer engagement",
      "Delivered 30+ automation & analytics projects spanning sales, HR, supply chain & marketing domains",
    ],
  },
  {
    role: "Data Analytics",
    company: "Digital Solution, Bhopal",
    period: "1 Year · Part-time",
    type: "Part-time",
    color: "#0284c7",
    icon: "📊",
    points: [
      "Worked on real-world data analytics projects — MySQL, Advanced Excel & Python hands-on",
      "Built reports & dashboards for local businesses translating raw data into actionable insights",
      "Developed data cleaning & transformation pipelines handling messy, unstructured datasets",
      "Contributed to data analytics initiatives and supported team deliverables across projects",
    ],
  },
  {
    role: "Product Research Analytics",
    company: "Nanostack.io",
    period: "3 Months · Internship",
    type: "Internship",
    color: "#0369a1",
    icon: "🔬",
    points: [
      "Conducted product research analytics — analyzing user behavior to identify drop-off & optimization opportunities",
      "Built data models in Python and visualized KPIs using Power BI for product performance reporting",
      "Performed competitive analysis & market sizing using Advanced Excel and statistical models",
      "Collaborated with product team to translate data insights into actionable feature roadmap decisions",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section" style={{ background: "rgba(240,249,255,0.95)" }}>
      <div style={{ maxWidth: 860 }}>
        <div className="section-badge">02 / Experience</div>
        <h2 className="section-title">
          Work <span className="highlight">Experience</span>
        </h2>
        <p className="section-subtitle">
          Real-world experience in business automation, data analytics & product research.
        </p>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" style={{ borderColor: exp.color, boxShadow: `0 0 0 4px ${exp.color}18` }} />
              <div className="card">
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                    <span style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: `${exp.color}12`, border: `1px solid ${exp.color}25`,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem",
                    }}>
                      {exp.icon}
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1rem", color: "#0c1a2e", marginBottom: "0.2rem" }}>{exp.role}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <span style={{ fontWeight: 600, color: exp.color, fontSize: "0.875rem" }}>{exp.company}</span>
                        <span style={{
                          padding: "0.15rem 0.6rem", borderRadius: 999,
                          background: `${exp.color}10`, border: `1px solid ${exp.color}25`,
                          color: exp.color, fontSize: "0.7rem", fontWeight: 500,
                        }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.72rem", color: "#64748b",
                    background: "#f0f9ff", border: "1px solid #e0f2fe",
                    padding: "0.3rem 0.75rem", borderRadius: 999,
                  }}>
                    {exp.period}
                  </span>
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {exp.points.map((pt, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: exp.color, flexShrink: 0, marginTop: "0.55rem" }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
