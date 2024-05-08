import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../Contexts/User'

export default function Header() {
    const {user, setUser} = useContext(UserContext)

    return (
        <>
            <div className="header">
                <Link to={`/`} className="icon"><h2>Back</h2></Link>
                <Link to={`/`} className="icon"><h2>Search</h2></Link>
                <Link to={`/`} className="icon"><h2>{user}</h2></Link>
            </div>
        </>
    )
}

