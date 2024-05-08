import { useEffect, useState } from "react"
import {useNavigate, useSearchParams} from 'react-router-dom'
import SmallCard from "./SmallCard"
import "../App.css"

export default function ArticlesList() { 

    const [searchParams, setSearchParams] = useSearchParams();
    const [topicQuery, setTopicQuery] = useState(searchParams.get("topic") || "");
    const navigate = useNavigate();

    const [articlesList, setArticlesList] = useState([])
    let urlString = "https://nc-news-78g8.onrender.com/api/articles"
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")

    const handleTopic = (e) => {
        setTopicQuery(e.target.value)
        setSearchParams({ topic: e.target.value });
    }

    useEffect(()=>{
        setIsLoading(true)

        if (topicQuery.length !== 0) {
            urlString += `?topic=${topicQuery}`
            navigate(`/articles?topic=${encodeURIComponent(topicQuery)}`);
        }
        else {
            urlString = "https://nc-news-78g8.onrender.com/api/articles"
            navigate(`/articles`);
        }

        fetch(urlString)
        .then(response => response.json())
        .then(data => setArticlesList(data.articles))
        .then(()=> setIsLoading(false))
    }, [topicQuery])

    if (articlesList.length === 0) return <h1>Loading...</h1>

    else return (
        <>
            <label for="topics"><h2>Topic:</h2></label>
            <select name="topic" id="topic" onChange={handleTopic}>
                <option value="">Select a topic...</option>
                <option value="cooking">Cooking</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
            </select>

            <script type="text/javascript">document.getElementById("topic").namedItem({topicQuery}).selected=true</script>

            <div className="list-container">
             {articlesList.map(article => {
                return <SmallCard key={article.article_id} article={article}/>
             })}
            </div>
        </>
    )
}