/** @format */

import React, { FunctionComponent } from 'react'
import * as styles from './Desktop.treat'

const Desktop: FunctionComponent = (props) => (
  <div className={styles.desktop}>{props.children}</div>
)

export default Desktop
