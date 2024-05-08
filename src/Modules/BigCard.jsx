import CommentCard from "./CommentCard"
import { useEffect, useState, useRef } from "react"
import axios from 'axios';
import CommentForm from "./CommentForm";


export default function BigCard({article, comments, setComments, updatePage, setUpdatePage}) {

    const [patchValue, setPatchValue] = useState(0)
    const [currVote, setCurrVote] = useState(0)
    const [loadingVotes, setLoadingVotes] = useState(false)
    const [showCommentForm, setShowCommentForm] = useState(false)

    const handleVote = (value) => {
        setPatchValue(value)
        setCurrVote(currVote+value)
    }

    const handleShowCommentForm = ()=> {
        setShowCommentForm(!showCommentForm)
    }

    useEffect(()=> {
        setLoadingVotes(true)
        if (article.length !== 0) {
            axios.patch(`https://nc-news-78g8.onrender.com/api/articles/${article.article_id}`, { inc_votes : patchValue })
            .then((data)=>{
                setLoadingVotes(false)
            })
        }
        
    }, [currVote])

   return (
        <>
        <div className="card-big">
            <img className="card-image" src={article.article_img_url} alt="Post image" />
            <h2 className="big-card-title">{article.title}</h2>
            <p className="card-body">{article.body}</p>
            <div className="card-icons">
                <button className ="icon"  disabled={currVote===1} onClick={() => handleVote(1)}>^</button>
                {loadingVotes ? <h2 className ="votes-counter">...</h2> : <h2 className ="votes-counter">{article.votes+currVote}</h2>}
                <button className ="icon"  disabled={currVote===-1} onClick={() => handleVote(-1)}>v</button>
            </div>
            <button className ="big-card-comment-button"  disabled={currVote===1} onClick={handleShowCommentForm}>{showCommentForm ? "Hide Form" : "Post a comment"}</button>
            <div className="card-comments">
                {showCommentForm ? <CommentForm article_id={article.article_id}comments={comments} setComments={setComments} updatePage={updatePage} setUpdatePage={setUpdatePage}/> : null}
                {comments.map((comment) => {
                    return <CommentCard key={comment.comment_id} comment={comment}/>
                })}
            </div>
        </div>
        </>
    )
}