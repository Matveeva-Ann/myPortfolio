import AboutMainInfo from "../../components/About/AboutMainInfo";
import Experience from "../../components/About/Experience/Experience";
import Skills from "../../components/About/Skills/Skills";
import "./About.scss";

export default function About() {
  return (
    <div className="aboutWrapper">
      <AboutMainInfo></AboutMainInfo>
      <Skills></Skills>
      <Experience></Experience>
    </div>
  );
}
