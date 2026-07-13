"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/* ─── All project data ─── */
const projects = [
  {
    id: 1, title: "Task Management Web App", category: "Business Automation",
    thumb: "/images/fms_full.png", fullImg: "/images/fms_full.png",
    bgColor: "linear-gradient(135deg,#0ea5e9,#0369a1)", color: "#0ea5e9",
    highlight: "Task Delegation + FMS", icon: "✅",
    shortDesc: "Team task delegation, smart checklists & FMS integration.",
    role: "Lead Developer", duration: "3 Months",
    overview: "A comprehensive Task Management System on AppSheet + AppScript + Web Apps for businesses managing field teams. Eliminates manual follow-ups and replaces scattered WhatsApp threads with centralized, trackable workflows.",
    problem: "Teams managed tasks via WhatsApp causing missed deadlines, no accountability, zero field visibility.",
    solution: "Built a no-code/low-code platform with automated reminders, real-time dashboards, FMS field tracking, and daily auto-generated PDF performance reports.",
    features: [
      { icon: "👥", title: "Team Task Delegation", desc: "Assign tasks with deadlines, priority levels & automated reminders." },
      { icon: "☑️", title: "Smart Checklists", desc: "Dynamic checklist builder with real-time completion tracking." },
      { icon: "🗂️", title: "FMS Integration", desc: "Field agent GPS tracking & job completion in real time." },
      { icon: "📊", title: "Auto Reports", desc: "Daily/weekly PDF reports auto-sent with performance data." },
    ],
    impact: [{ metric: "70%", label: "Overhead reduced" }, { metric: "3x", label: "Faster completion" }, { metric: "100%", label: "Report automation" }],
    tags: ["Web App", "AppScript", "AppSheet", "FMS"],
  },
  {
    id: 2, title: "Sales & HR Analytics Dashboard", category: "Data Analytics",
    thumb: "/images/dashboard_colored.png", fullImg: "/images/dash_full.png",
    bgColor: "linear-gradient(135deg,#1e3a5f,#0ea5e9)", color: "#0369a1",
    highlight: "Executive Reporting", icon: "📊",
    shortDesc: "Power BI suite for sales pipeline, HR attrition & KPI tracking.",
    role: "Data Analyst", duration: "2 Months",
    overview: "End-to-end BI solution in Power BI + Python + MySQL giving executives a single-pane view of Sales, HR & Operations. Features ML-based attrition prediction and automated Monday executive reports.",
    problem: "Management spent 15+ hours/week manually compiling data from 5 spreadsheets with no real-time visibility.",
    solution: "Unified BI platform connecting MySQL to Power BI with Python ML attrition model, automated ETL pipelines, and scheduled PDF report delivery.",
    features: [
      { icon: "💰", title: "Sales Pipeline Analysis", desc: "Track deals by stage, revenue forecast, win/loss rates & regional performance." },
      { icon: "👔", title: "HR Attrition Prediction", desc: "Python ML model predicting attrition risk with retention recommendations." },
      { icon: "🎯", title: "KPI Tracking", desc: "Custom cards for 40+ metrics — CSAT, NPS, productivity & goal achievement." },
      { icon: "📋", title: "Executive Reports", desc: "Auto-generated PDF/PPT summaries every Monday with anomaly flags." },
    ],
    impact: [{ metric: "15+ hrs", label: "Saved per week" }, { metric: "40+", label: "KPIs tracked" }, { metric: "5 src", label: "Data unified" }],
    tags: ["Power BI", "Python", "MySQL", "DAX"],
  },
  {
    id: 3, title: "AppSheet Business Management App", category: "No-Code Development",
    thumb: "/images/appsheet.png", fullImg: "/images/appsheet_full.png",
    bgColor: "linear-gradient(135deg,#0284c7,#38bdf8)", color: "#0284c7",
    highlight: "End-to-End Automation", icon: "📱",
    shortDesc: "No-code ERP replacement with inventory, employee mgmt & approvals.",
    role: "AppSheet Developer", duration: "6 Weeks",
    overview: "Fully functional Business Management App on AppSheet + Google Sheets replacing traditional ERP for SMEs — zero development cost, maximum functionality covering inventory, HR, approvals & dynamic reporting.",
    problem: "SME client used 3 separate tools (Excel, WhatsApp, paper forms) causing data inconsistency and approval delays.",
    solution: "Built a unified AppSheet app with Google Sheets as database, AppScript automation, and role-based access for all departments.",
    features: [
      { icon: "📦", title: "Inventory Tracking", desc: "Real-time stock levels, low-stock alerts, reorder triggers & supplier integration." },
      { icon: "🧑‍💼", title: "Employee Directory", desc: "Profiles with role management, document storage & HR workflow forms." },
      { icon: "✔️", title: "Approval Workflows", desc: "Multi-level chains for leave, expenses & purchase orders." },
      { icon: "📑", title: "Dynamic Reporting", desc: "Auto-generated Google Sheets reports with pivot charts & email delivery." },
    ],
    impact: [{ metric: "3", label: "Tools eliminated" }, { metric: "80%", label: "Less manual entry" }, { metric: "₹0", label: "Dev cost" }],
    tags: ["AppSheet", "AppScript", "Google Sheets"],
  },
  {
    id: 4, title: "Google Forms & AppScript Workflow", category: "Business Automation",
    thumb: "/images/appscript_full.png", fullImg: "/images/appscript_full.png",
    bgColor: "linear-gradient(135deg,#7c3aed,#c4b5fd)", color: "#7c3aed",
    highlight: "End-to-end PDF Auto", icon: "📜",
    shortDesc: "Automated document generation, email dispatch & data entry.",
    role: "Automation Engineer", duration: "1 Month",
    overview: "Complete workflow automation replacing manual document creation. When a Google Form is submitted, AppScript instantly processes the data, generates a formatted PDF document, saves it to Drive, and emails it to the client and admin.",
    problem: "HR and Sales teams spent hours manually copying data from emails into Word templates to create PDFs.",
    solution: "Built an invisible automation engine with Google Forms, Sheets, and AppScript that handles the entire pipeline in under 5 seconds per request.",
    features: [
      { icon: "📝", title: "Form Data Capture", desc: "Structured data collection via optimized Google Forms." },
      { icon: "⚙️", title: "AppScript Engine", desc: "Serverless code running on trigger to process data instantly." },
      { icon: "📄", title: "Dynamic PDF Gen", desc: "Auto-populates Google Doc templates and converts to PDF." },
      { icon: "📧", title: "Auto Email Dispatch", desc: "Custom HTML emails sent automatically with PDF attachments." },
    ],
    impact: [{ metric: "100%", label: "Automated" }, { metric: "2 hrs", label: "Daily saved" }, { metric: "<5s", label: "Generation time" }],
    tags: ["Google Forms", "AppScript", "Google Docs API"],
  },
  {
    id: 5, title: "Risk & Fraud Detection System", category: "Machine Learning",
    thumb: "/images/fraud_full.png", fullImg: "/images/fraud_full.png",
    bgColor: "linear-gradient(135deg,#059669,#34d399)", color: "#059669",
    highlight: "94% Accuracy", icon: "🔍",
    shortDesc: "ML fraud detection with Isolation Forest + XGBoost, real-time alerts.",
    role: "ML Engineer", duration: "2 Months",
    overview: "Python ML system analyzing financial transactions for fraud using Isolation Forest (anomaly) + XGBoost (classification) ensemble trained on 500K+ records, with REST API scoring and Power BI dashboard.",
    problem: "Compliance team manually reviewed flagged transactions with 6-8 hour delays, causing financial losses.",
    solution: "Two-layer ML pipeline: Isolation Forest for unsupervised anomaly detection + XGBoost binary classifier with Flask REST API integration and Power BI alert dashboard.",
    features: [
      { icon: "🧠", title: "Anomaly Detection", desc: "Isolation Forest flags statistical anomalies with configurable sensitivity thresholds." },
      { icon: "🎯", title: "Pattern Recognition", desc: "XGBoost on 500K+ records identifies 15+ fraud typologies at 94% accuracy." },
      { icon: "⚡", title: "Real-time Scoring", desc: "Sub-100ms risk scoring via Flask REST API in existing payment gateway." },
      { icon: "🔔", title: "Alert System", desc: "Automated high-priority alerts to compliance team on threshold breach." },
    ],
    impact: [{ metric: "94%", label: "Detection accuracy" }, { metric: "500K+", label: "Records trained" }, { metric: "<100ms", label: "Scoring speed" }],
    tags: ["Python", "XGBoost", "Power BI", "Flask"],
  },
  {
    id: 6, title: "Supply Chain Analytics Platform", category: "Predictive Analytics",
    thumb: "/images/supply_full.png", fullImg: "/images/supply_full.png",
    bgColor: "linear-gradient(135deg,#d97706,#fbbf24)", color: "#d97706",
    highlight: "Demand Forecasting", icon: "🚚",
    shortDesc: "Demand forecasting, inventory optimization & supplier scorecards.",
    role: "Data Analyst", duration: "6 Weeks",
    overview: "Supply Chain Intelligence platform combining Python ARIMA + Prophet forecasting with Advanced Excel dashboards to optimize inventory, predict demand across 200+ SKUs and automate supplier scoring.",
    problem: "15% of SKUs had monthly stockouts and overstock holding cost issues due to no forecasting system.",
    solution: "ARIMA + Prophet ensemble forecasting with EOQ optimization, automated supplier scoring, Excel + Power BI reporting layer with alert emails.",
    features: [
      { icon: "📈", title: "Demand Forecasting", desc: "ARIMA & Prophet ensemble with 88% accuracy across 200+ SKUs." },
      { icon: "📦", title: "Inventory Optimization", desc: "EOQ automation with dynamic reorder points — 25% reduction in holding costs." },
      { icon: "🏭", title: "Supplier Scorecard", desc: "Automated quality, delivery & cost scoring with comparison matrices." },
      { icon: "⚠️", title: "Risk Alerts", desc: "Proactive alerts for stock-out risks, lead delays & demand spikes." },
    ],
    impact: [{ metric: "35%", label: "Stockouts reduced" }, { metric: "88%", label: "Forecast accuracy" }, { metric: "25%", label: "Cost saved" }],
    tags: ["Python", "Prophet", "Advanced Excel"],
  },
  {
    id: 7, title: "Google Sheets & Excel Automation Suite", category: "Spreadsheet Automation",
    thumb: "/images/sheets_excel.svg", fullImg: "/images/sheets_excel.svg",
    bgColor: "linear-gradient(135deg,#16a34a,#86efac)", color: "#16a34a",
    highlight: "Live Dashboards + Macros", icon: "📑",
    shortDesc: "Custom Google Sheets / Excel workbooks with live dashboards, QUERY logic & VBA macros.",
    role: "Spreadsheet Engineer", duration: "Ongoing",
    overview: "End-to-end spreadsheet automation built for SMEs who don't want a separate BI tool. Live KPI dashboards, dynamic Pivot Tables, ARRAYFORMULA + QUERY() driven reports in Google Sheets, and macro-powered Excel workbooks that turn 4-hour weekly reports into one-click refreshes.",
    problem: "Owners and ops teams maintained 8–10 disconnected spreadsheets, copy-pasting data weekly with constant formula breakage and version chaos.",
    solution: "Single source-of-truth workbook design with QUERY/IMPORTRANGE pipelines, dependent dropdowns, conditional alerts, Power Query in Excel, and VBA macros for one-click month-end reports.",
    features: [
      { icon: "📊", title: "Live KPI Dashboards", desc: "Sales, ops & finance KPIs auto-refreshed via QUERY + ARRAYFORMULA." },
      { icon: "🔄", title: "Power Query ETL", desc: "Multi-source data merged & cleaned in Excel without manual touch." },
      { icon: "🧮", title: "Pivot + VBA Macros", desc: "One-click month-end reports — VBA handles formatting, mailing & archive." },
      { icon: "🔔", title: "Smart Alerts", desc: "Conditional formatting + email triggers when KPIs cross thresholds." },
    ],
    impact: [{ metric: "4 hrs", label: "Saved weekly" }, { metric: "10+", label: "Sheets unified" }, { metric: "1-click", label: "Reports" }],
    tags: ["Google Sheets", "Excel", "Power Query", "VBA", "QUERY()"],
  },
  {
    id: 8, title: "Business Analytics & KPI Reporting", category: "Business Analytics",
    thumb: "/images/business_analytics.svg", fullImg: "/images/business_analytics.svg",
    bgColor: "linear-gradient(135deg,#ea580c,#fbbf24)", color: "#ea580c",
    highlight: "Strategic Insights", icon: "📈",
    shortDesc: "Executive KPI reporting, cohort & funnel analysis with actionable insights.",
    role: "Business Analyst", duration: "3 Months",
    overview: "Business analytics engagement for a growing services firm — built executive KPI scorecards, cohort & funnel models, and revenue waterfalls to expose where churn, leakage and acquisition cost were hurting margin.",
    problem: "Leadership had revenue numbers but no clarity on customer cohorts, channel ROI or which segments were eroding margin.",
    solution: "Designed a layered analytics framework — KPI tree → cohort retention → funnel conversion → unit economics — delivered through Power BI with monthly insight briefings.",
    features: [
      { icon: "🎯", title: "KPI Scorecards", desc: "North-star metric + 25 supporting KPIs with traffic-light status." },
      { icon: "👥", title: "Cohort Retention", desc: "Monthly acquisition cohorts tracking retention, expansion & churn curves." },
      { icon: "🔻", title: "Funnel Analysis", desc: "Lead → MQL → SQL → Won breakdown with drop-off & cycle-time view." },
      { icon: "💸", title: "Unit Economics", desc: "CAC, LTV, payback period & contribution margin per segment." },
    ],
    impact: [{ metric: "+18%", label: "Margin uplift" }, { metric: "25", label: "KPIs tracked" }, { metric: "3", label: "Segments fixed" }],
    tags: ["Power BI", "Excel", "Cohort", "Funnel", "Unit Economics"],
  },
  {
    id: 9, title: "AI Chatbots & Voice Agents", category: "AI Automation",
    thumb: "/images/ai_chatbot.svg", fullImg: "/images/ai_chatbot.svg",
    bgColor: "linear-gradient(135deg,#db2777,#f9a8d4)", color: "#db2777",
    highlight: "Chat + Voice + RAG", icon: "🤖",
    shortDesc: "WhatsApp / Telegram AI chatbots and voice agents on OpenAI + RAG.",
    role: "AI Engineer", duration: "Ongoing",
    overview: "Production-grade conversational AI suite — WhatsApp and Telegram chatbots powered by OpenAI + LangChain RAG over the client's knowledge base, plus inbound/outbound voice agents on Vapi / Retell AI with ElevenLabs voices and Twilio telephony.",
    problem: "Support and sales teams were drowning in repetitive WhatsApp queries and inbound calls — leads cooled off after hours and FAQs ate hours every day.",
    solution: "Built channel-aware AI agents: RAG-grounded chatbots for WhatsApp/Telegram, and human-sounding voice agents that qualify leads, book meetings & escalate cleanly to humans.",
    features: [
      { icon: "💬", title: "WhatsApp / Telegram Bots", desc: "OpenAI + LangChain agents grounded in client docs via RAG pipelines." },
      { icon: "📚", title: "RAG Knowledge Base", desc: "Vector store with auto-ingestion so answers stay accurate as docs change." },
      { icon: "📞", title: "Inbound/Outbound Voice", desc: "Vapi / Retell AI + ElevenLabs voices on Twilio numbers — fully two-way." },
      { icon: "🎯", title: "Lead Qualification", desc: "Agents qualify, capture data into CRM & escalate hot leads to humans." },
    ],
    impact: [{ metric: "24/7", label: "Coverage" }, { metric: "70%", label: "Tickets auto-resolved" }, { metric: "<1s", label: "Voice latency" }],
    tags: ["OpenAI", "LangChain", "RAG", "ElevenLabs", "Twilio", "Vapi"],
  },
];

