import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import {
  DM_Sans,
  Geist,
  Platypi,
  Zalando_Sans,
  Zalando_Sans_SemiExpanded,
} from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { SkipLink } from "@/components/skip-link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/footer";

const geist = Geist({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-geist",
  weight: "variable",
});

const platypi = Platypi({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-platypi",
  weight: "variable",
});

const dmSans = DM_Sans({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  weight: "variable",
});

const zalandoSansSemiExpanded = Zalando_Sans_SemiExpanded({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-zalando-sans-semi-expanded",
  weight: "variable",
});

const zalandoSans = Zalando_Sans({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-zalando-sans",
  weight: "variable",
});

const libron = localFont({
  src: [
    {
      path: "./fonts/Libron-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Libron-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Libron-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Libron-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-libron",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seanbailey.dev"),
  title: {
    default: "seanbailey.dev",
    template: "%s | seanbailey.dev",
  },
  description:
    "Designer, software engineer, and lover of side projects. Welcome to my home on the web!",
  authors: [{ name: "Sean Bailey", url: "https://www.seanbailey.dev" }],
  creator: "Sean Bailey",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html
    lang="en-AU"
    className={`${zalandoSansSemiExpanded.variable} ${zalandoSans.variable} ${dmSans.variable} ${geist.variable} ${platypi.variable} ${libron.variable}`}
  >
    <body>
      <SkipLink />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
