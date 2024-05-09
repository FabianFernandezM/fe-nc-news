import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Link to={`/`} className="icon icon-home"><h2></h2></Link>
                <Link to={`/`} className="icon icon-post"><h2></h2></Link>
            </div>
        </>
    )
}