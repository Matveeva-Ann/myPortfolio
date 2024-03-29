import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>2024 © All Rights Reserved</p>
      <ul className="contactsList">
        <li className="contactsItem">
          Telegram:
          <a href="https://t.me/AnnaMatveyeyva" target="_blank">
            @AnnaMatveyeyva
          </a>
        </li>
        <li className="contactsItem">
          Linkedin:
          <a
            href="https://www.linkedin.com/in/anna-matveeva-b77607255/"
            target="_blank"
          >
            https://www.linkedin.com/in/anna-matveeva
          </a>
        </li>
        <li className="contactsItem">
          Github:
          <a href="https://github.com/Matveeva-Ann" target="_blank">
            https://github.com/Matveeva-Ann
          </a>
        </li>
      </ul>
    </footer>
  );
}
