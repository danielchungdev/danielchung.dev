import BlogList from "../../../public/json/blogs.json"

export const Blogs = () => {

    const noBlogsFound = (
        <>
            <h1>Sorry, no blogs found...</h1>
            <p>Stay updated for new upcoming writings.</p>
        </>
    )

    const blogs = (
        <div>
            <p>Yessirrr</p>
        </div>
    )

    return(
        <div className="mx-2 sm:mx-0 glass p-4 text-white ">
            {
                BlogList.length < 1 ? noBlogsFound : blogs
            }
        </div>
    )
}