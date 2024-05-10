export default function QueryBar ({showSearch, handleTopic, handleSortBy, handleOrder}) {
    return (
        <>
            {showSearch ? 
            <div className="query-bar">
                <label htmlFor="topics"><h3>Topic:</h3></label>
                <select name="topic" id="topic" className="query-dropdown" onChange={handleTopic}>
                    <option value="">All</option>
                    <option value="cooking">Cooking</option>
                    <option value="coding">Coding</option>
                    <option value="football">Football</option>
                </select>
                <label htmlFor="sort-by"><h3>Sort by:</h3></label>
                <select name="sort-by" id="sort-by" className="query-dropdown" onChange={handleSortBy}>
                    <option value="created_at">Date</option>
                    <option value="comment_count">Comment Count</option>
                    <option value="votes">Votes</option>
                </select>
                <label htmlFor="order"><h3>Order:</h3></label>
                <select name="order" id="order" className="query-dropdown" onChange={handleOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div> : null}
        </>
    )
}