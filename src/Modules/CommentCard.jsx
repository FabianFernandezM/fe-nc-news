import { useEffect, useState, useContext } from "react"
import axios from 'axios';
import { UserContext } from '../Contexts/User'
import ErrorPage from "./ErrorPage"

export default function CommentCard({comment, updatePage, setUpdatePage}) {
    const {user} = useContext(UserContext)
    const date = new Date(comment.created_at)
    const datesliced = date.toString().slice(3, 21)

    const [loadingVotes, setLoadingVotes] = useState(false)
    const [deletingComment, setDeletingComment] = useState(false)
    const [currVote, setCurrVote] = useState(0)
    const [error, setError] = useState(null)

    const handleVote = (value) => {
        setCurrVote(currVote+value)
        setLoadingVotes(true)
        axios.patch(`https://nc-news-78g8.onrender.com/api/comments/${comment.comment_id}`, { inc_votes : value })
        .then(()=>{
            setLoadingVotes(false)
        })
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
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
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
        })
    }
    
    if (error) return <ErrorPage error={error}/>
    if (deletingComment) return <h2>Deleting comment...</h2>

    return (
        <>
            <div className="comment-card">
                <h3 className="card-title">{comment.author} - {datesliced}</h3>
                <p className="card-body">{comment.body}</p>
                <div className="card-icons">
                    {user === comment.author ?  <a className ="icon-empty" /> : <button className ="icon icon-upvote"  disabled={currVote===1} onClick={() => handleVote(1)}></button>}
                    {loadingVotes ? <h3 className ="votes-counter">...</h3> : <h3 className ="votes-counter">{comment.votes+currVote}</h3>}
                    {user === comment.author ? null : <button className ="icon icon-downvote" disabled={currVote===-1} onClick={() => handleVote(-1)}></button>}
                    {user === comment.author ? <button className ="icon icon-delete-comment" onClick={handleDelete}></button> : null}
                </div>
            </div>
        </>
    )
}