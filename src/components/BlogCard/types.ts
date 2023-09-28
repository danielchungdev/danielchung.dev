import { FunctionComponent, MouseEventHandler } from "react"

interface Post{
  title: string,
  description: string,
  slug: string,
  date: string
}

type BlogCardProps = {
  post: Post
}

export type BlogCardComponent = FunctionComponent<BlogCardProps>