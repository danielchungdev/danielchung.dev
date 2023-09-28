import { BlogCard } from "@/components/BlogCard"
import { getPostMetadata } from "@/lib/posts"
import Image from "next/image"
import Link from "next/link"

const Writing = () => {

    const postPreviews = getPostMetadata()

    return (
        <main>
            <div className="glass m-4 mx-2 sm:mx-0">
                <div className="mt-5">
                    <div className="mx-5 my-4">
                        <Image
                            className="rounded-full border border-neutral-400 drop-shadow-sms"
                            src={"/images/profile.png"}
                            alt={"A picture of me."}
                            width={125}
                            height={125}
                        />
                        <div className="text-white">
                            <h1 className="my-4 font-bold text-2xl ">Daniel Chung</h1>
                            <h1>Writing/blogging about random bugs, errors and my overall journey as a software engineer.</h1>
                            <h1 className="mt-4 mb-8">Go to my portfolio <Link href="/" className="underline hover:text-sky-500 transition ease-in-out duration-700">here</Link></h1>
                        </div>
                    </div>
                </div>
            </div>

            {
                postPreviews.map(post => (
                    <BlogCard post={post} />
                ))
            }

        </main>
    )
}

export default Writing