import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novomentum.com"),

  title: {
    default: "Novomentum | Helping Businesses Modernize, Automate & Grow",
    template: "%s | Novomentum",
  },

  description:
    "Novomentum helps businesses modernize Microsoft 365, automate workflows, implement practical AI, and build secure technology solutions that create measurable business momentum.",

  applicationName: "Novomentum",

  keywords: [
    "AI Consulting",
    "Microsoft 365",
    "Microsoft Copilot",
    "Business Automation",
    "Workflow Automation",
    "AI Agents",
    "Artificial Intelligence",
    "Cloud Consulting",
    "SharePoint",
    "Power Automate",
    "Business Intelligence",
    "CRM Integration",
    "Digital Transformation",
    "Technology Consulting",
    "Idaho IT Consulting",
  ],

  authors: [
    {
      name: "Novomentum LLC",
      url: "https://novomentum.com",
    },
  ],

  creator: "Novomentum LLC",
  publisher: "Novomentum LLC",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Novomentum | Helping Businesses Modernize, Automate & Grow",
    description:
      "AI Strategy • Microsoft 365 • Automation • AI Agents • Business Technology Consulting",

    url: "https://novomentum.com",

    siteName: "Novomentum",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Novomentum",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Novomentum",
    description:
      "Helping businesses modernize Microsoft 365, automate workflows, and implement practical AI.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}