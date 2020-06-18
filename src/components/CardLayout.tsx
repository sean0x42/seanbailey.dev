/** @format */

import React, { FunctionComponent } from 'react'
import * as styles from './CardLayout.treat'

const CardLayout: FunctionComponent = (props) => {
  return <ul className={styles.layout}>{props.children}</ul>
}

export default CardLayout
