interface HeaderProps {
  title: string;
  date: string;
}

const Header = ({ title, date }: HeaderProps) => (
  <div className="styles.header">
    <h1 className="styles.title">{title}</h1>
    <p className="styles.date">{date}</p>
  </div>
);

export default Header;
