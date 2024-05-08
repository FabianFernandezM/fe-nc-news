import { useEffect, useState, useContext } from "react"
import axios from 'axios';
import { UserContext } from '../Contexts/User'

export default function CommentCard({comment, updatePage, setUpdatePage}) {
    const {user} = useContext(UserContext)
    const date = new Date(comment.created_at)
    const datesliced = date.toString().slice(3, 21)

    const [loadingVotes, setLoadingVotes] = useState(false)
    const [deletingComment, setDeletingComment] = useState(false)
    const [currVote, setCurrVote] = useState(0)

    const handleVote = (value) => {
        setCurrVote(currVote+value)
        setLoadingVotes(true)
        axios.patch(`https://nc-news-78g8.onrender.com/api/comments/${comment.comment_id}`, { inc_votes : value })
        .then(()=>{
            setLoadingVotes(false)
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        setDeletingComment(true)
        axios.delete(`https://nc-news-78g8.onrender.com/api/comments/${comment.comment_id}`)
        .then(()=>{
            setUpdatePage(!updatePage)
        })
        .then(()=>{
            setDeletingComment(false)
        })
    }

    if (deletingComment) return <h2>Deleting comment...</h2>

    return (
        <>
            <div className="comment-card">
                <h3 className="card-title">{comment.author} - {datesliced}</h3>
                <p className="card-body">{comment.body}</p>
                <div className="card-icons">
                    <button className ="icon"  disabled={currVote===1} onClick={() => handleVote(1)}>^</button>
                    {loadingVotes ? <h3 className ="votes-counter">...</h3> : <h3 className ="votes-counter">{comment.votes+currVote}</h3>}
                    <button className ="icon" disabled={currVote===-1} onClick={() => handleVote(-1)}>v</button>
                    {user === comment.author ? <button className ="comment-delete-button" onClick={handleDelete}>Delete</button> : <button className ="icon" disabled={currVote===-1} onClick={() => handleVote(-1)}>v</button>}
                </div>
            </div>
        </>
    )
}