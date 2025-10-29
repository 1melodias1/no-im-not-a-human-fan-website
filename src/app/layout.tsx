import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website",
  description: "porftolio_website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        <header>
          <div className="header-lnks">
            <a href="https://github.com/1melodias1" target="_blank">
              Github
            </a>
            <a href="./">Home</a>
            <a href="/about-us">About us</a>
          </div>
        </header>

        <footer>
          <div className="footer_cont">
            <h1 className="copyright">Copyright © 2025 Melodias</h1>
            <p className="info">idk what i need to add here</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
