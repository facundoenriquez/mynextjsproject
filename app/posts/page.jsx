import PostCard from "@/components/PostCard"
import axios from "axios"
import './posts.css'

async function loadPosts() {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    const { data } = res
    return data
}

export default async function PostsPage() {
    const posts = await loadPosts()
    return (
        <div className="grid">
            {
                posts.slice(0, 5).map(post => (
                    <PostCard post={post} key={post.id} />
                ))
            }
        </div>
    )
}