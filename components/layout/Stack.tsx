import { Children, type FC, type ReactNode } from "react";

interface StackProps {
  className?: string;
  space: `mt-${number}`;
  pushLast?: boolean;
  children?: ReactNode;
}

export const Stack: FC<StackProps> = ({
  className,
  space,
  pushLast,
  children,
}) => {
  const wrappedChildren = Children.map(children, (child) => (
    <div
      className={`first:mt-0 ${space}${pushLast ? " last:mt-auto last:pt-4" : ""}`}
    >
      {child}
    </div>
  ));

  return <div className={className}>{wrappedChildren}</div>;
};
