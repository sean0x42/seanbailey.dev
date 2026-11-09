import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { SkipLink } from "@/components/skip-link";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

const dmSans = DM_Sans({
  adjustFontFallback: false,
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  weight: "variable",
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
  <html lang="en-AU" className={`${dmSans.variable}`}>
    <body>
      <SkipLink />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
