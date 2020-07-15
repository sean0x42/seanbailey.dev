/** @format */

import React from 'react'
import { useStyles } from 'react-treat'
import RellaxWrapper from 'react-rellax-wrapper'

import * as styleRefs from './DotGrid.treat'

function DotGrid() {
  const styles = useStyles(styleRefs)

  return (
    <RellaxWrapper speed={-1}>
      <svg viewBox="0 0 445 225" aria-hidden="true" className={styles.grid}>
        <circle cx={2.5} cy={2.5} r={2.5} />
        <circle cx={57.5} cy={2.5} r={2.5} />
        <circle cx={112.5} cy={2.5} r={2.5} />
        <circle cx={167.5} cy={2.5} r={2.5} />
        <circle cx={222.5} cy={2.5} r={2.5} />
        <circle cx={277.5} cy={2.5} r={2.5} />
        <circle cx={332.5} cy={2.5} r={2.5} />
        <circle cx={387.5} cy={2.5} r={2.5} />
        <circle cx={442.5} cy={2.5} r={2.5} />
        <circle cx={2.5} cy={57.5} r={2.5} />
        <circle cx={2.5} cy={112.5} r={2.5} />
        <circle cx={2.5} cy={167.5} r={2.5} />
        <circle cx={2.5} cy={222.5} r={2.5} />
        <circle cx={57.5} cy={57.5} r={2.5} />
        <circle cx={57.5} cy={112.5} r={2.5} />
        <circle cx={57.5} cy={167.5} r={2.5} />
        <circle cx={57.5} cy={222.5} r={2.5} />
        <circle cx={112.5} cy={57.5} r={2.5} />
        <circle cx={167.5} cy={57.5} r={2.5} />
        <circle cx={222.5} cy={57.5} r={2.5} />
        <circle cx={277.5} cy={57.5} r={2.5} />
        <circle cx={332.5} cy={57.5} r={2.5} />
        <circle cx={387.5} cy={57.5} r={2.5} />
        <circle cx={442.5} cy={57.5} r={2.5} />
        <circle cx={112.5} cy={112.5} r={2.5} />
        <circle cx={167.5} cy={112.5} r={2.5} />
        <circle cx={222.5} cy={112.5} r={2.5} />
        <circle cx={277.5} cy={112.5} r={2.5} />
        <circle cx={332.5} cy={112.5} r={2.5} />
        <circle cx={387.5} cy={112.5} r={2.5} />
        <circle cx={442.5} cy={112.5} r={2.5} />
        <circle cx={112.5} cy={167.5} r={2.5} />
        <circle cx={167.5} cy={167.5} r={2.5} />
        <circle cx={222.5} cy={167.5} r={2.5} />
        <circle cx={277.5} cy={167.5} r={2.5} />
        <circle cx={332.5} cy={167.5} r={2.5} />
        <circle cx={387.5} cy={167.5} r={2.5} />
        <circle cx={442.5} cy={167.5} r={2.5} />
        <circle cx={112.5} cy={222.5} r={2.5} />
        <circle cx={167.5} cy={222.5} r={2.5} />
        <circle cx={222.5} cy={222.5} r={2.5} />
        <circle cx={277.5} cy={222.5} r={2.5} />
        <circle cx={332.5} cy={222.5} r={2.5} />
        <circle cx={387.5} cy={222.5} r={2.5} />
        <circle cx={442.5} cy={222.5} r={2.5} />
      </svg>
    </RellaxWrapper>
  )
}

export default DotGrid
