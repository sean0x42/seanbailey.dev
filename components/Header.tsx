import type { FC } from "react";
import { Logo } from "./Logo";
import { Wrapper } from "./Wrapper";

export const Header: FC = () => (
  <header className="pt-5 md:pt-10 mb-20">
    <Wrapper width="max-w-prose md:max-w-6xl">
      <div className="relative z-10 flex items-center justify-between">
        <Logo />
      </div>
    </Wrapper>
  </header>
);
