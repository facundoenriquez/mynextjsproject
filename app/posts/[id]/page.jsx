import axios from "axios"
import Link from "next/link"
import PostsPage from "../page"
import { Suspense } from "react"

async function fetchPost(id) {
    const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.data
}

export default async function Post({ params }) {
    const { id } = params
    const post = await fetchPost(id)

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
            <Link href={'/'}>
                <button>Volver</button>
            </Link>

            <hr />
            <Suspense>
                <PostsPage />
            </Suspense>
        </div>
    )
}