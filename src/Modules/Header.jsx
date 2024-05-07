import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header">
                <Link to={`/`} className="icon"><h2>Back</h2></Link>
                <Link to={`/`} className="icon"><h2>Search</h2></Link>
                <Link to={`/`} className="icon"><h2>Profile</h2></Link>
            </div>
        </>
    )
}

