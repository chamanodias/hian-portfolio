import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = localFont({
  src: "./fonts/Geist-Regular.woff2",
  variable: "--font-body",
  display: "swap",
});
const displayFont = localFont({
  src: "./fonts/Geist-Black.woff2",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hian Vieira | Personal Trainer",
  description: "Treinamento personalizado com Hian Vieira. Conheça a proposta de acompanhamento, os planos e dê o próximo passo na sua rotina de treino.",
  robots: { index: false, follow: false },
};

const themeScript = `try{document.documentElement.dataset.theme=localStorage.getItem('hv-theme')==='light'?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
