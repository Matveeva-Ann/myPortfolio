import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";
import { experienceArr } from "./experienceArr";
import { useEffect, useState } from "react";
import Title from "../../Title/Title";

export default function Experience() {
  return (
    <div className="experience">
      <Title>Experience</Title>

      <div>
        <ul className="experience__list" id="scrollingElement">
          {experienceArr.map((elem, index) => (
            <ExperienceCard data={elem} key={index}></ExperienceCard>
          ))}
        </ul>
      </div>
    </div>
  );
}
