import React from 'react'

import Copy from './Copy'
import Wrapper from './Wrapper'
import { GitHub, Icon, Twitter, Linkedin } from 'react-feather'

interface SocialProps {
  icon: Icon
  title?: string
  to: string
}

const Social: React.FunctionComponent<SocialProps> = (props) => {
  const Icon = props.icon

  return (
    <li>
      <a
        href={props.to}
        title={props.title}
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-6"
      >
        <Icon className="dark:text-white" aria-hidden="true" />
        <span className="sr-only">{props.title}</span>
      </a>
    </li>
  )
}

const Footer: React.FunctionComponent = () => (
  <footer className="flex flex-col mt-20 py-4">
    <Wrapper>
      <ul className="flex items-center justify-center">
        <Social
          icon={GitHub}
          to="https://github.com/sean0x42"
          title="My GitHub profile"
        />
        <Social
          icon={Twitter}
          to="https://twitter.com/sean0x42"
          title="My Twitter profile"
        />
        <Social
          icon={Linkedin}
          to="https://www.linkedin.com/in/sean0x42/"
          title="My LinkedIn profile"
        />
      </ul>

      <Copy className="text-center">
        Sean Bailey &copy; {new Date().getFullYear()}
      </Copy>
    </Wrapper>
  </footer>
)

export default Footer
