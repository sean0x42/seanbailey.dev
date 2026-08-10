import type { FC, PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { SkipLink } from "./SkipLink";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SkipLink />
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </>
);
