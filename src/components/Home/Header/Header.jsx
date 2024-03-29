import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import audio from "../../../assets/multfilm-puzyir.mp3";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import "./Header.scss";
import { GoDownload } from "react-icons/go";
import IconCircle from "./IconCircle";
import { headerNavArr } from "./HeaderNavArr";
import useHeaderStyles from "../../../utils/useHeaderStyles";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const savedSound = localStorage.getItem("isSound");
  const defaultSound = savedSound ? JSON.parse(savedSound) : true;
  const [btnSong, setBtnSong] = useState(defaultSound);
  const location = useLocation();

  useHeaderStyles(location);

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href =
      "https://drive.google.com/file/d/1f490xge0pD3e5J-9Vz90xnfBY51v3ynZ/view?usp=sharing";
    anchor.download = "Anna_Matvieieva_Frontend_Developer(EN_UA).pdf";
    anchor.target = "_blank";
    anchor.click();
  };

  const handleHover = () => {
    const sound = document.getElementById("Sound");
    btnSong && sound.play();
  };

  function toggleSong() {
    localStorage.setItem("isSound", !btnSong);
    setBtnSong((prevState) => !prevState);
  }

  return (
    <div className="header">
      <div className="header--width">
        <HeaderMobile></HeaderMobile>

        <a href="/" className="logo">
          Anna Matveeva
        </a>

          <div
            className="navigation__item navigation__item--resume headerMobile"
            onClick={handleDownload}
          >
            <GoDownload /> Resume
          </div>
        <div className="headerNuv__wrapper">
          <button className="songBtn" onClick={toggleSong}>
            {btnSong ? <MdMusicNote /> : <MdMusicOff />}
          </button>
          <nav className="navDesktop">
            <ul className="navigation">
              {headerNavArr.map((elem, index) => (
                <li className="navigation__item" key={index}>
                  <NavLink
                    to={elem.link}
                    className="navigation__link"
                    onMouseEnter={handleHover}
                  >
                    {elem.name}
                  </NavLink>
                  <IconCircle className={elem.iconClass}></IconCircle>
                </li>
              ))}

              <li
                className="navigation__item navigation__item--resume"
                onClick={handleDownload}
              >
                <GoDownload /> Resume
              </li>
              <audio id="Sound" src={audio}></audio>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
