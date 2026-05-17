"use client";
import { useState, useEffect } from "react";

const navItems = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👤" },
  { id: "experience", label: "Experience", icon: "💼" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "certifications", label: "Certifications", icon: "🏆" },
  { id: "contact", label: "Contact", icon: "📩" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [active, setActive] = useState("hero");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const updateImg = () => setProfileImage(localStorage.getItem("portfolio_profile_img"));
    updateImg();
    window.addEventListener("profileUpdate", updateImg);
    return () => window.removeEventListener("profileUpdate", updateImg);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    onClose();
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <span>&lt;</span>HD<span> /&gt;</span>
      </div>

      {/* Avatar */}
      <div className="sidebar-avatar" style={{ marginTop: "0.75rem", position: "relative", overflow: "hidden" }}>
        <span style={{ position: "absolute", zIndex: 0 }}>HD</span>
        <img src={profileImage || "/profile.jpg"} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      </div>
      <div className="sidebar-name">Harsh Daharwal</div>
      <div className="sidebar-role">Business Automations Specialist</div>
      <div className="sidebar-loc">
        <span>📍</span> Bhopal, MP
      </div>

      {/* Navigation */}
      <div className="nav-section-label" style={{ marginTop: "1rem" }}>Navigation</div>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`sidebar-nav-link ${active === item.id ? "active" : ""}`}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}

      {/* Social */}
      <div className="sidebar-social">
        <div className="nav-section-label" style={{ marginTop: 0 }}>Connect</div>
        <a
          href="https://www.linkedin.com/in/harsh-daharwal-1ab488291/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-social-link"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn Profile
        </a>
        <a
          href="mailto:harshdaharwal20@gmail.com"
          className="sidebar-social-link"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Send Email
        </a>
      </div>
    </aside>
  );
}
