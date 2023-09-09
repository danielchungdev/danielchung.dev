import { FunctionComponent } from "react"

interface Project {
    name: string,
    tools: string[],
    description: string,
    website: string,
}

type ProjectCardProps = {
    project: Project
}

export type ProjectCardComponent = FunctionComponent<ProjectCardProps>