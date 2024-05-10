import { useEffect, useState } from "react"
import {useNavigate, useSearchParams} from 'react-router-dom'
import SmallCard from "./SmallCard"
import ErrorPage from "./ErrorPage"
import "../App.css"
import axios from "axios"
import QueryBar from "./QueryBar"
import LoadingIcon from "./LoadingIcon"

export default function ArticlesList({showSearch}) { 

    const [searchParams, setSearchParams] = useSearchParams();
    const [topicQuery, setTopicQuery] = useState(searchParams.get("topic") || "");
    const [sortByQuery, setSortByQuery] = useState(searchParams.get("sort_by") || "");
    const [orderQuery, setOrderQuery] = useState(searchParams.get("order") || "");
    const [pageQuery, setPageQuery] = useState(searchParams.get("p") || 1);
    const navigate = useNavigate();

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [totalPages, setTotalPages] = useState(1)

    const handleTopic = (e) => {
        e.preventDefault()
        setPageQuery(1)
        setTopicQuery(e.target.value)
        setSearchParams({ topic: e.target.value });
    }
    const handleSortBy = (e) => {
        setSortByQuery(e.target.value)
        setSearchParams({ sort_by: e.target.value });
    }
    const handleOrder = (e) => {
        setOrderQuery(e.target.value)
        setSearchParams({ order: e.target.value });
    }
    const handlePage = (e) => {
        setPageQuery(Number(pageQuery) + Number(e.target.value))
        setSearchParams({ p: e.target.value });
    }


    useEffect(()=>{

        let urlString = "https://nc-news-78g8.onrender.com/api/articles"
        let prevQuery = false;

        setIsLoading(true)

        if (topicQuery.length !== 0) {
            if (!prevQuery) { urlString += `?`; prevQuery=true } else { urlString += `&` }
            urlString += `topic=${topicQuery}`
        }
        if (sortByQuery.length !== 0) {
            if (!prevQuery) { urlString += `?`; prevQuery=true } else { urlString += `&` }
            urlString += `sort_by=${sortByQuery}`
        }
        if (orderQuery.length !== 0) {
            if (!prevQuery) { urlString += `?`; prevQuery=true } else { urlString += `&` }
            urlString += `order=${orderQuery}`
        }
        if (pageQuery.length !== 0) {
            if (!prevQuery) { urlString += `?`; prevQuery=true } else { urlString += `&` }
            urlString += `p=${pageQuery}`
        }

        axios.get(urlString)
        .then(data => {
            setArticlesList(data.data.articles);
            setTotalPages(Math.ceil(data.data.total_count/10))
        })
        .then(()=> {
            setIsLoading(false);
            navigate(urlString.slice(37))
        })
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
        })
    }, [topicQuery, sortByQuery, orderQuery, pageQuery])

    if (error) return <ErrorPage error={error}/>
    if (isLoading) return (
        <>
            <QueryBar handleTopic={handleTopic} handleSortBy={handleSortBy} handleOrder={handleOrder} showSearch={showSearch} />
            <LoadingIcon />
        </>
        )

    else return (
        <>  
            <QueryBar handleTopic={handleTopic} handleSortBy={handleSortBy} handleOrder={handleOrder} showSearch={showSearch} />

            <div className="list-container">
                 {articlesList.map(article => {
                    return <SmallCard key={article.article_id} article={article}/>
                 })}

                <div className="page-container">
                    <button value={-1} className="icon icon-prev" onClick={handlePage} disabled={Number(pageQuery) < 2}></button>
                    <h2 style={{color:'black'}}>{pageQuery || 1}</h2>
                    <button value={1} className="icon icon-next" onClick={handlePage} disabled={Number(pageQuery) >= totalPages}></button>
                </div>
            </div>

        </>
    )
}