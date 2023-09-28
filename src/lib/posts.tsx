import fs from "fs"
import matter from 'gray-matter'

export const getPostMetadata = (): BlogMetadata[] => {
    const folder = "src/writing/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter( (file) => file.endsWith(".md"))
    
    const posts = markdownPosts.map( (fileName) => {
        const fileContents = fs.readFileSync(`src/writing/${fileName}`, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            description: matterResult.data.description,
            slug: fileName.replace(".md", "")
        }
    })
    
    return posts
}