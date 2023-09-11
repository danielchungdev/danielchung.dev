'use client'
import Image from "next/image"
import { useState } from "react"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { Tabs } from "@/components/Tabs"
import { WorkExperience } from "@/components/WorkExperience"
import { Projects } from "@/components/Projects"
import Blogs from "@/components/Blogs"

const Home = () => {

  const [current, setCurrent] = useState<number>(1);

  const chooseContent = (contentId: number) => {
    switch (contentId) {
      case 1:
        return <WorkExperience />
      case 2:
        return <Projects />
      case 3:
        return <Blogs />
    }
  }

  return (
    <main>

      {/* Banner */}

      <div className="glass m-4 mx-2 sm:mx-0">
        <div className="mt-5">
          <div className="mx-5 ">
            <Image
              className="rounded-full border border-neutral-400 drop-shadow-sms"
              src={"/images/profile.png"}
              alt={"A picture of me."}
              width={125}
              height={125}
            />
            <h1 className="my-4 font-bold text-2xl text-white">Daniel Chung</h1>
            <h1 className="text-white">Recent Web & Mobile Computing graduate from RIT, experienced in web development. Currently working at Cognivue as a Front-end Engineer.</h1>
            <div className="my-4 flex gap-2">
              <a href="https://github.com/danielchungdev" target="_blank">
                <FaGithubSquare className="text-neutral-200 w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/danielchungdev" target="_blank">
                <FaLinkedin className="text-neutral-200 w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex justify-around">
            <Tabs title="Experience" onClick={() => setCurrent(1)} selected={current === 1} />
            <Tabs title="Projects" onClick={() => setCurrent(2)} selected={current === 2} />
            <Tabs title="Blogs" onClick={() => setCurrent(3)} selected={current === 3} />
          </div>
        </div>
      </div>

      {/* content */}

      <div className="mt-4 mb-8">
        {chooseContent(current)}
      </div>
      
      <div className="text-neutral-200 text-center mb-8 text-sm">
        <h1>made with ❤️ at 4:00 am</h1>
      </div>
    </main>
  )
}

export default Home