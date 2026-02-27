import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Libre | Mobilidade que pertence a quem usa",
  description: "Deixe de Ser a Rota. Seja o Dono do Mapa. Junte-se a nós como sócio-fundador e construa o futuro da mobilidade no Brasil.",
  keywords: ["Uber", " rideshare", "motorista", "sócio", "investimento", "crowdfunding", "São Paulo", "mobilidade"],
  authors: [{ name: "Libre S.A." }],
  openGraph: {
    title: "Libre | Mobilidade que pertence a quem usa",
    description: "Deixe de Ser a Rota. Seja o Dono do Mapa.",
    type: "website",
    locale: "pt_BR",
    siteName: "Libre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
