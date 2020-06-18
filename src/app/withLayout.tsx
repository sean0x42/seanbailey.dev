/** @format */

import React, { FunctionComponent } from 'react'
import Layout from '../components/Layout'

/**
 * Wraps a component up inside a layout. This enables the use of treat themes
 * within a component.
 */
function withLayout(WrappedComponent: FunctionComponent): FunctionComponent {
  return props => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  )
}

export default withLayout
