import type { FC } from "react";
import { Copy } from "./prose/copy";
import { Link } from "./Link";
import { Stack } from "./layout/Stack";
import { Container } from "./layout";

export const Footer: FC = () => (
  <footer className="mt-12 py-10 bg-linear-to-b from-white to-teal-200 text-center">
    <Container width="prose">
      <Stack space="mt-2">
        <Copy>
          As seen on{" "}
          <Link to="https://github.com/sean0x42" external>
            GitHub
          </Link>{" "}
          and{" "}
          <Link to="https://www.linkedin.com/in/sean0x42/" external>
            LinkedIn
          </Link>
          .
        </Copy>

        <Copy>Sean Bailey &copy; {new Date().getFullYear()}</Copy>
        <Copy>ABN 89 833 741 962</Copy>
      </Stack>
    </Container>
  </footer>
);
