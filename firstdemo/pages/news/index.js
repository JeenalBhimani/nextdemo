


function NewsArticleList({ articles }) {
    return (
        <>
            <h1>list of new articleList</h1>
            {articles.map((article, id) => {
                return (
                    <>
                        <div key={id}>
                            <h2>{article.id} {article.title} | {article.category}</h2>
                            <hr />
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default NewsArticleList

export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news")
    const data = await response.json()
    console.log(`pre rendering data for category `)

    return {
        props: {
            articles: data
        },
    }
}