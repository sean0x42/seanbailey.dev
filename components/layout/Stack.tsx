import { Children, type ReactNode } from "react";

interface StackProps {
  className?: string;
  space: `mt-${number}`;
  children?: ReactNode;
}

const Stack = ({ className, space, children }: StackProps) => {
  const wrappedChildren = Children.map(children, (child) => (
    <div className={`first:mt-0 ${space}`}>{child}</div>
  ));

  return <div className={className}>{wrappedChildren}</div>;
};

export default Stack;
