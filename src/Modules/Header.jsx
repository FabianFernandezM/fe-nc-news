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
                <a className="icon icon-search" onClick={handleShowSearch}><h2></h2></a>
                <Link to={`/`} className="icon icon-user"><h2></h2></Link>
            </div>
        </>
    )
}

