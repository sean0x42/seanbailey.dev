import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={jetBrainsMono.variable}>{children}</div>;
}
