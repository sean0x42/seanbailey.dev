import type { Metadata } from "next";

import ButtonLink from "@/components/ButtonLink";
import Copy from "@/components/Copy";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import Stack from "@/components/layout/Stack";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Thanks!",
  robots: { index: false },
};

export default function SubscribedPage() {
  return (
    <Layout>
      <Wrapper width="max-w-prose">
        <Stack space="mt-2">
          <Heading level={1}>Thanks!</Heading>
          <Copy>
            You have been successfully subscribed to my mailing list. Thank you
            for your support!
          </Copy>
          <ButtonLink to="/">Return home</ButtonLink>
        </Stack>
      </Wrapper>
    </Layout>
  );
}
