/* eslint-disable @next/next/no-img-element */
interface CardProps {
  cover?: string;
  coverBg?: string;
  coverAlt?: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

const Card = ({ cover, coverBg, coverAlt, badge, children }: CardProps) => {
  const classes = [
    "rounded mb-5 leading-none align-middle group-focus:ring-4 ring-teal-600",
  ];
  if (coverBg) classes.push(coverBg);

  return (
    <div className="relative">
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

export default Card;
