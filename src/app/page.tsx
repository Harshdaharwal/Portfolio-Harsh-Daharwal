"use client";
import dynamic from "next/dynamic";
import LeftSidebar from "./components/LeftSidebar";
import BehancePortfolio from "./components/BehancePortfolio";
import WelcomePopup from "./components/WelcomePopup";

const ThreeBackground = dynamic(() => import("./components/ThreeBackground"), { ssr: false });

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#c8dff0", backgroundImage: "url('/images/tools_bg.png')", backgroundAttachment: "fixed", backgroundSize: "cover" }}>
      <WelcomePopup />
      <ThreeBackground />
      {/* ── Fixed Left Sidebar ── */}
      <LeftSidebar />
      {/* ── Main scrollable content ── */}
      <main style={{ marginLeft: 260, flex: 1, minHeight: "100vh", position: "relative", zIndex: 2 }}>
        <BehancePortfolio />
      </main>
    </div>
  );
}
