import React from "react";
import { Image } from "../../app/types";

interface HeaderProps {
  coverImage: Image;
  title: string;
  date: string;
}

const Header: React.FunctionComponent<HeaderProps> = (props) => (
  <div className="styles.header">
    <h1 className="styles.title">{props.title}</h1>
    <p className="styles.date">{props.date}</p>
  </div>
);

export default Header;
