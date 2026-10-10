import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Providers } from "./components/Providers";
import styles from "./layout.module.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Otar Alasania — Mid Frontend Developer",
    template: "%s — Otar Alasania",
  },
  description: "Mid frontend developer specializing in fast, accessible interfaces.",
};

// cover → env(safe-area-inset-*) is non-zero on notched phones (used by the project sheet)
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${styles.html}`}
    >
      <body className={styles.body}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
