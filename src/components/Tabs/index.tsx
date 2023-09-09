import { TabsComponent } from "./types"

export const Tabs: TabsComponent = ({ title, onClick, selected }) => {
    return (
        <div 
            className={`w-1/3 text-center text-white ${selected ? "font-semibold" : null}
            ${selected ? "bg-gray-100" : null} ${selected ? "rounded-sm" : null} 
            ${selected ? "rounded-sm" : null} ${selected ? "rounded-sm" : null} 
            ${selected ? "bg-clip-padding" : null} ${selected ? "backdrop-filter" : null} 
            ${selected ? "bg-opacity-10" : null}
            hover:cursor-pointer hover:bg-gray-100 hover:rounded-sm hover:bg-clip-padding
            hover:backdrop-filter hover:bg-opacity-10 transition ease-in-out duration-700
            py-4`}
            onClick={onClick}
        >
            <h1>{title}</h1>
        </div>
    )
}