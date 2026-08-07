import NextLink from "next/link";

const ThanksForReading = () => (
  <NextLink href="/projects" className="styles.wrapper">
    <div>
      <h2 className="styles.heading">Thanks for reading!</h2>
      <p className="styles.copy">
        If you liked that project, why not check out some of my other work? I
        build and design websites, desktop apps, and more.
      </p>
      <p className="styles.seeMore" aria-hidden="true">
        See more
      </p>
    </div>
  </NextLink>
);

export default ThanksForReading;
