import type { Metadata } from "next";
import type { FC } from "react";

import { ButtonLink } from "@/components/ButtonLink";
import { Copy } from "@/components/Copy";
import { Heading } from "@/components/Heading";
import { Layout } from "@/components/Layout";
import { Stack } from "@/components/layout/Stack";
import { Wrapper } from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "404: Not found",
  robots: { index: false },
};

const NotFound: FC = () => (
  <Layout>
    <Wrapper width="max-w-prose">
      <Stack space="mt-2">
        <Heading level={1}>Page Not Found</Heading>
        <Copy>
          There doesn&apos;t seem to be anything at this address. Double check
          the URL, or just return home.
        </Copy>
        <ButtonLink to="/">Return home</ButtonLink>
      </Stack>
    </Wrapper>
  </Layout>
);

export default NotFound;
