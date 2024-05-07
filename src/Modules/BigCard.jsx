export default function BigCard({article}) {

   return (
        <>
        <div className="card-big">
            <img className="card-image" src={article.article_img_url} alt="Post image" />
            <h2 className="big-card-title">{article.title}</h2>
            <p className="card-body">{article.body}</p>
            <div className="card-icons">
                <h1 className ="icon">^</h1>
                <h1 className ="votes-counter">{article.comment_count}</h1>
                <h1 className ="icon">v</h1>
            </div>
            <div className="card-comments">
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
                <p>Test comment</p>
            </div>
        </div>
        </>
    )
}