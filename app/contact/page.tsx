import type { Metadata } from "next";
import type { FC } from "react";
import { Container, Stack } from "@/components/layout";
import { Heading } from "@/components/prose/heading";
import { Copy } from "@/components/prose/copy";
import { RadioGroup, type RadioOption } from "@/components/forms/radio";

export const metadata: Metadata = {
  title: "Get in touch",
};

const options: RadioOption[] = [
  {
    label: "I'm looking for a quote",
    value: "quote",
  },
  {
    label: "I'm an existing customer",
    value: "existing",
  },
  {
    label: "Something else",
    value: "other",
  },
];

const ContactPage: FC = () => (
  <Container direction="column" width="prose" gap={6}>
    <Stack gap={2}>
      <Heading size={1} align="center">
        What can I help you with today?
      </Heading>

      <Copy size="large" align="center">
        Tell me a little about your request.
      </Copy>
    </Stack>

    <form>
      <RadioGroup columns={3} options={options} />
    </form>
  </Container>
);

export default ContactPage;
