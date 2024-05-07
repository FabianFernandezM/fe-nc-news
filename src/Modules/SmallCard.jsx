export default function SmallCard({article}) {
    return (
        <>
        <div className="card-small">
            <img className="card-image" src={article.article_img_url} alt="Post image" />
            <h2 className="card-title">{article.title}</h2>
            <p className="card-body">I regret to inform all living beings that dinos are extinct no more. There have been several attacks on cities such as Pochilandia and Rubbermypants over the last few days, with a total of 4 children being killed whilst adults celebrated their deaths with alcohol and drugs. </p>
            <div className="card-icons">
                <h1 className ="icon">^</h1>
                <h1 className ="votes-counter">{article.comment_count}</h1>
                <h1 className ="icon">v</h1>
            </div>
        </div>
        </>
    )
}