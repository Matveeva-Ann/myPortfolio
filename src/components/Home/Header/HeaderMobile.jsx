import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerNavArr } from "./HeaderNavArr";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import "./Header.scss";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="headerMobile">
      <button type="button" aria-label="menu" className="headerMobile__btn" onClick={()=>setIsMenuOpen(true)}>
        <RxHamburgerMenu />
      </button>
      {isMenuOpen && (
        <nav className="navMobile">
          <button type="button" className="headerMobile__btnClose" onClick={()=>setIsMenuOpen(false)}><RxCross2 /></button>
          <ul className="navigationMobile__list">
            {headerNavArr.map((elem, index) => (
              <li className="navigation__item" key={index} onClick={()=>setIsMenuOpen(false)}>
                <NavLink
                  to={elem.link}
                  className="navigationMobile__link"
                >
                  {elem.name}
                </NavLink>
              </li>
            ))}
            <li className="navigation__item" onClick={()=>setIsMenuOpen(false)}>
                <NavLink
                  to='/contacts'
                  className="navigationMobile__link"
                >
                  Contacts
                </NavLink>
              </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
