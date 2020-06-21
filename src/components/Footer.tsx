/** @format */

import React from 'react'
import { useStyles } from 'react-treat'

import Wrapper from './Wrapper'
import * as styleRefs from './Footer.treat'
import { GitHub, Icon, Twitter, Linkedin } from 'react-feather'

interface SocialProps {
  icon: Icon
  to: string
}

function Social(props: SocialProps) {
  const styles = useStyles(styleRefs)

  const Icon = props.icon

  return (
    <li>
      <a href={props.to} target="_blank" className={styles.socialItem}>
        <Icon className={styles.socialIcon} />
      </a>
    </li>
  )
}

function Footer() {
  const styles = useStyles(styleRefs)

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <ul className={styles.social}>
          <Social icon={GitHub} to="https://github.com/sean0x42" />
          <Social icon={Twitter} to="https://twitter.com/sean0x42" />
          <Social icon={Linkedin} to="https://www.linkedin.com/in/sean0x42/" />
        </ul>

        <p className={styles.copyright}>
          Sean Bailey &copy; {new Date().getFullYear()}
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
