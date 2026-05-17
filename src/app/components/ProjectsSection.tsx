"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1, title: "Task Management Web App", category: "Business Automation",
    thumb: "/images/taskapp.png",   // card thumbnail
    fullImg: "/images/task_full.png", // full Behance-style image
    bgColor: "linear-gradient(135deg,#0ea5e9,#0369a1)",
    color: "#0ea5e9", highlight: "Task Delegation + FMS", icon: "✅",
    shortDesc: "Team task delegation, smart checklists & FMS integration.",
    role: "Lead Developer", duration: "3 Months",
    overview: "A comprehensive Task Management System on AppSheet + AppScript + Web Apps for businesses managing field teams. Eliminates manual follow-ups and replaces scattered WhatsApp threads with centralized, trackable workflows.",
    problem: "Teams managed tasks via WhatsApp causing missed deadlines, no accountability, zero field visibility.",
    solution: "Built a no-code/low-code platform with automated reminders, real-time dashboards, FMS field tracking, and daily auto-generated PDF performance reports.",
    features: [
      { icon: "👥", title: "Team Task Delegation", desc: "Assign tasks with deadlines, priority levels & automated WhatsApp/email reminders." },
      { icon: "☑️", title: "Smart Checklists", desc: "Dynamic checklist builder with real-time completion tracking & dependency chains." },
      { icon: "🗂️", title: "FMS Integration", desc: "Field agent activity, GPS location & job completion tracking in real time." },
      { icon: "📊", title: "Auto Reports", desc: "Daily/weekly PDF reports auto-sent with completion rates & team performance." },
      { icon: "📈", title: "Progress Dashboards", desc: "Real-time project health, overdue alerts & team productivity scores." },
    ],
    impact: [{ metric: "70%", label: "Overhead reduced" }, { metric: "3x", label: "Faster completion" }, { metric: "100%", label: "Report automation" }],
    tags: ["Web App", "AppScript", "AppSheet", "FMS"],
  },
  {
    id: 2, title: "Sales & HR Analytics Dashboard", category: "Data Analytics",
    thumb: "/images/dashboard_colored.png",
    fullImg: "/images/dash_full.png",
    bgColor: "linear-gradient(135deg,#1e3a5f,#0ea5e9)",
    color: "#0369a1", highlight: "Executive Reporting", icon: "📊",
    shortDesc: "Power BI suite for sales pipeline, HR attrition & KPI tracking.",
    role: "Data Analyst", duration: "2 Months",
    overview: "End-to-end BI solution in Power BI + Python + MySQL giving executives a single-pane view of Sales, HR & Operations. Features ML-based attrition prediction and automated Monday executive reports.",
    problem: "Management spent 15+ hours/week manually compiling data from 5 spreadsheets with no real-time visibility.",
    solution: "Unified BI platform connecting MySQL to Power BI with Python ML attrition model, automated ETL pipelines, and scheduled PDF report delivery.",
    features: [
      { icon: "💰", title: "Sales Pipeline Analysis", desc: "Track deals by stage, revenue forecast, win/loss rates & regional rep performance." },
      { icon: "👔", title: "HR Attrition Prediction", desc: "Python ML model predicting attrition risk with actionable retention recommendations." },
      { icon: "🎯", title: "KPI Tracking", desc: "Custom cards for 40+ metrics — CSAT, NPS, productivity & goal achievement." },
      { icon: "🌍", title: "Workforce Analytics", desc: "Department headcount, salary bands, performance heatmaps & attendance patterns." },
      { icon: "📋", title: "Executive Reports", desc: "Auto-generated PDF/PPT summaries every Monday with highlights & anomaly flags." },
    ],
    impact: [{ metric: "15+ hrs", label: "Saved per week" }, { metric: "40+", label: "KPIs tracked" }, { metric: "5 src", label: "Data unified" }],
    tags: ["Power BI", "Python", "MySQL", "DAX"],
  },
  {
    id: 3, title: "AppSheet Business Management App", category: "No-Code Development",
    thumb: "/images/appsheet.png",
    fullImg: "/images/appsheet_full.png",
    bgColor: "linear-gradient(135deg,#0284c7,#38bdf8)",
    color: "#0284c7", highlight: "End-to-End Automation", icon: "📱",
    shortDesc: "No-code ERP replacement with inventory, employee mgmt & approvals.",
    role: "AppSheet Developer", duration: "6 Weeks",
    overview: "Fully functional Business Management App on AppSheet + Google Sheets replacing traditional ERP for SMEs — zero development cost, maximum functionality covering inventory, HR, approvals & dynamic reporting.",
    problem: "SME client used 3 separate tools (Excel, WhatsApp, paper forms) causing data inconsistency and approval delays.",
    solution: "Built a unified AppSheet app with Google Sheets as database, AppScript automation, and role-based access for all departments.",
    features: [
      { icon: "📦", title: "Inventory Tracking", desc: "Real-time stock levels, low-stock alerts, reorder triggers & supplier integration." },
      { icon: "🧑‍💼", title: "Employee Directory", desc: "Profiles with role management, document storage & HR workflow forms." },
      { icon: "✔️", title: "Approval Workflows", desc: "Multi-level chains for leave, expenses & purchase orders — fully automated." },
      { icon: "📑", title: "Dynamic Reporting", desc: "Auto-generated Google Sheets reports with pivot charts & email delivery." },
      { icon: "🔔", title: "Smart Notifications", desc: "Context-aware push & email alerts for pending actions & deadlines." },
    ],
    impact: [{ metric: "3", label: "Tools eliminated" }, { metric: "80%", label: "Less manual entry" }, { metric: "₹0", label: "Dev cost" }],
    tags: ["AppSheet", "AppScript", "Google Sheets"],
  },
  {
    id: 4, title: "WhatsApp Business Automation", category: "Communication Automation",
    thumb: "/images/whatsapp.png",
    fullImg: "/images/whatsapp.png",
    bgColor: "linear-gradient(135deg,#059669,#34d399)",
    color: "#059669", highlight: "60%+ Effort Reduction", icon: "💬",
    shortDesc: "Automated lead follow-ups, broadcast campaigns & conversation analytics.",
    role: "Automation Engineer", duration: "2 Months",
    overview: "Enterprise-grade WhatsApp automation integrating Business API + AppScript automating the full customer lifecycle — first contact to conversion and retention — for business clients.",
    problem: "Sales team spent 4+ hours/day manually following up on leads via WhatsApp with no tracking or outcome analytics.",
    solution: "Integrated WhatsApp Business API with Google Sheets CRM via AppScript to automate follow-ups, broadcast campaigns, and build a real-time analytics dashboard.",
    features: [
      { icon: "🤖", title: "Automated Follow-ups", desc: "CRM-triggered follow-up sequences sending personalized messages at optimal times." },
      { icon: "📢", title: "Broadcast Campaigns", desc: "Segment-based messaging to thousands with delivery & read-rate tracking." },
      { icon: "🗣️", title: "Voice & Text Delegation", desc: "Task assignment via WhatsApp — members receive, acknowledge & update in chat." },
      { icon: "📊", title: "Conversation Analytics", desc: "Response rates, volumes, campaign ROI & agent performance dashboard." },
      { icon: "🔗", title: "CRM Integration", desc: "Bi-directional sync — every conversation auto-logged & categorized." },
    ],
    impact: [{ metric: "80%", label: "Automated" }, { metric: "4 hrs", label: "Daily saved" }, { metric: "60%+", label: "Effort cut" }],
    tags: ["WhatsApp API", "AppScript", "CRM"],
  },
  {
    id: 5, title: "Risk & Fraud Detection System", category: "Machine Learning",
    thumb: "/images/fraud.png",
    fullImg: "/images/fraud_full.png",
    bgColor: "linear-gradient(135deg,#7c3aed,#c4b5fd)",
    color: "#7c3aed", highlight: "94% Accuracy", icon: "🔍",
    shortDesc: "ML fraud detection with Isolation Forest + XGBoost, real-time alerts.",
    role: "ML Engineer", duration: "2 Months",
    overview: "Python ML system analyzing financial transactions for fraud using Isolation Forest (anomaly) + XGBoost (classification) ensemble trained on 500K+ records, with REST API scoring and Power BI dashboard.",
    problem: "Compliance team manually reviewed flagged transactions with 6-8 hour delays, causing financial losses.",
    solution: "Two-layer ML pipeline: Isolation Forest for unsupervised anomaly detection + XGBoost binary classifier with Flask REST API integration and Power BI alert dashboard.",
    features: [
      { icon: "🧠", title: "Anomaly Detection", desc: "Isolation Forest flags statistical anomalies with configurable sensitivity thresholds." },
      { icon: "🎯", title: "Pattern Recognition", desc: "XGBoost on 500K+ records identifies 15+ fraud typologies at 94% accuracy." },
      { icon: "⚡", title: "Real-time Scoring", desc: "Sub-100ms risk scoring via Flask REST API in existing payment gateway." },
      { icon: "📊", title: "Risk Dashboard", desc: "Power BI: fraud trends, flagged transactions, model performance metrics." },
      { icon: "🔔", title: "Alert System", desc: "Automated high-priority alerts to compliance team on threshold breach." },
    ],
    impact: [{ metric: "94%", label: "Detection accuracy" }, { metric: "500K+", label: "Records trained" }, { metric: "<100ms", label: "Scoring speed" }],
    tags: ["Python", "XGBoost", "Power BI", "Flask"],
  },
  {
    id: 6, title: "Supply Chain Analytics Platform", category: "Predictive Analytics",
    thumb: null,
    fullImg: null,
    bgColor: "linear-gradient(135deg,#d97706,#fbbf24)",
    color: "#d97706", highlight: "Demand Forecasting", icon: "🚚",
    shortDesc: "Demand forecasting, inventory optimization & supplier scorecards.",
    role: "Data Analyst", duration: "6 Weeks",
    overview: "Supply Chain Intelligence platform combining Python ARIMA + Prophet forecasting with Advanced Excel dashboards to optimize inventory, predict demand across 200+ SKUs and automate supplier scoring.",
    problem: "15% of SKUs had monthly stockouts and overstock holding cost issues due to no forecasting system.",
    solution: "ARIMA + Prophet ensemble forecasting with EOQ optimization, automated supplier scoring, Excel + Power BI reporting layer with alert emails.",
    features: [
      { icon: "📈", title: "Demand Forecasting", desc: "ARIMA & Prophet ensemble with 88% accuracy across 200+ SKUs, seasonal adjustments." },
      { icon: "📦", title: "Inventory Optimization", desc: "EOQ automation with dynamic reorder points — 25% reduction in holding costs." },
      { icon: "🏭", title: "Supplier Scorecard", desc: "Automated quality, delivery & cost scoring with comparison matrices." },
      { icon: "⚠️", title: "Risk Alerts", desc: "Proactive alerts for stock-out risks, lead delays & demand spikes." },
      { icon: "📊", title: "Analytics Reports", desc: "Executive supply chain health reports with trend analysis & scenario planning." },
    ],
    impact: [{ metric: "35%", label: "Stockouts reduced" }, { metric: "88%", label: "Forecast accuracy" }, { metric: "25%", label: "Cost saved" }],
    tags: ["Python", "Prophet", "Advanced Excel"],
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="projects" className="section" style={{ background: "rgba(240,249,255,0.94)", maxWidth: "none", padding: "5rem 4rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto", width: "100%" }}>
        <div className="section-badge">04 / Projects</div>
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        <p className="section-subtitle">Click any card to view the full project showcase — Behance style.</p>

        {/* ── Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => (
            <div key={p.id} className="project-card" style={{ cursor: "pointer", overflow: "hidden", padding: 0, transition: "transform 0.25s, box-shadow 0.25s" }}
              onClick={() => setSelected(p)}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(14,165,233,0.18)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
            >
              {/* Thumbnail */}
              <div style={{ height: 170, position: "relative", background: p.bgColor, overflow: "hidden" }}>
                {p.thumb ? (
                  <Image src={p.thumb} alt={p.title} fill sizes="340px" style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.88 }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", opacity: 0.4 }}>{p.icon}</div>
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />
                {/* Hover overlay */}
                <div className="card-hover-overlay" style={{ position: "absolute", inset: 0, background: "rgba(14,165,233,0.15)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}>
                  <span style={{ background: "rgba(255,255,255,0.95)", color: "#0ea5e9", fontWeight: 700, fontSize: "0.82rem", padding: "0.5rem 1.1rem", borderRadius: 999 }}>
                    🔍 View Project
                  </span>
                </div>
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.875rem" }}>
                  <span style={{ fontSize: "0.62rem", background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", color: "white", padding: "0.18rem 0.55rem", borderRadius: 999, fontFamily: "'Fira Code',monospace", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 600 }}>{p.category}</span>
                </div>
              </div>

              <div style={{ padding: "0.875rem 1rem 1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "#0c1a2e", lineHeight: 1.3 }}>{p.title}</h3>
                  <span style={{ fontSize: "0.58rem", padding: "0.15rem 0.5rem", borderRadius: 999, background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20`, whiteSpace: "nowrap", flexShrink: 0, fontWeight: 600, fontFamily: "'Fira Code',monospace" }}>▸ {p.highlight}</span>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.55, marginBottom: "0.75rem" }}>{p.shortDesc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.28rem" }}>
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: "2rem", fontFamily: "'Fira Code',monospace", fontSize: "0.75rem", color: "#94a3b8" }}>+ 24 more client & internship projects delivered</p>
      </div>

      {/* ══ CENTERED PDF MODAL (compact) ══ */}
      {selected && (
        <>
          {/* Backdrop */}
          <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(12,26,46,0.45)", backdropFilter: "blur(8px)", zIndex: 400, animation: "fadeIn 0.2s ease" }} />

          {/* Modal box */}
          <div style={{
            position: "fixed",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 401,
            width: "min(660px, 94vw)",
            maxHeight: "85vh",
            overflowY: "auto",
            background: "white",
            borderRadius: 18,
            boxShadow: "0 32px 80px rgba(14,165,233,0.22), 0 0 0 1px rgba(14,165,233,0.1)",
            animation: "popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            display: "flex", flexDirection: "column",
          }}>
            {/* ── Sticky header with close ── */}
            <div style={{
              position: "sticky", top: 0, zIndex: 10,
              background: "white",
              borderBottom: `3px solid ${selected.color}`,
              padding: "0.75rem 1rem 0.75rem 1.1rem",
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem",
              borderRadius: "18px 18px 0 0",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", minWidth: 0 }}>
                <span style={{ width: 32, height: 32, borderRadius: 8, background: `${selected.color}12`, border: `1px solid ${selected.color}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.95rem", flexShrink: 0 }}>{selected.icon}</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.55rem", color: selected.color, fontFamily: "'Fira Code',monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{selected.category}</div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#0c1a2e", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{selected.title}</div>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                style={{ width: 30, height: 30, borderRadius: 8, background: "#f1f5f9", border: "1px solid #e2e8f0", cursor: "pointer", fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", flexShrink: 0 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fee2e2"; (e.currentTarget as HTMLElement).style.color = "#ef4444"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f1f5f9"; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
              >✕</button>
            </div>

            {/* ── Project image — full height, no crop ── */}
            {selected.fullImg ? (
              <div style={{ width: "100%", background: "#f8fafc", borderBottom: `1px solid ${selected.color}15`, flexShrink: 0 }}>
                <Image
                  src={selected.fullImg}
                  alt={selected.title}
                  width={660}
                  height={500}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>
            ) : (
              <div style={{ height: 110, background: selected.bgColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3.5rem", flexShrink: 0 }}>{selected.icon}</div>
            )}

            {/* ── Body ── */}
            <div style={{ padding: "1rem 1.1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

              {/* Impact + Meta */}
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", alignItems: "stretch" }}>
                {selected.impact.map((imp, i) => (
                  <div key={i} style={{ flex: 1, minWidth: 80, textAlign: "center", padding: "0.6rem 0.4rem", borderRadius: 9, background: `${selected.color}07`, border: `1px solid ${selected.color}15` }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: selected.color }}>{imp.metric}</div>
                    <div style={{ fontSize: "0.6rem", color: "#94a3b8", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>{imp.label}</div>
                  </div>
                ))}
                <div style={{ flex: 1, minWidth: 120, padding: "0.6rem 0.75rem", borderRadius: 9, background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: "0.2rem", justifyContent: "center" }}>
                  <div style={{ fontSize: "0.7rem", color: "#64748b" }}>🧑‍💻 <b style={{ color: "#0c1a2e" }}>{selected.role}</b></div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b" }}>⏱️ <b style={{ color: "#0c1a2e" }}>{selected.duration}</b></div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <PHead color={selected.color} label="Overview" />
                <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.72, margin: 0 }}>{selected.overview}</p>
              </div>

              {/* Problem & Solution */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                <div style={{ padding: "0.75rem", borderRadius: 10, background: "#fff7ed", border: "1px solid #fed7aa" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#d97706", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.35rem" }}>🔴 Problem</div>
                  <p style={{ fontSize: "0.76rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>{selected.problem}</p>
                </div>
                <div style={{ padding: "0.75rem", borderRadius: 10, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.35rem" }}>✅ Solution</div>
                  <p style={{ fontSize: "0.76rem", color: "#64748b", lineHeight: 1.6, margin: 0 }}>{selected.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <PHead color={selected.color} label="Key Features" />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  {selected.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.5rem", padding: "0.65rem 0.7rem", borderRadius: 9, background: `${selected.color}05`, border: `1px solid ${selected.color}12` }}>
                      <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>{f.icon}</span>
                      <div>
                        <div style={{ fontSize: "0.73rem", fontWeight: 700, color: "#0c1a2e", marginBottom: "0.1rem" }}>{f.title}</div>
                        <div style={{ fontSize: "0.68rem", color: "#64748b", lineHeight: 1.45 }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", padding: "0.75rem", borderRadius: 9, background: `${selected.color}06`, border: `1px solid ${selected.color}14`, marginBottom: "0.25rem" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 700, color: selected.color, textTransform: "uppercase", letterSpacing: "0.08em", width: "100%", marginBottom: "0.25rem" }}>🛠 Tech Stack</span>
                {selected.tags.map(t => (
                  <span key={t} style={{ fontSize: "0.7rem", padding: "0.2rem 0.6rem", borderRadius: 999, background: `${selected.color}10`, border: `1px solid ${selected.color}22`, color: selected.color, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes popIn { from{opacity:0;transform:translate(-50%,-47%) scale(0.92)} to{opacity:1;transform:translate(-50%,-50%) scale(1)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .project-card:hover .card-hover-overlay { opacity: 1 !important; }
      ` }} />
    </section>
  );
}

function PHead({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginBottom: "0.55rem" }}>
      <div style={{ width: 3, height: 14, borderRadius: 2, background: color, flexShrink: 0 }} />
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "#0c1a2e", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</span>
    </div>
  );
}


