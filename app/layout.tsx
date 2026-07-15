import type { Metadata } from "next";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import Gate from "@/components/Gate";

export const metadata: Metadata = {
  title: "murox.studio beta",
  description: "A modern, premium dark restaurant experience built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        <Gate>
          {children}
          <MusicPlayer />
        </Gate>
      </body>
    </html>
  );
}
