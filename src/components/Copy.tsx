import React from 'react'

export const Bold: React.FunctionComponent = (props) => (
  <strong className="text-primary-800 dark:text-primary-400 font-medium dark:font-normal">
    {props.children}
  </strong>
)

type Variant = 'suppressed' | 'normal' | 'highlighted' | 'heavy'
interface CopyProps {
  className?: string
  variant?: Variant
}

const impactVariants: Record<Variant, string> = {
  suppressed: 'text-grey-500 dark:text-grey-300',
  normal: 'text-grey-700 dark:text-grey-200',
  highlighted: 'text-primary-800 dark:text-primary-400',
  heavy: 'text-grey-800 dark:text-grey-100 font-medium dark:font-normal',
}

const Copy: React.FunctionComponent<CopyProps> = ({
  variant: impact = 'normal',
  ...props
}) => {
  const classes = ['max-w-prose', 'dark:font-light', impactVariants[impact]]
  props.className && classes.push(props.className)

  return <p className={classes.join(' ')}>{props.children}</p>
}

export default Copy
