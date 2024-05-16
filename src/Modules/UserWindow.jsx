import axios from "axios"
import { useEffect, useState } from "react"

export default function UserWindow ({showUser, user}) {

    const [imgUrl, setImgUrl] = useState("")
    const [error, setError] = useState(null)

    useEffect(()=>{
        axios.get(`https://nc-news-78g8.onrender.com/api/users/${user}`)
        .then(data => {
            setImgUrl(data.data.user.avatar_url)
        })
        .then(()=>{
        })
        .catch((error)=>{
            setError(null)
        })
    }, [])

    if (error) return <ErrorPage error={error}/>

    return (
        <>
        {showUser ? <section className="user-window">
            <img src={imgUrl} alt="user-image" className="user-image" />
            <h2 className="user-username">{user}</h2>
            <a className="icon icon-logout" onClick={()=>{}}><h2></h2></a>
        </section> : null}
        </>
    )
}