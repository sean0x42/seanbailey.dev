/* eslint-disable @next/next/no-img-element */
interface LogoProps {
  image?: string;
  alt?: string;
}

const Logo = ({ image, alt }: LogoProps) =>
  image ? <img className="styles.image" src={image} alt={alt} /> : null;

export default Logo;
