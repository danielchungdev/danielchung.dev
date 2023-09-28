import fs from "fs"
import Markdown from "markdown-to-jsx"

const getPostContent = (slug: string) => {
    const folder = "src/writing/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, "utf-8")
    return content
}

const WritingPage = (props: any) => {
    const slug = props.params.slug
    const content = getPostContent(slug)

    return (
        <div>
            <h1>This is a post: {slug}</h1>
            <Markdown>
                {content}
            </Markdown>
        </div>
    )
}

export default WritingPage