import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter=Inter({subsets:["latin"],variable:"--font-inter"});
export const metadata={title:"Muntasir Alam — Digital Space",description:"A modern digital portfolio for Muntasir Alam Resti."};

export default function RootLayout({children}){
  return <html lang="en" className={inter.variable}><body className="antialiased"><SmoothScroll>{children}</SmoothScroll></body></html>;
}