import axios from "axios"

async function loadPosts() {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    const { data } = res
    return data
}

export default async function PostsPage() {
    const posts = await loadPosts()
    return (
        <section>
            {
                posts.slice(0, 5).map(post => (
                    <div key={post.id}>
                        <h1>{post.id}. {post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </section>
    )
}