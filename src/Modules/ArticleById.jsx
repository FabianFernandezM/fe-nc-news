import { useEffect, useState } from "react"
import {useNavigate, useParams} from 'react-router-dom'
import LoadingIcon from "./LoadingIcon"
import BigCard from "./BigCard"
import ErrorPage from "./ErrorPage"
import "../App.css"
import axios from "axios"

export default function ArticleById() { 
    const {article_id} = useParams()

    const [article, setArticle] = useState([])
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [updatePage, setUpdatePage] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)

        axios.get(`https://nc-news-78g8.onrender.com/api/articles/${article_id}`)
        .then(data => {setArticle(data.data.article)})
        .then(() => setIsLoading(false))
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
        })

        axios.get(`https://nc-news-78g8.onrender.com/api/articles/${article_id}/comments`)
        .then(data => {setComments(data.data.comments)})
        .then(() => setIsLoading(false))
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
        })
    }, [updatePage])

    if (error) return <ErrorPage error={error}/>
    if (isLoading) return <LoadingIcon />
    return (
        <div className="list-container">
            <BigCard article={article} comments={comments} setComments={setComments} updatePage={updatePage} setUpdatePage={setUpdatePage}/>
        </div>
    )
}