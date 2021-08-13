import React from "react";
import { Link } from "gatsby";

const ThanksForReading: React.FunctionComponent = () => (
  <Link to="/projects" className="styles.wrapper">
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
  </Link>
);

export default ThanksForReading;
