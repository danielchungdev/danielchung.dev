import { FunctionComponent } from "react"

interface Job {
    position: string,
    company: string,
    years: string,
    responsabilities: string[],
    website: string,
}

type WorkExperienceProps = {
}

export type WorkExperienceComponent = FunctionComponent<WorkExperienceProps>