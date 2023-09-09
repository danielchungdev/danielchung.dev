import { ProjectCardComponent } from "./types"
import { motion } from "framer-motion"


export const ProjectCard: ProjectCardComponent = ({ project }) => {
  return (

    <div className="group relative w-full overflow-hidden rounded-lg glass p-0.5 transition-all duration-500 hover:scale-[1.01] hover:glass">
      <div className="relative z-10 overflow-hidden rounded-[7px]  p-8 transition-colors duration-500 group-hover:glass">

        <div className=" text-white">
          <h1 className="font-semibold text-lg"><a href={project.website} target="_blank">{project.name}</a></h1>
          <div className="flex gap-2 my-2">
            {
              project.tools.map((tool, index) => (
                <p key={index} className="text-sm  px-2 rounded-full border border-neutral-100">{tool}</p>
              ))
            }
          </div>
          <p className="text-sm text-neutral-200">{project.description}</p>
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