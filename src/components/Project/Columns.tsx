/** @format */

import React, { FunctionComponent } from 'react'
import * as styles from './Columns.treat'

const Columns: FunctionComponent = (props) => (
  <div className={styles.columns}>{props.children}</div>
)

export default Columns
