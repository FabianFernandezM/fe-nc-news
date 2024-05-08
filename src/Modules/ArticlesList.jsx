import { useEffect, useState } from "react"
import SmallCard from "./SmallCard"
import "../App.css"

export default function ArticlesList() { 

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")

    useEffect(()=>{
        setIsLoading(true)

        fetch("https://nc-news-78g8.onrender.com/api/articles")
        .then(response => response.json())
        .then(data => setArticlesList(data.articles))
        .then(()=> setIsLoading(false))
    }, [])

    if (articlesList.length === 0) return <h1>Loading...</h1>

    else return (
        <div className="list-container">
         {articlesList.map(article => {
            return <SmallCard key={article.article_id} article={article}/>
         })}
        </div>
    )
}