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
  title: "Suman Thapa | Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Suman Thapa, a passionate Full Stack Developer specializing in modern web technologies, scalable applications, and clean code. Explore projects, skills, and contact information.",
  keywords: [
    "Suman Thapa",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend",
    "Backend",
    "Node.js",
    "Personal Website",
  ],
  authors: [{ name: "Suman Thapa" }],
  creator: "Suman Thapa",
  openGraph: {
    title: "Suman Thapa | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Suman Thapa, a passionate Full Stack Developer specializing in modern web technologies, scalable applications, and clean code.",
    url: "https://your-portfolio-url.com",
    siteName: "Suman Thapa Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suman Thapa | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Suman Thapa, a passionate Full Stack Developer specializing in modern web technologies, scalable applications, and clean code.",
    creator: "@yourtwitterhandle",
  },
  metadataBase: new URL("https://your-portfolio-url.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
