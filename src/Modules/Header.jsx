import { useContext } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { UserContext } from '../Contexts/User'

export default function Header({showSearch, setShowSearch}) {
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleShowSearch = (e) => {
        e.preventDefault();
        if (location.pathname === "/" || location.pathname === "/articles") setShowSearch(!showSearch)
        else {
            setShowSearch(true)
            navigate(`/`)
        }
    }

    return (
        <>
            <div className="header">
                <Link to={`/`} className="icon"><h2>Home</h2></Link>
                <button onClick={handleShowSearch}><h2>Search</h2></button>
                <Link to={`/`} className="icon"><h2>{user}</h2></Link>
            </div>
        </>
    )
}

