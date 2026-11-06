import type { Metadata } from "next";
import type { FC } from "react";

import { ButtonLink } from "@/components/ButtonLink";
import { Copy } from "@/components/prose/copy";
import { Heading } from "@/components/prose/heading";
import { Container, VBox } from "@/components/layout";

export const metadata: Metadata = {
  title: "404: Not found",
  robots: {
    index: false,
  },
};

const NotFound: FC = () => (
  <Container width="prose">
    <VBox gap={2}>
      <Heading size={1}>Page Not Found</Heading>
      <Copy>
        There doesn&apos;t seem to be anything at this address. Double check the
        URL, or just return home.
      </Copy>
      <ButtonLink to="/">Return home</ButtonLink>
    </VBox>
  </Container>
);

export default NotFound;
