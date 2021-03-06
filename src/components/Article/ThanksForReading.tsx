import React, { FunctionComponent } from 'react'
import { useStyles } from 'react-treat'
import { Award } from 'react-feather'

import * as styleRefs from './ThanksForReading.treat'
import SubscribeForm from '../SubscribeForm'

const ThanksForReading: FunctionComponent = () => {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon} aria-hidden="true">
        <Award className={styles.iconInner} />
      </div>

      <div>
        <h2 className={styles.heading}>Thanks for reading</h2>
        <p className={styles.copy}>
          If you liked that article, why not subscribe to my mailing list? I
          write mostly about design and programming.
        </p>
        <p className={styles.highlight}>100% spam and tracker free!</p>
      </div>

      <SubscribeForm />
    </div>
  )
}

export default ThanksForReading
