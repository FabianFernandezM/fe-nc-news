import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <Link to={`/`} className="icon"><h2>Home</h2></Link>
                <Link to={`/`} className="icon"><h2>Post</h2></Link>
            </div>
        </>
    )
}