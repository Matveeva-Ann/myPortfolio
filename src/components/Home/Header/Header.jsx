import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import audio from "../../../assets/multfilm-puzyir.mp3";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import "./Header.scss";
import { useEffect } from "react";
import { GoDownload } from "react-icons/go";

export default function Header() {
  const [btn, setBtn] = useState(true);
  const location =useLocation();

  useEffect(()=>{
    if (location.pathname === '/') {
      document.documentElement.style.setProperty('--textColor', '#fff');
      document.documentElement.style.setProperty('--BGColor', 'rgb(2, 63, 81)');
    } else if (location.pathname === '/projects') {
      document.documentElement.style.setProperty('--textColor', 'rgb(247 244 116)');
      document.documentElement.style.setProperty('--BGColor', 'rgb(253 45 120)');
    } else {
      document.documentElement.style.setProperty('--textColor', '#000');
      document.documentElement.style.setProperty('--BGColor', 'rgb(247 244 116)');
    }
  }, [location])

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = 'https://drive.google.com/file/d/1f490xge0pD3e5J-9Vz90xnfBY51v3ynZ/view?usp=sharing'; 
    anchor.download = 'Anna_Matvieieva_Frontend_Developer(EN_UA).pdf';
    anchor.click();
  };

  const handleHover = () => {
    let sound = document.getElementById("Sound");
    btn && sound.play();
  };

  return (
    <div className="header">
      <a href="/" className="logo">
        Anna Matveeva
      </a>
      <div className="headerNuv__wrapper">
        <button
          className="songBtn"
          onClick={() => setBtn((prevState) => !prevState)}
        >
          {btn ? <MdMusicNote /> : <MdMusicOff />}
        </button>
        <nav>
          <ul className="navigation">
            <li className="navigation__item">
              <NavLink
                to="/"
                className="navigation__link"
                onMouseEnter={handleHover}
              >
                Home
              </NavLink>
              <svg
                className="nav-circle nav-circle--shirt"
                xmlns="http://www.w3.org/2000/svg"
                height="130%"
                width="130%"
                viewBox="-35 -50 920.39 800.7"
                preserveAspectRatio="none"
              >
                <path
                  d="M462,3.75c-.5,6.13,16.09,3.82,19.83,5.29,22.56,2.49,45.19,4.25,67.65,8,60.58,12.58,121.24,36,173.47,77.56,78.41,68.46,145.35,171.16,133.61,298.51-12.12,74.69-55.06,134-101.87,178.91.22-.22.44-.44.67-.65-42.7,42-91,73.77-140.72,100.33l.37-.19-.78.41.06,0c-95.62,53.07-203.61,63-306.45,47l.68.12c-48.06-8.52-96.18-21.09-141.15-44.64l.12.07C92.24,634,16.51,558,6,449.25c0,.22,0,.45.08.68-12.28-119,32.81-225.41,107-296L113,154l.37-.36-.21.21C228.13,46.64,381,19.65,520.13,42.31l-.4-.07c52.58,8.91,104.44,25.68,153.34,51.83L673,94c34.34,19.21,70.22,40.67,94.26,78.4l-.13-.23.19.33,0-.07c9.49,15.46,16.23,34.5,15.86,54.34.6,2.92-1.93,10.83.74,11.75,7.37-29.54-9-63.49-26-84C718.38,109.31,666.77,85,616.75,64.7,510.65,25.1,396.28,19,288.43,51.07,168,84,40.41,176.89,7.54,336.82c-24.42,127.25,11.19,229.06,96.55,300.87,86.22,72.53,193.53,93.61,295.36,95,53.49-.53,106.85-8.08,158.47-26.23,39.54-14.15,77.14-36.31,113.92-59.26C752.35,594,836.63,519.16,862,403c6.11-49.31.42-101.72-15.83-147.2-21.7-60.56-59.14-109.6-99.88-150.55-36.21-36.81-80-59.13-124.15-75.95-40.6-16.58-83-23.51-125.45-26.48Q484.56,1.66,472.41.63c-3.34.08-9.78-2.8-10.42,3.12ZM349.73,41.16h0ZM197.13,92.22l-.32.17.32-.17Zm475.61,1.67L673,94l-.22-.12Zm71.57,50.05a2.09,2.09,0,0,0,.22.2,2.09,2.09,0,0,1-.22-.2Zm-654.24,474,.2.2-.2-.2Zm77.46,56.51.39.21-.39-.21ZM472.05,720.1l-.39.07.39-.07Zm142.23-48.2.35-.19-.35.19Zm153-499.44,0,0,0,0ZM113.14,153.87l0,0,.09-.08,0,0Z"
                  fill="currentColor"
                  strokeWidth="7"
                  stroke="currentColor"
                ></path>
              </svg>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/about"
                className="navigation__link"
                onMouseEnter={handleHover}
              >
                About Me
              </NavLink>
              <svg
                className="nav-circle nav-circle--long"
                xmlns="http://www.w3.org/2000/svg"
                height="130%"
                width="130%"
                viewBox="-35 -50 920.39 800.7"
                preserveAspectRatio="none"
              >
                <path
                  d="M462,3.75c-.5,6.13,16.09,3.82,19.83,5.29,22.56,2.49,45.19,4.25,67.65,8,60.58,12.58,121.24,36,173.47,77.56,78.41,68.46,145.35,171.16,133.61,298.51-12.12,74.69-55.06,134-101.87,178.91.22-.22.44-.44.67-.65-42.7,42-91,73.77-140.72,100.33l.37-.19-.78.41.06,0c-95.62,53.07-203.61,63-306.45,47l.68.12c-48.06-8.52-96.18-21.09-141.15-44.64l.12.07C92.24,634,16.51,558,6,449.25c0,.22,0,.45.08.68-12.28-119,32.81-225.41,107-296L113,154l.37-.36-.21.21C228.13,46.64,381,19.65,520.13,42.31l-.4-.07c52.58,8.91,104.44,25.68,153.34,51.83L673,94c34.34,19.21,70.22,40.67,94.26,78.4l-.13-.23.19.33,0-.07c9.49,15.46,16.23,34.5,15.86,54.34.6,2.92-1.93,10.83.74,11.75,7.37-29.54-9-63.49-26-84C718.38,109.31,666.77,85,616.75,64.7,510.65,25.1,396.28,19,288.43,51.07,168,84,40.41,176.89,7.54,336.82c-24.42,127.25,11.19,229.06,96.55,300.87,86.22,72.53,193.53,93.61,295.36,95,53.49-.53,106.85-8.08,158.47-26.23,39.54-14.15,77.14-36.31,113.92-59.26C752.35,594,836.63,519.16,862,403c6.11-49.31.42-101.72-15.83-147.2-21.7-60.56-59.14-109.6-99.88-150.55-36.21-36.81-80-59.13-124.15-75.95-40.6-16.58-83-23.51-125.45-26.48Q484.56,1.66,472.41.63c-3.34.08-9.78-2.8-10.42,3.12ZM349.73,41.16h0ZM197.13,92.22l-.32.17.32-.17Zm475.61,1.67L673,94l-.22-.12Zm71.57,50.05a2.09,2.09,0,0,0,.22.2,2.09,2.09,0,0,1-.22-.2Zm-654.24,474,.2.2-.2-.2Zm77.46,56.51.39.21-.39-.21ZM472.05,720.1l-.39.07.39-.07Zm142.23-48.2.35-.19-.35.19Zm153-499.44,0,0,0,0ZM113.14,153.87l0,0,.09-.08,0,0Z"
                  fill="currentColor"
                  strokeWidth="7"
                  stroke="currentColor"
                ></path>
              </svg>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/projects"
                className="navigation__link"
                onMouseEnter={handleHover}
              >
                Projects
              </NavLink>
              <svg
                className="nav-circle"
                xmlns="http://www.w3.org/2000/svg"
                height="130%"
                width="130%"
                viewBox="-35 -50 920.39 800.7"
                preserveAspectRatio="none"
              >
                <path
                  d="M462,3.75c-.5,6.13,16.09,3.82,19.83,5.29,22.56,2.49,45.19,4.25,67.65,8,60.58,12.58,121.24,36,173.47,77.56,78.41,68.46,145.35,171.16,133.61,298.51-12.12,74.69-55.06,134-101.87,178.91.22-.22.44-.44.67-.65-42.7,42-91,73.77-140.72,100.33l.37-.19-.78.41.06,0c-95.62,53.07-203.61,63-306.45,47l.68.12c-48.06-8.52-96.18-21.09-141.15-44.64l.12.07C92.24,634,16.51,558,6,449.25c0,.22,0,.45.08.68-12.28-119,32.81-225.41,107-296L113,154l.37-.36-.21.21C228.13,46.64,381,19.65,520.13,42.31l-.4-.07c52.58,8.91,104.44,25.68,153.34,51.83L673,94c34.34,19.21,70.22,40.67,94.26,78.4l-.13-.23.19.33,0-.07c9.49,15.46,16.23,34.5,15.86,54.34.6,2.92-1.93,10.83.74,11.75,7.37-29.54-9-63.49-26-84C718.38,109.31,666.77,85,616.75,64.7,510.65,25.1,396.28,19,288.43,51.07,168,84,40.41,176.89,7.54,336.82c-24.42,127.25,11.19,229.06,96.55,300.87,86.22,72.53,193.53,93.61,295.36,95,53.49-.53,106.85-8.08,158.47-26.23,39.54-14.15,77.14-36.31,113.92-59.26C752.35,594,836.63,519.16,862,403c6.11-49.31.42-101.72-15.83-147.2-21.7-60.56-59.14-109.6-99.88-150.55-36.21-36.81-80-59.13-124.15-75.95-40.6-16.58-83-23.51-125.45-26.48Q484.56,1.66,472.41.63c-3.34.08-9.78-2.8-10.42,3.12ZM349.73,41.16h0ZM197.13,92.22l-.32.17.32-.17Zm475.61,1.67L673,94l-.22-.12Zm71.57,50.05a2.09,2.09,0,0,0,.22.2,2.09,2.09,0,0,1-.22-.2Zm-654.24,474,.2.2-.2-.2Zm77.46,56.51.39.21-.39-.21ZM472.05,720.1l-.39.07.39-.07Zm142.23-48.2.35-.19-.35.19Zm153-499.44,0,0,0,0ZM113.14,153.87l0,0,.09-.08,0,0Z"
                  fill="currentColor"
                  strokeWidth="7"
                  stroke="currentColor"
                ></path>
              </svg>
            </li>
            <li className="navigation__item navigation__item--resume"  onClick={handleDownload}>
              <GoDownload /> Resume
            </li>
            <audio id="Sound" src={audio}></audio>
          </ul>
        </nav>
      </div>
    </div>
  );
}
