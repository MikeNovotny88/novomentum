import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novomentum | AI That Creates Momentum",
  description:
    "Helping businesses adopt AI, automate workflows, modernize Microsoft 365, and build intelligent technology solutions.",
  keywords: [
    "AI Consulting",
    "Microsoft 365",
    "Automation",
    "Business Intelligence",
    "AI Agents",
    "CRM",
    "Copilot",
    "Idaho AI",
    "Digital Transformation",
  ],
  authors: [{ name: "Novomentum LLC" }],
  creator: "Novomentum",
  publisher: "Novomentum",
  metadataBase: new URL("https://novomentum.com"),
  openGraph: {
    title: "Novomentum",
    description:
      "AI Strategy • Automation • Microsoft Solutions • Business Intelligence",
    url: "https://novomentum.com",
    siteName: "Novomentum",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}