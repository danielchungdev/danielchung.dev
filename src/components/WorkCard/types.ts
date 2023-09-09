import { FunctionComponent } from "react"

interface Job {
    position: string,
    company: string,
    years: string,
    responsabilities: string[],
    website: string,
}

type WorkCardProps = {
    job: Job
    id: string
}

export type WorkCardComponent = FunctionComponent<WorkCardProps>