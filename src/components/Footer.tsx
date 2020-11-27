import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import Wrapper from './Wrapper'
import * as styleRefs from './Footer.treat'
import { GitHub, Icon, Twitter, Linkedin } from 'react-feather'

interface SocialProps {
  icon: Icon
  title?: string
  to: string
}

const Social: FunctionComponent<SocialProps> = (props) => {
  const styles = useStyles(styleRefs)

  const Icon = props.icon

  return (
    <li>
      <a
        href={props.to}
        title={props.title}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialItem}
      >
        <Icon className={styles.socialIcon} aria-hidden="true" />
        <span className={styles.visuallyHidden}>{props.title}</span>
      </a>
    </li>
  )
}

const Footer: FunctionComponent = () => {
  const styles = useStyles(styleRefs)

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <ul className={styles.social}>
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

        <p className={styles.copyright}>
          Sean Bailey &copy; {new Date().getFullYear()}
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
