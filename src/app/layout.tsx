import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coup. - iMessage Automation",
  description: "iMessage Automation for Teams and AI Workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
