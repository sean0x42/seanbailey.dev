import Copy from "./Copy";
import Link from "./Link";
import Stack from "./layout/Stack";
import Wrapper from "./Wrapper";

const Footer = () => (
  <footer className="mb-4 mt-10 md:my-20 py-4">
    <Wrapper className="text-center" width="max-w-prose">
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
    </Wrapper>
  </footer>
);

export default Footer;
