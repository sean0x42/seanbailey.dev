import type { FC, PropsWithChildren } from "react";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

const ArticlesLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={jetBrainsMono.variable}>{children}</div>
);

export default ArticlesLayout;
