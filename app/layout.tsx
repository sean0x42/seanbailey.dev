import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { Inter, Red_Hat_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-red-hat-display",
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
  <html
    lang="en-AU"
    className={`dark ${inter.variable} ${redHatDisplay.variable}`}
  >
    <body>{children}</body>
  </html>
);

export default RootLayout;
