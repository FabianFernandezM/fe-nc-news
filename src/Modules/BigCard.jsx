import CommentCard from "./CommentCard"
import { useEffect, useState, useRef } from "react"
import axios from 'axios';


export default function BigCard({article, comments}) {

    const [currVote, setCurrVote] = useState(0)
    const [counter, setCounter] = useState(article.votes)
    const hasRenderFinished = useRef(false)
    const [loadingVotes, setLoadingVotes] = useState(false)

    const handleVote = (value) => {
        setCurrVote(currVote+value)
        setCounter(counter+value)
    }

    useEffect(()=> {
        setLoadingVotes(true)
        if (article.length !== 0) 
        axios.patch(`https://nc-news-78g8.onrender.com/api/articles/${article.article_id}`, { inc_votes : currVote })
        .then(()=>{
            setLoadingVotes(false)
        })
    }, [counter])

   return (
        <>
        <div className="card-big">
            <img className="card-image" src={article.article_img_url} alt="Post image" />
            <h2 className="big-card-title">{article.title}</h2>
            <p className="card-body">{article.body}</p>
            <div className="card-icons">
                <button className ="icon"  disabled={currVote===1} onClick={() => handleVote(1)}>^</button>
                {loadingVotes ? <h2 className ="votes-counter">...</h2> : <h2 className ="votes-counter">{counter}</h2>}
                <button className ="icon"  disabled={currVote===-1} onClick={() => handleVote(-1)}>v</button>
            </div>
            <div className="card-comments">
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
            </div>
        </div>
        </>
    )
}