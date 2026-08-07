import { Children, type ReactNode } from "react";

interface StackProps {
  className?: string;
  space: `mt-${number}`;
  pushLast?: boolean;
  children?: ReactNode;
}

const Stack = ({ className, space, pushLast, children }: StackProps) => {
  const wrappedChildren = Children.map(children, (child) => (
    <div
      className={`first:mt-0 ${space}${pushLast ? " last:mt-auto last:pt-4" : ""}`}
    >
      {child}
    </div>
  ));

  return <div className={className}>{wrappedChildren}</div>;
};

export default Stack;
