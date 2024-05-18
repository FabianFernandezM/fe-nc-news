import { Link } from "react-router-dom";
import Chat from "./Chat";

export default function FloatingWindow ({showPopUp, setShowPopUp}) {

    return (
        <>
        {showPopUp ? <section className="popup-window">
            <Chat />
            {/* <img src="../../resources/Images/sorry-icon.png" alt="popup-image" className="popup-image" />
            <h2 className="popup-message">Apologies, this feature is not available yet</h2> */}
            <button className="icon icon-delete-comment" onClick={()=>{setShowPopUp(!showPopUp)}}><h2></h2></button>
        </section> : null}
        </>
    )
}