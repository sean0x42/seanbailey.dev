import React from 'react'
import { AlertTriangle } from 'react-feather'

const IncompleteWarning: React.FunctionComponent = () => (
  <div className="styles.wrapper">
    <div className="styles.icon" aria-hidden="true">
      <AlertTriangle className="styles.iconInner" />
    </div>

    <p className="styles.copy">
      This page documents an incomplete or cancelled project. Some designs may
      be underdeveloped or awkward.
    </p>
  </div>
)

export default IncompleteWarning
