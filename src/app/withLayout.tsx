import React, { FunctionComponent } from "react";
import Layout from "../components/Layout";

/**
 * Wraps a component up inside a layout. This enables the use of treat themes
 * within a component.
 */
function withLayout<T>(
  WrappedComponent: FunctionComponent<T>,
): FunctionComponent<T> {
  const WithLayout: FunctionComponent<T> = (props) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );

  return WithLayout;
}

export default withLayout;
