import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";
import imgFirst from "../../assets/projectsImg/Screenshot_10.png";
import imgSecond from "../../assets/projectsImg/Screenshot_11.png";
import imgThird from "../../assets/projectsImg/Screenshot_12.png";
import imgFourth from "../../assets/projectsImg/Screenshot_13.png";
import "./Projects.scss";

export default function Projects() {
  const projectArr = [
    {
      title: "Social network",
      img: `${imgFourth}`,
      description: [
        "This was a team project. Сlosely collaborated with the backend team to enhance user experience and implemented the interface.",
        "Integrating APIs and websockets for real-time data communication.",
        "Implemented a responsive design with SCSS for optimal viewing across different devices.",
        "Implemented themes and multiple languages.",
      ],
      technologies:
        "React, SCSS, Redux Toolkit, Redux Persist, Websockets, i18n.",
      link: "http://twettrybust.us-east-1.elasticbeanstalk.com/#/",
      gitHubLink: "http://twettrybust.us-east-1.elasticbeanstalk.com/#/",
    },
    {
      title: "Studioglass store",
      img: `${imgFirst}`,
      description: [
        "The project was developed independently.",
        "Banners implemented using the Swiper library. You can also add new banners through the admin panel.",
        "Ability to leave contact information to communicate with the administrator.",
        "Separate login for the administrator.",
        "Through the admin panel, there is the ability to change the website’s content, add or remove product categories, add or delete products, as well as view order data and user contact information for communication.",
      ],
      technologies:
        "Angular, Angular Material, TypeScript, SCSS, Бібліотека Swiper",
      link: "https://studioglass-43402.web.app/",
      gitHubLink:
        "https://github.com/Matveeva-Ann/clothingStore?tab=readme-ov-file",
    },
    {
      title: "Clothing store",
      img: `${imgSecond}`,
      description: [
        "The project was developed independently.",
        "RTK Query was used for efficient data fetching and state management, ensuring seamless interaction with the server-side",
        "Implemented various themes.",
      ],
      technologies: "React, RTK Query, Emotion, Redux, Toolkit, Redux Persist",
      link: "https://clothing-store-0xvh.onrender.com/",
      gitHubLink:
        "https://github.com/Matveeva-Ann/clothingStore?tab=readme-ov-file",
    },
    {
      title: "Patient ManagerApp",
      img: `${imgThird}`,
      description: [
        "The project was a team collaboration.",
        "The project was implemented in pure JavaScript without using any frameworks.",
      ],
      technologies: "HTML, CSS, JS, Bootstrap",
      link: "https://matveeva-ann.github.io/stepProject-Cards/",
      gitHubLink: "https://github.com/Matveeva-Ann/stepProject-Cards",
    },
  ];

  return (
    <div className="projectsWrapper">
      <div className="projects">
        <h2> My projects</h2>
        <ul className="projects__list">
          {projectArr.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project}></ProjectCard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
