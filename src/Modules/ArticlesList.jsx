import { useEffect, useState } from "react"
import {useNavigate, useSearchParams} from 'react-router-dom'
import SmallCard from "./SmallCard"
import ErrorPage from "./ErrorPage"
import "../App.css"
import axios from "axios"

export default function ArticlesList({showSearch}) { 

    const [searchParams, setSearchParams] = useSearchParams();
    const [topicQuery, setTopicQuery] = useState(searchParams.get("topic") || "");
    const [sortByQuery, setSortByQuery] = useState(searchParams.get("sort_by") || "");
    const [orderQuery, setOrderQuery] = useState(searchParams.get("order") || "");
    const [pageQuery, setPageQuery] = useState(searchParams.get("p") || "");
    const navigate = useNavigate();

    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleTopic = (e) => {
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

        axios.get(urlString)
        .then(data => {setArticlesList(data.data.articles); console.log(data.data)})
        .then(()=> {
            setIsLoading(false);
            navigate(urlString.slice(37))
        })
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
        })
    }, [topicQuery, sortByQuery, orderQuery])

    if (error) return <ErrorPage error={error}/>
    if (isLoading) return <h1>Loading...</h1>

    else return (
        <>  
            {showSearch ? 
            <div className="query-bar">
                <label htmlFor="topics"><h3>Topic:</h3></label>
                <select name="topic" id="topic" className="query-dropdown" onChange={handleTopic}>
                    <option value="">All</option>
                    <option value="cooking">Cooking</option>
                    <option value="coding">Coding</option>
                    <option value="football">Football</option>
                </select>
                <label htmlFor="sort-by"><h3>Sort by:</h3></label>
                <select name="sort-by" id="sort-by" className="query-dropdown" onChange={handleSortBy}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment Count</option> Commented due to DB issue
                    <option value="votes">Votes</option>
                </select>
                <label htmlFor="order"><h3>Order:</h3></label>
                <select name="order" id="order" className="query-dropdown" onChange={handleOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div> : null}

            <script type="text/javascript">document.getElementById("topic").namedItem({topicQuery}).selected=true</script>

            <div className="list-container">
             {articlesList.map(article => {
                return <SmallCard key={article.article_id} article={article}/>
             })}
            </div>
        </>
    )
}