import type { FC } from "react";
import { Copy } from "./Copy";

export const SkipLink: FC = () => (
  <a
    href="#main"
    className="p-2 absolute top-6 left-8 z-20 transition-transform transform -translate-y-16 focus:translate-y-0 focus:outline-none focus:ring ring-teal-600"
  >
    <Copy>Skip to content</Copy>
  </a>
);
