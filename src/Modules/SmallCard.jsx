import {Link} from 'react-router-dom'

export default function SmallCard({article}) {
    const date = new Date(article.created_at)
    const datesliced = date.toString().slice(3, 21)

    return (
        <>
        <div className="card-small">
            <Link to={`/articles/${article.article_id}`} className="card-image-container">
                <img src={article.article_img_url} alt="Post image" className="card-image" />
            </Link>
            <Link to={`/articles/${article.article_id}`} className="card-title">
            <h2 className="card-title">{article.title}</h2>
            </Link>
            <Link to={`/articles/${article.article_id}`}>
            <div className="small-card-body">
                <p>Posted by: {article.author}</p>
                <p>{datesliced}</p>
                <p>Topic: {article.topic}</p>
                <h4>{article.comment_count} comments ◈ {article.votes} votes</h4>
            </div>
            </Link>
        </div>
        </>
    )
}