import { ProjectCardComponent } from "./types"


export const ProjectCard: ProjectCardComponent = ({ project }) => {
    return (
        <div className="glass p-4 text-white">
            <h1 className="font-semibold text-lg"><a href={project.website} target="_blank">{project.name}</a></h1>
            <div className="flex gap-2 my-2">
                {
                    project.tools.map( (tool, index) => (
                        <p key={index} className="text-sm  px-2 rounded-full border border-neutral-100">{tool}</p>
                    ))
                }
            </div>
            <p className="text-sm text-neutral-200">{project.description}</p>
        </div>
    )
}