//https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916

import { Link, useLocation } from "react-router-dom";

const Header = () => {

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <nav className="sdds-nav sdds-u-top0 sdds-u-absolute">
        <div className="sdds-nav__left">
          <div className="sdds-nav__app-name">React Demo</div>
        </div>
        <div className="sdds-nav__center">
          <ul className="sdds-nav__inline-menu">
            <li className={splitLocation[1] === "" || splitLocation[1] === "web-components" ? "sdds-nav__item sdds-nav__item--active" : "sdds-nav__item" }>
              <Link className="sdds-nav__item-core" to="/web-components">
                <span className="sdds-nav__item-core-text">Web</span>
              </Link>
            </li>
            <li className={(splitLocation[1] === "native-components") ? "sdds-nav__item sdds-nav__item--active" : "sdds-nav__item" }>
            <Link className="sdds-nav__item-core" to="/native-components">
                <span className="sdds-nav__item-core-text">Native</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sdds-nav__right">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            className="sdds-nav__item sdds-nav__app-logo"
            href="/"
          ></a>
        </div>
      </nav>

    </>
  );
};

export default Header;
