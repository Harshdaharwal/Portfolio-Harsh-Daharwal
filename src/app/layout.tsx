import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Daharwal — Data Analytics & Business Automation Expert",
  description: "Portfolio of Harsh Daharwal — Data Analytics, Business Automation, Python, Power BI, MySQL, Machine Learning specialist from Bhopal, MP.",
  keywords: ["Harsh Daharwal", "Data Analytics", "Business Automation", "Power BI", "Python", "Machine Learning", "Bhopal"],
  openGraph: {
    title: "Harsh Daharwal — Data Analytics & Business Automation",
    description: "Data Analytics & Business Automation Expert | 30+ Projects | Bhopal, MP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
