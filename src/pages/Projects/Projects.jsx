import "./Projects.css"
import { ProjectList } from "./ProjectList"

export default function Projects() {
    return(
        <div id="projects">
            <h1>Projects</h1>
            {ProjectList.map((project, idx)=>(
                <div className={project.class + " card"} key={idx}>
                    <img src={project.image} alt={project.name}/>
                    <p>{project.about}</p>
                    <div>
                        {project.tech.map((t,id)=>(
                            <h5 className={project.class} key={id}>{t}</h5>
                        ))}
                    </div>
                    <div>
                        <a href={project.github} className={project.class}>Github Link</a>
                        <a href={project.link} className={project.class}>Live Link</a>
                    </div>
                </div> 
            ))}
        </div>
    )
}