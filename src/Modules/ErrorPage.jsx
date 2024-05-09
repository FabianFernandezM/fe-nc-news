import {Link} from 'react-router-dom'
import "../App.css"

export default function ErrorPage({error}) {

    return (
        <>
            <div className="error-card">
                <img src="../../resources/Images/oops_error.png" alt="Error Image" />
                <h2>Something went terribly wrong...</h2>
                {error ? <h3>{error.code} - {error.message}</h3> : <h3>404 - Not Found</h3>}
                <Link to={`/`} className="icon"><h3>Back</h3></Link>
            </div>
        </>
    )
}