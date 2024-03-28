import "./Skills.scss";

export default function Skills() {
  const skillsArr = [
    "React",
    "Redux",
    "JavaScript",
    "TypeScript",
    "CSS/SCSS",
    "Angular",
    "Styled Components",
    "HTML",
    "Webpack",
  ];

  const getOrbitStyles = (index) => {
    const diameter = 1000 - index * 100;
    return {
      width: `${diameter}px`,
      height: `${diameter}px`,
      diameter: diameter,
    };
  };

  const getSkillItemStyles = (index) => {
    const minDuration = 20;
    const maxDuration = 60;
    const animationDuration =
      Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;
    const randomPosition = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
    console.log(randomPosition);
    const translateValue = 500 - index * 50;
    return {
      animationDuration: `${animationDuration}s`,
      "--translate-value": `${translateValue}px`,
    };
  };

  return (
    <div className="skillsWrapper">
      <h2 className="skills__title">Skills</h2>
      <div className="skills">
        {skillsArr.map((skill, index) => (
          <div className="orbit" style={getOrbitStyles(index)} key={skill}>
            <div className="skill__item" style={getSkillItemStyles(index)}>
              {skill}
            </div>
            {index === skillsArr.length - 1 && <p className="center">Web</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
