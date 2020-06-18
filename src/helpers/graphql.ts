/** @format */

import { GraphQLNodes } from '../app/types'

function flattenNodes<T>(instance: GraphQLNodes<T>): T[] {
  return instance.edges.map((edge) => edge.node)
}

export { flattenNodes }
