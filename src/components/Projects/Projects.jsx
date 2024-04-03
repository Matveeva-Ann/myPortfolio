
import ProjectCard from "../../components/Projects/ProjectCard/ProjectCard";
import { projectArr } from "./ProjectsArr";
import "./Projects.scss";

export default function Projects() {
  
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
