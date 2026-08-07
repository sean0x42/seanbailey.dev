import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import SkipLink from "./SkipLink";

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <SkipLink />
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </>
);

export default Layout;
