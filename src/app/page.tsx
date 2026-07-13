"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import LeftSidebar from "./components/LeftSidebar";
import BehancePortfolio from "./components/BehancePortfolio";
import WelcomePopup from "./components/WelcomePopup";

const ThreeBackground = dynamic(() => import("./components/ThreeBackground"), { ssr: false });

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="lp-root">
      <WelcomePopup />
      <ThreeBackground />

      {/* ── Mobile hamburger (hidden on desktop) ── */}
      <button className="lp-hamburger" aria-label="Open profile menu" onClick={() => setSidebarOpen(true)}>
        ☰
      </button>

      {/* ── Mobile backdrop behind the drawer ── */}
      <div className={`lp-backdrop${sidebarOpen ? " show" : ""}`} onClick={() => setSidebarOpen(false)} />

      {/* ── Fixed Left Sidebar (drawer on mobile) ── */}
      <LeftSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* ── Main scrollable content ── */}
      <main className="lp-main">
        <BehancePortfolio />
      </main>
    </div>
  );
}
