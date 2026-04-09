import type { Metadata } from "next";
import {
  Albert_Sans,
  IBM_Plex_Mono,
  Inter,
  Questrial,
  DM_Serif_Display,
  Libre_Baskerville,
  Source_Serif_4,
  Lora,
  Petrona,
  Fraunces,
  Instrument_Serif,
  Playfair_Display,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const synt = localFont({
  src: "./fonts/ABCSynt-Regular.otf",
  variable: "--font-synt",
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

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  weight: ["400", "600", "700"],
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  subsets: ["latin"],
});

const petrona = Petrona({
  weight: ["400", "500", "600", "700"],
  variable: "--font-petrona",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
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
      className={`${synt.variable} ${albertSans.variable} ${ibmPlexMono.variable} ${inter.variable} ${questrial.variable} ${dmSerifDisplay.variable} ${libreBaskerville.variable} ${sourceSerif4.variable} ${lora.variable} ${petrona.variable} ${fraunces.variable} ${instrumentSerif.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
