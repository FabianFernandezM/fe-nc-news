import { useEffect, useState } from "react"
import Axios from 'axios';

export default function CommentCard({comment}) {

    const date = new Date(comment.created_at)
    const datesliced = date.toString().slice(3, 21)

    const [counter, setCounter] = useState(comment.votes)
    const [currVote, setCurrVote] = useState(0)

    const handleVote = (value) => {
        Axios.patch(`https://nc-news-78g8.onrender.com/api/comments/${comment.comment_id}`, { inc_votes : value })
        setCurrVote(currVote+value)
        setCounter(counter+value)
    }

    return (
        <>
            <div className="comment-card">
                <h3 className="card-title">{comment.author} - {datesliced}</h3>
                <p className="card-body">{comment.body}</p>
                <div className="card-icons">
                    <button className ="icon"  disabled={currVote===1} onClick={() => handleVote(1)}>^</button>
                    <h3 className ="votes-counter">{counter}</h3>
                    <button className ="icon" disabled={currVote===-1} onClick={() => handleVote(-1)}>v</button>
                </div>
            </div>
        </>
    )
}

function VoteByComment(comment_id, value) {
    Axios.patch(`https://nc-news-78g8.onrender.com/api/comments/${comment_id}`, { inc_votes : value })
}