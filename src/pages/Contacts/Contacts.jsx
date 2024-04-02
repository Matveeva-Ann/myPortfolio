import Title from "../../components/Title/Title";
import "./Contacts.scss";

export default function Contacts() {
  return (
    <div className="contacts__wrapper">
      <Title textAline='center'>Contacts</Title>

      <ul className="contactsList">
        <li className="contacts__item">
          Telegram:
          <a
            href="https://t.me/AnnaMatveyeyva"
            className="contacts__link"
            target="_blank"
          >
            @AnnaMatveyeyva
          </a>
        </li>
        <li className="contacts__item">
          Linkedin:
          <a
            href="https://www.linkedin.com/in/anna-matveeva-b77607255/"
            target="_blank"
            className="contacts__link"
          >
            https://www.linkedin.com/in/anna-matveeva
          </a>
        </li>
        <li className="contacts__item">
          Github:
          <a
            href="https://github.com/Matveeva-Ann"
            className="contacts__link"
            target="_blank"
          >
            https://github.com/Matveeva-Ann
          </a>
        </li>
      </ul>
    </div>
  );
}
