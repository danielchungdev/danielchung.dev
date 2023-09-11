import { HoverAnimations } from "../HoverAnimation/HoverAnimation";
import blogs from "../../../public/json/blogs.json"

export default function Blogs() {

    const empty = (
        <h1>No blogs for now sorry :(.</h1>
    )

    const content = (
        <div>
            {blogs.map(blog => (
                <h1>{JSON.stringify(blog)}</h1>
            ))}
        </div>
    )

    return (
        <HoverAnimations>
            <div className="text-white">
                {
                    Blogs.length < 1 ? empty : content
                }
            </div>
        </HoverAnimations>
    )
}