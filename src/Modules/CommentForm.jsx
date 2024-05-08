import axios from "axios"
import { useState, useContext } from "react"
import { UserContext } from '../Contexts/User'

export default function CommentForm ({article_id, comments, setComments, updatePage, setUpdatePage}) {
    const [body, setBody] = useState("")
    const [loadingComment, setLoadingComment] = useState(false)
    const {user} = useContext(UserContext)

    const handleBody = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoadingComment(true)
        axios.post(`https://nc-news-78g8.onrender.com/api/articles/${article_id}/comments`,
        {username: user, body: body})
        .then((newComment)=>{
            setComments([...comments, newComment.data.comment])
            setUpdatePage(!updatePage)
        })
        .then(()=>{
            setLoadingComment(false)
        })
    }

    if (loadingComment) return <h2>Posting comment...</h2>

    return (
        <>
            <form className="comment-form" action="">
                <label className="label-body">Comment: </label>
                <textarea className="comment-body" type="text" value={body} onChange={handleBody}/>
                <button className="comment-button" onClick={handleSubmit}>Post</button>
            </form>
        </>
    )
}