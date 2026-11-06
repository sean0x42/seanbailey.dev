import type { FC } from "react";
import { Logo } from "./logo";
import { Container } from "./layout";

export const Header: FC = () => (
  <Container as="header" paddingVertical={4}>
    <div className="relative z-10 flex items-center justify-between">
      <Logo />
    </div>
  </Container>
);
