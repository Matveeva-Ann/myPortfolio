import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  
  return (
    <div className="projectCard__wrapper">
      <a href={project.link} className="projectCard__imgFrame" target="_blank">
        <img className="projectCard__img" src={project.img} alt="" />
      </a>
      <div className="projectCard__info">
        <div className="linksWrapper">
          <a href={project.link} target="_blank"><h3 className="projectCard__infoTitle">{project.title}</h3></a>
          <a href={project.gitHubLink} target="_blank" style={{textDecoration: 'underline'}}>GitHub</a>
        </div>
        <p>
          <span className="projectCard__text--bold">Technologies:</span>
          {project.technologies}
        </p>
        <div>
          <span className="projectCard__text--bold">Description:</span>
          <ul>
            {project.description.map((elem, index) => (
              <li key={index} className='projectCard__textItem'>→ {elem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
