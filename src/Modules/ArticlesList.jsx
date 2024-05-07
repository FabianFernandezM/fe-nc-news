import { useEffect, useState } from "react"
import SmallCard from "./SmallCard"
import "../App.css"

export default function ArticlesList() { 

    let [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")

    useEffect(()=>{
        setIsLoading(true)

        fetch("https://nc-news-78g8.onrender.com/api/articles")
        .then(response => response.json())
        .then(data => setArticlesList(data.articles))

        setIsLoading(false)
    }, [])

    if (articlesList.length === 0) return <p>Loading...</p>

    else return (
        <div className="list-container">
         {articlesList.map(article => {
            return <SmallCard article={article}/>
         })}
        </div>
    )
}