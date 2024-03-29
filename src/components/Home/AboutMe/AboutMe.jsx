import runPhoto from "../../../assets/myPhoto/53af1def.jpg";
import runPhoto2 from "../../../assets/myPhoto/IMG_7874.jpg";
import carPhoto from "../../../assets/myPhoto/1badb183-d745-4482-9719-b8373a1ccd00.jpg";
import catPhoto from "../../../assets/myPhoto/9cace46a-09ec-4525-afe1-b9fcbf565c39.jpg";
import "./AboutMe.scss";
import ArrowSecond from "../../IconComponents.jsx/ArrowSecond";
import Transition from "../../IconComponents.jsx/Transition";

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
          <p className="questions questions__answer">Write to me</p>
          <svg
            className="questions__arrow"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="120"
            viewBox="0 0 123.85 12.57"
          >
            <path
              d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
              fill="currentColor"
            />
            <path
              d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
              fill="currentColor"
            />
            <path
              d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <Transition color="#6495ED"></Transition>
    </>
  );
}
