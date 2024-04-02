import { useRef } from "react";
import { useEffect } from "react";
import "./Experience.scss";

export default function ExperienceCard({ data }) {
  const elementFirstRef = useRef(null);
  const elementSecondRef = useRef(null);

  useEffect(() => {
    const onEntry = (entries) => {
      entries.forEach((change) => {
        if (change.isIntersecting) {
          if (change.target === elementFirstRef.current) {
            change.target.classList.add("lineFirst");
          } else if (change.target === elementSecondRef.current) {
            change.target.classList.add("lineSecond");
          }
        } else {
          if (change.target === elementFirstRef.current) {
            change.target.classList.remove("lineFirst");
          } else if (change.target === elementSecondRef.current) {
            change.target.classList.remove("lineSecond");
          }
        }
      });
    };

    const observerOptions = {
      threshold: [0.5],
    };

    const observer = new IntersectionObserver(onEntry, observerOptions);

    if (elementFirstRef.current) {
      observer.observe(elementFirstRef.current);
    }

    if (elementSecondRef.current) {
      observer.observe(elementSecondRef.current);
    }

    return () => {
      if (elementFirstRef.current) {
        observer.unobserve(elementFirstRef.current);
      }

      if (elementSecondRef.current) {
        observer.unobserve(elementSecondRef.current);
      }
    };
  }, []);

  return (
    <li className="experienceCard">
      {data.imageUrl && <img src={data.imageUrl} alt="standing-woman" className="experienceCard__img"/>}
      <h3 className="experienceCard__title">
        <span>{data.position}</span>
        <span className="experienceCard__title--color">{data.company}</span>
      </h3>
      <p className="experienceCard__time">{data.time}</p>
      <p className="experienceCard__text">{data.description}</p>
      <div className="element-animationFirst" ref={elementFirstRef}></div>
      <div className="element-animationSecond" ref={elementSecondRef}></div>
    </li>
  );
}
