import ProjectList from "../../../public/json/projects.json"
import { ProjectCard } from "../ProjectCard"

export const Projects = () => {
    return (
        <div className="mx-2 sm:mx-0">
            {
                ProjectList.map( (project, key) => (
                    <div key={key} className="my-4">
                        <ProjectCard project={project}/>
                    </div>
                ))
            }
        </div>
    )
}