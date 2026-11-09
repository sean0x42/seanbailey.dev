import type { Metadata } from "next";
import type { FC } from "react";
import { ArrowUpRight, ZapIcon } from "lucide-react";

// import { ArticleCards } from "@/components/ArticleCards";
import { Bold, Copy, Heading } from "@/components/prose";
// import { formatArticleDate, getArticles } from "@/lib/articles";
import { Stack, Container, Inline, Grid, Box } from "@/components/layout";
import { PrimaryButton } from "@/components/button";

export const metadata: Metadata = {
  title: "Handmade websites, designed with passion.",
  description:
    "Forget AI slop. Delight your customers with an intuive, fast and secure website they'll actually love.",
};

const HomePage: FC = () => {
  // const articles = getArticles();

  return (
    <Container>
      <Stack gap={7}>
        <Grid columns={2} gap={9} items="center">
          <Stack gap={6} items="start">
            <Stack gap={4}>
              <Heading size={1}>
                Handmade websites, designed with passion.
              </Heading>

              <Copy size="large">
                Forget AI slop. Delight your customers with an intuitive, fast
                and secure website they&apos;ll actually love.
              </Copy>
            </Stack>

            <Stack gap={3} items="start">
              <PrimaryButton icon={ArrowUpRight} href="/contact">
                Get a quote
              </PrimaryButton>

              <Inline gap={1}>
                <ZapIcon size={16} />
                <Copy>I typically respond within 24 hours</Copy>
              </Inline>
            </Stack>
          </Stack>

          <div className="h-90 rounded-xl bg-gray-200" />
        </Grid>

        <Stack gap={4}>
          {/*<Heading size={2} align="center">
            A decade of happy clients
          </Heading>
*/}
          <Grid columns={2} gap={5} paddingHorizontal={0}>
            <Box
              background="grey100"
              padding={5}
              direction="column"
              gap={4}
              borderRadius="default"
            >
              <Copy>
                Quia et illum tempora consequatur aperiam sunt minus rerum.
                Corporis a voluptatem culpa sequi. Et qui ab velit est.
                Distinctio earum et dicta.
              </Copy>

              <Stack>
                <Copy>
                  <Bold>Stephen Hamer</Bold>, Owner
                </Copy>
                <Copy>North Coast Marble &amp; Granite</Copy>
              </Stack>
            </Box>

            <Box
              background="grey100"
              padding={5}
              direction="column"
              gap={4}
              borderRadius="default"
            >
              <Copy>
                Quia et illum tempora consequatur aperiam sunt minus rerum.
                Corporis a voluptatem culpa sequi. Et qui ab velit est.
                Distinctio earum et dicta.
              </Copy>

              <Stack>
                <Copy>
                  <Bold>Kerry Strydom</Bold>, CEO
                </Copy>
                <Copy>Australian Cancer Research Foundation</Copy>
              </Stack>
            </Box>
          </Grid>
        </Stack>

        <Stack gap={4}>
          <Heading size={2} align="center">
            How does it work?
          </Heading>
        </Stack>

        {/*<Stack gap={5}>
          <Heading size={1}>Articles</Heading>
          <ArticleCards
            articles={articles.map((article) => ({
              ...article,
              date: formatArticleDate(article.date),
              rawDate: article.date ?? "",
            }))}
          />
        </Stack>*/}
      </Stack>
    </Container>
  );
};

export default HomePage;
