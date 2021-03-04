import React from 'react'
import { Link } from 'gatsby'

import Card from './Card'
import Copy from './Copy'
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

      <Copy className="flex items-center mt-4" aria-hidden="true">
        {props.moreCopy}
        <ArrowRightIcon className="ml-2" />
      </Copy>
    </Card>
  </Link>
)

export default LinkCard
