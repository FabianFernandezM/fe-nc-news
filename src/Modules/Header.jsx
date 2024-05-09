import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../Contexts/User'

export default function Header({showSearch, setShowSearch}) {
    const {user, setUser} = useContext(UserContext)

    const handleShowSearch = (e) => {
        e.preventDefault();
        setShowSearch(!showSearch)
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

