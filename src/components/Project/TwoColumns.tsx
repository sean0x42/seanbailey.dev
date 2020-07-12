/** @format */

import React, { FunctionComponent } from 'react'
import * as styles from './TwoColumns.treat'

const TwoColumns: FunctionComponent = (props) => (
  <div className={styles.wrapper}>{props.children}</div>
)

export default TwoColumns
