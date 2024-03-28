import "./SideBar.scss";
import svgLinkedin from "../../assets/icons/linkedin.svg";
import svgGithub from "../../assets/icons/github.svg";
import svgTelegram from "../../assets/icons/telegram.svg";

export default function SideBar() {
  return (
    <aside className="sideBar">
      <ul>
        <li className="sideBar__icon">
          <a href="https://www.linkedin.com/in/anna-matveeva-b77607255/"  target="_blank">
            <img src={svgLinkedin} alt="LinkedIn Logo" />
          </a>
        </li>
        <li className="sideBar__icon">
          <a href="https://github.com/Matveeva-Ann"  target="_blank">
            <img src={svgGithub} alt="Github Logo" />
          </a>
        </li>
        <li className="sideBar__icon">
          <a href="https://t.me/AnnaMatveyeyva"  target="_blank">
            <img src={svgTelegram} alt="Telegram Logo" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
