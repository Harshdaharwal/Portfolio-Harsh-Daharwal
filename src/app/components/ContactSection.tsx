"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section" style={{ background: "rgba(255,255,255,0.97)" }}>
      <div style={{ maxWidth: 860 }}>
        <div className="section-badge">07 / Contact</div>
        <h2 className="section-title">
          Let&apos;s <span className="highlight">Connect</span>
        </h2>
        <p className="section-subtitle">
          Open to full-time roles, freelance analytics projects & automation consulting.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "2.5rem", alignItems: "start" }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { icon: "✉️", label: "Email", val: "harshdaharwal20@gmail.com", href: "mailto:harshdaharwal20@gmail.com", color: "#0ea5e9" },
              { icon: "📞", label: "Phone", val: "+91 9516896449", href: "tel:+919516896449", color: "#0369a1" },
              { icon: "📍", label: "Location", val: "Bhopal, Madhya Pradesh, India", color: "#0284c7" },
              { icon: "💼", label: "LinkedIn", val: "Harsh Daharwal", href: "https://www.linkedin.com/in/harsh-daharwal-1ab488291/", color: "#0ea5e9" },
            ].map((item) => (
              <div key={item.label} className="card" style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "1.25rem" }}>
                <span
                  style={{
                    width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                    background: `${item.color}10`, border: `1px solid ${item.color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem",
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#94a3b8", marginBottom: "0.2rem" }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ fontSize: "0.875rem", color: item.color, fontWeight: 600, textDecoration: "none" }}
                    >
                      {item.val}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.875rem", color: "#0c1a2e", fontWeight: 500 }}>{item.val}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Availability */}
            <div className="card" style={{ borderColor: "rgba(5,150,105,0.2)", background: "rgba(5,150,105,0.04)", padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                <span style={{ color: "#059669", fontWeight: 600, fontSize: "0.875rem" }}>Available for Work</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
                Open to full-time Data Analytics & Automation roles, freelance projects & consulting engagements.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="card" style={{ padding: "2rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontWeight: 700, color: "#0c1a2e", marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Thanks! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem", fontWeight: 500 }}>Name</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className="input-field" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem", fontWeight: 500 }}>Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="your@email.com" className="input-field" />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem", fontWeight: 500 }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={onChange} required placeholder="Project / Job / Collaboration" className="input-field" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#64748b", marginBottom: "0.4rem", fontWeight: 500 }}>Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project..." className="input-field" style={{ resize: "none" }} />
                </div>
                <button type="submit" disabled={loading} className="btn btn-blue" style={{ justifyContent: "center" }}>
                  {loading ? (
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                      Sending...
                    </span>
                  ) : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer note */}
        <div style={{ textAlign: "center", marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(14,165,233,0.1)" }}>
          <p style={{ fontSize: "0.8rem", color: "#94a3b8", fontFamily: "'Fira Code', monospace" }}>
            © 2025 Harsh Daharwal · Built with Next.js + Three.js + ❤️
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