type Project = typeof projects[0];

const tabs = ["Workflow", "All Work", "Analytics", "Automation", "Machine Learning", "No-Code"];

/* ─── MODAL ─── */
function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  return createPortal(
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 1000, background: "#f8fafc", overflowY: "auto",
        animation: "fadeIn 0.25s ease",
        display: "flex", flexDirection: "column", alignItems: "center"
      }}>
        <div style={{ width: "100%", maxWidth: 850, background: "white", minHeight: "100vh", display: "flex", flexDirection: "column", boxShadow: "0 0 50px rgba(14,165,233,0.1)" }}>
          {/* Header */}
          <div style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: `3px solid ${p.color}`, padding: "1.1rem clamp(1rem, 4vw, 2rem)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", minWidth: 0 }}>
              <span style={{ width: 36, height: 36, borderRadius: 10, background: `${p.color}15`, border: `1px solid ${p.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{p.icon}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: "0.6rem", color: p.color, fontFamily: "'Fira Code',monospace", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{p.category}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)", color: "#0a1628", lineHeight: 1.25 }}>{p.title}</div>
              </div>
            </div>
            <button onClick={onClose} style={{ width: 38, height: 38, borderRadius: 10, background: "#f1f5f9", border: "1px solid #e2e8f0", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", transition: "all 0.2s", flexShrink: 0 }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#fee2e2"; (e.currentTarget as HTMLElement).style.color = "#ef4444"; (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#f1f5f9"; (e.currentTarget as HTMLElement).style.color = "#64748b"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
              ✕
            </button>
          </div>

          {/* Full image */}
          {p.fullImg ? (
            <div style={{ width: "100%", background: "#f8fafc" }}>
              <Image src={p.fullImg} alt={p.title} width={850} height={500} style={{ width: "100%", height: "auto", display: "block" }} priority />
            </div>
          ) : (
            <div style={{ height: 180, background: p.bgColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4.5rem" }}>{p.icon}</div>
          )}

          {/* Body */}
          <div style={{ padding: "clamp(1rem, 4vw, 2rem)", display: "flex", flexDirection: "column", gap: "1.2rem", flex: 1 }}>
          {/* Metrics */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {p.impact.map((imp, i) => (
              <div key={i} style={{ flex: 1, minWidth: 80, textAlign: "center", padding: "0.55rem 0.4rem", borderRadius: 9, background: `${p.color}07`, border: `1px solid ${p.color}15` }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1rem", color: p.color }}>{imp.metric}</div>
                <div style={{ fontSize: "0.58rem", color: "#94a3b8", fontWeight: 500, textTransform: "uppercase" }}>{imp.label}</div>
              </div>
            ))}
            <div style={{ flex: 1, minWidth: 110, padding: "0.55rem 0.75rem", borderRadius: 9, background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b" }}>🧑‍💻 <b style={{ color: "#0a1628" }}>{p.role}</b></div>
              <div style={{ fontSize: "0.68rem", color: "#64748b" }}>⏱️ <b style={{ color: "#0a1628" }}>{p.duration}</b></div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <SHead color={p.color} label="Overview" />
            <p style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.72, margin: 0 }}>{p.overview}</p>
          </div>

          {/* Problem & Solution */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.55rem" }}>
            <div style={{ padding: "0.7rem", borderRadius: 10, background: "#fff7ed", border: "1px solid #fed7aa" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, color: "#d97706", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>🔴 Problem</div>
              <p style={{ fontSize: "0.72rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>{p.problem}</p>
            </div>
            <div style={{ padding: "0.7rem", borderRadius: 10, background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, color: "#059669", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>✅ Solution</div>
              <p style={{ fontSize: "0.72rem", color: "#64748b", lineHeight: 1.55, margin: 0 }}>{p.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <SHead color={p.color} label="Key Features" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.45rem" }}>
              {p.features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: "0.45rem", padding: "0.6rem 0.65rem", borderRadius: 9, background: `${p.color}05`, border: `1px solid ${p.color}10` }}>
                  <span style={{ fontSize: "0.85rem", flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#0a1628", marginBottom: "0.08rem" }}>{f.title}</div>
                    <div style={{ fontSize: "0.64rem", color: "#64748b", lineHeight: 1.4 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", padding: "0.7rem", borderRadius: 9, background: `${p.color}06`, border: `1px solid ${p.color}14`, marginBottom: "0.2rem" }}>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, color: p.color, textTransform: "uppercase", letterSpacing: "0.08em", width: "100%", marginBottom: "0.2rem" }}>🛠 Tech Stack</span>
            {p.tags.map(t => (
              <span key={t} style={{ fontSize: "0.68rem", padding: "0.18rem 0.55rem", borderRadius: 999, background: `${p.color}10`, border: `1px solid ${p.color}22`, color: p.color, fontWeight: 600 }}>{t}</span>
            ))}
          </div>
        </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes popIn { from{opacity:0;transform:translate(-50%,-47%) scale(0.9)} to{opacity:1;transform:translate(-50%,-50%) scale(1)} }
          @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        ` }} />
      </div>, document.body
  );
}

