/** @format */

import React, { FunctionComponent } from 'react'
import * as styles from './Column.treat'

const Column: FunctionComponent = (props) => (
  <div className={styles.wrapper}>{props.children}</div>
)

export default Column
