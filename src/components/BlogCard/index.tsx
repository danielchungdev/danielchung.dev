'use client'
import { HoverAnimations } from "../HoverAnimation/HoverAnimation"
import { BlogCardComponent } from "./types"


export const BlogCard:BlogCardComponent = ({ post }) => {
    return (
        <HoverAnimations>
            <div className=" text-white">
                <a href={`/writing/${post.slug}`}>
                    <h1>{post.title}</h1>
                    <h1 className="text-sm text-neutral-300 my-2">{post.date}</h1>
                    <h1>{post.description}</h1>
                </a>
            </div>
        </HoverAnimations>
    )
}
