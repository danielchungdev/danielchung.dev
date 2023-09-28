import { FunctionComponent, MouseEventHandler } from "react"

type TabComponentProps = {
    handleTabChange: Function,
    current: number
}

export type TabComponentComponent = FunctionComponent<TabComponentProps>