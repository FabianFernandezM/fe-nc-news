import { useContext, useState } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { UserContext } from '../Contexts/User'
import UserWindow from './UserWindow';

export default function Header({showSearch, setShowSearch}) {
    const {user, setUser} = useContext(UserContext)
    const [showUser, setShowUser] = useState(false);
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

    const handleShowUser = (e) => {
        setShowUser(!showUser)
    }

    return (
        <>
            <div className="header">
                <a className="icon icon-search" onClick={handleShowSearch}><h2></h2></a>
                <a className="icon icon-user" onClick={handleShowUser}><h2></h2></a>
            </div>
            <UserWindow class="user-window" showUser={showUser} user={user}/>
        </>
    )
}

