import { FunctionComponent, MouseEventHandler } from "react"

type TabsProps = {
  title: string,
  onClick: MouseEventHandler<HTMLDivElement>,
  selected: Boolean,
}

export type TabsComponent = FunctionComponent<TabsProps>