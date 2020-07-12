/** @format */

import React, { FunctionComponent } from 'react'
import * as styles from './ThreeColumns.treat'

const ThreeColumns: FunctionComponent = (props) => (
  <div className={styles.wrapper}>{props.children}</div>
)

export default ThreeColumns
