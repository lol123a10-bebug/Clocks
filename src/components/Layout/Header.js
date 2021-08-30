import Nav from "./Nav";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <Nav />
    </header>
  );
};

export default Header;
