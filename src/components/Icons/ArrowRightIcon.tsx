import React, { FunctionComponent } from 'react'
import { IconProps } from '.'

const ArrowRightIcon: FunctionComponent<IconProps> = (props) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    height="24px"
    width="24px"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
)

export default ArrowRightIcon
