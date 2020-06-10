/** @format */

import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'

import * as styleRefs from './social.treat'
import GithubIcon from '../assets/github.svg'
import TwitterIcon from '../assets/twitter.svg'

interface SocialItemProps {
  to: string
  title: string
}

const SocialItem: FunctionComponent<SocialItemProps> = props => {
  const styles = useStyles(styleRefs)

  return (
    <li>
      <a
        className={styles.socialItem}
        href={props.to}
        title={props.title}
        target="_blank"
      >
        {props.children}
        <span className={styles.socialTitle}>{props.title}</span>
      </a>
    </li>
  )
}

function Social() {
  const styles = useStyles(styleRefs)

  return (
    <ul className={styles.social}>
      <SocialItem to="https://github.com/sean0x42" title="GitHub">
        <GithubIcon className={styles.socialIcon} aria-hidden="true" />
      </SocialItem>

      <SocialItem to="https://twitter.com/sean0x42" title="Twitter">
        <TwitterIcon className={styles.socialIcon} aria-hidden="true" />
      </SocialItem>
    </ul>
  )
}

export default Social
