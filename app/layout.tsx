import type { Metadata } from "next";
import {
  Alike_Angular,
  Albert_Sans,
  IBM_Plex_Mono,
  Inter,
  Questrial,
} from "next/font/google";
import "./globals.css";

const alikeAngular = Alike_Angular({
  weight: "400",
  variable: "--font-alike-angular",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  weight: ["400", "500", "600"],
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const questrial = Questrial({
  weight: "400",
  variable: "--font-questrial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Popcorn — Your App Chat",
  description:
    "Team chat where every conversation contains an app. Talk about what you see, point at what matters, and watch it change, live.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alikeAngular.variable} ${albertSans.variable} ${ibmPlexMono.variable} ${inter.variable} ${questrial.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
