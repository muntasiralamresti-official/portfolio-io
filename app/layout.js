import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Muntasir Alam | Frontend Developer",
  description:
    "Frontend developer portfolio by Muntasir Alam Resti",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "UI UX Designer",
    "WordPress Developer",
    "Digital Marketer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}