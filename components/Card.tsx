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

export default Card;
