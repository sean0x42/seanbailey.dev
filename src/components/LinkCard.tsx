import React from 'react'
import { Link } from 'gatsby'

import Card from './Card'
import { ArrowRightIcon } from './Icons'
import { Image } from '../app/types'

interface LinkCardProps {
  className?: string
  to: string
  cover?: Image
  moreCopy: string
  badge?: JSX.Element
}

const LinkCard: React.FunctionComponent<LinkCardProps> = (props) => (
  <Link to={props.to} className={props.className}>
    <Card cover={props.cover} badge={props.badge}>
      {props.children}

      <p className="flex items-center mt-4" aria-hidden="true">
        {props.moreCopy}
        <ArrowRightIcon className="ml-2" />
      </p>
    </Card>
  </Link>
)

export default LinkCard
