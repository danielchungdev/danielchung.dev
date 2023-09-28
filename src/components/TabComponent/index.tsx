'use client'
import { Tabs } from "@/components/Tabs"
import { TabComponentComponent } from "./types"

export const TabComponent: TabComponentComponent = ({handleTabChange, current}) => {
    
    return (
        <div className="flex justify-around">
            <Tabs title="Experience" onClick={() => handleTabChange(1)} selected={current === 1} />
            <Tabs title="Projects" onClick={() => handleTabChange(2)} selected={current === 2} />
            <Tabs title="Blogs" onClick={() => handleTabChange(3)} selected={current === 3} />
        </div>
    )
}