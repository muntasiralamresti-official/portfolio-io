import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "../components/ThemeProvider";
import KonamiEaster from "../components/KonamiEaster";

export const metadata = {

  metadataBase: new URL(
    "https://muntasiralamresti.vercel.app"
  ),

  title:
    "Muntasir Alam Resti | Frontend Developer",

  description:
    "Official portfolio of Muntasir Alam Resti, featuring a highly optimized, GitHub-inspired developer aesthetic.",

  keywords: [
    "Muntasir Alam Resti",
    "Muntasir Alam",
    "Muntasir Resti",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "GitHub Profile Portfolio",
    "UI UX Designer",
    "Bangladesh Frontend Developer",
  ],

  authors: [
    {
      name:
        "Muntasir Alam Resti",
    },
  ],

  creator:
    "Muntasir Alam Resti",

  publisher:
    "Muntasir Alam Resti",

  openGraph: {

    title:
      "Muntasir Alam Resti | Frontend Developer",

    description:
      "Frontend developer portfolio showcasing a unique GitHub-styled interface.",

    url:
      "https://muntasiralamresti.vercel.app",

    siteName:
      "Muntasir Alam Resti",

    locale:
      "en_US",

    type:
      "website",

    images: [

      {
        url:
          "/og-image.jpg",

        width: 1200,

        height: 630,

        alt:
          "Muntasir Alam Resti Portfolio",
      },

    ],

  },

  twitter: {

    card:
      "summary_large_image",

    title:
      "Muntasir Alam Resti | Frontend Developer",

    description:
      "Frontend developer portfolio featuring a live GitHub-inspired UI.",

    images: [
      "/og-image.jpg",
    ],

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

export default function RootLayout({
  children,
}) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body
        className={`${GeistSans.className} transition-colors`}
      >

        <ThemeProvider>
          {children}
          <KonamiEaster />
        </ThemeProvider>

      </body>

    </html>

  );

}