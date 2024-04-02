import { useEffect, useState } from "react";
import Title from "../../Title/Title";
import { educationArr } from "./educationArr";
import  EducationCard from './EducationCard';


export default function Education () {
  const [scrollHeight, setScrollHeight] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight = 100 + window.scrollY; // Визначаємо нову висоту в залежності від позиції прокрутки
      setScrollHeight(newHeight > 100 ? newHeight : 100); // Задаємо нову висоту елемента, але не менше мінімальної висоти (наприклад, 100px)
    };
    const windowHeight = window.innerHeight;
    const element = document.querySelector(".education__list");
    const elementOffsetTop = element.offsetTop;
    const visiblePortion = Math.max(0, scrollHeight - elementOffsetTop + 200);
    const beforeHeight = `${Math.min(visiblePortion, windowHeight)}px`;
    element.style.setProperty("--before-height", beforeHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="educationWrapper">
      <Title>Education</Title>
      <ul className="education__list">
        {educationArr.map((elem, index) => (
           <EducationCard data={elem} key={index}></EducationCard>
        ))}
      </ul>

      {/* <div style={{height: '800px'}}></div> */}
    </div>
  )
}