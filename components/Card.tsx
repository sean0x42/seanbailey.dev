import type { FC, PropsWithChildren, ReactNode } from "react";

/* eslint-disable @next/next/no-img-element */
export interface CardProps extends PropsWithChildren {
  cover?: string;
  coverBg?: string;
  coverAlt?: string;
  badge?: ReactNode;
}

export const Card: FC<CardProps> = ({
  cover,
  coverBg,
  coverAlt,
  badge,
  children,
}) => {
  const classes = [
    "w-full aspect-[2/1] object-cover rounded mb-5 leading-none align-middle group-focus:ring-4 ring-teal-600",
  ];
  if (coverBg) classes.push(coverBg);

  return (
    <div className="relative flex h-full flex-col">
      {badge}
      {cover && (
        <img
          src={cover}
          className={classes.join(" ")}
          aria-hidden="true"
          alt={coverAlt}
        />
      )}
      {children}
    </div>
  );
};
