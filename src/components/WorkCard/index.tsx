import { WorkCardComponent } from "./types"

export const WorkCard: WorkCardComponent = ({ job, id }) => {
    return (
        <div className="glass p-4 text-white" key={id}>
            <div className="justify-between md:flex xs:flex-col">
                <p><span className="font-semibold">{job.position}</span> @ <a href={job.website} target="_blank">{job.company}</a></p>
                <p className="text-neutral-400 text-sm">{job.years}</p>
            </div>
            <div className="text-sm my-4 text-neutral-200">
                <ul>
                    {
                        job.responsabilities.map( (responsability, index) => (
                            <li key={index.toString()} className="my-2">- {responsability}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}