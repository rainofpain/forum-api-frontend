import type { Post } from "../../types/post";

interface PostCardProps{
    post : Post
}

function PostCard({post}: PostCardProps){
    return (
        <article>
            <p>
                Author: {post.author}
            </p>
            <h3 >
                {post.title}
            </h3>
            <p>
                {post.content}
            </p>
            <span>
                #{post.category}
            </span>
        </article>
    )
}

export default PostCard;