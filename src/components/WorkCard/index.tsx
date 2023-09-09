import { WorkCardComponent } from "./types"
import { motion } from "framer-motion";

export const WorkCard: WorkCardComponent = ({ job, id }) => {
    return (
    <div className="group relative w-full overflow-hidden rounded-lg glass p-0.5 transition-all duration-500 hover:scale-[1.01] hover:glass" key={id}>
      <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px]  p-8 transition-colors duration-500 group-hover:glass">

      <div className=" text-white" key={id}>
            <div className="justify-between md:flex xs:flex-col">
                <p><span className="font-semibold">{job.position}</span> @ <a href={job.website} target="_blank">{job.company}</a></p>
                <p className="text-neutral-200 text-sm">{job.years}</p>
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
      </div>

      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        style={{ scale: 5.75 }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 bg-gradient-to-t from-orange-400 to-sky-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
    )
}