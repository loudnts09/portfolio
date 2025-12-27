import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lourrayni Dantas | Desenvolvedor de Software",
  description: "Portfólio pessoal de Lourrayni Dantas - Desenvolvedor Full Stack especializado em criar experiências digitais modernas e impactantes.",
  keywords: ["portfólio", "desenvolvedor", "full stack", "web developer"],
  authors: [{ name: "Lourrayni Dantas" }],
  openGraph: {
    title: "Lourrayni Dantas | Desenvolvedor de Software",
    description: "Portfólio pessoal de Lourrayni Dantas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){try{var t=localStorage.getItem('theme')||'dark';var h=document.documentElement;if(t==='dark')h.classList.add('dark');else h.classList.remove('dark')}catch(e){}})();
            `,
          }}
        />
        
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            
            <main className="min-h-screen">
              {children}
            </main>
            
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
