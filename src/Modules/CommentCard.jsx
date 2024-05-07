export default function CommentCard({comment}) {

    const date = new Date(comment.created_at)
    const datesliced = date.toString().slice(3, 21)
    console.log(datesliced)

    return (
        <>
            <div className="comment-card">
                <h3 className="big-card-title">{comment.author} - {datesliced}</h3>
                <p className="card-body">{comment.body}</p>
                <div className="card-icons">
                    <h3 className ="icon">^</h3>
                    <h3 className ="votes-counter">{comment.votes}</h3>
                    <h3 className ="icon">v</h3>
                </div>
            </div>
        </>
    )
}