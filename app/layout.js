import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "../components/ThemeProvider";
import KonamiEaster from "../components/KonamiEaster";

export const metadata = {
  metadataBase: new URL("https://muntasiralamresti.vercel.app"),
  title: {
    default: "Muntasir Alam Resti | Frontend Developer & UI/UX Designer",
    template: "%s | Muntasir Alam Resti",
  },
  description:
    "Official portfolio of Muntasir Alam Resti, showcasing polished frontend work, UI/UX design, and product-minded web experiences.",
  keywords: [
    "Muntasir Alam Resti",
    "Muntasir Alam",
    "Muntasir Resti",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "UI UX Designer",
    "Bangladesh Frontend Developer",
    "Portfolio Website",
  ],
  alternates: {
    canonical: "https://muntasiralamresti.vercel.app",
  },
  authors: [{ name: "Muntasir Alam Resti" }],
  creator: "Muntasir Alam Resti",
  publisher: "Muntasir Alam Resti",
  applicationName: "Muntasir Alam Resti Portfolio",
  category: "technology",
  classification: "Portfolio website",
  icons: {
    icon: "/muntasir-logo.png",
    shortcut: "/muntasir-logo.png",
    apple: "/muntasir-logo.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Muntasir Alam Resti | Frontend Developer & UI/UX Designer",
    description:
      "Frontend developer portfolio showcasing polished web experiences, modern React and Next.js builds, and thoughtful product design.",
    url: "https://muntasiralamresti.vercel.app",
    siteName: "Muntasir Alam Resti",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Muntasir Alam Resti Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muntasir Alam Resti | Frontend Developer & UI/UX Designer",
    description: "Frontend developer portfolio featuring polished UI, modern web apps, and product-focused development.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0969da",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "WebSite"],
    name: "Muntasir Alam Resti",
    url: "https://muntasiralamresti.vercel.app",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer and UI/UX designer building polished, performant web experiences.",
    sameAs: [
      "https://github.com/muntasiralamresti-official",
      "https://www.linkedin.com/in/muntasir-alam-resti",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} transition-colors`}>
        <ThemeProvider>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
          {children}
          <KonamiEaster />
        </ThemeProvider>
      </body>
    </html>
  );
}