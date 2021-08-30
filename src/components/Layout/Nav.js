import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/hall">Hall</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
