import {Link} from 'react-router-dom'

export default function SmallCard({article}) {
    return (
        <>
        <div className="card-small">
            <Link to={`/articles/${article.article_id}`} className="card-image">
                <img className="card-image" src={article.article_img_url} alt="Post image" />
            </Link>
            <Link to={`/articles/${article.article_id}`} className="card-title">
            <h2 className="card-title">{article.title}</h2>
            </Link>
            <p className="card-body">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
            <div className="card-icons">
                <h1 className ="icon">^</h1>
                <h1 className ="votes-counter">{article.comment_count}</h1>
                <h1 className ="icon">v</h1>
            </div>
        </div>
        </>
    )
}