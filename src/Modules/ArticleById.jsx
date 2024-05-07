import { useEffect, useState } from "react"
import BigCard from "./BigCard"
import "../App.css"

export default function ArticleById({articleId}) { 

    let [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")

    useEffect(()=>{
        setIsLoading(true)

        fetch(`https://nc-news-78g8.onrender.com/api/articles/1`)
        .then(response => response.json())
        .then(data => {setArticle(data.article); console.log(data.article)})

        setIsLoading(false)
    }, [])

    if (isLoading === 0) return <h1>Loading...</h1>

    else return (
        <div className="list-container">
            <BigCard article={article}/>
        </div>
    )
}