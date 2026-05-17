"use client";
import { useState, useEffect } from "react";

const navItems = [
  { id: "hero",          label: "Home",           icon: "🏠" },
  { id: "about",         label: "About",          icon: "👤" },
  { id: "experience",    label: "Experience",     icon: "💼" },
  { id: "education",     label: "Education",      icon: "🎓" },
  { id: "projects",      label: "Projects",       icon: "🚀" },
  { id: "skills",        label: "Skills",         icon: "⚡" },
  { id: "certifications",label: "Certifications", icon: "🏆" },
  { id: "contact",       label: "Contact",        icon: "📩" },
];

export default function TopNavbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const updateImg = () => setProfileImage(localStorage.getItem("portfolio_profile_img"));
    updateImg();
    window.addEventListener("profileUpdate", updateImg);
    return () => window.removeEventListener("profileUpdate", updateImg);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="topnav"
        style={{
          boxShadow: scrolled
            ? "0 4px 24px rgba(14,165,233,0.14)"
            : "0 2px 8px rgba(14,165,233,0.05)",
        }}
      >
        {/* ── Logo Left — Premium HD Badge ── */}
        <button
          onClick={() => scrollTo("hero")}
          className="topnav-logo"
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.55rem", padding: 0 }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(14,165,233,0.35)", flexShrink: 0,
            position: "relative", overflow: "hidden"
          }}>
            <span style={{ position: "absolute", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.88rem", color: "white", letterSpacing: "-0.5px", zIndex: 0 }}>HD</span>
            <img src={profileImage || "/profile.jpg"} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <div style={{ lineHeight: 1.15, textAlign: "left" }}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "0.88rem", color: "#0c1a2e", letterSpacing: "-0.3px" }}>Harsh Daharwal</div>
            <div style={{ fontFamily: "'Fira Code',monospace", fontSize: "0.5rem", color: "#0ea5e9", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Data · Analytics · Automation</div>
          </div>
        </button>

        {/* ── Desktop Nav Links (right) ── */}
        <ul className="topnav-links" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`topnav-link ${active === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* ── Hire Me CTA + Hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "auto" }}>
          <button
            onClick={() => scrollTo("contact")}
            className="topnav-hire"
          >
            Hire Me
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="topnav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px",
            }}
          >
            <span style={{ display: "block", width: 22, height: 2, background: "#0c1a2e", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#0c1a2e", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#0c1a2e", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      {menuOpen && (
        <div className="topnav-mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`topnav-mobile-link ${active === item.id ? "active" : ""}`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 860px) {
          .topnav-links { display: none !important; }
          .topnav-hamburger { display: flex !important; }
          .topnav { padding: 0 1.25rem; }
          .section { padding: 4rem 1.5rem !important; }
          .main-content { margin-top: 68px; }
        }
        @media (max-width: 600px) {
          .topnav-hire { display: none; }
        }
      `}</style>
    </>
  );
}
