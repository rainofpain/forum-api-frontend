import type { Post } from "../../types/post"
import PostCard from "../PostCard/PostCard.tsx"

interface PostListProps{
    posts: Post[]
}

function Posts({posts}: PostListProps){
    return (
        <section className="posts">
            {posts.map((post)=>(
                <PostCard key = {post.id} post = {post}></PostCard>
            ))}
        </section>
    )
}

export default Posts;