function SHead({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "0.5rem" }}>
      <div style={{ width: 3, height: 13, borderRadius: 2, background: color }} />
      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#0a1628", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</span>
    </div>
  );
}

/* ─── CARD ─── */
function ProjectCard({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <div
      className="bp-project-card"
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
        borderRadius: 14, overflow: "hidden", cursor: "pointer",
        border: "1px solid rgba(14,165,233,0.12)",
        boxShadow: "0 4px 20px rgba(14,165,233,0.08)",
        transition: "all 0.28s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 20px 50px rgba(14,165,233,0.2)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "0 4px 20px rgba(14,165,233,0.08)";
      }}
    >
      {/* Thumbnail */}
      <div style={{ height: 165, position: "relative", background: p.bgColor, overflow: "hidden" }}>
        {p.thumb ? (
          <Image src={p.thumb} alt={p.title} fill sizes="380px" style={{ objectFit: "cover", objectPosition: "top center", opacity: 0.88 }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", opacity: 0.35 }}>{p.icon}</div>
        )}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.55) 100%)" }} />
        {/* Hover: View overlay */}
        <div className="card-view-overlay" style={{
          position: "absolute", inset: 0, background: "rgba(14,165,233,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ background: "rgba(255,255,255,0.95)", color: p.color, fontWeight: 700, fontSize: "0.78rem", padding: "0.45rem 1rem", borderRadius: 999, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            🔍 View Case Study
          </span>
        </div>
        {/* Category badge */}
        <div style={{ position: "absolute", bottom: "0.65rem", left: "0.75rem" }}>
          <span style={{ fontSize: "0.58rem", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)", color: "white", padding: "0.15rem 0.5rem", borderRadius: 999, fontFamily: "'Fira Code',monospace", fontWeight: 600 }}>{p.category}</span>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "0.8rem 0.9rem 0.9rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.4rem", marginBottom: "0.3rem" }}>
          <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#0a1628", lineHeight: 1.3 }}>{p.title}</h3>
          <span style={{ fontSize: "0.55rem", padding: "0.12rem 0.45rem", borderRadius: 999, background: `${p.color}10`, color: p.color, border: `1px solid ${p.color}20`, whiteSpace: "nowrap", flexShrink: 0, fontWeight: 600 }}>▸ {p.highlight}</span>
        </div>
        <p style={{ fontSize: "0.74rem", color: "#64748b", lineHeight: 1.5, marginBottom: "0.65rem" }}>{p.shortDesc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize: "0.62rem", padding: "0.15rem 0.45rem", borderRadius: 999, background: `${p.color}08`, border: `1px solid ${p.color}18`, color: p.color, fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function BehancePortfolio() {
  const [activeTab, setActiveTab] = useState("Workflow");
  const [selected, setSelected] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Section headings light up in blue as they scroll into view
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll(".scroll-blue-h"));
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("lit");
      });
    }, { threshold: 0.55, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeTab]);

  useEffect(() => {
    if (selected) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const filtered = activeTab === "All Work" ? projects : projects.filter(p => {
    if (activeTab === "Analytics") return p.category.includes("Analytics") || p.category.includes("Data");
    if (activeTab === "Automation") return p.category.includes("Automation");
    if (activeTab === "Machine Learning") return p.category.includes("Machine") || p.category.includes("Predictive");
    if (activeTab === "No-Code") return p.category.includes("No-Code");
    return true;
  });

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ── Top bar inside main ── */}
      <div className="bp-tabbar" style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(14,165,233,0.15)",
        boxShadow: "0 2px 16px rgba(14,165,233,0.08)",
        padding: "0 2rem",
        display: "flex", alignItems: "center", gap: "0",
        height: 56,
      }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: "0.5rem 1.1rem", background: "none", border: "none",
            cursor: "pointer", fontSize: "0.82rem", fontWeight: activeTab === tab ? 700 : 500,
            color: activeTab === tab ? "#0ea5e9" : "#64748b",
            borderBottom: activeTab === tab ? "2.5px solid #0ea5e9" : "2.5px solid transparent",
            transition: "all 0.2s", whiteSpace: "nowrap", marginBottom: "-1px",
            fontFamily: "'Space Grotesk',sans-serif",
          }}>
            {tab}
          </button>
        ))}
        {/* Spacer + stats */}
        <div className="bp-tab-count" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.7rem", color: "#94a3b8", fontFamily: "'Fira Code',monospace", whiteSpace: "nowrap" }}>
            {activeTab === "Workflow" ? "10-stage pipeline" : `${filtered.length} projects`}
          </span>
        </div>
      </div>

      {activeTab === "Workflow" ? (
        <WorkflowFlow />
      ) : (
        /* ── Masonry Project Grid ── */
        <div id="projects" style={{ padding: "clamp(1rem, 3vw, 1.75rem) clamp(1rem, 3.5vw, 2rem) 3rem", scrollMarginTop: 70 }}>
          {/* Section heading */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", color: "#0ea5e9", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.45rem" }}>
              / SELECTED WORK
            </div>
            <h2 className="scroll-blue-h" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.3rem)", color: "#0a1628", letterSpacing: "-0.6px", margin: 0, lineHeight: 1.1 }}>
              {activeTab === "All Work" ? "All Projects" : `${activeTab} Projects`}
            </h2>
            <p style={{ color: "#475569", fontSize: "0.9rem", margin: "0.55rem 0 0 0", lineHeight: 1.6, maxWidth: 560 }}>
              Real business solutions I&apos;ve shipped — click any card to open the full case study with the problem, approach and measurable impact.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(285px, 1fr))",
            gap: "1.25rem",
          }}>
            {filtered.map(p => (
              <ProjectCard key={p.id} p={p} onClick={() => setSelected(p)} />
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "2rem", fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", color: "#94a3b8" }}>
            + 24 more client & internship projects delivered
          </p>
        </div>
      )}

      {/* ── Contact Form Section ── */}
      <ContactSection />

      {/* ── Project Modal ── */}
      {mounted && selected && <ProjectModal p={selected} onClose={() => setSelected(null)} />}

      <style dangerouslySetInnerHTML={{ __html: `
        .card-view-overlay { opacity: 0; transition: opacity 0.25s ease; }
        .bp-project-card:hover .card-view-overlay { opacity: 1; }
      ` }} />
    </div>
  );
}

