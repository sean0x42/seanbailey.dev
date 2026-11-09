import type { Metadata } from "next";
import type { FC } from "react";

import { Copy } from "@/components/prose/copy";
import { Heading } from "@/components/prose/heading";
import { Container, Stack } from "@/components/layout";
import { PrimaryButton } from "@/components/button";

export const metadata: Metadata = {
  title: "404: Page Not found",
  robots: {
    index: false,
  },
};

const NotFound: FC = () => (
  <Container width="prose" direction="column" gap={5} items="center">
    <Stack gap={4}>
      <Heading size={1} align="center">
        404: Page Not Found
      </Heading>
      <Copy size="large" align="center">
        Whatever was here may have moved. Or there&apos;s a typo in the URL.
      </Copy>
    </Stack>

    <PrimaryButton href="/">Return home</PrimaryButton>
  </Container>
);

export default NotFound;
