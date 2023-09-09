import { WorkCard } from "../WorkCard"
import { WorkExperienceComponent } from "./types"
import Jobs from "../../../public/json/jobs.json";

export const WorkExperience: WorkExperienceComponent = () => {
    return (
        <div className="mx-2 sm:mx-0">
            {
                Jobs.map((job, index) => (
                    <div className="my-4" key={index.toString()}>
                        <WorkCard job={job} id={index.toString()}/>
                    </div>
                ))
            }
        </div>
    )
}