import axios from "axios"
import { useEffect, useState } from "react"

export default function UserWindow ({showUser, user}) {

    const [imgUrl, setImgUrl] = useState("")

    useEffect(()=>{
        axios.get(`https://nc-news-78g8.onrender.com/api/users/${user}`)
        .then(data => {
            setImgUrl(data.data.user.avatar_url)
        })
        .then(()=>{
        })
        .catch((error)=>{
            setError({code: error.response.status, message: error.response.data.message})
        })
    }, [])

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