import { motion } from "framer-motion"


export const HoverAnimations = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-lg glass p-0.5 transition-all duration-500 hover:scale-[1.01] hover:glass">
            <div className="relative z-10 overflow-hidden rounded-[7px]  p-8 transition-colors duration-500 group-hover:glass">

                {children}

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