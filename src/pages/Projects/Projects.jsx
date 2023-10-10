import './Projects.css';
import { ProjectList } from './ProjectList';

export default function Projects() {
  return (
    <div id='projects'>
      <hr />
      <h1>Projects</h1>
      <div className='projContainer'>
        {ProjectList.map((project, idx) => (
          <div className={project.class + ' card'} key={idx}>
            <a className={project.class}>{project.name}</a>
            <br />
            <img src={project.image} alt={project.name} />
            <p>{project.about}</p>
            <div className='techContainer'>
              {project.tech.map((t, id) => (
                <h5 className={project.class} key={id}>
                  {t}
                </h5>
              ))}
            </div>
            <div className='btnContainer'>
              <a
                href={project.github}
                className={project.class}
                target='_blank'
                rel='noreferrer'
              >
                Github Link
              </a>
              <a
                href={project.link}
                className={project.class}
                target='_blank'
                rel='noreferrer'
              >
                Live Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
