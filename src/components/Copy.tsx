import React from 'react'

export const Bold: React.FunctionComponent = (props) => (
  <strong className="text-grey-700 dark:text-teal-400 font-medium dark:font-normal">
    {props.children}
  </strong>
)

type Variant = 'suppressed' | 'normal' | 'highlighted' | 'heavy'
interface CopyProps {
  className?: string
  variant?: Variant
  width?: 'prose' | 'none'
}

const impactVariants: Record<Variant, string> = {
  suppressed: 'text-grey-500 dark:text-grey-300',
  normal: 'text-grey-700 dark:text-grey-200',
  highlighted: 'text-teal-800 dark:text-teal-400',
  heavy:
    'text-grey-800 dark:text-grey-100 font-medium dark:font-medium text-xl',
}

const widthVariants = {
  prose: 'max-w-prose',
  none: 'max-w-none',
}

const Copy: React.FunctionComponent<CopyProps> = ({
  variant: impact = 'normal',
  width = 'prose',
  ...props
}) => {
  const classes = [
    'dark:font-light',
    widthVariants[width],
    impactVariants[impact],
  ]
  props.className && classes.push(props.className)

  return <p className={classes.join(' ')}>{props.children}</p>
}

export default Copy
