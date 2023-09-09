import BlogList from "../../../public/json/blogs.json"

export const Blogs = () => {

    const noBlogsFound = (
        <div className="glass p-4 text-white">
            <h1>Sorry, no blogs found...</h1>
            <p>Stay updated for new upcoming writings.</p>
        </div>
    )

    const blogs = (
        <div>
            <p>Yessirrr</p>
        </div>
    )

    return(
        <div>
            {
                BlogList.length < 1 ? noBlogsFound : blogs
            }
        </div>
    )
}