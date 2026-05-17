"use client";
import { useEffect, useState } from "react";

export default function WelcomePopup() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeT = setTimeout(() => setClosing(true), 2400);
    const hideT = setTimeout(() => setVisible(false), 3000);
    return () => { clearTimeout(closeT); clearTimeout(hideT); };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "linear-gradient(135deg, #0a1628 0%, #0c1a2e 50%, #0369a1 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: closing ? "welcomeFadeOut 0.6s ease forwards" : "welcomeFadeIn 0.4s ease forwards",
        padding: "1rem", textAlign: "center",
      }}
    >
      <div style={{
        animation: closing ? "welcomeTextOut 0.6s ease forwards" : "welcomeTextIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards",
      }}>
        <div style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: "clamp(0.75rem, 1.6vw, 0.95rem)",
          letterSpacing: "0.3em",
          color: "#38bdf8",
          marginBottom: "1.25rem",
          textTransform: "uppercase",
        }}>
          ✦ &nbsp;Welcome to&nbsp; ✦
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 6vw, 4rem)",
          margin: 0,
          letterSpacing: "-1px",
          lineHeight: 1.1,
          background: "linear-gradient(135deg, #ffffff 0%, #7dd3fc 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          Harsh Daharwal
        </h1>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(0.95rem, 2.2vw, 1.3rem)",
          color: "#7dd3fc",
          marginTop: "0.65rem",
          letterSpacing: "0.04em",
        }}>
          Business Automation Expert
        </div>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(0.85rem, 2vw, 1.15rem)",
          color: "#cbd5e1",
          marginTop: "0.4rem",
          letterSpacing: "0.05em",
        }}>
          Portfolio
        </div>
      </div>

      <style jsx global>{`
        @keyframes welcomeFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes welcomeFadeOut { from { opacity: 1 } to { opacity: 0 } }
        @keyframes welcomeTextIn {
          0%   { opacity: 0; transform: translateY(20px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes welcomeTextOut {
          0%   { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-12px) scale(0.98); }
        }
      `}</style>
    </div>
  );
}
