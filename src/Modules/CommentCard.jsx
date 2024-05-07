import { useEffect, useState } from "react"
import axios from 'axios';

export default function CommentCard({comment}) {
    const date = new Date(comment.created_at)
    const datesliced = date.toString().slice(3, 21)

    const [patchValue, setPatchValue] = useState(0)
    const [counter, setCounter] = useState(comment.votes)
    const [loadingVotes, setLoadingVotes] = useState(false)
    const [currVote, setCurrVote] = useState(0)

    const handleVote = (value) => {
        setPatchValue(value)
        setCurrVote(currVote+value)
        setCounter(counter+value)
    }

    useEffect(()=> {
        setLoadingVotes(true)
        axios.patch(`https://nc-news-78g8.onrender.com/api/comments/${comment.comment_id}`, { inc_votes : patchValue })
        .then(()=>{
            setLoadingVotes(false)
        })
    }, [currVote])

    return (
        <>
            <div className="comment-card">
                <h3 className="card-title">{comment.author} - {datesliced}</h3>
                <p className="card-body">{comment.body}</p>
                <div className="card-icons">
                    <button className ="icon"  disabled={currVote===1} onClick={() => handleVote(1)}>^</button>
                    {loadingVotes ? <h3 className ="votes-counter">...</h3> : <h3 className ="votes-counter">{counter}</h3>}
                    <button className ="icon" disabled={currVote===-1} onClick={() => handleVote(-1)}>v</button>
                </div>
            </div>
        </>
    )
}