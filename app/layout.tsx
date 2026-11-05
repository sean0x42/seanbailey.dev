import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { Platypi } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const platypi = Platypi({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-platypi",
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
  icons: {
    icon: "/favicon.png",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en-AU" className={`${platypi.variable} ${libron.variable}`}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
