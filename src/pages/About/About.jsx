import AboutMainInfo from "../../components/About/AboutMainInfo";
import Education from "../../components/About/Education/Education";
import Experience from "../../components/About/Experience/Experience";
import Skills from "../../components/About/Skills/Skills";
import { Link } from "react-router-dom";
import "./About.scss";

export default function About() {
  return (
    <div className="aboutWrapper">
      <AboutMainInfo></AboutMainInfo>
      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>

      <Link to="/contacts" className="questions__answerAbout">
        My contacts
      </Link>
    </div>
  );
}