/* ─── CONTACT SECTION ─── */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Project Inquiry", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0APhone: ${form.phone}%0D%0AReply-To: ${form.email}%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
    const subject = encodeURIComponent(`[${form.subject}] from ${form.name || "Portfolio"}`);
    window.location.href = `mailto:harshdaharwal20@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.7rem 0.9rem", borderRadius: 10,
    border: "1px solid #cbd5e1", background: "#ffffff", color: "#0f172a",
    fontSize: "0.85rem", fontFamily: "inherit", outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  };
  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#0ea5e9";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(14,165,233,0.15)";
  };
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#cbd5e1";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="contact" style={{
      padding: "clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 7vw, 5rem)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.0) 0%, rgba(240,249,255,0.85) 30%, rgba(224,242,254,0.92) 100%)",
      scrollMarginTop: 70,
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.72rem", color: "#0ea5e9", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.5rem" }}>
          / GET IN TOUCH
        </div>
        <h2 className="scroll-blue-h" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 4.5vw, 2.1rem)", color: "#0a1628", margin: "0 0 0.6rem 0" }}>
          Let&apos;s build something <span style={{ background: "linear-gradient(135deg,#0ea5e9,#0369a1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>useful</span>.
        </h2>
        <p style={{ color: "#475569", fontSize: "0.95rem", margin: "0 0 2rem 0", lineHeight: 1.6 }}>
          Whether you&apos;re hiring, planning a freelance project, or just curious about data &amp; automation — send a message and I&apos;ll reply within 24 hours.
        </p>
      </div>

      <div style={{ maxWidth: 760, margin: "0 auto", background: "white", borderRadius: 18, boxShadow: "0 20px 60px rgba(14,165,233,0.15), 0 0 0 1px rgba(14,165,233,0.1)", padding: "clamp(1.25rem, 4vw, 2rem)" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>✅</div>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", color: "#0a1628", margin: "0 0 0.5rem 0" }}>Opening your email app…</h3>
            <p style={{ color: "#64748b", fontSize: "0.9rem", margin: 0 }}>If it didn&apos;t, email me directly at <a href="mailto:harshdaharwal20@gmail.com" style={{ color: "#0ea5e9", fontWeight: 600 }}>harshdaharwal20@gmail.com</a>.</p>
            <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "Project Inquiry", message: "" }); }}
              style={{ marginTop: "1.25rem", padding: "0.5rem 1.1rem", borderRadius: 8, background: "#f1f5f9", border: "1px solid #cbd5e1", cursor: "pointer", fontWeight: 600, color: "#334155" }}>
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: "grid", gap: "1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "0.35rem" }}>Your Name *</label>
                <input required value={form.name} onChange={update("name")} onFocus={focusIn} onBlur={focusOut} style={inputStyle} placeholder="Your full name" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "0.35rem" }}>Email *</label>
                <input required type="email" value={form.email} onChange={update("email")} onFocus={focusIn} onBlur={focusOut} style={inputStyle} placeholder="you@company.com" />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "0.35rem" }}>Phone (optional)</label>
                <input value={form.phone} onChange={update("phone")} onFocus={focusIn} onBlur={focusOut} style={inputStyle} placeholder="+91 ..." />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "0.35rem" }}>I need help with</label>
                <select value={form.subject} onChange={update("subject")} onFocus={focusIn} onBlur={focusOut} style={inputStyle}>
                  <option>Project Inquiry</option>
                  <option>Hire / Full-time Role</option>
                  <option>Data Analytics / BI Dashboard</option>
                  <option>Business Automation (AppSheet / AppScript)</option>
                  <option>AI Chatbot / Voice Agent</option>
                  <option>Google Sheets / Excel Project</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "0.35rem" }}>Message *</label>
              <textarea required value={form.message} onChange={update("message")} onFocus={focusIn} onBlur={focusOut} rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: 110, fontFamily: "inherit" }}
                placeholder="Tell me about your project, timeline, and what success looks like…" />
            </div>
            <button type="submit" style={{
              padding: "0.85rem 1.5rem", borderRadius: 10,
              background: "linear-gradient(135deg,#0ea5e9,#0369a1)",
              border: "none", color: "white", fontWeight: 700, fontSize: "0.95rem",
              cursor: "pointer", boxShadow: "0 10px 24px rgba(14,165,233,0.35)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 14px 30px rgba(14,165,233,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 10px 24px rgba(14,165,233,0.35)"; }}>
              Send Message →
            </button>
            <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "0.78rem", color: "#64748b", marginTop: "0.5rem", flexWrap: "wrap" }}>
              <a href="mailto:harshdaharwal20@gmail.com" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>📧 harshdaharwal20@gmail.com</a>
              <a href="tel:+919516896449" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>📞 +91 9516896449</a>
              <a href="https://www.linkedin.com/in/harsh-daharwal-1ab488291/" target="_blank" rel="noopener noreferrer" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>💼 LinkedIn</a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

/* ─── WORKFLOW (8-stage animated automation pipeline) ─── */
const workflowStages = [
  {
    n: 1, icon: "🔍", title: "Discover & Audit",
    accent: "#06b6d4",
    headline: "Map the chaos before touching code.",
    desc: "Discovery calls + on-site shadowing to find the real bottlenecks. I look for the broken WhatsApp threads, Excel-as-database hacks, and the 'one person who knows everything'.",
    chips: ["Stakeholder Calls", "Workflow Mapping", "Pain-point Audit"],
  },
  {
    n: 2, icon: "📐", title: "Architecture & Blueprint",
    accent: "#0ea5e9",
    headline: "Sketch the system end-to-end.",
    desc: "ERD for the data model, swimlanes for the process, and a tool decision: AppSheet vs custom web app, Sheets vs MySQL, AppScript vs serverless. One page, zero surprises.",
    chips: ["ERD Design", "Swimlanes", "Tech Selection", "Cost Plan"],
  },
  {
    n: 3, icon: "🗂️", title: "Data Foundation",
    accent: "#0284c7",
    headline: "Single source of truth, properly modeled.",
    desc: "Normalised Google Sheets or MySQL schema with referential integrity, audit logs, soft deletes and timestamps. Forms feed clean rows — no copy-paste, no duplicate keys.",
    chips: ["Google Sheets", "MySQL", "Schema Design", "Audit Logs"],
  },
  {
    n: 4, icon: "⚙️", title: "No-Code Core (AppSheet + AppScript)",
    accent: "#0f9d58",
    headline: "Apps that ship in days, not quarters.",
    desc: "AppSheet for the mobile/web UI, AppScript for the logic glue: validation, auto-numbering, PDF generation, multi-step approvals, role-based access. Web Apps for anything beyond AppSheet limits.",
    chips: ["AppSheet", "AppScript", "Web Apps", "Approvals", "RBAC"],
  },
  {
    n: 5, icon: "🔌", title: "Integration Layer",
    accent: "#7c3aed",
    headline: "WhatsApp, Gmail, webhooks — everything talks.",
    desc: "Two-way WhatsApp Business API messaging, transactional email via Gmail/SMTP, webhook in/out, REST APIs to CRMs and payment gateways. The system runs whether someone opens the app or not.",
    chips: ["WhatsApp API", "Gmail API", "Webhooks", "REST APIs", "Twilio"],
  },
  {
    n: 6, icon: "📍", title: "Field Layer (FMS)",
    accent: "#ea580c",
    headline: "Operations on the ground — GPS-tracked.",
    desc: "Field Management System on AppSheet mobile: job dispatch, GPS check-in/out, photo proof, offline-first sync. Managers see live location and SLA on a single dashboard.",
    chips: ["AppSheet Mobile", "GPS Tracking", "Offline Sync", "Photo Proof"],
  },
  {
    n: 7, icon: "🤖", title: "AI & Intelligence Layer",
    accent: "#db2777",
    headline: "Chatbots, voice agents, predictions.",
    desc: "WhatsApp/Telegram bots grounded on the client's knowledge base via RAG, voice agents on Vapi + ElevenLabs that qualify leads on calls, and ML models for churn / fraud / forecasting.",
    chips: ["OpenAI", "LangChain", "RAG", "Vapi", "ElevenLabs", "XGBoost"],
  },
  {
    n: 8, icon: "📊", title: "Analytics & Dashboards",
    accent: "#f59e0b",
    headline: "Live KPIs the founder actually checks.",
    desc: "Power BI / Looker Studio / Sheets QUERY dashboards wired into the operational DB. Auto-emailed Monday digests with anomaly flags so nobody has to refresh anything.",
    chips: ["Power BI", "Looker Studio", "DAX", "QUERY()", "Weekly Digests"],
  },
  {
    n: 9, icon: "⚡", title: "Automation Triggers",
    accent: "#22d3ee",
    headline: "It runs without you.",
    desc: "Time-driven AppScript triggers, webhook listeners, scheduled cron jobs, conditional alerts on KPI thresholds. The system reminds, escalates, and reports on autopilot.",
    chips: ["Time Triggers", "Webhooks", "Cron", "Alert Rules"],
  },
  {
    n: 10, icon: "🚀", title: "Deploy, Train & Iterate",
    accent: "#10b981",
    headline: "Handover with docs, Loom videos, and a hotline.",
    desc: "User training, written SOPs, recorded walkthroughs, and a 30-day hyper-care window. Then monthly iteration based on usage analytics — the system gets better, not stale.",
    chips: ["Training", "SOPs", "Loom Walkthroughs", "Hyper-care", "Monthly Iteration"],
  },
];

function WorkflowFlow() {
  const heroWords = ["Chaos", "Manual Work", "Excel Hell", "WhatsApp Threads"];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % heroWords.length), 2400);
    return () => clearInterval(t);
  }, [heroWords.length]);

  return (
    <section style={{
      position: "relative",
      padding: "clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 7vw, 5rem)",
      background: "linear-gradient(135deg, #fef3c7 0%, #fce7f3 20%, #ddd6fe 45%, #bfdbfe 70%, #a7f3d0 100%)",
      overflow: "hidden",
    }}>
      {/* Static soft glow accents (no expensive blur animation) */}
      <div className="wf-bg-accent wf-bg-accent-1" />
      <div className="wf-bg-accent wf-bg-accent-2" />

      {/* ── Hero with animated word swap ── */}
      <div style={{ maxWidth: 960, margin: "0 auto 3rem", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "inline-block",
          fontFamily: "'Fira Code',monospace", fontSize: "0.72rem",
          color: "#7c3aed", letterSpacing: "0.3em", fontWeight: 700, textTransform: "uppercase",
          padding: "0.4rem 1rem", borderRadius: 999,
          background: "rgba(255,255,255,0.7)", backdropFilter: "none",
          border: "1px solid rgba(124,58,237,0.25)",
          marginBottom: "1.25rem",
        }}>
          ✦ End-to-End Business Solutions Workflow ✦
        </div>
        <h2 style={{
          fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
          fontSize: "clamp(2rem, 5vw, 3.6rem)", margin: "0 0 0.5rem 0",
          letterSpacing: "-1.5px", lineHeight: 1.08,
          color: "#0a1628",
        }}>
          I turn{" "}
          <span className="wf-rotate" key={wordIdx} style={{
            display: "inline-block",
            background: "linear-gradient(135deg,#ec4899 0%,#8b5cf6 50%,#0ea5e9 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>{heroWords[wordIdx]}</span>
          <br />into <span style={{
            background: "linear-gradient(135deg,#0ea5e9 0%,#10b981 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>automated business solutions.</span>
        </h2>
        <p style={{ color: "#475569", fontSize: "1rem", lineHeight: 1.7, maxWidth: 660, margin: "1rem auto 0" }}>
          A proven 10-stage delivery workflow, refined across 30+ shipped business solutions — from the first discovery call to the day your team forgets a manual process ever existed.
        </p>

        {/* Top stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {[
            { v: "10", l: "Stages", sub: "Discovery → Iterate", c: "#ec4899" },
            { v: "30+", l: "Projects shipped", sub: "across 2+ years", c: "#8b5cf6" },
            { v: "70%", l: "Manual effort cut", sub: "avg per client", c: "#0ea5e9" },
            { v: "₹60K+", l: "Yearly savings", sub: "vs traditional ERP", c: "#10b981" },
          ].map(s => (
            <div key={s.l} className="wf-stat-card" style={{
              padding: "0.85rem 1.3rem", borderRadius: 14,
              background: "rgba(255,255,255,0.78)", backdropFilter: "none",
              border: `1px solid ${s.c}44`,
              boxShadow: `0 8px 24px ${s.c}22, 0 0 0 1px rgba(255,255,255,0.6) inset`,
              minWidth: 140,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1.85rem", color: s.c, letterSpacing: "-0.5px", lineHeight: 1.1 }}>{s.v}</div>
              <div style={{ fontSize: "0.62rem", color: "#0a1628", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, marginTop: "0.15rem" }}>{s.l}</div>
              <div style={{ fontSize: "0.6rem", color: "#64748b", fontWeight: 500, marginTop: "0.1rem" }}>{s.sub}</div>
              <div className="wf-stat-shine" style={{ ["--shine-color" as string]: s.c }} />
            </div>
          ))}
        </div>
      </div>


      {/* ── LIVE CHARTS ROW ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto 3.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", position: "relative", zIndex: 2 }}>
        <ImpactBarChart />
        <DeliverySpeedChart />
        <StackDonutChart />
      </div>

      {/* ── The Pipeline ── */}
      <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", zIndex: 2, perspective: "1400px" }}>
        <div className="wf-rail">
          <div className="wf-rail-pulse" />
        </div>

        {workflowStages.map((s, idx) => {
          const onLeft = idx % 2 === 0;
          return (
            <div key={s.n} className="wf-row" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className={`wf-card ${onLeft ? "wf-card-left" : "wf-card-right"}`}
                style={{ ["--accent" as string]: s.accent }}>
                <div className="wf-card-inner">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.4rem" }}>
                    <div className="wf-icon" style={{ background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)` }}>
                      <span style={{ fontSize: "1.25rem" }}>{s.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.6rem", color: s.accent, letterSpacing: "0.18em", fontWeight: 700 }}>
                        STAGE {String(s.n).padStart(2, "0")}
                      </div>
                      <h3 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "1rem", color: "#0a1628", letterSpacing: "-0.2px", lineHeight: 1.2 }}>{s.title}</h3>
                    </div>
                  </div>
                  <div style={{ fontSize: "0.78rem", color: s.accent, fontWeight: 700, marginBottom: "0.35rem", fontStyle: "italic" }}>
                    &ldquo;{s.headline}&rdquo;
                  </div>
                  <p style={{ fontSize: "0.74rem", color: "#475569", lineHeight: 1.5, margin: "0 0 0.55rem 0" }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                    {s.chips.map(c => (
                      <span key={c} className="wf-chip" style={{
                        background: `${s.accent}18`,
                        border: `1px solid ${s.accent}44`,
                        color: s.accent,
                      }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="wf-node" style={{ background: s.accent, boxShadow: `0 0 0 5px #ffffff, 0 0 0 7px ${s.accent}55, 0 0 22px ${s.accent}` }}>
                <span style={{ fontFamily: "'Fira Code',monospace", fontWeight: 800, fontSize: "0.78rem", color: "white" }}>{s.n}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── WHY AUTOMATE (6 benefit pills) ── */}
      <div style={{ maxWidth: 1100, margin: "5rem auto 3rem", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{
            display: "inline-block",
            fontFamily: "'Fira Code',monospace", fontSize: "0.7rem",
            color: "#0ea5e9", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase",
            padding: "0.35rem 0.9rem", borderRadius: 999,
            background: "rgba(255,255,255,0.75)", backdropFilter: "none",
            border: "1px solid rgba(14,165,233,0.3)",
          }}>
            ◆ Why Founders Choose This System ◆
          </div>
          <h3 className="scroll-blue-h" style={{
            margin: "0.9rem 0 0 0",
            fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
            fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#0a1628", letterSpacing: "-0.5px",
          }}>
            Six wins your team feels in <span style={{ background: "linear-gradient(135deg,#ec4899,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>week one</span>.
          </h3>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(168px, 1fr))",
          gap: "1rem",
        }}>
          {[
            { icon: "⏱️", title: "Save Time",         desc: "Automate repetitive tasks and focus on what really matters.",           c: "#0ea5e9" },
            { icon: "💰", title: "Reduce Costs",      desc: "Lower operational expenses and increase profitability.",                c: "#10b981" },
            { icon: "📈", title: "Boost Productivity", desc: "Empower your team to do more in less time.",                            c: "#f59e0b" },
            { icon: "🛡️", title: "Improve Accuracy",  desc: "Minimize human errors and keep your data consistent.",                  c: "#8b5cf6" },
            { icon: "📊", title: "Real-Time Insights", desc: "Make smarter decisions with live data and advanced reports.",           c: "#ec4899" },
            { icon: "🚀", title: "Scalable Solutions", desc: "Built to grow with your business, no matter the industry.",             c: "#06b6d4" },
          ].map((b, i) => (
            <div key={b.title} className="wf-benefit"
              style={{
                padding: "1.25rem 1rem",
                borderRadius: 16,
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "none",
                border: `1px solid ${b.c}33`,
                boxShadow: `0 10px 28px ${b.c}20, 0 0 0 1px rgba(255,255,255,0.6) inset`,
                textAlign: "center",
                animationDelay: `${i * 0.07}s`,
              }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: `linear-gradient(135deg, ${b.c}, ${b.c}cc)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 0.75rem",
                fontSize: "1.5rem",
                boxShadow: `0 8px 18px ${b.c}55`,
              }}>{b.icon}</div>
              <div style={{
                fontFamily: "'Space Grotesk',sans-serif",
                fontWeight: 800, fontSize: "0.9rem",
                color: "#0a1628", marginBottom: "0.4rem",
                letterSpacing: "0.02em", textTransform: "uppercase",
              }}>{b.title}</div>
              <p style={{ fontSize: "0.74rem", color: "#475569", lineHeight: 1.55, margin: 0 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUR BUSINESS AUTOMATION MODEL (horizontal 6-step flow) ── */}
      <div style={{ maxWidth: 1180, margin: "0 auto 3rem", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem" }}>
            <span style={{ flex: 1, maxWidth: 120, height: 2, background: "linear-gradient(90deg, transparent, #8b5cf6)" }} />
            <h3 className="scroll-blue-h" style={{
              margin: 0,
              fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800,
              fontSize: "clamp(1.15rem,2.6vw,1.9rem)", color: "#0a1628", letterSpacing: "0.04em",
              textTransform: "uppercase", textAlign: "center",
            }}>
              Our Business <span style={{ background: "linear-gradient(135deg,#8b5cf6,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Solutions Model</span>
            </h3>
            <span style={{ flex: 1, maxWidth: 120, height: 2, background: "linear-gradient(90deg, #ec4899, transparent)" }} />
          </div>
        </div>

        <div className="wf-model">
          {[
            { icon: "👥", title: "Lead Capture",       sub: "Website / Forms / Social / WhatsApp",          c: "#0ea5e9" },
            { icon: "📥", title: "Data Collection",    sub: "Stored automatically in one system",            c: "#22d3ee" },
            { icon: "🤖", title: "Automation",         sub: "Tasks, follow-ups, reminders & alerts",         c: "#8b5cf6" },
            { icon: "✔️", title: "Process Management", sub: "Manage projects, tasks, teams & workflows",     c: "#ec4899" },
            { icon: "📊", title: "Insights & Reports", sub: "Live dashboards & performance analytics",       c: "#f59e0b" },
            { icon: "📈", title: "Business Growth",    sub: "Better decisions · happy clients · revenue",    c: "#10b981", highlight: true },
          ].map((step, i, arr) => (
            <div key={step.title} className="wf-model-cell" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={"wf-model-step" + (step.highlight ? " wf-model-highlight" : "")}
                style={{ ["--c" as string]: step.c }}>
                <div className="wf-model-icon" style={{ background: `linear-gradient(135deg, ${step.c}, ${step.c}cc)` }}>
                  <span style={{ fontSize: "1.4rem" }}>{step.icon}</span>
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 800, fontSize: "0.78rem",
                  color: step.highlight ? "#ffffff" : "#0a1628",
                  marginTop: "0.7rem", textAlign: "center",
                  textTransform: "uppercase", letterSpacing: "0.04em",
                }}>{step.title}</div>
                <p style={{
                  margin: "0.35rem 0 0 0",
                  fontSize: "0.66rem",
                  color: step.highlight ? "rgba(255,255,255,0.92)" : "#64748b",
                  lineHeight: 1.45, textAlign: "center",
                }}>{step.sub}</p>
              </div>
              {i < arr.length - 1 && (
                <div className="wf-model-arrow" aria-hidden="true">
                  <svg viewBox="0 0 30 16" width="100%" height="16">
                    <defs>
                      <linearGradient id={`wfArrow${i}`} x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={step.c} />
                        <stop offset="100%" stopColor={arr[i + 1].c} />
                      </linearGradient>
                    </defs>
                    <path d="M0 8 H22 M16 2 L22 8 L16 14" fill="none" stroke={`url(#wfArrow${i})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div style={{ maxWidth: 720, margin: "4rem auto 0", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{
          padding: "clamp(1.5rem, 4.5vw, 2.25rem) clamp(1.25rem, 5vw, 2.5rem)",
          borderRadius: 22,
          background: "linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)",
          border: "1px solid rgba(236,72,153,0.3)",
          boxShadow: "0 30px 80px rgba(139,92,246,0.2), 0 0 0 1px rgba(255,255,255,0.6) inset",
        }}>
          <h3 className="scroll-blue-h" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: "#0a1628", fontSize: "clamp(1.3rem, 3.5vw, 1.6rem)", margin: "0 0 0.6rem 0", letterSpacing: "-0.5px" }}>
            This is the system. Want it for{" "}
            <span style={{ background: "linear-gradient(135deg,#ec4899,#8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>your business</span>?
          </h3>
          <p style={{ color: "#475569", fontSize: "0.95rem", margin: "0 0 1.5rem 0", lineHeight: 1.6 }}>
            Most projects go live in 2–6 weeks. Free discovery call · scoped quote within 48 hours.
          </p>
          <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            style={{
              display: "inline-block", padding: "0.9rem 2.2rem", borderRadius: 12,
              background: "linear-gradient(135deg,#ec4899 0%,#8b5cf6 50%,#0ea5e9 100%)",
              color: "white", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem",
              boxShadow: "0 14px 36px rgba(139,92,246,0.45)",
            }}>
            Start a Project →
          </a>
        </div>
      </div>

      <style jsx>{`
        /* Static radial gradients — no blur, no animation. Cheap. */
        .wf-bg-accent {
          position: absolute; pointer-events: none; z-index: 1;
          border-radius: 50%;
        }
        .wf-bg-accent-1 {
          width: 540px; height: 540px; top: -120px; left: -140px;
          background: radial-gradient(circle, rgba(236,72,153,0.28) 0%, rgba(236,72,153,0) 70%);
        }
        .wf-bg-accent-2 {
          width: 600px; height: 600px; bottom: -140px; right: -160px;
          background: radial-gradient(circle, rgba(14,165,233,0.25) 0%, rgba(14,165,233,0) 70%);
        }

        .wf-rotate {
          animation: wfRotateIn 0.6s cubic-bezier(0.34,1.56,0.64,1);
          will-change: transform, opacity;
        }
        @keyframes wfRotateIn {
          0%   { opacity: 0; transform: translateY(-14px) rotateX(40deg); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0)    rotateX(0deg);  filter: blur(0); }
        }

        @keyframes wfCtaShine {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .wf-stat-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .wf-stat-card:hover { transform: translateY(-3px); }

        .wf-benefit {
          opacity: 0; transform: translateY(20px);
          animation: wfBenefitIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .wf-benefit:hover { transform: translateY(-4px); }
        @keyframes wfBenefitIn { to { opacity: 1; transform: translateY(0); } }

        .wf-model {
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: center;
          gap: 0;
        }
        .wf-model-cell {
          display: flex; align-items: stretch;
          opacity: 0; transform: translateY(20px);
          animation: wfBenefitIn 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards;
          flex: 1 1 168px;
          min-width: 168px;
        }
        .wf-model-step {
          flex: 1;
          padding: 1.1rem 0.85rem 1.15rem;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid var(--c);
          box-shadow: 0 10px 24px rgba(15,23,42,0.08), 0 0 0 1px rgba(255,255,255,0.6) inset;
          display: flex; flex-direction: column; align-items: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .wf-model-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px rgba(15,23,42,0.16), 0 0 0 2px var(--c) inset;
        }
        .wf-model-highlight {
          background: linear-gradient(135deg, var(--c), color-mix(in srgb, var(--c) 70%, #0a1628));
          border-color: transparent;
          box-shadow: 0 14px 32px color-mix(in srgb, var(--c) 50%, transparent), 0 0 0 1px rgba(255,255,255,0.4) inset;
        }
        .wf-model-icon {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 18px rgba(15,23,42,0.18);
        }
        .wf-model-arrow {
          align-self: center;
          width: 30px;
          flex-shrink: 0;
          padding: 0 0.15rem;
          opacity: 0.85;
        }
        @media (max-width: 880px) {
          .wf-model-arrow { display: none; }
        }
        .wf-stat-shine { display: none; }


        .wf-rail {
          position: absolute;
          top: 0; bottom: 0; left: 50%;
          width: 4px;
          margin-left: -2px;
          background: linear-gradient(180deg,
            transparent 0%,
            rgba(139,92,246,0.25) 8%,
            rgba(236,72,153,0.45) 50%,
            rgba(14,165,233,0.25) 92%,
            transparent 100%);
          border-radius: 4px;
          overflow: hidden;
        }
        .wf-rail-pulse { display: none; }

        .wf-row {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 48px 1fr;
          align-items: center;
          margin-bottom: 0.85rem;
          opacity: 0;
          transform: translateY(20px);
          animation: wfRowIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes wfRowIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .wf-card {
          position: relative;
          padding: 1rem 1.15rem;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid rgba(255,255,255,0.9);
          box-shadow: 0 14px 36px rgba(15,23,42,0.12), 0 0 0 1px var(--accent) inset;
          transform-style: preserve-3d;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, box-shadow 0.35s;
          will-change: transform;
        }
        .wf-card::before {
          content: "";
          position: absolute; inset: 0;
          border-radius: 18px;
          background: linear-gradient(135deg, var(--accent), transparent 65%);
          opacity: 0.08;
          pointer-events: none;
        }
        .wf-card-left  { grid-column: 1; transform: rotateY(5deg);  transform-origin: right center; }
        .wf-card-right { grid-column: 3; transform: rotateY(-5deg); transform-origin: left  center; }
        .wf-card:hover {
          transform: rotateY(0) translateY(-5px) translateZ(20px);
          box-shadow: 0 28px 60px rgba(15,23,42,0.18), 0 0 0 2px var(--accent) inset, 0 0 40px var(--accent);
        }
        .wf-card-inner { position: relative; z-index: 1; }

        .wf-icon {
          width: 38px; height: 38px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 16px rgba(15,23,42,0.18);
          flex-shrink: 0;
        }

        .wf-chip {
          font-family: 'Fira Code', monospace;
          font-size: 0.66rem;
          padding: 0.24rem 0.6rem;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .wf-node {
          grid-column: 2;
          width: 30px; height: 30px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          justify-self: center;
          position: relative;
          z-index: 3;
        }

        @media (max-width: 760px) {
          .wf-row { grid-template-columns: 38px 1fr; gap: 0.8rem; }
          .wf-rail { left: 19px; margin-left: -2px; }
          .wf-card-left, .wf-card-right { grid-column: 2; transform: none; }
          .wf-node { grid-column: 1; justify-self: start; }
        }
      `}</style>
    </section>
  );
}

/* ─── ANIMATED CHARTS ─── */
function ChartCard({ title, subtitle, accent, children }: { title: string; subtitle: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{
      padding: "1.4rem 1.5rem",
      borderRadius: 18,
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "none",
      border: `1px solid ${accent}33`,
      boxShadow: `0 14px 40px ${accent}22, 0 0 0 1px rgba(255,255,255,0.7) inset`,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.6rem", color: accent, letterSpacing: "0.2em", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.25rem" }}>{subtitle}</div>
      <h4 style={{ margin: "0 0 1rem 0", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: "#0a1628", fontSize: "1.05rem", letterSpacing: "-0.3px" }}>{title}</h4>
      {children}
    </div>
  );
}

function ImpactBarChart() {
  const bars = [
    { l: "Before", manual: 42, automated: 4 },
    { l: "Month 1", manual: 28, automated: 18 },
    { l: "Month 2", manual: 14, automated: 32 },
    { l: "Month 3", manual: 6,  automated: 44 },
  ];
  const max = 48;
  return (
    <ChartCard title="Manual vs Automated Hours / Week" subtitle="Impact" accent="#ec4899">
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: 150, gap: "0.7rem", padding: "0 0.2rem" }}>
        {bars.map((b, i) => (
          <div key={b.l} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem" }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 110, width: "100%", justifyContent: "center" }}>
              <div className="wf-bar" style={{
                width: "40%", height: `${(b.manual / max) * 100}%`,
                background: "linear-gradient(180deg,#fda4af,#f43f5e)",
                borderRadius: "6px 6px 0 0",
                animation: `wfBarRise 0.9s ${i * 0.12}s cubic-bezier(0.34,1.56,0.64,1) both`,
                transformOrigin: "bottom",
                boxShadow: "0 4px 10px rgba(244,63,94,0.3)",
              }} />
              <div className="wf-bar" style={{
                width: "40%", height: `${(b.automated / max) * 100}%`,
                background: "linear-gradient(180deg,#86efac,#10b981)",
                borderRadius: "6px 6px 0 0",
                animation: `wfBarRise 0.9s ${i * 0.12 + 0.1}s cubic-bezier(0.34,1.56,0.64,1) both`,
                transformOrigin: "bottom",
                boxShadow: "0 4px 10px rgba(16,185,129,0.3)",
              }} />
            </div>
            <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.62rem", color: "#64748b", fontWeight: 700 }}>{b.l}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "0.8rem", fontSize: "0.65rem", color: "#64748b" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: "#f43f5e" }} /> Manual</span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: "#10b981" }} /> Automated</span>
      </div>
      <style jsx>{`
        @keyframes wfBarRise { from { transform: scaleY(0); opacity: 0.4 } to { transform: scaleY(1); opacity: 1 } }
      `}</style>
    </ChartCard>
  );
}

function DeliverySpeedChart() {
  // line: weeks to ship over time (going down)
  const pts = [
    { x: 0,   y: 90 },
    { x: 60,  y: 70 },
    { x: 120, y: 60 },
    { x: 180, y: 40 },
    { x: 240, y: 32 },
    { x: 300, y: 18 },
  ];
  const W = 300, H = 110;
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const area = `${path} L ${W} ${H} L 0 ${H} Z`;
  return (
    <ChartCard title="Delivery Speed Over Time" subtitle="Velocity" accent="#0ea5e9">
      <svg viewBox={`0 0 ${W} ${H + 30}`} style={{ width: "100%", height: 150 }}>
        <defs>
          <linearGradient id="speedFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="speedStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {/* grid lines */}
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1="0" x2={W} y1={(H / 3) * i + 5} y2={(H / 3) * i + 5} stroke="#cbd5e1" strokeDasharray="3 4" strokeOpacity="0.6" />
        ))}
        <path d={area} fill="url(#speedFill)" className="wf-area" />
        <path d={path} fill="none" stroke="url(#speedStroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="wf-line" />
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="#0ea5e9" stroke="white" strokeWidth="2" className="wf-dot" style={{ animationDelay: `${1.0 + i * 0.12}s` }} />
        ))}
        <g fontFamily="'Fira Code',monospace" fontSize="9" fill="#64748b" fontWeight="700">
          <text x="0"   y={H + 22}>2023</text>
          <text x="55"  y={H + 22}>Q3</text>
          <text x="120" y={H + 22}>2024</text>
          <text x="180" y={H + 22}>Q3</text>
          <text x="245" y={H + 22}>2025</text>
        </g>
        <text x={W - 10} y={20} textAnchor="end" fontFamily="'Fira Code',monospace" fontSize="10" fill="#10b981" fontWeight="800">▼ 80% faster</text>
      </svg>
      <style jsx>{`
        .wf-line { stroke-dasharray: 700; stroke-dashoffset: 700; animation: wfLineDraw 1.6s ease forwards; }
        .wf-area { opacity: 0; animation: wfAreaIn 0.6s 1.4s ease forwards; }
        .wf-dot  { opacity: 0; transform-origin: center; transform-box: fill-box; animation: wfDotPop 0.4s ease forwards; }
        @keyframes wfLineDraw { to { stroke-dashoffset: 0; } }
        @keyframes wfAreaIn   { to { opacity: 1; } }
        @keyframes wfDotPop   { 0% { opacity: 0; transform: scale(0); } 70% { transform: scale(1.4); } 100% { opacity: 1; transform: scale(1); } }
      `}</style>
    </ChartCard>
  );
}

