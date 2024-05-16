import {Link} from 'react-router-dom'
import FloatingWindow from "./FloatingWindow"
import { useState } from 'react'

export default function Footer() {
    const [showPopUp, setShowPopUp] = useState(false)

    return (
        <>
            <div className="footer">
                <FloatingWindow showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
                <Link to={`/`} className="icon icon-home"><h2></h2></Link>
                <button className="icon icon-post" onClick={()=>{setShowPopUp(!showPopUp)}}><h2></h2></button>
            </div>
        </>
    )
}