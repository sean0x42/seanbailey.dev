import React from 'react'

import Copy from './Copy'
import Stack from './layout/Stack'
import Link from './Link'
import Wrapper from './Wrapper'

const Footer: React.FunctionComponent = () => (
  <footer className="mb-4 mt-10 md:my-20 py-4">
    <Wrapper className="text-center" width="max-w-prose">
      <Stack space="mt-2">
        <Copy>
          As seen on{' '}
          <Link to="https://github.com/sean0x42" external>
            GitHub
          </Link>
          ,{' '}
          <Link to="https://twitter.com/sean0x42" external>
            Twitter
          </Link>{' '}
          and{' '}
          <Link to="https://www.linkedin.com/in/sean0x42/" external>
            LinkedIn
          </Link>
          .
        </Copy>

        <Copy>Sean Bailey &copy; {new Date().getFullYear()}</Copy>
      </Stack>
    </Wrapper>
  </footer>
)

export default Footer
