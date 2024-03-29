import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.scss";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="headerMobile">
      <button type="button" aria-label="menu" className="headerMobile__btn">
        <RxHamburgerMenu />
      </button>
      {isMenuOpen && (
        <nav className="navMobile">
          <ul>
            {headerNavArr.map((elem, index) => (
              <li className="navigation__item" key={index}>
                <NavLink
                  to={elem.link}
                  className="navigation__link"
                  onMouseEnter={handleHover}
                >
                  {elem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
