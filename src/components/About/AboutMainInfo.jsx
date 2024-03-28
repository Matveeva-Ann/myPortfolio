import img from "../../assets/Дизайн без назви (1).png";
import "./AboutMainInfo.scss";

export default function AboutMainInfo() {
  return (
    <>
      <h2 className="aboutMainInfo__title">"Grow in code, develop in skills!"</h2>
      <div className="aboutMainInfo">
        
        <div className="aboutMainInfo__wrapper">
          <h3>BIOGRAPHY</h3>
          <p className="aboutMainInfo__text">
            In 2022, I decided to make a radical change in my life and therefore
            began searching for a job that I would truly enjoy. After trying out
            several different jobs, I settled on frontend development – it
            really resonated with me!
          </p>
          <p className="aboutMainInfo__text">
            After completing my initial courses, I realized that there was still
            a lot more to learn. So, I decided to take another course, and after
            finishing it, my skills improved significantly, and I felt more
            confident in my abilities.
          </p>
          <p className="aboutMainInfo__text">
            Now, I am enjoying creating user-friendly interfaces, working on
            personal projects, and seeking my first job as a frontend developer
            with great enthusiasm.
          </p>
        </div>
        <div className="aboutMainInfo__imgWrapper">
          <img src={img} className="aboutMainInfo__img" alt="photo" />
        </div>
      </div>
    </>
  );
}
