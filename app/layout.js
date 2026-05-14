import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Muntasir Resti | Frontend Developer",
  description:
    "Futuristic developer portfolio of Muntasir Resti",
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "UI UX Designer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}