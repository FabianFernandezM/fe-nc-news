import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import BigCard from "./BigCard"
import "../App.css"

export default function ArticleById() { 
    const {article_id} = useParams()

    let [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")

    useEffect(()=>{
        setIsLoading(true)

        fetch(`https://nc-news-78g8.onrender.com/api/articles/${article_id}`)
        .then(response => response.json())
        .then(data => {setArticle(data.article)})

        setIsLoading(false)
    }, [])

    if (isLoading === 0) return <h1>Loading...</h1>

    else return (
        <div className="list-container">
            <BigCard article={article}/>
        </div>
    )
}