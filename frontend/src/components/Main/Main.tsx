import Posts from "../Posts/Posts.tsx"
import "./Main.css";
import { useGetPostsQuery } from "../../api/baseApi.ts";

function Main(){

    const { data, isLoading, isError } = useGetPostsQuery();
    return (
        <main>
            {isLoading && <p>Завантаження...</p>}
            {isError && <p>Не вдалося завантажити пости.</p>}
            {data && data.length > 0 && <Posts posts={data} />}
            {data?.length === 0 && <p>Пости не знайдено.</p>}
        </main>
    )
}

export default Main;