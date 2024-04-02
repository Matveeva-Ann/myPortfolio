import runPhoto from "../../../assets/myPhoto/53af1def.jpg";
import runPhoto2 from "../../../assets/myPhoto/IMG_7874.jpg";
import carPhoto from "../../../assets/myPhoto/1badb183-d745-4482-9719-b8373a1ccd00.jpg";
import catPhoto from "../../../assets/myPhoto/9cace46a-09ec-4525-afe1-b9fcbf565c39.jpg";
import "./AboutMe.scss";
import ArrowSecond from "../../IconComponents.jsx/ArrowSecond";
import Transition from "../../IconComponents.jsx/Transition";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <div className="aboutMe__wrapper">
        <Transition color="rgb(2, 63, 81)"></Transition>
        <div className="aboutMe__content">
          <h2 className="aboutMe__title">
            Peek into My Personal Side, Beyond the Professional Realm
          </h2>
          <article className="aboutMe__article">
            <p className="aboutMe__text">
              I used to attend boxing classes (as an amateur), enjoyed running
              and ran half marathons, but now all my free time is dedicated to
              frontend development.
            </p>
            <div className="aboutMe__articleImg aboutMe__img--tiltedRight ">
              <img className="aboutMe__img" src={runPhoto2} alt="" />
            </div>
            <div className="aboutMe__articleImg aboutMe__img--tilted ">
              <img className="aboutMe__img" src={runPhoto} alt="" />
            </div>
          </article>
          <article className="aboutMe__article aboutMe__article--revers">
            <p className="aboutMe__text">
              Always dreamed of my own car, but not like the one in this photo;
              it's just a retro car and it's no longer in use.
            </p>
            <div className="aboutMe__articleImg aboutMe__img--tiltedRight">
              <img className="aboutMe__img" src={carPhoto} alt="" />

              <div className="carPhoto__arrowWrapper">
                <p className="carPhoto__arrowText">
                  This is not my car, it's a retro car.
                </p>

                <ArrowSecond className="carPhoto__arrow"></ArrowSecond>
              </div>
            </div>
          </article>
          <article className="aboutMe__article">
            <p className="aboutMe__text">
              There is also room in my life for the joy of small victories and
              the willingness to rejoice like a child when things work out
              right. My cat is my tireless companion on this journey of learning
              and development.
            </p>
            <div className="aboutMe__articleImg aboutMe__img--tilted">
              <img className="aboutMe__img" src={catPhoto} alt="" />
              <div className="carPhoto__arrowWrapper catPhoto__arrowWrapper">
                <p className="catPhoto__arrowText">This is my cat</p>
                <ArrowSecond className="catPhoto__arrow"></ArrowSecond>
              </div>
            </div>
          </article>
        </div>

        <div style={{ position: "relative" }}>
          <p className="questions">Do you have any questions? </p>
          <Link to="/contacts" className="questions questions__answer">
            Write to me
          </Link>
        </div>
      </div>
      <Transition color="#6495ED"></Transition>
    </>
  );
}
