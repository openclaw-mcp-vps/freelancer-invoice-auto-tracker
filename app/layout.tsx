import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Auto-Tracker — Auto-track billable hours from your browser activity",
  description: "Browser extension that automatically categorizes tabs and apps into billable client work and generates timesheets and invoices. Built for freelance developers, designers, and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8afef83a-312d-441a-8092-f44c96a743fe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
