import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gabriel Gondim — Mobile Developer",
  description:
    "Portfolio of Gabriel Gondim, a mobile developer crafting polished, performant mobile experiences with React Native and modern tooling.",
  keywords: [
    "Mobile Developer",
    "React Native",
    "iOS",
    "Android",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Gabriel Gondim" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
