import Posts from "../Posts/Posts.tsx"
import { posts } from '../../data/posts.ts'

function Main(){
    return (
        <main>
            <Posts posts={posts}></Posts>
        </main>
    )
}

export default Main;