function StackDonutChart() {
  const slices = [
    { label: "AppScript / AppSheet", pct: 35, color: "#16a34a" },
    { label: "Power BI / Excel",     pct: 22, color: "#f59e0b" },
    { label: "Python / ML",          pct: 18, color: "#8b5cf6" },
    { label: "WhatsApp / APIs",      pct: 15, color: "#10b981" },
    { label: "Web (Node / React)",   pct: 10, color: "#0ea5e9" },
  ];
  const R = 42, C = 50, STROKE = 14;
  const circumference = 2 * Math.PI * R;
  let offset = 0;
  return (
    <ChartCard title="Where the 30+ Projects Live" subtitle="Tech Mix" accent="#8b5cf6">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <svg viewBox="0 0 100 100" style={{ width: 120, height: 120, flexShrink: 0, transform: "rotate(-90deg)" }}>
          <circle cx={C} cy={C} r={R} fill="none" stroke="#f1f5f9" strokeWidth={STROKE} />
          {slices.map((s, i) => {
            const len = (s.pct / 100) * circumference;
            const el = (
              <circle key={s.label} cx={C} cy={C} r={R} fill="none"
                stroke={s.color} strokeWidth={STROKE}
                strokeDasharray={`${len} ${circumference}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
                className="wf-slice"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            );
            offset += len;
            return el;
          })}
        </svg>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {slices.map((s, i) => (
            <div key={s.label} className="wf-legend-row" style={{ display: "flex", alignItems: "center", gap: "0.5rem", animationDelay: `${0.5 + i * 0.08}s` }}>
              <span style={{ width: 10, height: 10, borderRadius: 3, background: s.color, flexShrink: 0 }} />
              <span style={{ fontSize: "0.7rem", color: "#334155", flex: 1, fontWeight: 600 }}>{s.label}</span>
              <span style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.7rem", color: s.color, fontWeight: 800 }}>{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .wf-slice  { stroke-dashoffset: 320 !important; animation: wfSliceIn 1s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        @keyframes wfSliceIn { to { /* let inline override */ } }
        .wf-slice  { animation-name: wfSliceReveal; }
        @keyframes wfSliceReveal { 0% { opacity: 0; stroke-width: 4; } 100% { opacity: 1; stroke-width: 14; } }
        .wf-legend-row { opacity: 0; transform: translateX(-8px); animation: wfLegendIn 0.4s ease forwards; }
        @keyframes wfLegendIn { to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </ChartCard>
  );
}

